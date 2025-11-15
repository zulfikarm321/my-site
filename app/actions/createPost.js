"use server";

import { supabaseServer } from "@/lib/supabaseServer";

export async function createPost(title, content) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("posts")
    .insert([{ title, content }]);

  if (error) throw error;

  return data;
}
