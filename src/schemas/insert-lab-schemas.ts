import { LaboratorySchema } from "../schemas/laboratory-schema";

// Schema para validação dos dados do card de laboratório
export const InsertLabSchema = LaboratorySchema.pick({
  lab_name: true,
  air_conditioner: true,
  fan: true,
  qty_chairs: true,
  qty_computers: true,
  television: true,
  enviroment_id: true,
  opening_time: true,
  closing_time: true,
});
