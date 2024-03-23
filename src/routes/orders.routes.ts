import { Router } from "express";

import controllers from "@/controllers/orders.controllers";
import { jwtValidator } from "@/middlewares/jwt.middlewares";
// import { zodValidator } from "@/middlewares/zod.middleware";
// import {
//   ordersCreateSchemas,
//   ordersUpdateSchemas,
// } from "@/schemas/orders.schemas";
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
    //   zodValidator(ordersCreateSchemas),
    controllers.create
  )
  .put(
    "/:id",
    jwtValidator,
    // zodValidator(ordersUpdateSchemas),
    controllers.updateById
  )
  .delete(
    "/:id",
    jwtValidator,
    // zodValidator(paramsSchema),
    controllers.deleteById
  )
  .put(
    "/:id/cancel",
    jwtValidator,
    // zodValidator(paramsSchema),
    controllers.cancelOrder
  );

export default router;
