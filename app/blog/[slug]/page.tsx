import type { Metadata } from 'next';
import Link from 'next/link';
import { formatDate, getPost, getPostSlugs } from '@/lib/posts';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map(slug => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getPost(slug);
  return {
    title: `${metadata.title} — Whitney Zilton`,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      publishedTime: metadata.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const { Content, metadata } = await getPost(slug);

  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-xs text-ink-3 hover:text-ink transition-colors">
        ← All posts
      </Link>
      <header className="mt-6 mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-ink">{metadata.title}</h1>
        {metadata.subtitle && (
          <p className="text-base text-ink-2 leading-snug">{metadata.subtitle}</p>
        )}
        <time dateTime={metadata.date} className="text-xs text-ink-3">
          {formatDate(metadata.date)}
        </time>
      </header>
      <Content />
    </article>
  );
}
