import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Startup Idea Generator",
  description: "Generate and explore fun, creative startup ideas with style.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground min-h-screen`}
      >
        <header className="w-full border-b border-border bg-white dark:bg-zinc-900 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Startup Ideas
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/" className="hover:underline">
                Generator
              </Link>
              <Link href="/explore" className="hover:underline">
                Explore
              </Link>
              <Link href="/favorites" className="hover:underline">
                Favorites
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-10 border-t border-border py-6 text-center text-sm text-muted-foreground">
          Built with 💡 by Ben Havenga
        </footer>
      </body>
    </html>
  );
}
