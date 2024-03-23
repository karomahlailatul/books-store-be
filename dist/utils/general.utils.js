"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customError = void 0;
var response_utils_1 = __importDefault(require("./response.utils"));
var customError = function (error, res) {
    if (error instanceof Error) {
        var customError_1 = error;
        return (0, response_utils_1.default)(res, null, customError_1.statusCode || 500, customError_1.message || "Something When Wrong");
    }
    else {
        return (0, response_utils_1.default)(res, null, 500, error || "Something When Wrong");
    }
};
exports.customError = customError;
