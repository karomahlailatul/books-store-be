"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateSchemas = exports.usersCreateSchemas = exports.usersSchemas = void 0;
var zod_1 = require("zod");
var schemasValidator_utils_1 = require("../utils/schemasValidator.utils");
var common_schemas_1 = require("./common.schemas");
exports.usersSchemas = zod_1.z.object({
    username: (0, schemasValidator_utils_1.inputStringSchemaValidator)("username"),
    email: (0, schemasValidator_utils_1.inputStringSchemaValidator)("Email"),
    password: (0, schemasValidator_utils_1.inputStringSchemaValidator)("password"),
    // role: inputStringSchemaValidator("Role"),
});
exports.usersCreateSchemas = zod_1.z.object({
    params: common_schemas_1.idSchemas,
    body: exports.usersSchemas,
});
exports.usersUpdateSchemas = zod_1.z.object({
    params: common_schemas_1.idSchemas,
    body: exports.usersSchemas.partial(),
});
