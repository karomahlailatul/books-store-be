import { z } from "zod";

import { inputParamsIdSchemaValidator } from "@/utils/schemasValidator.utils";

export const idSchemas = z.object({
  id: inputParamsIdSchemaValidator("id Param"),
});

export type ParamSchemasType = z.infer<typeof idSchemas>;

export const paramSchemas = z.object({
  params: idSchemas,
});
