import NavElement from "@/src/components/homePage/navElement/NavElement";
import { NavElementType } from "@/src/lib/types/homePageTypes";

export default function Home() {
  const navs: NavElementType[] = [
    { id: 0, icon: "/icons/game.svg", goTo: "/lobby", title: "Lobby" },
    { id: 1, icon: "/icons/group.svg", goTo: "/room", title: "Room" },
    {
      id: 2,
      icon: "/icons/settings.svg",
      goTo: "/settings",
      title: "Settigns",
    },
    { id: 3, icon: "/icons/words.svg", goTo: "/wordsList", title: "Words" },
  ];

  return (
    <div className="bg-black h-screen">
      {navs.map((nav) => (
        <NavElement key={nav.id} nav={nav} />
      ))}
    </div>
  );
}
