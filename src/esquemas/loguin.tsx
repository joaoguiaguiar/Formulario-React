import { z } from "zod";

const esquemaLogin = z.object({
  email: z
    .string()
    .min(1, "O campo é obrigatório")
    .email("O email não é válido")
    .transform((val) => val.toLocaleLowerCase()),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export default esquemaLogin