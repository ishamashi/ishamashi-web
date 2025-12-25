import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-7xl font-bold text-zinc-200 dark:text-zinc-800">404</h1>
      <h2 className="text-2xl font-bold mt-4">Lost in the Void?</h2>
      <p className="text-zinc-500 mt-2 max-w-md">Halaman yang lu cari gak ada. Mungkin link-nya salah, atau gue udah hapus kodenya karena refactoring.</p>
      <Button asChild className="mt-8">
        <Link href="/">Balik ke Home</Link>
      </Button>
    </div>
  );
}
