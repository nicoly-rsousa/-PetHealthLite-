import { z } from "zod";

export const petSchema = z.object({
  nomePet: z.string().min(2, "Nome do pet deve ter pelo menos 2 caracteres"),
  especie: z.string().min(1, "Selecione uma espécie"),
  raca: z.string().min(2, "Raça deve ter pelo menos 2 caracteres"),
  nomeTutor: z.string().min(3, "Nome do tutor deve ter pelo menos 3 caracteres"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
});

export const consultaSchema = z.object({
  petId: z.string().min(1, "Selecione um pet"),
  data: z.string().min(1, "Data é obrigatória"),
  hora: z.string().min(1, "Horário é obrigatório"),
  motivo: z.string().min(5, "Descreva o motivo com pelo menos 5 caracteres"),
  observacoes: z.string().optional(),
});

export type PetFormData = z.infer<typeof petSchema>;
export type ConsultaFormData = z.infer<typeof consultaSchema>;