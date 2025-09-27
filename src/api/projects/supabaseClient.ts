// projects/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';
import { Database } from '../../database.types.js'; // Adjust the path as necessary

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
