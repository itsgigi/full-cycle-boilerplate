"use client";

import { useEffect, useState } from "react";
import { getRepositoriesWithCaseStudies } from "@/lib/repositories";

interface Repo {
  id: number | string;
  name: string;
  description: string | null;
  stars?: number;
  language?: string | null;
  url?: string | null;
}

export default function RepoList() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRepositoriesWithCaseStudies()
      .then(setRepos)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;
  if (repos.length === 0) return <p>Nessuna repository trovata.</p>;

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {repos.map((repo) => (
        <li key={repo.id} className="rounded-xl bg-white p-5">
          <div className="flex justify-between text-black">
            <h2 className="text-lg font-semibold">{repo.name}</h2>
            <span className="text-sm">
              {repo.stars ?? 0} {"⭐".repeat(Math.min(repo.stars ?? 0, 5))}
            </span>
          </div>
          <p className="text-sm text-gray-600">{repo.description}</p>

          <div className="mt-2 text-sm text-black">
            {repo.language && (
              <span className="rounded-full bg-gray-300 px-2 py-0.5">{repo.language}</span>
            )}
          </div>

          {repo.url && (
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bold mt-4 inline-block text-black hover:underline"
            >
              Apri su GitHub
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
