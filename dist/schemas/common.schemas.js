"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramSchemas = exports.idSchemas = void 0;
var zod_1 = require("zod");
var schemasValidator_utils_1 = require("../utils/schemasValidator.utils");
exports.idSchemas = zod_1.z.object({
    id: (0, schemasValidator_utils_1.inputParamsIdSchemaValidator)("id Param"),
});
exports.paramSchemas = zod_1.z.object({
    params: exports.idSchemas,
});
