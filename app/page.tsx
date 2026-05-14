import NavElement from "@/src/components/homePage/navElement/NavElement";
import Hero from "@/src/components/UI/Hero";
import { NavElementType } from "@/src/lib/types/homePageTypes";

export default function Home() {
  const navs: NavElementType[] = [
    { id: 0, icon: "/icons/game.svg", goTo: "/lobby", title: "Lobby" },
    { id: 1, icon: "/icons/group.svg", goTo: "/game", title: "game" },
    { id: 2, icon: "/icons/words.svg", goTo: "/wordsList", title: "Words" },
  ];

  return (
    <div className="h-screen flex justify-center items-center">
      <Hero />
      <div className="flex flex-col gap-10 z-10">
        {navs.map((nav) => (
          <NavElement key={nav.id} nav={nav} />
        ))}
      </div>
    </div>
  );
}
