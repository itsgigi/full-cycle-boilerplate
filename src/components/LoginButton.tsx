"use client";

import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import githubLogo from "@/assets/GitHub-Logo.wine.svg";

export default function LoginButton() {
  const login = async () => {
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error("Errore login:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Image src={githubLogo} alt="GitHub" width={150} loading="eager" />
      <button
        onClick={login}
        className="cursor-pointer rounded-full bg-green-800 p-2 px-4 text-white transition-all duration-150 hover:translate-y-0.5 hover:bg-green-700 hover:text-white active:scale-95"
      >
        Accedi a GitHub
      </button>
    </div>
  );
}
