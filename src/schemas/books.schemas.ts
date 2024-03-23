import { z } from "zod";

import {
  inputBooleanSchemaValidator,
  inputNumberSchemaValidator,
  // inputParamsIdSchemaValidator,
  inputStringSchemaValidator,
} from "@/utils/schemasValidator.utils";

import { idSchemas } from "./common.schemas";

export const booksSchemas = z.object({
  name: inputStringSchemaValidator("Name"),
  title: inputStringSchemaValidator("Title"),
  description: inputStringSchemaValidator("Description"),
  author: inputStringSchemaValidator("Author"),
  image: inputStringSchemaValidator("Image"),
  price: inputNumberSchemaValidator("Price"),
  status: inputBooleanSchemaValidator("Status"),
  sellerId: inputNumberSchemaValidator("Seller Id"),
});
export type BooksSchemasType = z.infer<typeof booksSchemas>;

export const booksCreateSchemas = z.object({
  params: idSchemas,
  body: booksSchemas,
});

export const booksUpdateSchemas = z.object({
  params: idSchemas,
  body: booksSchemas.partial(),
});
