import { getProjects } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react"; // Kita butuh install icon pack ini
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: "github-dark",
  keepBackground: true,
};

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.metadata.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjects().find((p) => p.metadata.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="container mx-auto max-w-3xl py-20 px-4">
      {/* Tombol Back */}
      <a href="/projects" className="inline-flex items-center text-sm text-zinc-500 hover:text-black dark:hover:text-white transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Projects
      </a>

      {/* Header Project */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{project.metadata.title}</h1>

        <p className="text-xl text-zinc-500 leading-relaxed mb-6">{project.metadata.summary}</p>

        {/* Tech Stack & Links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-zinc-100 dark:border-zinc-800 py-6">
          <div className="flex flex-wrap gap-2">
            {project.metadata.techstack?.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm py-1">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            {project.metadata.link && (
              <Button asChild variant="default" size="sm">
                <a href={project.metadata.link} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
            {/* Kalau mau nambah link demo nanti bisa disini */}
          </div>
        </div>
      </header>

      {/* Isi Case Study */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <MDXRemote
          source={project.content}
          options={{
            mdxOptions: {
              // @ts-ignore
              rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
            },
          }}
        />
      </article>
    </section>
  );
}
