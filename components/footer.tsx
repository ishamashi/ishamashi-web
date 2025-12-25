export function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 mt-20">
      <div className="container mx-auto max-w-2xl px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
        <div>&copy; {new Date().getFullYear()} Icho Ishamashi. All rights reserved.</div>
        <div className="flex gap-4 font-medium">
          <a href="https://github.com/ishamashi" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ishamashi" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:icho.ishamashi@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
