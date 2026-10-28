import fs from 'node:fs';
import path from 'node:path';

export type PostMetadata = {
  title: string;
  subtitle?: string;
  date: string; // YYYY-MM-DD
  description: string;
};

export type Post = PostMetadata & { slug: string };

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''));
}

export async function getPost(slug: string) {
  const { default: Content, metadata } = await import(`@/content/blog/${slug}.mdx`);
  return { Content, metadata: metadata as PostMetadata };
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async slug => ({ slug, ...(await getPost(slug)).metadata })),
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
