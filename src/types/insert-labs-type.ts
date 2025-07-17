import { z } from "zod";
import { InsertLabSchema } from "../schemas/insert-lab-schemas";

export type InsertLabType = z.infer<typeof InsertLabSchema>;
