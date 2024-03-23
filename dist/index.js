"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
// import cors from "cors";
var routes_1 = __importDefault(require("./routes"));
(0, dotenv_1.config)();
var app = (0, express_1.default)();
// app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, helmet_1.default)());
app.disable("x-powered-by");
app.use(routes_1.default);
app.all("*", function (_, res) {
    return res.status(500).send({
        message: "Internal server error",
        status: 500,
    });
});
var PORT = Number(process.env.APP_PORT) || 8000;
app.listen(PORT, function () {
    console.info("Server Running On ".concat(PORT));
});
