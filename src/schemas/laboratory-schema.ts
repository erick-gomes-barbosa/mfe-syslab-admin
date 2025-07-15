import { z } from "zod";

// Schema para validação dos dados do laboratório
export const LaboratorySchema = z.object({
  //Nome do laboratório.
  name: z
    .string()
    .regex(
      /^[A-Za-zÀ-ÿ]/,
      "O nome do laboratório não pode começar com números e nem com caracteres especiais"
    ),
  // Identificador do laboratório.
  enviroment: z
    .string()
    .length(5)
    .regex(/^[A-Za-z0-9]+$/, "Use apenas letras e números"),

  // Quantidade de cadeiras.
  qty_chairs: z.number().int().default(0),

  // Quantidade de computadores.
  qty_computers: z.number().int().default(0),

  //Campo para confirmar a existência de televisão no laboratório.
  television: z.boolean(),

  //Campo para validar a existência de ventilador no laboratório.
  fan: z.boolean(),

  //Campo para validar a existência de ar condicionado no laboratório.
  air_conditioner: z.boolean(),

  //Horário de abertura do laboratório.
  opening_time: z
    .string()
    .regex(/^\d{2}:\d{2}$/, "insira o horário no formato 10:10"),

  //Horário de fechamento do laboratório.
  closing_time: z
    .string()
    .regex(/^\d{2}:\d{2}$/, "insira o horário no formato 10:10"),

  //Status para verificar se o laboratório está ativo ou não.
  is_activated: z.boolean(),
});
