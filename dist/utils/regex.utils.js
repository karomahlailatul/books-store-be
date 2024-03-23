"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFloatRegex = exports.checkNumberRegex = exports.passwordRegex = exports.tokenRegex = exports.checkingContentRegex = exports.noHTMLRegex = void 0;
/* eslint-disable no-useless-escape */
exports.noHTMLRegex = /<[^>]*(>|$)|&[^;]+;/g;
exports.checkingContentRegex = /<(php|script)|(\bphp|script)\b>/gi;
exports.tokenRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
exports.passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!-\/:-@\[-`{-~])[A-Za-z\d!-\/:-@\[-`{-~]{8,}$/;
exports.checkNumberRegex = /^\d+$/;
exports.checkFloatRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/; // /^\d+(\.\d+)?$/;
