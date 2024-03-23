import { z } from "zod";

import {
  // inputNumberSchemaValidator,
  // inputParamsIdSchemaValidator,
  inputStringSchemaValidator,
} from "@/utils/schemasValidator.utils";

import { idSchemas } from "./common.schemas";

export const usersSchemas = z.object({
  username: inputStringSchemaValidator("username"),
  email: inputStringSchemaValidator("Email"),
  password: inputStringSchemaValidator("password"),
  // role: inputStringSchemaValidator("Role"),
});
export type UsersSchemasType = z.infer<typeof usersSchemas>;

export const usersCreateSchemas = z.object({
  params: idSchemas,
  body: usersSchemas,
});

export const usersUpdateSchemas = z.object({
  params: idSchemas,
  body: usersSchemas.partial(),
});
