import express from 'express';
import { addComment, listComments, updateComment, deleteComment } from './controller.js';

const router = express.Router();

 
router.post('/:submissionId', async (req, res) => {
  const result = await addComment({ ...req.body, submissionId: req.params.submissionId });
  res.json(result);
});

router.get('/:submissionId', async (req, res) => {
  const result = await listComments(req.params.submissionId);
  res.json(result);
});

router.patch('/:id', async (req, res) => {
  const result = await updateComment(req.params.id, req.body.content);
  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const result = await deleteComment(req.params.id);
  res.json(result);
});

export default router;
