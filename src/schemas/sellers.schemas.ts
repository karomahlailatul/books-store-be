import { z } from "zod";

import {
  inputNumberSchemaValidator,
  // inputParamsIdSchemaValidator,
  inputStringSchemaValidator,
} from "@/utils/schemasValidator.utils";

import { idSchemas } from "./common.schemas";

export const sellersSchemas = z.object({
  name: inputStringSchemaValidator("Name"),
  userId: inputNumberSchemaValidator("User Id"),
});
export type SellersSchemasType = z.infer<typeof sellersSchemas>;

export const sellersCreateSchemas = z.object({
  params: idSchemas,
  body: sellersSchemas,
});

export const sellersUpdateSchemas = z.object({
  params: idSchemas,
  body: sellersSchemas.partial(),
});
