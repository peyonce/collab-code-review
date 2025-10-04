import type { SubmissionInsertInput } from './model.js';

export async function createSubmission(submissionData: SubmissionInsertInput) {
  console.log('[controller.createSubmission] called with:', submissionData);
   
  return { message: 'Submission created (placeholder)' };
}

export async function listSubmissionsByProject(projectId: string) {
  console.log('[controller.listSubmissionsByProject] projectId:', projectId);
  return [];
}

export async function getSubmission(id: string) {
  console.log('[controller.getSubmission] id:', id);
  return null;
}

export async function updateSubmissionStatus(id: string, status: string) {
  console.log('[controller.updateSubmissionStatus] id:', id, 'status:', status);
  return { message: 'Status updated (placeholder)' };
}

export async function deleteSubmission(id: string) {
  console.log('[controller.deleteSubmission] id:', id);
  return { message: 'Submission deleted (placeholder)' };
}
