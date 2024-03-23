"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
// import { jwtValidator } from "../middlewares/jwt.middlewares";
// import { zodValidator } from "@/middlewares/zod.middleware";
// import {
//   usersCreateSchemas,
//   usersUpdateSchemas,
// } from "../schemas/users.schemas";
// import { paramsSchema } from "../schemas/common.schemas";
var router = (0, express_1.Router)()
    .get("/", users_controllers_1.default.getByPagination)
    .get("/:id", 
//   zodValidator(paramsSchema),
users_controllers_1.default.getById)
    .post("/register", users_controllers_1.default.register)
    .post("/login", users_controllers_1.default.login)
    .post("/reset-password", users_controllers_1.default.resetPassword);
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
exports.default = router;
