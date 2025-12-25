import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  return (
    <nav className="border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto max-w-2xl px-4 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="font-bold text-lg tracking-tight hover:text-blue-600 transition-colors">
          ishamashi<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
            About
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
