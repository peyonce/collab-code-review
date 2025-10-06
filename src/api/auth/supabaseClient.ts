 import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../../database.types.js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Missing SUPABASE_URL');
}
if (!supabaseAnonKey) {
  throw new Error('Missing SUPABASE_ANON_KEY');
}

export const supabaseClient: SupabaseClient<Database> = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);

export default supabaseClient;
