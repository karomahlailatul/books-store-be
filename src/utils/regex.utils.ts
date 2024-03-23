/* eslint-disable no-useless-escape */
export const noHTMLRegex = /<[^>]*(>|$)|&[^;]+;/g;

export const checkingContentRegex = /<(php|script)|(\bphp|script)\b>/gi;

export const tokenRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!-\/:-@\[-`{-~])[A-Za-z\d!-\/:-@\[-`{-~]{8,}$/;

export const checkNumberRegex = /^\d+$/;

export const checkFloatRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/; // /^\d+(\.\d+)?$/;
