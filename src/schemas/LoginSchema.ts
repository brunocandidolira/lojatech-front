import {z} from 'zod'


export const LoginSchema = z.object({
  email: z
    .email({ error: "E-mail inválido" }),

  password: z
    .string()
    .min(1, "Senha é obrigatória"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;