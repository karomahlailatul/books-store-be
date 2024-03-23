import { Router } from "express";

import controllers from "@/controllers/books.controllers";
import { jwtValidator } from "@/middlewares/jwt.middlewares";
// import { zodValidator } from "@/middlewares/zod.middleware";
// import {
//   booksCreateSchemas,
//   booksUpdateSchemas,
// } from "@/schemas/books.schemas";
// import { paramsSchema } from "@/schemas/common.schemas";

const router = Router()
  .get("/", controllers.getByPagination)
  .get(
    "/:id",
    //   zodValidator(paramsSchema),
    controllers.getById
  )
  .post(
    "/",
    jwtValidator,
    //   zodValidator(booksCreateSchemas),
    controllers.create
  )
  .put(
    "/:id",
    jwtValidator,
    // zodValidator(booksUpdateSchemas),
    controllers.updateById
  )
  .delete(
    "/:id",
    jwtValidator,
    // zodValidator(paramsSchema),
    controllers.deleteById
  );

export default router;
