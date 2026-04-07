import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'portfolio-ssh',
    description:
      'A custom SSH server written in Go that powers a terminal-based portfolio. Users authenticate via a cryptographic challenge-response flow using Ed25519 SSH keys — no passwords or web forms. Features rate limiting, session timeouts, and max concurrent connection enforcement. Hosted on AWS EC2 with Route 53.',
    tags: ['Go', 'SSH', 'Cryptography', 'Ed25519', 'AWS EC2', 'Route 53'],
    githubUrl: 'https://github.com/adinahhh/portfolio-ssh',
    status: 'live' as const,
  },
  {
    title: 'portfolio-tui',
    description:
      'An interactive terminal UI portfolio application built in Python using the Textual framework. Navigate sections — Introduction, Experience, Tech Stack, and Projects — entirely from the keyboard. Markdown-driven content system for easy updates. A developer-focused alternative to a traditional web portfolio.',
    tags: ['Python', 'Textual', 'TUI', 'Markdown'],
    githubUrl: 'https://github.com/adinahhh/portfolio-tui',
    status: 'live' as const,
  },
  {
    title: 'Compiler-Integrated SAST Engine for Go',
    description:
      'A static analysis security testing engine that integrates directly with the Go compiler toolchain to surface security vulnerabilities at compile time. Designed to catch security issues earlier in the development cycle by operating at the compiler level rather than as a standalone linter.',
    tags: ['Go', 'SAST', 'Static Analysis', 'Security', 'Compiler'],
    status: 'in-progress' as const,
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10">
      <section className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-ink">Projects</h1>
        <p className="text-sm text-ink-2">
          A mix of systems programming, developer tooling, and security-focused work.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
