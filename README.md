# Random Startup Idea Generator (Frontend)

> **Note:** This repository contains only the **frontend** portion of the Random Startup Idea Generator. In a future iteration, an AI‐powered backend will dynamically generate and curate ideas—this current codebase is prepared to consume that API once it’s available.

---

## 📚 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Available Scripts](#available-scripts)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [Future Plans (AI Backend)](#future-plans-ai-backend)
8. [Contributing](#contributing)
9. [License](#license)

---

## 📝 Project Overview

The **Random Startup Idea Generator** is a playful, polished web‐page that lets users:

- Generate a **single random idea** at a time
- Explore a **browseable list** of all ideas (search, filter, save favorites)
- Save favorites into `localStorage` for easy recall

Although this frontend currently sources ideas from a static dataset (`src/data/ideas.ts`), the long‐term vision is to integrate an AI backend. That future service will generate or expand ideas on demand—making each visit dynamically powered by natural language generation.

---

## ✨ Features

1. **Random Idea Generator**

   - “Generator” mode at `/` shows one random idea card.
   - Click “Generate New Idea” to pull another at random.

2. **Explore Mode**

   - `/explore` displays all ideas in a responsive grid.
   - **Search bar** for title/description matching.
   - **Tag‐based filters** (AI, web3, productivity, etc.).
   - **Save/Unsave** favorites directly from each card.

3. **Favorites Page**

   - `/favorites` lists ideas you’ve previously saved.
   - Back‐to‐Generator link for quick navigation.

4. **Dark Mode Toggle**

   - Switch between light/dark themes anywhere in the app.

5. **Responsive, Component‐Driven UI**
   - Built with Next.js (App Router), TypeScript, Tailwind CSS, Shadcn/UI components, and Lucide icons.
   - Fully client‐side; no server or database needed—yet.

---

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (+ Shadcn/UI)
- **Icons**: Lucide‐React
- **State & Storage**: React Hooks + `localStorage`
- **Hosting**: (Planned) Vercel

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+ and npm (or yarn) installed
- Git (for version control)

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your‐username/random‐startup‐ideas‐frontend.git
   cd random‐startup‐ideas‐frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` / `yarn dev`  
  Launches Next.js in development mode (hot‐reload on file changes).

- `npm run build` / `yarn build`  
  Produces an optimized production build in `.next/`.

- `npm run start` / `yarn start`  
  Starts the Next.js server using the production build.

- `npm run lint` / `yarn lint`  
  Runs ESLint to catch code‐style issues.

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout (navigation, header, footer)
│   │   ├── page.tsx          # “Generator” mode (random idea)
│   │   ├── explore/
│   │   │   └── page.tsx      # “Explore” mode (search + filter grid)
│   │   └── favorites/
│   │       └── page.tsx      # “Favorites” mode (saved ideas)
│   ├── components/
│   │   ├── IdeaCard.tsx      # Renders a single idea card
│   │   ├── FilterBar.tsx     # Tag‐filter component
│   │   └── SearchBar.tsx     # Search input component
│   ├── data/
│   │   └── ideas.ts          # Static array of 100+ StartupIdea objects
│   └── styles/
│       └── globals.css       # Tailwind directives + custom theming
├── docs/
│   └── README.md             # (This file — documentation for the frontend)
├── .eslintrc.js              # ESLint configuration
├── next.config.js            # Next.js config (if customized)
├── package.json              # Project metadata + scripts + dependencies
└── README.md                 # Primary repo README (points to docs/README.md)
```

---

## 🎬 Usage

1. **Generator Mode**

   - Visit [http://localhost:3000](http://localhost:3000).
   - Click “Generate New Idea” to see a new random card.
   - Click the star icon to save or unsave the displayed idea.

2. **Explore Mode**

   - Navigate to `/explore` (via header link or explicit URL).
   - Type any keyword (e.g., “AI”, “coach”, “blockchain”) in the search bar to filter results.
   - Click on tag badges to refine by category (e.g., “web3”, “productivity”).
   - Click ⭐ under any card to save/unfavorite.

3. **Favorites Mode**

   - Navigate to `/favorites`.
   - All ideas you saved (✔) appear here in a vertical list.
   - Click “Back to Generator” to return to the home page.

4. **Dark Mode**
   - Toggle the switch in the top‐right of the header (or on the home page).
   - The UI will switch to a darker theme for low‐light environments.

---

## 🔮 Future Plans (AI Backend)

Currently, `src/data/ideas.ts` holds a **static list** of 100+ ideas. Eventually, we’ll replace or augment that with an **AI‐powered backend API** that:

1. **Dynamically generates** brand‐new startup ideas on request (via a prompt like “Generate 5 new AI startup ideas in healthcare”).
2. **Expands** existing idea entries with richer descriptions, market insights, or example mockups.
3. **Learns** from user feedback (e.g., thumbs up/down) to personalize future suggestions.
4. Allows filtering by **user‐provided parameters**, such as “industry: fintech”, “technology: web3” or “tone: satirical”.

When that backend is ready, you’ll only need to:

- Swap out calls to `startupIdeas` in the frontend with a `fetch("/api/ideas?...")` request.
- Handle loading/error states for asynchronous data.
- Possibly implement caching or pagination if the AI service returns a large set.

---

## 🤝 Contributing

1. **Fork** this repository and create your own feature branch (`git checkout -b feature/YourFeature`).
2. **Make your changes** (follow the existing code style—Shadcn UI + Tailwind).
3. **Commit** your work (`git commit -m "Add some feature"`).
4. **Push** to your branch (`git push origin feature/YourFeature`).
5. Open a **Pull Request** and describe your changes.

We welcome any fixes, improvements, bug reports, or new components!

---

## 📜 License

This project is open‐source and distributed under the [MIT License](LICENSE). Feel free to use, modify, and distribute.

---

> **Tip:** Once the AI backend is live, update `src/data/ideas.ts` references in components to call the new `/api/ideas` endpoint. That will unlock an endless stream of fresh, AI-generated concepts!
