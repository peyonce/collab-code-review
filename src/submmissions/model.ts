export interface SubmissionInsertInput {
  projectId: string;
  title: string;
  code: string;
  status?: 'pending' | 'in_review' | 'approved' | 'changes_requested';
}
