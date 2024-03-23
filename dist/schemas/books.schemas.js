"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksUpdateSchemas = exports.booksCreateSchemas = exports.booksSchemas = void 0;
var zod_1 = require("zod");
var schemasValidator_utils_1 = require("../utils/schemasValidator.utils");
var common_schemas_1 = require("./common.schemas");
exports.booksSchemas = zod_1.z.object({
    name: (0, schemasValidator_utils_1.inputStringSchemaValidator)("Name"),
    title: (0, schemasValidator_utils_1.inputStringSchemaValidator)("Title"),
    description: (0, schemasValidator_utils_1.inputStringSchemaValidator)("Description"),
    author: (0, schemasValidator_utils_1.inputStringSchemaValidator)("Author"),
    image: (0, schemasValidator_utils_1.inputStringSchemaValidator)("Image"),
    price: (0, schemasValidator_utils_1.inputNumberSchemaValidator)("Price"),
    status: (0, schemasValidator_utils_1.inputBooleanSchemaValidator)("Status"),
    sellerId: (0, schemasValidator_utils_1.inputNumberSchemaValidator)("Seller Id"),
});
exports.booksCreateSchemas = zod_1.z.object({
    params: common_schemas_1.idSchemas,
    body: exports.booksSchemas,
});
exports.booksUpdateSchemas = zod_1.z.object({
    params: common_schemas_1.idSchemas,
    body: exports.booksSchemas.partial(),
});
