import { z } from "zod";

const esquemaCadastroEspecialista = z.object({
    registroProfissional: z.string().min(1, "O campo não pode ser vazio"),
  
    habilidadesTecnicas: z.array(
      z.object({
        tecnologia: z.string().min(1, "Preencha a tecnologia"),
        nivelExperiencia: z.coerce
          .number({
            errorMap: () => {
              return { message: "Insira um número" };
            },
          })
          .min(1, "Preencha o nível de experiência"), 
        instituicaoCertificacao: z.string().min(1, "Preencha a instituição de certificação"), 
      })
    ),
  });

export default esquemaCadastroEspecialista