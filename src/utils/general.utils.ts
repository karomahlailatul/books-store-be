import { Response } from "express";

import { CustomErrorType } from "@/types/app";

import responseHelper from "./response.utils";

export const customError = (error: unknown, res: Response) => {
  if (error instanceof Error) {
    const customError = error as CustomErrorType;
    return responseHelper(
      res,
      null,
      customError.statusCode || 500,
      customError.message || "Something When Wrong",
    );
  } else {
    return responseHelper(
      res,
      null,
      500,
      (error as string) || "Something When Wrong",
    );
  }
};
