"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var books_controllers_1 = __importDefault(require("../controllers/books.controllers"));
var jwt_middlewares_1 = require("../middlewares/jwt.middlewares");
// import { zodValidator } from "@/middlewares/zod.middleware";
// import {
//   booksCreateSchemas,
//   booksUpdateSchemas,
// } from "../schemas/books.schemas";
// import { paramsSchema } from "../schemas/common.schemas";
var router = (0, express_1.Router)()
    .get("/", books_controllers_1.default.getByPagination)
    .get("/:id", 
//   zodValidator(paramsSchema),
books_controllers_1.default.getById)
    .post("/", jwt_middlewares_1.jwtValidator, 
//   zodValidator(booksCreateSchemas),
books_controllers_1.default.create)
    .put("/:id", jwt_middlewares_1.jwtValidator, 
// zodValidator(booksUpdateSchemas),
books_controllers_1.default.updateById)
    .delete("/:id", jwt_middlewares_1.jwtValidator, 
// zodValidator(paramsSchema),
books_controllers_1.default.deleteById);
exports.default = router;
