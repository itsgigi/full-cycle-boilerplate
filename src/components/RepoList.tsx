import { getRepositoriesWithCaseStudies } from "@/lib/repositories";

interface Repo {
  id: number | string;
  name: string;
  description: string | null;
  stars?: number;
  language?: string | null;
  url?: string | null;
}

export default async function RepoList() {
  const repos: Repo[] = await getRepositoriesWithCaseStudies();

  if (repos.length === 0) {
    return <p>Nessuna repository trovata.</p>;
  }

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

          {repo.language && (
            <span className="mt-2 inline-block rounded-full bg-gray-300 px-2 py-0.5 text-sm text-black">
              {repo.language}
            </span>
          )}

          {repo.url && (
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block font-bold text-black hover:underline"
            >
              Apri su GitHub
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
