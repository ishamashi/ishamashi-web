import { getBlogPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code"; // <--- Import ini

// Komponen kustom untuk MDX (biar lu bisa styling elemen spesifik nanti)
const components = {
  h1: (props: any) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4" />,
  h2: (props: any) => <h2 {...props} className="text-2xl font-semibold mt-8 mb-4" />,
  p: (props: any) => <p {...props} className="leading-7 [&:not(:first-child)]:mt-6" />,
  // Lu bisa tambah komponen React lain di sini (chart, alert, dll)
};

const prettyCodeOptions = {
  theme: "github-dark", // Tema warna (bisa ganti: 'one-dark-pro', 'dracula', dll)
  keepBackground: true,
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.metadata.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="container mx-auto max-w-2xl py-20 px-4">
      {/* Tombol Back */}
      <a href="/" className="text-sm text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 mb-8 block transition-colors">
        ← Back to home
      </a>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tighter mb-2">{post.metadata.title}</h1>
        <div className="flex justify-between items-center text-sm text-zinc-500 mt-2">
          <p>{post.metadata.publishedAt}</p>
        </div>
      </div>

      {/* Artikel Content */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              // @ts-ignore - kadang typescript rewel sama tipe plugin, ignore aja aman
              rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
            },
          }}
        />
      </article>
    </section>
  );
}
