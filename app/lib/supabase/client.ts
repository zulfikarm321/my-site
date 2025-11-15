"use client";

import { createBrowserClient } from "@supabase/ssr";

// This file is used to create a Supabase client for the browser.
// It uses environment variables to configure the client.

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
