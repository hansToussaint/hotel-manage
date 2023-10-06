import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://swenlatwjofofykopazj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3ZW5sYXR3am9mb2Z5a29wYXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzOTc3MDYsImV4cCI6MjAxMDk3MzcwNn0.4LXcbx-SfpQszSpm8IPGtQGBBwXdQW9wztHs8HC7Cl0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
