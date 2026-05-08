"use client";
import { useTransitionRouter } from "@/src/lib/animations/PageTransition";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const navigate = useTransitionRouter();
  return (
    <div className="w-full mb-4">
      <div className="invert w-10 h-10">
        <Image
          alt={"arrow-back"}
          src={"/icons/arrow-u-up-left.svg"}
          fill
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}
