import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Briefcase, MapPin, Download, Languages, Mail, Building2, Rocket, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About - Icho Ishamashi",
  description: "Engineering Lead & Technical Consultant background.",
};

export default function AboutPage() {
  return (
    <section className="container mx-auto max-w-5xl py-20 px-4">
      {/* --- PART 1: STRATEGIC HEADER & VENTURES (High Level) --- */}
      <div className="mb-24">
        {/* Header Intro */}
        <header className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Icho Ishamashi.</h1>
          <h2 className="text-2xl font-medium text-zinc-800 dark:text-zinc-200 mb-6">Engineering Lead & Technical Consultant</h2>
          <div className="space-y-4 text-lg text-zinc-500 leading-relaxed">
            <p>
              Setelah satu dekade berkecimpung di dalam kode, fokus saya kini bergeser:
              <strong className="text-zinc-900 dark:text-zinc-100"> dari membangun fitur menjadi membangun ekosistem.</strong>
            </p>
            <p>
              Saya membantu perusahaan menerjemahkan kebutuhan bisnis menjadi arsitektur teknis yang <i>scalable</i>. Saya tidak lagi sekadar menulis baris kode, tapi memimpin tim teknis, merancang strategi digital, dan memastikan teknologi menjadi aset kompetitif.
            </p>
          </div>
        </header>

        {/* Ventures & Initiatives Grid */}
        <div>
          <h3 className="flex items-center text-xl font-bold mb-6">
            <Rocket className="w-5 h-5 mr-2" /> Ventures & Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Venture 1 */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-zinc-300 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <Badge variant="outline">2024 - Present</Badge>
              </div>
              <h4 className="font-bold text-lg mb-1">AdMeasurement Venture</h4>
              <p className="text-xs text-zinc-500 mb-3 uppercase tracking-wider font-semibold">Founder & Innovator</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Mengembangkan solusi AdTech berbasis AI dan IoT untuk mengukur efektivitas iklan OOH (Out-of-Home) menggunakan analisis lalu lintas real-time.</p>
            </div>

            {/* Venture 2 */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-zinc-300 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <Badge variant="outline">2020 - Present</Badge>
              </div>
              <h4 className="font-bold text-lg mb-1">Techne.ID</h4>
              <p className="text-xs text-zinc-500 mb-3 uppercase tracking-wider font-semibold">Founder</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Platform edukasi teknologi yang fokus mencetak talenta engineering siap kerja. Membangun kurikulum berbasis industri dan komunitas developer.</p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="mb-20" />

      {/* --- PART 2: THE SPLIT LAYOUT (Execution & Details) --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* --- LEFT COLUMN: STICKY SUMMARY (Executive Profile) --- */}
        <div className="md:col-span-4 relative">
          <div className="sticky top-24 space-y-8">
            <div className="space-y-2">
              <h3 className="font-bold text-xl">Quick Info</h3>
              <p className="text-sm text-zinc-500">Professional overview & contacts.</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <Button asChild className="w-full justify-start" size="lg">
                <a href="mailto:icho.ishamashi@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            <Separator />

            {/* Meta Details */}
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                <MapPin className="w-4 h-4 mr-3 text-zinc-400" />
                Bali, Indonesia (GMT+8)
              </div>
              <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                <Languages className="w-4 h-4 mr-3 text-zinc-400" />
                English (Pro), Indonesia (Native)
              </div>
            </div>

            {/* Skills / Competencies */}
            <div>
              <h3 className="font-semibold mb-4 text-zinc-900 dark:text-zinc-100 text-sm uppercase tracking-wide">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {["Strategic Planning", "Team Leadership", "System Architecture", "Cloud Infrastructure", "Cost Efficiency", "Python", "Next.js"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: FULL CHRONOLOGICAL EXPERIENCE --- */}
        <div className="md:col-span-8">
          <div className="mb-10 flex items-center">
            <Briefcase className="w-5 h-5 mr-3 text-zinc-900 dark:text-zinc-100" />
            <h3 className="text-2xl font-bold">Professional Track Record</h3>
          </div>

          {/* Timeline Wrapper */}
          <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-8 space-y-16 relative">
            {/* Job 1: ElKabron */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full bg-white border-4 border-blue-600 dark:border-blue-500 shadow-sm" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-50">IT Specialist & Software Engineer</h4>
                <span className="text-sm font-mono text-zinc-400 whitespace-nowrap bg-zinc-50 dark:bg-zinc-900 px-2 py-1 rounded">Jun 2024 — Present</span>
              </div>
              <div className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-4">ElKabron Bali</div>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">Bertanggung jawab penuh atas infrastruktur IT dan transformasi digital. Fokus pada stabilitas operasional high-traffic venue.</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm list-disc ml-4 marker:text-zinc-300">
                <li>Merancang arsitektur IT berbasis Cloud yang meningkatkan keamanan dan kolaborasi antar departemen.</li>
                <li>Memimpin digitalisasi workflow perusahaan, menggantikan proses manual dengan otomatisasi.</li>
                <li>Stack: GCP, Python, Next.js, Network Infrastructure.</li>
              </ul>
            </div>

            {/* Job 2: FansFirst */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Lead Engineer</h4>
                <span className="text-sm font-mono text-zinc-400 whitespace-nowrap">Dec 2023 — May 2024</span>
              </div>
              <div className="text-base font-medium text-zinc-500 mb-4">FansFirst Tickets Inc (Canada - Remote)</div>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">Memimpin tim teknis remote untuk marketplace tiket sekunder di Kanada.</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm list-disc ml-4 marker:text-zinc-300">
                <li>Melakukan overhaul arsitektur backend untuk skalabilitas dan mengurangi technical debt.</li>
                <li>Mengembangkan modul reporting admin yang meningkatkan efisiensi operasional back-office.</li>
                <li>Stack: JavaScript, Python, NoSQL, AWS.</li>
              </ul>
            </div>

            {/* Job 3: LMD */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Lead Engineer</h4>
                <span className="text-sm font-mono text-zinc-400 whitespace-nowrap">Jul 2023 — Jan 2024</span>
              </div>
              <div className="text-base font-medium text-zinc-500 mb-4">PT Lintas Media Danawa</div>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">Mengelola 2 tim engineering (total 7 programmer) untuk delivery proyek aplikasi skala besar.</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm list-disc ml-4 marker:text-zinc-300">
                <li>Arsitek utama dalam refactoring sistem backend legacy menjadi modern application flow.</li>
                <li>Membangun engineering culture melalui mentorship intensif.</li>
                <li>Stack: PHP, PostgreSQL, Nginx, GCP, Linux.</li>
              </ul>
            </div>

            {/* Job 4: Cognitiv Media */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Lead Engineer</h4>
                <span className="text-sm font-mono text-zinc-400 whitespace-nowrap">Jan 2022 — Jul 2023</span>
              </div>
              <div className="text-base font-medium text-zinc-500 mb-4">Cognitiv Media</div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">Memimpin pengembangan solusi media berbasis teknologi, memastikan integrasi sistem yang mulus dan performa tinggi untuk kebutuhan klien.</p>
            </div>

            {/* Job 5: Prisma */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Senior Software Engineer</h4>
                <span className="text-sm font-mono text-zinc-400 whitespace-nowrap">Aug 2020 — Mar 2022</span>
              </div>
              <div className="text-base font-medium text-zinc-500 mb-4">PT Prisma Harapan</div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">Mengembangkan dan memelihara platform Prisma Ads. Fokus pada optimasi kode dan fitur baru.</p>
            </div>

            {/* Job 6: Playy */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Fullstack Developer (Remote)</h4>
                <span className="text-sm font-mono text-zinc-400 whitespace-nowrap">Nov 2019 — Aug 2020</span>
              </div>
              <div className="text-base font-medium text-zinc-500 mb-4">Playy.World Pte.Ltd (Singapore)</div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">Bekerja secara remote untuk startup Singapura dalam pengembangan fitur fullstack.</p>
            </div>

            {/* Job 7: Konekthing */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Fullstack Developer</h4>
                <span className="text-sm font-mono text-zinc-400 whitespace-nowrap">Apr 2019 — Apr 2020</span>
              </div>
              <div className="text-base font-medium text-zinc-500 mb-4">PT Konekthing Benda Pintar</div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">Awal karir di dunia IoT. Mengembangkan dashboard untuk monitoring perangkat pintar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
