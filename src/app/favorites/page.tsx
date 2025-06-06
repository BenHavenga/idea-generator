"use client";

import { useEffect, useState } from "react";
import { startupIdeas, StartupIdea } from "@/data/ideas";
import IdeaCard from "@/components/IdeaCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<StartupIdea[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favIds = JSON.parse(localStorage.getItem("favorites") || "[]");
      const favIdeas = startupIdeas.filter((idea) => favIds.includes(idea.id));
      setFavorites(favIdeas);
    }
  }, []);

  return (
    <main className="min-h-screen px-4 py-10 flex flex-col items-center gap-6 bg-background text-foreground">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Your Favorite Ideas</h1>
          <Link href="/">
            <Button variant="outline">Back to Generator</Button>
          </Link>
        </div>
        <div className="mt-6 space-y-6">
          {favorites.length === 0 ? (
            <p className="text-muted-foreground">
              You haven't saved any ideas yet.
            </p>
          ) : (
            favorites.map((idea) => <IdeaCard key={idea.id} idea={idea} />)
          )}
        </div>
      </div>
    </main>
  );
}
