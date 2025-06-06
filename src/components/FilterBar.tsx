"use client";

import { useState } from "react";

const TAGS = [
  "AI",
  "marketplace",
  "community",
  "web3",
  "wellness",
  "productivity",
  "nocode",
];

export default function FilterBar({
  onFilter,
}: {
  onFilter: (tags: string[]) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    const updated = selected.includes(tag)
      ? selected.filter((t) => t !== tag)
      : [...selected, tag];
    setSelected(updated);
    onFilter(updated);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {TAGS.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={`px-3 py-1 text-sm rounded-full border transition
            ${
              selected.includes(tag)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-transparent text-blue-600 border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900"
            }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
