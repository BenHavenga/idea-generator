import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StartupIdea } from "@/data/ideas";
import { Lightbulb, Tags } from "lucide-react";

export default function IdeaCard({ idea }: { idea: StartupIdea }) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          {idea.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-muted-foreground">{idea.description}</p>
        <p className="text-sm italic text-zinc-500 dark:text-zinc-400">
          {idea.insight}
        </p>
        <div className="flex gap-2 flex-wrap mt-2">
          {idea.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-white flex items-center gap-1"
            >
              <Tags className="w-3 h-3" /> {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
