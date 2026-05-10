"use client";
import { useTransitionRouter } from "@/src/lib/animations/PageTransition";
import { NavElementType } from "@/src/lib/types/homePageTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";

type NavElementProps = {
  nav: NavElementType;
};

export default function NavElement({ nav }: NavElementProps) {
  const navigate = useTransitionRouter();
  return (
    <div
      onClick={() => navigate("/manage/" + nav.goTo)}
      key={nav.id}
      className="bg-surface-2/30 border-2 backdrop-blur-lg border-border w-40 h-40 p-4 flex justify-center items-center rounded-2xl hover:scale-110 transition-all ease-in-out"
    >
      <div className="flex justify-center items-center flex-col gap-4">
        <div className="invert w-14 h-14">
          <Image alt={"icon" + nav.id} src={nav.icon} fill />
        </div>
        <p className="text-xl">{nav.title}</p>
      </div>
    </div>
  );
}
