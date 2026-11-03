"use client";

type ErrorPageProps = {
  error: Error;
};

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-24 text-white">
      <h2 className="text-lg font-semibold">Qualcosa è andato storto :(</h2>
      <p className="mt-2 text-sm opacity-70">Errore: {error.message}</p>
    </div>
  );
}
