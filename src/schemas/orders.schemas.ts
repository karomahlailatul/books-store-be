import { z } from "zod";

import {
  inputNumberSchemaValidator,
  // inputParamsIdSchemaValidator,
  // inputStringSchemaValidator,
} from "@/utils/schemasValidator.utils";

import { idSchemas } from "./common.schemas";

export const ordersSchemas = z.object({
  userId: inputNumberSchemaValidator("User Id"),
  bookId: inputNumberSchemaValidator("Book Id"),
  quantity: inputNumberSchemaValidator("Quantity"),
});

export const ordersUpSchemas = z.object({
  statusOrder: z.enum(["PENDING", "PROCESSING", "COMPLETED"]).optional(),
  paymentLink: z.string().optional(),
});

export type OrdersSchemasType = z.infer<typeof ordersSchemas> &
  z.infer<typeof ordersUpSchemas>;

export const ordersCreateSchemas = z.object({
  params: idSchemas,
  body: ordersSchemas,
});

export const ordersUpdateSchemas = z.object({
  params: idSchemas,
  body: ordersSchemas.partial(),
});
