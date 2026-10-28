import type { Metadata } from 'next';
import Link from 'next/link';
import { formatDate, getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog — Whitney Zilton',
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10">
      <section className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-ink">Blog</h1>
        <p className="text-sm text-ink-2">
          Writing on backend engineering, things I&apos;m learning, and whatever else comes to mind.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-sm text-ink-3">No posts yet.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {posts.map(post => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block border border-line rounded-lg p-5 bg-canvas hover:border-ink-3 transition-colors"
              >
                <time dateTime={post.date} className="text-xs text-ink-3">
                  {formatDate(post.date)}
                </time>
                <h2 className="text-sm font-semibold text-ink leading-snug mt-1">{post.title}</h2>
                {post.subtitle && (
                  <p className="text-sm text-ink-2 leading-snug mt-0.5">{post.subtitle}</p>
                )}
                <p className="text-sm text-ink-2 leading-relaxed mt-2">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
