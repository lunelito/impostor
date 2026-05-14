"use client";
import Header from "@/src/components/UI/Header";
import Hero from "@/src/components/UI/Hero";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="h-screen flex flex-col items-center bg-bg text-white">
      <div
        className={`xl:w-[40vw] w-full z-20 ${pathname === "/manage/game" ? "bg-bg" : "bg-transparent"}`}
      >
        <Header />
      </div>
      <Hero />
      <div className="z-20 w-full h-full">{children}</div>
    </div>
  );
}
