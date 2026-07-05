import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre desarrollo web, Go, React e inteligencia artificial.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-2xl">
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-3 text-muted">
          Notas sobre desarrollo web, Go, React e inteligencia artificial.
        </p>
      </header>

      <ul className="mt-10 flex flex-col divide-y divide-border">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block py-6">
              <article>
                <time dateTime={post.date} className="text-xs text-muted">
                  {new Date(post.date + "T00:00:00").toLocaleDateString("es-PE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="mt-1 text-lg font-semibold leading-snug tracking-tight group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
