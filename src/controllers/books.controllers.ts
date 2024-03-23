import { Request, Response } from "express";

import { BooksSchemasType } from "@/schemas/books.schemas";
import services from "@/services/books.services";
import servicesSellers from "@/services/sellers.services";
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
      const {
        title,
        description,
        author,
        image,
        price,
        status = true,

        sellerId,
      }: BooksSchemasType = req.body;

      await servicesSellers.getByIdCount(sellerId);

      await services.create({
        title,
        description,
        author,
        image,
        price,
        status,
        seller: { connect: { id: sellerId } },
      });

      return responseHelper(res, null, 200, "Success created");
    } catch (error) {
      return customError(error, res);
    }
  },

  updateById: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      await services.getByIdCount(id);

      const {
        title,
        description,
        author,
        image,
        price,
        status,

        sellerId,
      }: Partial<BooksSchemasType> = req.body;

      if (sellerId) {
        await servicesSellers.getByIdCount(sellerId);
      }

      await services.updateById(id, {
        title,
        description,
        author,
        image,
        price,
        status,
        seller: { connect: { id: sellerId } },
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
