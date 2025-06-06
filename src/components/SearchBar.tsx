"use client";

import { Input } from "./ui/input";

export default function SearchBar({
  query,
  onSearch,
}: {
  query: string;
  onSearch: (q: string) => void;
}) {
  return (
    <div className="w-full max-w-2xl">
      <Input
        type="text"
        placeholder="Search ideas by title or description..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="text-sm"
      />
    </div>
  );
}
