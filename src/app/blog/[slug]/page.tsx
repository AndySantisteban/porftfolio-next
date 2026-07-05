import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";
import { Markdown } from "@/components/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", publishedTime: post.date },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = getAllPosts().filter((p) => p.slug !== slug);

  return (
    <div className="mx-auto max-w-3xl">
      <nav aria-label="Migas de pan" className="mb-6 text-sm text-muted">
        <Link href="/blog" className="hover:text-accent">
          ← Blog
        </Link>
      </nav>

      <article>
        <header className="mb-2">
          <time dateTime={post.date} className="text-sm text-muted">
            {new Date(post.date + "T00:00:00").toLocaleDateString("es-PE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>
        <Markdown>{post.content}</Markdown>
      </article>

      {others.length > 0 && (
        <aside aria-labelledby="more-heading" className="mt-14 border-t border-border pt-8">
          <h2 id="more-heading" className="mb-4 text-lg font-bold tracking-tight">
            Otros artículos
          </h2>
          <ul className="flex flex-col gap-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="text-sm text-accent hover:underline">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}
