import { convertTimeToFloat } from "../helpers/convert-time-to-float";
import { LaboratorySchema } from "../schemas/laboratory-schema";

// Schema para validação dos dados do card de laboratório
export const CardSchema = LaboratorySchema.pick({
  enviroment: true,
  name: true,
  opening_time: true,
  closing_time: true,
});
