import { createClient } from "@/lib/supabase/server";

export async function getRepositoriesWithCaseStudies() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw new Error(userError.message);
  if (!user) return [];

  const { data, error } = await supabase
    .from("repositories")
    .select(
      `
      id,
      name,
      description,
      stars,
      language,
      url,
      case_studies (
        id,
        title,
        summary,
        status,
        created_at
      )
    `,
    )
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Errore caricamento repository:", error);
    throw new Error(error.message);
  }

  return data ?? [];
}
