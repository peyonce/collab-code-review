  import { Request, Response } from 'express';
import { createProject, getProjects } from './service.js';
import { ProjectSchema } from './model.js';

export async function createProjectController(req: Request, res: Response) {
  const parsed = ProjectSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.issues);
  }
  try {
    const project = await createProject(parsed.data);
    if (!project) {
      return res.status(400).json({ message: 'Unable to create project' });
    }
    return res.status(201).json(project);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return res.status(500).json({ message });
  }
}

export async function getProjectsController(_req: Request, res: Response) {
  try {
    const projects = await getProjects();
    return res.status(200).json(projects);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return res.status(500).json({ message });
  }
}
