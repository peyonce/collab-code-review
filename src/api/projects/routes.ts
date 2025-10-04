import { Router } from 'express';
import { createProjectController, getProjectsController } from '../projects/controller.js';

const router = Router();

router.post('/', createProjectController);
router.get('/', getProjectsController);

export default router;
