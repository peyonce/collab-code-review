import { supabaseClient } from '../auth/supabaseClient.js';
import type { Database } from '../../database.types.js';

export interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

export async function register({ name, email, password }: RegisterParams) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  });

  if (error) {
    throw error;
  }
  return data;
}

export async function login({ email, password }: { email: string; password: string }) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }
  return data;
}
