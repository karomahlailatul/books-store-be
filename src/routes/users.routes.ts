import { Router } from "express";

import controllers from "@/controllers/users.controllers";
// import { jwtValidator } from "@/middlewares/jwt.middlewares";
// import { zodValidator } from "@/middlewares/zod.middleware";
// import {
//   usersCreateSchemas,
//   usersUpdateSchemas,
// } from "@/schemas/users.schemas";
// import { paramsSchema } from "@/schemas/common.schemas";

const router = Router()
  .get("/", controllers.getByPagination)
  .get(
    "/:id",
    //   zodValidator(paramsSchema),
    controllers.getById
  )
  .post("/register", controllers.register)
  .post("/login", controllers.login)
  .post("/reset-password", controllers.resetPassword);
// .put("/:id", jwtValidator, controllers.updateById)

// .post(
//   "/",
//   jwtValidator,
//   //   zodValidator(usersCreateSchemas),
//   controllers.create
// )
// .put(
//   "/:id",
//   jwtValidator,
//   // zodValidator(usersUpdateSchemas),
//   controllers.updateById
// )
// .delete(
//   "/:id",
//   jwtValidator,
//   // zodValidator(paramsSchema),
//   controllers.deleteById
// );

export default router;
