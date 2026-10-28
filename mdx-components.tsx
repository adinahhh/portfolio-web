import type { MDXComponents } from 'mdx/types';

// Styles for elements rendered from blog post markdown.
const components = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-semibold tracking-tight text-ink mt-10 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-lg font-semibold tracking-tight text-ink mt-10 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold text-ink mt-8 mb-2">{children}</h3>
  ),
  p: ({ children }) => <p className="text-sm text-ink-2 leading-relaxed my-4">{children}</p>,
  a: ({ href, children }) => {
    const external = href?.startsWith('http');
    return (
      <a
        href={href}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        className="text-ink underline underline-offset-2 hover:text-ink-2 transition-colors"
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="list-disc pl-5 my-4 flex flex-col gap-1.5 text-sm text-ink-2 leading-relaxed">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-5 my-4 flex flex-col gap-1.5 text-sm text-ink-2 leading-relaxed">{children}</ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-olive pl-4 my-6 italic text-ink-2">{children}</blockquote>
  ),
  code: ({ children }) => (
    <code className="font-mono text-[0.8125rem] bg-surface rounded px-1.5 py-0.5 text-ink">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="font-mono text-[0.8125rem] bg-nav text-nav-ink rounded-lg p-4 my-6 overflow-x-auto [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-nav-ink">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-line my-10" />,
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt ?? ''} className="rounded-lg border border-line my-6 w-full h-auto" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm text-ink-2 border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="text-left font-semibold text-ink border-b border-line px-3 py-2">{children}</th>
  ),
  td: ({ children }) => <td className="border-b border-line px-3 py-2">{children}</td>,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
