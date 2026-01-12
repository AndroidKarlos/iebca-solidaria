import { z } from 'zod';

export const donationSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  telefone: z
    .string()
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido. Use o formato (81) 99999-9999'),
  tipodoacao: z.enum(['Alimentos', 'Roupas', 'Higiene Pessoal', 'Misto'], {
    message: 'Selecione um tipo de doação',
  }),
  quantidade: z.string().min(1, 'Informe a quantidade estimada'),
  endereco: z.string().min(10, 'Endereço deve ter pelo menos 10 caracteres'),
  observacoes: z.string().optional(),
});

export type DonationFormData = z.infer<typeof donationSchema>;

export interface DonationSubmission extends DonationFormData {
  timestamp: string;
}
