import { supabaseClient } from '../auth/supabaseClient.js';
import type {
  Project,
  ProjectInsertInput,
  ProjectUpdateInput,
} from '../../database.types.js';

export async function createProject(
  projectData: ProjectInsertInput
): Promise<Project> {
  const { data, error } = await supabaseClient
    .from('projects')
    .insert([projectData] as never)  
    .select()
    .single();

  if (error) {
    console.error('[createProject] error:', error);
    throw new Error(`Failed to create project: ${error.message}`);
  }

  if (!data) {
    throw new Error('Failed to create project — no data returned.');
  }

  return data;
}

export async function updateProject(
  id: string,
  updates: ProjectUpdateInput
): Promise<Project> {
  const { data, error } = await supabaseClient
    .from('projects')
    .update(updates as never)  
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('[updateProject] error:', error);
    throw new Error(`Failed to update project: ${error.message}`);
  }

  if (!data) {
    throw new Error('Failed to update project — no data returned.');
  }

  return data;
}