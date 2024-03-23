"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpdateSchemas = exports.ordersCreateSchemas = exports.ordersUpSchemas = exports.ordersSchemas = void 0;
var zod_1 = require("zod");
var schemasValidator_utils_1 = require("../utils/schemasValidator.utils");
var common_schemas_1 = require("./common.schemas");
exports.ordersSchemas = zod_1.z.object({
    userId: (0, schemasValidator_utils_1.inputNumberSchemaValidator)("User Id"),
    bookId: (0, schemasValidator_utils_1.inputNumberSchemaValidator)("Book Id"),
    quantity: (0, schemasValidator_utils_1.inputNumberSchemaValidator)("Quantity"),
});
exports.ordersUpSchemas = zod_1.z.object({
    statusOrder: zod_1.z.enum(["PENDING", "PROCESSING", "COMPLETED"]).optional(),
    paymentLink: zod_1.z.string().optional(),
});
exports.ordersCreateSchemas = zod_1.z.object({
    params: common_schemas_1.idSchemas,
    body: exports.ordersSchemas,
});
exports.ordersUpdateSchemas = zod_1.z.object({
    params: common_schemas_1.idSchemas,
    body: exports.ordersSchemas.partial(),
});
