type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  status?: 'live' | 'in-progress';
};

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  status = 'live',
}: ProjectCardProps) {
  return (
    <div className="border border-line rounded-lg p-5 flex flex-col gap-4 bg-canvas">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-ink leading-snug">{title}</h3>
        {status === 'in-progress' && (
          <span className="shrink-0 text-xs text-ink-2 border border-line rounded-full px-2 py-0.5">
            In progress
          </span>
        )}
      </div>

      <p className="text-sm text-ink-2 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map(tag => (
          <span
            key={tag}
            className="text-xs text-ink-2 bg-surface rounded-md px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-ink-2 hover:text-ink transition-colors flex items-center gap-1 mt-auto"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      )}
    </div>
  );
}
