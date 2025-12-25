import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Writing - Icho Ishamashi",
  description: "Thoughts on software engineering, business strategy, and epistemology.",
};

export default function BlogPage() {
  // Ambil semua artikel & urutkan dari terbaru
  const allBlogs = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className="container mx-auto max-w-4xl py-24 px-4">
      {/* HEADER: Editorial Style */}
      <header className="mb-20 border-b border-zinc-100 dark:border-zinc-800 pb-12">
        <h1 className="text-5xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-zinc-50">Writing.</h1>
        <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl">Eksplorasi tentang arsitektur sistem, strategi tim, dan irisan antara logika kode dengan kebutuhan bisnis.</p>
      </header>

      {/* ARTICLE LIST */}
      <div className="flex flex-col">
        {allBlogs.map((post) => (
          <Link key={post.metadata.slug} href={`/blog/${post.metadata.slug}`} className="group py-10 border-b border-zinc-100 dark:border-zinc-800 first:pt-0">
            <article className="flex flex-col md:flex-row gap-6 md:gap-12 items-baseline">
              {/* Tanggal (Monospace biar kerasa teknis) */}
              <div className="w-32 shrink-0">
                <span className="text-sm font-mono text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">{post.metadata.publishedAt}</span>
              </div>

              {/* Konten Utama */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{post.metadata.title}</h2>
                <p className="text-zinc-500 leading-relaxed mb-4">{post.metadata.summary}</p>

                <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Read Essay <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </article>
          </Link>
        ))}

        {allBlogs.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-zinc-400">Belum ada artikel yang dipublikasikan.</p>
          </div>
        )}
      </div>
    </section>
  );
}
