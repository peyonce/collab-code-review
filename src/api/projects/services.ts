
 import { supabase } from '../auth/supabaseClient.js';
import type { InsertOf, RowOf } from '../../database.types.js';

export type Project = RowOf<'projects'>;
export type ProjectInsertInput = InsertOf<'projects'>;

export async function createProject(
  projectData: ProjectInsertInput
): Promise<Project> {
  console.log('[service.createProject] inserting:', projectData);

   
  const _check: InsertOf<'projects'> = projectData;

  const { data, error } = await supabase
    .from('projects')
    .insert([projectData])      
    .select('*')
    .single();

  if (error) {
    console.error('[service.createProject] error:', error);
    throw new Error(error.message);
  }
  if (!data) {
    throw new Error('Failed to create project — no data returned.');
  }
  return data;
}

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase.from('projects').select('*');
  if (error) {
    console.error('[service.getProjects] error:', error);
    throw new Error(error.message);
  }
  return data ?? [];
}

export async function getProject(id: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('[service.getProject] error:', error);
    throw new Error(error.message);
  }
  return data;
}
