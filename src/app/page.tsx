"use client";

import { useEffect, useState } from "react";
import { startupIdeas, StartupIdea } from "@/data/ideas";
import IdeaCard from "@/components/IdeaCard";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Star, List } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [idea, setIdea] = useState<StartupIdea | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavorites(favs);
      setDark(document.documentElement.classList.contains("dark"));
    }
    generateIdea();
  }, []);

  const generateIdea = () => {
    const random =
      startupIdeas[Math.floor(Math.random() * startupIdeas.length)];
    setIdea(random);
  };

  const toggleFavorite = () => {
    if (!idea) return;
    const exists = favorites.includes(idea.id);
    const updated = exists
      ? favorites.filter((id) => id !== idea.id)
      : [...favorites, idea.id];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const toggleDarkMode = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark", !dark);
  };

  return (
    <main className="min-h-screen px-4 py-10 flex flex-col items-center gap-6 bg-background text-foreground">
      <div className="flex justify-between items-center w-full max-w-2xl">
        <h1 className="text-3xl font-bold">Random Startup Idea</h1>
        <div className="flex items-center gap-3">
          <Sun className="w-4 h-4" />
          <Switch checked={dark} onCheckedChange={toggleDarkMode} />
          <Moon className="w-4 h-4" />
        </div>
      </div>

      {idea && <IdeaCard idea={idea} />}

      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        <Button onClick={generateIdea}>Generate New Idea</Button>
        <Button
          onClick={toggleFavorite}
          variant={favorites.includes(idea?.id || -1) ? "secondary" : "outline"}
        >
          <Star className="w-4 h-4 mr-2" />
          {favorites.includes(idea?.id || -1) ? "Unsave" : "Save Idea"}
        </Button>
        <Link href="/explore">
          <Button variant="ghost">
            <List className="w-4 h-4 mr-2" /> Explore Ideas
          </Button>
        </Link>
        <Link href="/favorites">
          <Button variant="ghost">View Favorites</Button>
        </Link>
      </div>
    </main>
  );
}
