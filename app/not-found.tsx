import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 flex flex-col gap-6">
      <p className="font-mono text-sm text-ink-3">404</p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink">Page not found.</h1>
      <p className="text-sm text-ink-2 max-w-sm">
        This page doesn&apos;t exist. You might find what you&apos;re looking for below.
      </p>
      <div className="flex gap-2 flex-wrap">
        <Link href="/" className="text-sm text-ink border border-line rounded-md px-4 py-2 hover:bg-surface transition-colors">
          Home
        </Link>
        <Link href="/projects" className="text-sm text-ink border border-line rounded-md px-4 py-2 hover:bg-surface transition-colors">
          Projects
        </Link>
        <Link href="/about" className="text-sm text-ink border border-line rounded-md px-4 py-2 hover:bg-surface transition-colors">
          About
        </Link>
      </div>
    </div>
  );
}
