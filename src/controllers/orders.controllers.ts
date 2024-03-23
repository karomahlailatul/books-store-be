import { Request, Response } from "express";

import { OrdersSchemasType } from "@/schemas/orders.schemas";
import servicesBooks from "@/services/books.services";
import services from "@/services/orders.services";
import servicesUsers from "@/services/users.services";
import { PaginationType, QueryParamsType } from "@/types/app";
import { customError } from "@/utils/general.utils";
import responseHelper from "@/utils/response.utils";

const controllers = {
  getByPagination: async (req: Request, res: Response) => {
    try {
      const {
        page: pageNumber = 1,
        limit: limitNumber = 10,
        search,
        searchBy = "name",
        sortBy = "createdAt",
        sort = "desc",
      }: QueryParamsType = req.query;
      const page = Number(pageNumber);
      const limit = Number(limitNumber);
      const offset = (page - 1) * limit;

      const [result, pagination] = await services.getByPagination({
        page,
        limit,
        offset,
        search,
        searchBy,
        sortBy,
        sort,
      });

      return responseHelper(
        res,
        result,
        200,
        "Success get data" as string,
        pagination as PaginationType,
      );
    } catch (error) {
      return customError(error, res);
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const result = await services.getById(id);

      return responseHelper(res, result, 200);
    } catch (error) {
      return customError(error, res);
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const { userId, bookId, quantity }: OrdersSchemasType = req.body;

      await servicesUsers.getByIdCount(userId);
      const checkBook = await servicesBooks.getById(bookId);

      await services.create({
        paymentLink: "",
        statusOrder: "PENDING",
        quantity,
        total: checkBook.price * quantity,
        user: { connect: { id: userId } },
        book: { connect: { id: bookId } },
      });

      return responseHelper(res, null, 200, "Success created");
    } catch (error) {
      return customError(error, res);
    }
  },

  updateById: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const checkOrders = await services.getById(id);

      const {
        userId,
        bookId,
        quantity,
        statusOrder = "PENDING",
        paymentLink,
      }: Partial<OrdersSchemasType> = req.body;

      if (userId) {
        await servicesUsers.getByIdCount(userId);
      }
      const checkBook = await servicesBooks.getById(
        bookId || checkOrders.bookId,
      );

      await services.updateById(id, {
        paymentLink,
        statusOrder: statusOrder as "PENDING" | "SUCCESS" | "CANCEL",
        quantity,
        total: checkBook?.price * (quantity || checkOrders.quantity),
        user: { connect: { id: userId } },
        book: { connect: { id: bookId } },
      });

      return responseHelper(res, null, 200, "Success updated");
    } catch (error) {
      return customError(error, res);
    }
  },

  deleteById: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      await services.getByIdCount(id);
      await services.deleteById(id);

      return responseHelper(res, null, 200, "Success deleted");
    } catch (error) {
      return customError(error, res);
    }
  },
};

export default controllers;
