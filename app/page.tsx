import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Cpu, MonitorCheck, Users, BarChart3, Code2, Terminal } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";
import { getProjects } from "@/lib/projects";

export default function Home() {
  // Ambil 3 artikel terbaru
  const latestPosts = getBlogPosts()
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 3);

  // Ambil 2 project terbaru untuk showcase
  const featuredProjects = getProjects()
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto max-w-5xl px-4 py-24 md:py-32 flex flex-col items-start gap-6">
        <Badge variant="outline" className="px-4 py-1 border-zinc-300 text-zinc-600">
          <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
          Available for Consulting & Strategic Roles
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 max-w-4xl">
          Architecting Systems, <br className="hidden md:block" />
          <span className="text-zinc-500">Leading Digital Transformation.</span>
        </h1>

        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">Icho Ishamashi. Engineering Leader dengan 10+ tahun pengalaman. Spesialisasi dalam manajemen tim teknis, perancangan arsitektur sistem, dan strategi efisiensi bisnis.</p>

        <div className="flex gap-4 mt-4">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/about">
              Review Experience <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link href="/projects">See Case Studies</Link>
          </Button>
          <Button asChild size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700">
            <a href="https://calendly.com/icho-ishamashi/consultation" target="_blank">
              Book Strategic Call
            </a>
          </Button>
        </div>
      </section>

      {/* --- TRUSTED BY / EXPERIENCE STRIP --- */}
      <section className="border-y border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest mb-6">Trusted by companies & teams across borders</p>

          {/* Logo/Nama Perusahaan - Pake Font Bold & Grayscale biar pro */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Ganti text ini dengan SVG Logo kalau ada, tapi Text Font Bold aja udah cukup berwibawa */}
            <span className="text-xl font-bold text-zinc-600 dark:text-zinc-400">ElKabron Bali</span>
            <span className="text-xl font-bold text-zinc-600 dark:text-zinc-400">FansFirst.ca</span>
            <span className="text-xl font-bold text-zinc-600 dark:text-zinc-400">Lintas Media Danawa</span>
            <span className="text-xl font-bold text-zinc-600 dark:text-zinc-400">Cognitiv Media</span>
            <span className="text-xl font-bold text-zinc-600 dark:text-zinc-400">Techne.ID</span>
          </div>
        </div>
      </section>

      {/* --- STRATEGIC FOCUS SECTION (Replacement) --- */}
      <section className="container mx-auto max-w-5xl px-4 py-24 border-b border-zinc-100 dark:border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Bagian Kiri: The Hook */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Beyond the Code.</h2>
            <p className="text-zinc-500 leading-relaxed">
              Software engineering bukan sekadar menulis sintaks. Ini tentang menerjemahkan ambisi bisnis menjadi sistem yang <i>resilient</i> dan tim yang <i>high-performing</i>.
            </p>
          </div>

          {/* Bagian Kanan: The Pillars (Softsell) */}
          <div className="md:col-span-8 space-y-8">
            {/* Pillar 1 */}
            <div className="group">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-blue-600 transition-colors mr-3"></span>
                Strategic Architecture
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed pl-5 border-l border-zinc-200 dark:border-zinc-800 ml-1">Menghapus gap antara kebutuhan bisnis dan eksekusi teknis. Saya membantu merancang sistem yang tidak hanya hidup hari ini, tapi siap untuk skala 10x lipat di masa depan tanpa mengorbankan efisiensi biaya.</p>
            </div>

            {/* Pillar 2 */}
            <div className="group">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-purple-600 transition-colors mr-3"></span>
                Engineering Culture
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed pl-5 border-l border-zinc-200 dark:border-zinc-800 ml-1">Teknologi hanyalah alat, manusia adalah kuncinya. Saya membangun standar development (SOP), mentoring, dan alur kerja yang mengubah tim teknis dari sekadar "tukang coding" menjadi problem solver yang proaktif.</p>
            </div>

            {/* Pillar 3 */}
            <div className="group">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-green-600 transition-colors mr-3"></span>
                Operational Efficiency
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed pl-5 border-l border-zinc-200 dark:border-zinc-800 ml-1">
                Mengidentifikasi <i>bottleneck</i> dalam sistem legacy maupun cloud infrastructure. Fokus pada optimasi performa dan pengurangan <i>technical debt</i> yang seringkali menghambat laju inovasi perusahaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-20 border-y border-zinc-100 dark:border-zinc-800">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Selected Projects</h2>
              <p className="text-zinc-500">Kombinasi antara Software & Hardware Engineering.</p>
            </div>
            <Link href="/projects" className="text-sm font-medium hover:underline hidden md:block">
              View all projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project.metadata.slug} href={`/projects/${project.metadata.slug}`} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Cpu className="w-8 h-8 text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 p-1.5 rounded-lg" />
                      <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-black transition-colors -rotate-45 group-hover:rotate-0" />
                    </div>
                    <CardTitle className="text-xl">{project.metadata.title}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">{project.metadata.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.metadata.techstack?.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/projects" className="text-sm font-medium hover:underline">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* --- LATEST WRITING --- */}
      <section className="container mx-auto max-w-5xl px-4 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-2">Latest Thoughts</h2>
            <p className="text-zinc-500">Tulisan seputar Engineering, Logika, dan Bisnis.</p>
          </div>
          <Link href="/blog" className="text-sm font-medium hover:underline hidden md:block">
            Read all posts →
          </Link>
        </div>

        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {latestPosts.map((post) => (
            <Link key={post.metadata.slug} href={`/blog/${post.metadata.slug}`} className="group py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 -mx-4 px-4 rounded-xl transition-colors">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-zinc-400 mb-1">{post.metadata.publishedAt}</span>
                <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{post.metadata.title}</h3>
                <p className="text-zinc-500 text-sm max-w-xl line-clamp-1">{post.metadata.summary}</p>
              </div>
              <div className="flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- REPLACEMENT: PHILOSOPHY SECTION (No Hard CTA) --- */}
      <section className="container mx-auto max-w-5xl px-4 py-24">
        <div className="border-t border-zinc-200 dark:border-zinc-800 mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Header */}
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-4">Core Philosophy</h2>
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
              Code is a liability.
              <br />
              Value is the asset.
            </p>
          </div>

          {/* The Principles */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Radical Simplicity</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">Kompleksitas adalah musuh dari skalabilitas. Saya menolak over-engineering. Sistem terbaik adalah sistem yang paling sederhana untuk memecahkan masalah yang ada.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Data over Intuition</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">(Epistemological approach). Kita tidak bisa memperbaiki apa yang tidak bisa kita ukur. Keputusan teknis harus didasarkan pada metrik nyata, bukan asumsi atau tren semata.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Business Aligned</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">Teknologi tidak hidup di ruang hampa. Setiap baris kode dan arsitektur server harus memiliki justifikasi bisnis yang jelas (ROI) dan dampak langsung ke operasional.</p>
            </div>

            {/* Subtle Connection (Gak maksa) */}
            <div className="flex flex-col justify-end">
              <p className="text-sm text-zinc-400 italic">
                "Want to discuss these principles?" <br />
                <a href="mailto:icho.ishamashi@gmail.com" className="text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 hover:decoration-blue-500 underline-offset-4 transition-all">
                  Drop me a message.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
