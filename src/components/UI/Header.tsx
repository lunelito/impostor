"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Header() {
  const navigate = useRouter();
  const title = usePathname().split("/").at(-1) ?? "";
  const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1);
  console.log(titleCapitalized);
  return (
    <div className="w-full p-4 flex items-center gap-4 bg-transparent">
      <div className="invert w-12 h-12">
        <Image
          alt={"arrow-back"}
          src={"/icons/arrow-u-up-left.svg"}
          fill
          onClick={() => navigate.replace("/")}
        />
      </div>
      <p className="text-3xl text-white font-bold">{titleCapitalized}</p>
    </div>
  );
}
