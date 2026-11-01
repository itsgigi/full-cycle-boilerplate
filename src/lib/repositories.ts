import { supabase } from "@/lib/supabase";

export async function getRepositoriesWithCaseStudies() {
  const { data, error } = await supabase
    .from("repositories")
    .select("id, name, description, stars, language, url");

  if (error) throw error;
  return data ?? [];
}
