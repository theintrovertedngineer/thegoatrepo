import { z } from 'zod';
export const programmingLang = z.object({
  name: z.string(),
  creator: z.string(),
  creationYear: z.number(),
  isCompiled: z.boolean(),
  /* ... */
});

export type ProgrammingLang = z.infer<typeof programmingLang>;
