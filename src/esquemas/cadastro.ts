import { z } from "zod";


const esquemaCadastro = z
  .object({
    nome: z.string().min(5, "O nome deve ter ao menos cinco caracteres"),
    email: z
      .string()
      .min(1, "O campo é obrigatório")
      .email("O email não é válido")
      .transform((val) => val.toLocaleLowerCase()),
    telefone: z.string().min(1, "O campo telefone é obrigatório"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    senhaVerificada: z.string().min(1, "Este campo não pode ser vazio"),
  })
  .refine((dados) => dados.senha === dados.senhaVerificada, {
    message: "As senhas não coincidem",
    path: ["senhaVerificada"],
  });

export default esquemaCadastro  