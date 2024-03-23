"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var responseHelper = function (res, result, status, message, pagination) {
    var resultPrint = {};
    if (status)
        resultPrint.status = status;
    if (result)
        resultPrint.data = result;
    if (message)
        resultPrint.message = message;
    if (pagination)
        resultPrint.pagination = pagination;
    res.status(status).json(resultPrint);
};
exports.default = responseHelper;
