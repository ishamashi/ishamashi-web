import Link from "next/link";
import { getProjects } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Rocket, Building2, Globe, Cpu } from "lucide-react";

export const metadata = {
  title: "Projects - Icho Ishamashi",
  description: "A curated list of my engineering ventures and professional work.",
};

// Helper untuk nampilin icon berdasarkan kategori
const getCategoryIcon = (tags: string[] = []) => {
  if (tags.includes("Ventures")) return <Rocket className="w-4 h-4 text-orange-500" />;
  if (tags.includes("Enterprise")) return <Building2 className="w-4 h-4 text-blue-500" />;
  if (tags.includes("Remote")) return <Globe className="w-4 h-4 text-green-500" />;
  if (tags.includes("Hardware & AI")) return <Cpu className="w-4 h-4 text-purple-500" />;
  return <Building2 className="w-4 h-4 text-zinc-500" />;
};

export default function ProjectsPage() {
  const allProjects = getProjects().sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // --- STRATEGI PENALARAN: GROUPING ---

  // 1. Signature Ventures: Proyek di mana lu adalah Founder/Innovator
  const ventures = allProjects.filter((p) => p.metadata.tags?.includes("Ventures"));

  // 2. High-Impact Work: Enterprise Systems & Digital Ecosystems
  const professionalWork = allProjects.filter((p) => !p.metadata.tags?.includes("Ventures") && !p.metadata.tags?.includes("Legacy"));

  // 3. The Archive: Proyek Legacy/Awal Karir
  const archive = allProjects.filter((p) => p.metadata.tags?.includes("Legacy"));

  return (
    <section className="container mx-auto max-w-6xl py-24 px-4">
      {/* HEADER: Editorial Style */}
      <header className="mb-20 max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-zinc-50">Selected Works</h1>
        {/* REVISI: English Description */}
        <p className="text-xl text-zinc-500 leading-relaxed">A collection of strategic initiatives and engineering systems crafted over a decade. From founding educational startups to driving digital transformation in enterprise operations.</p>
      </header>

      {/* --- SECTION 1: SIGNATURE VENTURES (Hero Cards) --- */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <Rocket className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
          <h2 className="text-2xl font-bold tracking-tight">Signature Ventures</h2>
        </div>

        {/* Layout: Grid Besar (2 Kolom) biar Impact-nya kerasa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ventures.map((project) => (
            <Link key={project.metadata.slug} href={`/projects/${project.metadata.slug}`} className="group">
              <Card className="h-full bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 overflow-hidden relative">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2 mb-3">
                      {project.metadata.tags?.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white dark:bg-zinc-800 font-normal text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4 decoration-zinc-400">{project.metadata.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-500 mb-6 leading-relaxed">{project.metadata.summary}</p>

                  {/* Impact Highlights */}
                  <div className="space-y-2 border-t border-zinc-200 dark:border-zinc-800 pt-4 mt-auto">
                    {project.metadata.impact?.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        <span className="mr-2 text-green-500">●</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* --- SECTION 2: PROFESSIONAL CASE STUDIES (Dense Grid) --- */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
          <h2 className="text-2xl font-bold tracking-tight">Engineering Track Record</h2>
        </div>

        {/* Layout: Grid 3 Kolom (Lebih padat) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalWork.map((project) => (
            <Link key={project.metadata.slug} href={`/projects/${project.metadata.slug}`} className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <CardHeader className="p-6 pb-3">
                  <div className="flex justify-between items-start mb-2">
                    {getCategoryIcon(project.metadata.tags)}
                    <span className="text-xs font-mono text-zinc-400">{new Date(project.metadata.publishedAt).getFullYear()}</span>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors line-clamp-1">{project.metadata.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-zinc-500 text-sm line-clamp-2 mb-4 h-10">{project.metadata.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.metadata.techstack?.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0 h-5 text-zinc-500">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* --- SECTION 3: THE ARCHIVE (Minimalist List) --- */}
      {archive.length > 0 && (
        <div className="opacity-80">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-lg font-bold tracking-tight text-zinc-400 uppercase">Early Works & Legacy</h2>
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {archive.map((project) => (
              <Link key={project.metadata.slug} href={`/projects/${project.metadata.slug}`} className="block group">
                <div className="p-4 rounded-lg border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                  <h3 className="font-semibold text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white">{project.metadata.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{new Date(project.metadata.publishedAt).getFullYear()} • Legacy</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
