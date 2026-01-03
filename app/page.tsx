import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Cpu } from "lucide-react";
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
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto max-w-5xl px-4 py-20 md:py-32 flex flex-col items-start gap-6">
        {/* Badge: Tetap pertahankan fix mobile */}
        <Badge variant="outline" className="px-3 py-1.5 border-zinc-300 text-zinc-600 h-auto whitespace-normal text-left flex items-start max-w-full">
          <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 mt-1.5 animate-pulse shrink-0"></span>
          <span className="leading-snug">Available for Consulting & Strategic Roles</span>
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 max-w-4xl leading-tight">
          Architecting Systems, <br className="hidden md:block" />
          <span className="text-zinc-500">Leading Digital Transformation.</span>
        </h1>

        {/* REVISI: English Profile Description */}
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed">Icho Ishamashi. Engineering Leader with over a decade of experience. Specializing in technical team management, scalable system architecture, and business efficiency strategy.</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Button asChild size="lg" className="rounded-full px-8 w-full sm:w-auto">
            <Link href="/about">
              Review Experience <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 w-full sm:w-auto">
            <Link href="/projects">See Case Studies</Link>
          </Button>
          <Button asChild size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            <a href="https://calendly.com/icho-ishamashi/consultation" target="_blank">
              Book Strategic Call
            </a>
          </Button>
        </div>
      </section>

      {/* --- TRUSTED BY STRIP --- */}
      <section className="border-y border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="container mx-auto max-w-5xl px-4 py-10">
          <p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">Trusted by companies & teams across borders</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-center">
            <span className="text-lg md:text-xl font-bold text-zinc-600 dark:text-zinc-400">ElKabron Bali</span>
            <span className="text-lg md:text-xl font-bold text-zinc-600 dark:text-zinc-400">FansFirst.ca</span>
            <span className="text-lg md:text-xl font-bold text-zinc-600 dark:text-zinc-400">Lintas Media Danawa</span>
            <span className="text-lg md:text-xl font-bold text-zinc-600 dark:text-zinc-400">Cognitiv Media</span>
            <span className="text-lg md:text-xl font-bold text-zinc-600 dark:text-zinc-400">Techne.ID</span>
          </div>
        </div>
      </section>

      {/* --- STRATEGIC FOCUS SECTION --- */}
      <section className="container mx-auto max-w-5xl px-4 py-20 border-b border-zinc-100 dark:border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Hook */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Beyond the Code.</h2>
            {/* REVISI: English Hook */}
            <p className="text-zinc-500 leading-relaxed text-sm md:text-base">Software engineering is not just about writing syntax. It is about translating business ambitions into resilient systems and high-performing teams.</p>
          </div>

          {/* Pillars */}
          <div className="md:col-span-8 space-y-8">
            <div className="group">
              <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-blue-600 transition-colors mr-3 shrink-0"></span>
                Strategic Architecture
              </h3>
              {/* REVISI: English Description */}
              <p className="text-zinc-500 text-sm leading-relaxed pl-5 border-l border-zinc-200 dark:border-zinc-800 ml-1">Bridging the gap between business needs and technical execution. I help design systems that don't just survive today, but are ready to scale 10x in the future.</p>
            </div>

            <div className="group">
              <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-purple-600 transition-colors mr-3 shrink-0"></span>
                Engineering Culture
              </h3>
              {/* REVISI: English Description */}
              <p className="text-zinc-500 text-sm leading-relaxed pl-5 border-l border-zinc-200 dark:border-zinc-800 ml-1">Technology is just a tool; people are the key. I build development standards (SOPs), mentorship programs, and workflows that transform technical teams from mere "coders" into proactive problem solvers.</p>
            </div>

            <div className="group">
              <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-green-600 transition-colors mr-3 shrink-0"></span>
                Operational Efficiency
              </h3>
              {/* REVISI: English Description */}
              <p className="text-zinc-500 text-sm leading-relaxed pl-5 border-l border-zinc-200 dark:border-zinc-800 ml-1">Identifying bottlenecks in legacy systems or cloud infrastructure. Focusing on performance optimization and reducing technical debt that often hinders innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-20 border-y border-zinc-100 dark:border-zinc-800">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Selected Projects</h2>
              {/* REVISI: English Subtitle */}
              <p className="text-zinc-500">A convergence of Software & Hardware Engineering.</p>
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-2">Latest Thoughts</h2>
            {/* REVISI: English Subtitle */}
            <p className="text-zinc-500">Writings on Engineering, Logic, and Business.</p>
          </div>
          <Link href="/blog" className="text-sm font-medium hover:underline hidden md:block">
            Read all posts →
          </Link>
        </div>

        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {latestPosts.map((post) => (
            <Link key={post.metadata.slug} href={`/blog/${post.metadata.slug}`} className="group py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:hover:bg-zinc-50 md:dark:hover:bg-zinc-900/50 md:-mx-4 md:px-4 rounded-xl transition-colors">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-zinc-400 mb-1">{post.metadata.publishedAt}</span>
                <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{post.metadata.title}</h3>
                <p className="text-zinc-500 text-sm max-w-xl line-clamp-1">{post.metadata.summary}</p>
              </div>
              <div className="flex items-center text-sm font-medium text-blue-600 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/blog" className="text-sm font-medium hover:underline">
            Read all posts →
          </Link>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
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
              {/* REVISI: English Description */}
              <p className="text-zinc-500 leading-relaxed text-sm">Complexity is the enemy of scalability. I reject over-engineering. The best system is the simplest one to solve the problem at hand.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Data over Intuition</h3>
              {/* REVISI: English Description */}
              <p className="text-zinc-500 leading-relaxed text-sm">(Epistemological approach). We cannot fix what we cannot measure. Technical decisions must be based on tangible metrics, not assumptions or trends.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Business Aligned</h3>
              {/* REVISI: English Description */}
              <p className="text-zinc-500 leading-relaxed text-sm">Technology does not exist in a vacuum. Every line of code and server architecture must have a clear business justification (ROI) and direct operational impact.</p>
            </div>

            {/* Connection */}
            <div className="flex flex-col justify-end mt-4 sm:mt-0">
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
