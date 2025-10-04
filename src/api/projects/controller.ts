  // controller.ts
 import { Request, Response, NextFunction } from 'express';
import { createProject, getProjects, getProject } from './services.js';
import { ProjectSchema } from './model.js';

/**
 * Middleware to handle async errors in route handlers.
 * Automatically passes errors to the next middleware.
 */
const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next);

/**
 * Controller to create a new project.
 */
export const createProjectController = asyncHandler(async (req: Request, res: Response) => {
  const parsed = ProjectSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.issues });
  }
  const project = await createProject(parsed.data);
  return res.status(201).json(project);
});

/**
 * Controller to retrieve all projects.
 */
export const getProjectsController = asyncHandler(async (_req: Request, res: Response) => {
  const projects = await getProjects();
  return res.status(200).json(projects);
});

/**
 * Controller to retrieve a single project by ID.
 */
export const getProjectController = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'Project id is required' });
  }
  const project = await getProject(id);
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  return res.status(200).json(project);
});
