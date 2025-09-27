  
import { supabase } from "../auth/supabaseClient.js";

interface RegisterInput {
  email: string;
  password: string;
  display_name?: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export async function register(input: RegisterInput) {
  const { email, password, display_name } = input;

  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name,  
      },
    },
  });
  if (error) {
    throw error;
  }
  return data;   
}

export async function login(input: LoginInput) {
  const { email, password } = input;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw error;
  }
  return data;  
}

export async function getUserFromToken(accessToken: string) {
  const { data, error } = await supabase.auth.getUser(accessToken);
  if (error) {
    throw error;
  }
  return data.user;
}
