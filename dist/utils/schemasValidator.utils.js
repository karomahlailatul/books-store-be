"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputPasswordSchemaValidator = exports.inputPhoneSchemaValidator = exports.inputEmailSchemaValidator = exports.inputTextSchemaValidator = exports.inputFloatSchemaValidator = exports.inputNumberSchemaValidator = exports.inputStringSchemaValidator = exports.inputParamsIdSchemaValidator = exports.inputBooleanSchemaValidator = void 0;
var zod_1 = require("zod");
var validator_utils_1 = require("./validator.utils");
var inputBooleanSchemaValidator = function (text) {
    var textLabel = text !== null && text !== void 0 ? text : "Input";
    return zod_1.z.boolean().refine(function (value) { return typeof value === "boolean"; }, {
        message: "".concat(textLabel, " has not valid"),
    });
};
exports.inputBooleanSchemaValidator = inputBooleanSchemaValidator;
var inputParamsIdSchemaValidator = function (text) {
    var textLabel = text !== null && text !== void 0 ? text : "Input";
    return zod_1.z
        .string()
        .min(1, { message: "".concat(textLabel, " is required") })
        .refine(function (value) { return (0, validator_utils_1.checkNumberTest)(value); }, {
        message: "".concat(textLabel, " has not valid"),
    });
};
exports.inputParamsIdSchemaValidator = inputParamsIdSchemaValidator;
var inputStringSchemaValidator = function (text) {
    var textLabel = text !== null && text !== void 0 ? text : "Input";
    return zod_1.z
        .string()
        .min(1, { message: "".concat(textLabel, " is required") })
        .refine(function (value) { return (0, validator_utils_1.noHTMLTest)(value); }, {
        message: "".concat(textLabel, " has not valid"),
    });
};
exports.inputStringSchemaValidator = inputStringSchemaValidator;
var inputNumberSchemaValidator = function (text) {
    var textLabel = text !== null && text !== void 0 ? text : "Input";
    return zod_1.z
        .number()
        .min(1, { message: "".concat(textLabel, " is required") })
        .refine(function (value) { return (0, validator_utils_1.checkNumberTest)(value.toString()); }, {
        message: "".concat(textLabel, " has not valid"),
    });
};
exports.inputNumberSchemaValidator = inputNumberSchemaValidator;
var inputFloatSchemaValidator = function (text) {
    var textLabel = text !== null && text !== void 0 ? text : "Input";
    return zod_1.z
        .number()
        .min(1, { message: "".concat(textLabel, " is required") })
        .refine(function (value) { return (0, validator_utils_1.checkFloatTest)(value.toString()); }, {
        message: "".concat(textLabel, " has not valid"),
    });
};
exports.inputFloatSchemaValidator = inputFloatSchemaValidator;
var inputTextSchemaValidator = function (text) {
    var textLabel = text !== null && text !== void 0 ? text : "Input";
    return zod_1.z
        .string()
        .min(1, { message: "".concat(textLabel, " is required") })
        .refine(function (value) { return (0, validator_utils_1.noHTMLTest)(value); }, {
        message: "".concat(textLabel, " has not valid"),
    });
};
exports.inputTextSchemaValidator = inputTextSchemaValidator;
var inputEmailSchemaValidator = function (text) {
    var textLabel = text !== null && text !== void 0 ? text : "Email";
    return zod_1.z
        .string()
        .min(1, { message: "".concat(textLabel, " is required") })
        .email({ message: "".concat(textLabel, " tidak valid") })
        .refine(function (value) { return (0, validator_utils_1.noHTMLTest)(value); }, {
        message: "".concat(textLabel, " has not valid"),
    });
};
exports.inputEmailSchemaValidator = inputEmailSchemaValidator;
var inputPhoneSchemaValidator = function (text) {
    var textLabel = text !== null && text !== void 0 ? text : "Phone";
    return zod_1.z
        .string()
        .min(6, { message: "".concat(textLabel, " to short - minimum 6 character") })
        .max(13, { message: "".concat(textLabel, " to long - maximum 13 character") });
};
exports.inputPhoneSchemaValidator = inputPhoneSchemaValidator;
var inputPasswordSchemaValidator = function (text) {
    var textLabel = text !== null && text !== void 0 ? text : "Password";
    return zod_1.z
        .string()
        .min(8, { message: "".concat(textLabel, " to short - minimum 8 character") })
        .refine(function (value) { return (0, validator_utils_1.passwordTest)(value); }, {
        message: "".concat(textLabel, " minimum one uppercase letter, one lowercase letter, one digit, one special character, and without whitespace"),
    });
};
exports.inputPasswordSchemaValidator = inputPasswordSchemaValidator;
