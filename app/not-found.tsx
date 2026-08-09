import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">

        <h1 className="text-6xl font-bold text-slate-900">
          404
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800"
        >
          Back Home
        </Link>

      </div>
    </main>
  );
}