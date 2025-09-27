// // projects/service.ts

import { supabase } from '../projects/supabaseClient.js'; // Adjust the import path as necessary
import { Project } from '../projects/model.js'; // Import the Project type

export const createProject = async (projectData: Project): Promise<Project | null> => {
  const { data, error } = await supabase
    .from('projects')
    .insert([projectData])
    .select(); // Ensure to call .select() to retrieve the inserted data

  if (error) {
    console.error('Error inserting project:', error);
    return null;
  }

  return data ? data[0] : null; // Return the first inserted project or null if no data
};


 