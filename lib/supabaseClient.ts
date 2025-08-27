// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// These will come from your Render (or local .env file)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
