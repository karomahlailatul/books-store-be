"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)().get("/", function (_req, res) {
    var data = {
        uptime: process.uptime(),
        message: "Ok",
        date: new Date(),
    };
    res.status(200).send(data);
});
exports.default = router;
