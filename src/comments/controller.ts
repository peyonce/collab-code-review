import type { Request, Response, NextFunction } from 'express';
import type { CommentInsertInput } from './model.js';

 
export async function addComment(req: Request, res: Response, next: NextFunction) {
  try {
    const commentData = req.body as CommentInsertInput;

     
    if (!commentData.submissionId) {
      return res.status(400).json({ error: 'submissionId is required' });
    }
    if (!commentData.content) {
      return res.status(400).json({ error: 'content is required' });
    }

    console.log('[controller.addComment] called with:', commentData);
     
    const result = { message: 'Comment added (placeholder)' };

    return res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

export async function listComments(req: Request, res: Response, next: NextFunction) {
  try {
    const submissionId = req.params.submissionId;
    if (!submissionId) {
      return res.status(400).json({ error: 'submissionId parameter is required' });
    }

    console.log('[controller.listComments] submissionId:', submissionId);
    
    const comments: Comment[] = [];  

    return res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
}

export async function updateComment(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const { content } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'id parameter is required' });
    }
    if (!content) {
      return res.status(400).json({ error: 'content is required' });
    }

    console.log('[controller.updateComment] id:', id, 'content:', content);
    
    const result = { message: 'Comment updated (placeholder)' };

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

export async function deleteComment(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: 'id parameter is required' });
    }

    console.log('[controller.deleteComment] id:', id);
  
    const result = { message: 'Comment deleted (placeholder)' };

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}
