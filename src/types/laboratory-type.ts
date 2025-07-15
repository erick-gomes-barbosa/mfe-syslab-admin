import { z } from "zod";
import { LaboratorySchema } from "../schemas/laboratory-schema";

export type LaboratoryType = z.infer<typeof LaboratorySchema>;
