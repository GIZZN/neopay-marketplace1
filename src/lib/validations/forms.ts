import { z } from 'zod';

export const searchSchema = z.object({
  query: z.string().min(1, 'Поле поиска не может быть пустым'),
});

export type SearchFormData = z.infer<typeof searchSchema>; 