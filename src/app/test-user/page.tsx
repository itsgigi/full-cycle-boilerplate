import { createClient } from "@/lib/supabase/server";

export default async function TestUserPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <main className="p-10">
      <h1>Verifica autenticazione</h1>

      {error && <p>Errore: {error.message}</p>}

      {user ? (
        <>
          <p>Login effettuato correttamente!</p>
          <p>Nome: {user.user_metadata?.user_name}</p>
          <p>Email: {user.email}</p>
          <p>User ID: {user.id}</p>
        </>
      ) : (
        <p>Nessun utente autenticato.</p>
      )}
    </main>
  );
}
