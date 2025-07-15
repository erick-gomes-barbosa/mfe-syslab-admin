import { z } from "zod";
import { CardSchema } from "../schemas/card-labs-schema";

export type CardLabsType = z.infer<typeof CardSchema>;
