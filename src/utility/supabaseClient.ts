import { SUPABASE_CONFIG } from "@constants/config";
import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://uaipclibluwuxojpyung.supabase.co";
const SUPABASE_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhaXBjbGlibHV3dXhvanB5dW5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzMDg4NzYsImV4cCI6MjAwMzg4NDg3Nn0.10-Qnmyga6IBPR4rIN8OynSdrcXJ8zrekjnW5VNrPIM";
// const SUPABASE_URL = SUPABASE_CONFIG.URL;
// const SUPABASE_KEY = SUPABASE_CONFIG.KEY;

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
