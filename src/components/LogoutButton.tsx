"use client";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <button
      onClick={logout}
      className="cursor-pointer rounded-full border-2 border-red-800 px-3 py-1 text-red-800 transition-all duration-150 hover:translate-y-0.5 hover:bg-red-800 hover:text-white active:scale-95"
    >
      Esci
    </button>
  );
}
