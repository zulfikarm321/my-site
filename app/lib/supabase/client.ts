import { createBrowserClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "@/app/lib/supabase/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
export function createClient() { 
  return createBrowserClient<Database>(
    supabaseUrl!, 
    supabaseKey!,
  )
}

 