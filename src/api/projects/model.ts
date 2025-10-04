import { z } from 'zod';

export const ProjectSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
   
});

export type ProjectInsertInput = z.infer<typeof ProjectSchema>;

export interface Project {
  id: string;
  name: string;
  description?: string;
  created_at?: string;      
   
}

