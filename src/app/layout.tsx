import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import UserMenu from "@/components/UserMenu";
import "./globals.css";

// TODO (sprint Pubblicazione): completa i metadata con Open Graph, URL canonico e template del titolo.
// Docs: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.locale} className="h-full antialiased">
      {/* Sprint 1, ticket «Layout»: aggiungi header e footer come componenti in src/components */}
      <body>
        <header className="mx-auto flex w-full max-w-3xl justify-end px-6 py-4">
          <UserMenu />
        </header>
        {children}
      </body>
    </html>
  );
}
