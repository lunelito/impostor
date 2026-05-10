"use client";

import Hero from "@/src/components/UI/Hero";
import WordListElement from "@/src/components/wordListPage/WordListElement";
import { useWordThemeContext } from "@/src/lib/context/wordThemeContext";

export default function page() {
  const { setWordTheme, wordTheme } = useWordThemeContext();

  const themes = [
    "All",
    "Animals",
    "Cooking",
    "Films",
    "Medicine",
    "Music",
    "Nature",
    "Sport",
    "Technology",
    "Travels",
    "Universe",
  ];

  return (
    <div className="h-[95vh] w-full flex flex-col">
      <Hero />
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 p-4 scrollbar-thin">
        {themes.map((el) => (
          <WordListElement
            key={el}
            title={el}
            wordTheme={wordTheme}
            setSelectedTheme={setWordTheme}
          />
        ))}
      </div>
    </div>
  );
}
