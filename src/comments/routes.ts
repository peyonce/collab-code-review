import express from 'express';
import {
  addComment,
  listComments,
  updateComment,
  deleteComment,
} from './controller.js';  

const router = express.Router();

router.post('/', addComment);
router.get('/:submissionId', listComments);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;
