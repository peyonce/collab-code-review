import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../../database.types.js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error('Missing SUPABASE_URL in environment');
}
if (!supabaseKey) {
  throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY in environment');
}

export const supabase: SupabaseClient<Database> = createClient<Database>(
  supabaseUrl,
  supabaseKey
);
