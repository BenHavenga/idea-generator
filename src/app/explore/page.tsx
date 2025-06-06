"use client";

import { useEffect, useState } from "react";
import { startupIdeas, StartupIdea } from "@/data/ideas";
import IdeaCard from "@/components/IdeaCard";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<StartupIdea[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
    filterIdeas();
  }, [query, selectedTags]);

  const filterIdeas = () => {
    let results = startupIdeas;

    if (selectedTags.length > 0) {
      results = results.filter((idea) =>
        selectedTags.some((tag) => idea.tags.includes(tag))
      );
    }

    if (query) {
      results = results.filter(
        (idea) =>
          idea.title.toLowerCase().includes(query.toLowerCase()) ||
          idea.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFiltered(results);
  };

  const toggleFavorite = (id: number) => {
    const updated = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <main className="min-h-screen px-4 py-10 bg-background text-foreground flex flex-col items-center gap-4">
      <div className="w-full max-w-4xl space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Explore Startup Ideas</h1>
          <Link href="/">
            <Button variant="outline">Back to Generator</Button>
          </Link>
        </div>

        <SearchBar query={query} onSearch={setQuery} />
        <FilterBar onFilter={setSelectedTags} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {filtered.map((idea) => (
            <div key={idea.id}>
              <IdeaCard idea={idea} />
              <Button
                size="sm"
                className="mt-2"
                onClick={() => toggleFavorite(idea.id)}
                variant={favorites.includes(idea.id) ? "secondary" : "outline"}
              >
                {favorites.includes(idea.id) ? "Unsave" : "Save"}
              </Button>
            </div>
          ))}
          {filtered.length === 0 && <p>No ideas found for your search.</p>}
        </div>
      </div>
    </main>
  );
}
