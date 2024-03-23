"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellersUpdateSchemas = exports.sellersCreateSchemas = exports.sellersSchemas = void 0;
var zod_1 = require("zod");
var schemasValidator_utils_1 = require("../utils/schemasValidator.utils");
var common_schemas_1 = require("./common.schemas");
exports.sellersSchemas = zod_1.z.object({
    name: (0, schemasValidator_utils_1.inputStringSchemaValidator)("Name"),
    userId: (0, schemasValidator_utils_1.inputNumberSchemaValidator)("User Id"),
});
exports.sellersCreateSchemas = zod_1.z.object({
    params: common_schemas_1.idSchemas,
    body: exports.sellersSchemas,
});
exports.sellersUpdateSchemas = zod_1.z.object({
    params: common_schemas_1.idSchemas,
    body: exports.sellersSchemas.partial(),
});
