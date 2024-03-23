import { Request, Response } from "express";

import { SellersSchemasType } from "@/schemas/sellers.schemas";
import services from "@/services/sellers.services";
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
        pagination as PaginationType
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
      const { name, userId }: SellersSchemasType = req.body;

      await servicesUsers.getByIdCount(userId);

      await services.create({
        name,
        status: true,
        user: { connect: { id: userId } },
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

      const { name, userId }: Partial<SellersSchemasType> = req.body;

      if (userId) {
        await servicesUsers.getByIdCount(userId);
      }

      await services.updateById(id, {
        name,
        user: { connect: { id: userId } },
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
