"use client";
import { useTransitionRouter } from "@/src/lib/animations/PageTransition";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const navigate = useTransitionRouter();
  const title = usePathname().split("/").at(-1) ?? "";
  const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1);
  console.log(titleCapitalized);
  return (
    <div className="w-full p-4 z-10 flex items-center gap-4">
      <div className="invert w-12 h-12">
        <Image
          alt={"arrow-back"}
          src={"/icons/arrow-u-up-left.svg"}
          fill
          onClick={() => navigate("/")}
        />
      </div>
      <p className="text-3xl text-white font-bold">{titleCapitalized}</p>
    </div>
  );
}
