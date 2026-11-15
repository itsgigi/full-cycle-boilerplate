import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./LogoutButton";

export default async function UserMenu() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const meta = user.user_metadata;
  const name = meta?.full_name ?? meta?.name ?? meta?.user_name ?? user.email;
  const avatar = meta?.avatar_url;

  return (
    <div className="fixed top-0 left-0 z-10 flex w-full items-center gap-3 bg-black px-3 py-3 shadow-sm shadow-black/30">
      {avatar && (
        <img src={avatar} alt={name} width={32} height={32} style={{ borderRadius: "50%" }} />
      )}
      <span>{name}</span>
      <div className="ml-auto">
        <LogoutButton />
      </div>
    </div>
  );
}
