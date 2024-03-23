import { NextFunction, Request, Response } from "express";
import { AnyZodObject, z } from "zod";

import responseHelper from "@/utils/response.utils";

export const zodValidator =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      let err = error;
      if (err instanceof z.ZodError) {
        err = err.issues.map((e) => ({ path: e.path[0], message: e.message }));
      }
      return responseHelper(res, null, 400, err as string);
    }
  };
