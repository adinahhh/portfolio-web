import AIChatPanel from '@/components/AIChatPanel';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-16">
      {/* Hero */}
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-ink">
            Whitney Zilton
          </h1>
          <p className="text-base text-ink-2">Backend Software Engineer</p>
        </div>
        <p className="text-sm text-ink-2 leading-relaxed max-w-xl">
          I build distributed systems, event-driven services, and high-traffic APIs. My background is
          in backend and platform engineering, with a growing focus on application security and
          secure SDLC practices.
        </p>
        <div className="flex gap-1 flex-wrap">
          <Link
            href="/projects"
            className="text-sm text-ink border border-line rounded-md px-4 py-2 hover:bg-surface transition-colors"
          >
            View projects
          </Link>
          <Link
            href="/resume"
            className="text-sm text-ink-2 hover:text-ink transition-colors px-4 py-2"
          >
            Resume &rarr;
          </Link>
          <a
            href="https://linkedin.com/in/zilton"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-2 hover:text-ink transition-colors px-4 py-2"
          >
            LinkedIn &rarr;
          </a>
        </div>
      </section>

      {/* AI Chat Panel */}
      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-medium text-ink">Curious about my background?</h2>
          <p className="text-xs text-ink-3">
            Ask the AI below — it knows my experience, projects, and what I&apos;m looking for.
          </p>
        </div>
        <AIChatPanel />
      </section>
    </div>
  );
}
