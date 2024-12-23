import { createClient } from '@supabase/supabase-js';
import type { ImportMetaEnv } from '../vite-env';

// Use import.meta.env for Vite environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing required Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);