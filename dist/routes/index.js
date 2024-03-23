"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var books_routes_1 = __importDefault(require("./books.routes"));
var healthz_routes_1 = __importDefault(require("./healthz.routes"));
var orders_routes_1 = __importDefault(require("./orders.routes"));
var sellers_routes_1 = __importDefault(require("./sellers.routes"));
var users_routes_1 = __importDefault(require("./users.routes"));
var api = (0, express_1.Router)()
    .use("/users", users_routes_1.default)
    .use("/books", books_routes_1.default)
    .use("/orders", orders_routes_1.default)
    .use("/sellers", sellers_routes_1.default)
    .use("/healthz", healthz_routes_1.default);
exports.default = (0, express_1.Router)().use("/v1", api);
