import { Router } from "express";

import controllers from "@/controllers/sellers.controllers";
import { jwtValidator } from "@/middlewares/jwt.middlewares";
// import { zodValidator } from "@/middlewares/zod.middleware";
// import {
//   sellersCreateSchemas,
//   sellersUpdateSchemas,
// } from "@/schemas/sellers.schemas";
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
    //   zodValidator(sellersCreateSchemas),
    controllers.create
  )
  .put(
    "/:id",
    jwtValidator,
    // zodValidator(sellersUpdateSchemas),
    controllers.updateById
  )
  .delete(
    "/:id",
    jwtValidator,
    // zodValidator(paramsSchema),
    controllers.deleteById
  );

export default router;
