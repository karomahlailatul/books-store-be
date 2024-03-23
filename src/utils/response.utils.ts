import { Response } from "express";

import type { PaginationType, ResponseType } from "@/types/app";

const responseHelper = <T>(
  res: Response,
  result: T,
  status: number,
  message?: string,
  pagination?: PaginationType
): void => {
  const resultPrint: ResponseType<T> = {};

  if (status) resultPrint.status = status;
  if (result) resultPrint.data = result;
  if (message) resultPrint.message = message;
  if (pagination) resultPrint.pagination = pagination;

  res.status(status).json(resultPrint);
};

export default responseHelper;
