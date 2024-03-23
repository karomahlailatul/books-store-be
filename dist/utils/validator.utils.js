"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFloatTest = exports.checkNumberTest = exports.isValidFileFormat = exports.isValidFileSize = exports.isValidImageOrVideo = exports.customContentTest = exports.passwordTest = exports.noHTMLTest = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var regex_utils_1 = require("../utils/regex.utils");
// helper function to test for no HTML
var noHTMLTest = function (value) {
    return !regex_utils_1.noHTMLRegex.test(value);
};
exports.noHTMLTest = noHTMLTest;
var passwordTest = function (value) {
    return regex_utils_1.passwordRegex.test(value);
};
exports.passwordTest = passwordTest;
var customContentTest = function (value) {
    return regex_utils_1.checkingContentRegex.test(value);
};
exports.customContentTest = customContentTest;
// Helper function to test for valid image/video file
var isValidImageOrVideo = function (value) {
    var isFileList = value instanceof FileList;
    var isString = typeof value === "string";
    return ((isFileList && value.length > 0) || (isString && value.startsWith("https")));
};
exports.isValidImageOrVideo = isValidImageOrVideo;
// Helper function to test for file size
var isValidFileSize = function (value) {
    var _a;
    var isFileList = value instanceof FileList;
    var isString = typeof value === "string";
    return ((isFileList && value.length > 0 && ((_a = value[0]) === null || _a === void 0 ? void 0 : _a.size) < 1024 * 1024 * 2) ||
        (isString && value.startsWith("https")));
};
exports.isValidFileSize = isValidFileSize;
// Helper function to test for valid file format
var isValidFileFormat = function (value, formatList) {
    var _a;
    var image = formatList.image, video = formatList.video, custom = formatList.custom;
    var imageFormat = ["image/jpg", "image/jpeg", "image/png"];
    var videoFormat = ["video/mp4", "video/mkv"];
    var isFileList = value instanceof FileList;
    var isString = typeof value === "string";
    var validFormatList = __spreadArray(__spreadArray(__spreadArray([], (image ? imageFormat : []), true), (video ? videoFormat : []), true), (custom || []), true);
    return ((isFileList &&
        value.length > 0 &&
        validFormatList.includes((_a = value[0]) === null || _a === void 0 ? void 0 : _a.type)) ||
        (isString && value.startsWith("https")));
};
exports.isValidFileFormat = isValidFileFormat;
// Helper function to test number
var checkNumberTest = function (value) {
    return regex_utils_1.checkNumberRegex.test(value);
};
exports.checkNumberTest = checkNumberTest;
// Helper function to test number
var checkFloatTest = function (value) {
    return regex_utils_1.checkFloatRegex.test(value);
};
exports.checkFloatTest = checkFloatTest;
