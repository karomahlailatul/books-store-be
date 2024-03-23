import { z } from "zod";

import {
  checkFloatTest,
  checkNumberTest,
  noHTMLTest,
  passwordTest,
} from "./validator.utils";

export const inputBooleanSchemaValidator = (text?: string) => {
  const textLabel = text ?? "Input";
  return z.boolean().refine((value) => typeof value === "boolean", {
    message: `${textLabel} has not valid`,
  });
};


export const inputParamsIdSchemaValidator = (text?: string) => {
  const textLabel = text ?? "Input";
  return z
    .string()
    .min(1, { message: `${textLabel} is required` })
    .refine((value) => checkNumberTest(value), {
      message: `${textLabel} has not valid`,
    });
};

export const inputStringSchemaValidator = (text?: string) => {
  const textLabel = text ?? "Input";
  return z
    .string()
    .min(1, { message: `${textLabel} is required` })
    .refine((value) => noHTMLTest(value), {
      message: `${textLabel} has not valid`,
    });
};

export const inputNumberSchemaValidator = (text?: string) => {
  const textLabel = text ?? "Input";
  return z
    .number()
    .min(1, { message: `${textLabel} is required` })
    .refine((value) => checkNumberTest(value.toString()), {
      message: `${textLabel} has not valid`,
    });
};

export const inputFloatSchemaValidator = (text?: string) => {
  const textLabel = text ?? "Input";
  return z
    .number()
    .min(1, { message: `${textLabel} is required` })
    .refine((value) => checkFloatTest(value.toString()), {
      message: `${textLabel} has not valid`,
    });
};

export const inputTextSchemaValidator = (text?: string) => {
  const textLabel = text ?? "Input";
  return z
    .string()
    .min(1, { message: `${textLabel} is required` })
    .refine((value) => noHTMLTest(value), {
      message: `${textLabel} has not valid`,
    });
};

export const inputEmailSchemaValidator = (text?: string) => {
  const textLabel = text ?? "Email";
  return z
    .string()
    .min(1, { message: `${textLabel} is required` })
    .email({ message: `${textLabel} tidak valid` })
    .refine((value) => noHTMLTest(value), {
      message: `${textLabel} has not valid`,
    });
};

export const inputPhoneSchemaValidator = (text?: string) => {
  const textLabel = text ?? "Phone";
  return z
    .string()
    .min(6, { message: `${textLabel} to short - minimum 6 character` })
    .max(13, { message: `${textLabel} to long - maximum 13 character` });
};

export const inputPasswordSchemaValidator = (text?: string) => {
  const textLabel = text ?? "Password";
  return z
    .string()
    .min(8, { message: `${textLabel} to short - minimum 8 character` })
    .refine((value) => passwordTest(value), {
      message: `${textLabel} minimum one uppercase letter, one lowercase letter, one digit, one special character, and without whitespace`,
    });
};
