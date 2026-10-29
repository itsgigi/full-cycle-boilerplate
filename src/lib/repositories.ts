import { supabase } from "@/lib/supabase";

export async function getRepositoriesWithCaseStudies() {
  const { data, error } = await supabase.from("repositories").select("*, case_studies(*)");

  if (error) throw error;
  console.log("data:", data);
  return data ?? [];
}
