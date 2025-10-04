import type { CommentInsertInput } from './model.js';

export async function addComment(commentData: CommentInsertInput) {
  console.log('[controller.addComment] called with:', commentData);
  return { message: 'Comment added (placeholder)' };
}

export async function listComments(submissionId: string) {
  console.log('[controller.listComments] submissionId:', submissionId);
  return [];
}

export async function updateComment(id: string, content: string) {
  console.log('[controller.updateComment] id:', id, 'content:', content);
  return { message: 'Comment updated (placeholder)' };
}

export async function deleteComment(id: string) {
  console.log('[controller.deleteComment] id:', id);
  return { message: 'Comment deleted (placeholder)' };
}
