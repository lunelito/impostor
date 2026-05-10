import Hero from "@/src/components/UI/Hero";
import WordListElement from "@/src/components/wordListPage/WordListElement";

export default function page() {
  
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
    "travels",
    "universe",
  ];

  return (
    <div className="h-[95vh] flex flex-col">
      <Hero />
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 p-4 scrollbar-thin">
        {themes.map((el) => (
          <WordListElement key={el} title={el} />
        ))}
      </div>
    </div>
  );
}
