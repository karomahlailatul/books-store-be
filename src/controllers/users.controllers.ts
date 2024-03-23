import { Request, Response } from "express";

import { UsersSchemasType } from "@/schemas/users.schemas";
import services from "@/services/users.services";
import { PaginationType, QueryParamsType } from "@/types/app";
import { customError } from "@/utils/general.utils";
import responseHelper from "@/utils/response.utils";

const controllers = {
  register: async (req: Request, res: Response) => {
    try {
      const { username, email, password }: UsersSchemasType = req.body;

      const userRole = "USER";

      const result = await services.register({
        username,
        email,
        password,
        role: userRole,
      });

      return responseHelper(res, result, 200, "Register Succes");
    } catch (error) {
      return customError(error, res);
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const [token, refreshToken, user, expiredIn] = await services.login(
        email,
        password
      );

      const result = {
        token,
        refreshToken,
        user,
        expiredIn,
      };
      return responseHelper(res, result, 200, "Login Success");
    } catch (error) {
      return customError(error, res);
    }
  },

  resetPassword: async (req: Request, res: Response) => {
    try {
      const { id, password } = req.body;

      await services.resetPassword(id, password);

      return responseHelper(res, null, 200, "Reset Password Succes");
    } catch (error) {
      return customError(error, res);
    }
  },

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

  // create: async (req: Request, res: Response) => {
  //   try {
  //     const {
  //       title,
  //       description,
  //       author,
  //       image,
  //       price,
  //       status,

  //       sellerId,
  //     }: UsersSchemasType = req.body;

  //     const result = await services.create({
  //       title,
  //       description,
  //       author,
  //       image,
  //       price,
  //       status,
  //       seller: sellerId,
  //     });

  //     if (!result) {
  //       const error: CustomErrorType = new Error("Failed created");
  //       error.statusCode = 400;
  //       throw error;
  //     }

  //     return responseHelper(res, null, 200, "Success created");
  //   } catch (error) {
  //     return customError(error, res);
  //   }
  // },

  // updateById: async (req: Request, res: Response) => {
  //   try {
  //     const id = Number(req.params.id);

  //     const checkId = await services.getById(id);

  //     if (!checkId) {
  //       const error: CustomErrorType = new Error("Data not found");
  //       error.statusCode = 404;
  //       throw error;
  //     }

  //     const {
  //       title,
  //       description,
  //       author,
  //       image,
  //       price,
  //       status,

  //       sellerId,
  //     }: Partial<UsersSchemasType> = req.body;

  //     const result = await services.updateById(id, {
  //       title,
  //       description,
  //       author,
  //       image,
  //       price,
  //       status,
  //       seller: sellerId,
  //     });

  //     if (!result) {
  //       const error: CustomErrorType = new Error("Failed updated");
  //       error.statusCode = 400;
  //       throw error;
  //     }

  //     return responseHelper(res, null, 200, "Success updated");
  //   } catch (error) {
  //     return customError(error, res);
  //   }
  // },

  // deleteById: async (req: Request, res: Response) => {
  //   try {
  //     const id = Number(req.params.id);

  //     const checkId = await services.getById(id);

  //     if (!checkId) {
  //       const error: CustomErrorType = new Error("Data not found");
  //       error.statusCode = 404;
  //       throw error;
  //     }

  //     const result = await services.deleteById(id);

  //     if (!result) {
  //       const error: CustomErrorType = new Error("Failed deleted");
  //       error.statusCode = 400;
  //       throw error;
  //     }

  //     return responseHelper(res, null, 200, "Success deleted");
  //   } catch (error) {
  //     return customError(error, res);
  //   }
  // },
};

export default controllers;
