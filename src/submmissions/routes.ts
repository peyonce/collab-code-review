import express from 'express';
import {
  createSubmission,
  listSubmissionsByProject,
  getSubmission,
  updateSubmissionStatus,
  deleteSubmission
} from './controller.js';

const router = express.Router();

 
router.post('/', async (req, res) => {
  const result = await createSubmission(req.body);
  res.json(result);
});

router.get('/project/:projectId', async (req, res) => {
  const result = await listSubmissionsByProject(req.params.projectId);
  res.json(result);
});

router.get('/:id', async (req, res) => {
  const result = await getSubmission(req.params.id);
  res.json(result);
});

router.patch('/:id/status', async (req, res) => {
  const result = await updateSubmissionStatus(req.params.id, req.body.status);
  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const result = await deleteSubmission(req.params.id);
  res.json(result);
});

export default router;
