"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper biar code link gak berulang
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} onClick={() => setIsOpen(false)} className="text-2xl font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:translate-x-2 transition-all duration-300 block py-2">
      {children}
    </Link>
  );

  return (
    <nav className="border-b border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
        {/* LOGO (Desktop & Mobile Bar) */}
        <Link href="/" className="font-bold text-lg tracking-tight hover:text-blue-600 transition-colors z-50">
          ishamashi<span className="text-blue-600">.</span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">
            Writing
          </Link>
          <div className="pl-4 border-l border-zinc-200 dark:border-zinc-800">
            <ModeToggle />
          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-mr-2">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            {/* SHEET CONTENT: Full Height, Padding Proper */}
            <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col p-8 bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800">
              {/* 1. Header dengan Logo & Tagline */}
              <SheetHeader className="text-left mb-10">
                <SheetTitle>
                  <Link href="/" onClick={() => setIsOpen(false)} className="font-bold text-2xl tracking-tight">
                    ishamashi<span className="text-blue-600">.</span>
                  </Link>
                </SheetTitle>
                <SheetDescription className="text-zinc-400 text-sm font-medium mt-1">Senior Engineering Consultant</SheetDescription>
              </SheetHeader>

              {/* 2. Menu Links (Gede & Rapi) */}
              <div className="flex flex-col gap-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/blog">Writing</NavLink>
              </div>

              {/* 3. Footer Socials (Nempel Bawah) */}
              <div className="mt-auto pt-10 border-t border-zinc-100 dark:border-zinc-800">
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-6 font-bold">Connect</p>

                <div className="space-y-4">
                  {/* Social Item 1 */}
                  <a href="https://linkedin.com/in/ishamashi" target="_blank" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    </div>
                    <span className="font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white">LinkedIn</span>
                  </a>

                  {/* Social Item 2 */}
                  <a href="https://github.com/ichoishamashi" target="_blank" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-800 transition-colors">
                      <Github className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white" />
                    </div>
                    <span className="font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white">GitHub</span>
                  </a>

                  {/* Social Item 3 */}
                  <a href="mailto:icho.ishamashi@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-800 transition-colors">
                      <Mail className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white" />
                    </div>
                    <span className="font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white">Email Me</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
