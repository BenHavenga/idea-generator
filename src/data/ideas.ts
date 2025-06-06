export type StartupIdea = {
  id: number;
  title: string;
  description: string;
  insight: string;
  tags: string[];
};

export const startupIdeas: StartupIdea[] = [
  {
    id: 1,
    title: "AI Life Coach for Gen Z",
    description:
      "An emotionally intelligent assistant helping users navigate career, anxiety, and purpose with smart nudges.",
    insight:
      "Taps into the mental health and self-improvement wave with personalization and daily engagement.",
    tags: ["AI", "wellness", "lifestyle"],
  },
  {
    id: 2,
    title: "Zero-Code MVP Builder",
    description:
      "Generate web apps, pitch decks, and landing pages instantly based on your idea and audience.",
    insight:
      "Turns napkin sketches into deployable prototypes for solo founders and students.",
    tags: ["nocode", "productivity", "founder tools"],
  },
  {
    id: 3,
    title: "Decentralized Skill Trading",
    description:
      "Learn guitar from someone while teaching them Python. No money, just skill barter.",
    insight:
      "Builds a human economy of shared knowledge and community beyond platforms like Fiverr or Udemy.",
    tags: ["web3", "education", "community"],
  },
  // (You can add 100+ like this)
  {
    id: 4,
    title: "Redefine Commerce via chat",
    description:
      "A next-gen solution that aims to enhance coaching using personalized technology.",
    insight:
      "Addresses pain points in mentorship by leveraging AI to create consistent engagement.",
    tags: ["blockchain", "AI", "social"],
  },
  {
    id: 5,
    title: "Disrupt Investing on the blockchain",
    description:
      "A next-gen solution that aims to automate dating using personalized technology.",
    insight:
      "Addresses pain points in mentorship by leveraging peer feedback to create consistent engagement.",
    tags: ["finance", "AI", "mental health"],
  },
  {
    id: 6,
    title: "Redefine Therapy via chat",
    description:
      "A next-gen solution that aims to streamline dating using personalized technology.",
    insight:
      "Addresses pain points in therapy by leveraging machine learning to create consistent engagement.",
    tags: ["founder tools", "remote", "web3"],
  },
  {
    id: 7,
    title: "Transform Coaching with voice",
    description:
      "A next-gen solution that aims to automate mentorship using interactive technology.",
    insight:
      "Addresses pain points in commerce by leveraging automation to create consistent engagement.",
    tags: ["mental health", "nocode", "sustainability"],
  },
  {
    id: 8,
    title: "Transform Fitness on the blockchain",
    description:
      "A next-gen solution that aims to simplify mentorship using gamified technology.",
    insight:
      "Addresses pain points in commerce by leveraging machine learning to create consistent engagement.",
    tags: ["founder tools", "remote", "climate"],
  },
];
