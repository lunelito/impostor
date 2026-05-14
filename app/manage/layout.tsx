import Header from "@/src/components/UI/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col items-center bg-bg text-white">
      <div className="xl:w-[40vw] w-full bg-transparent">
        <Header />
      </div>
      {children}
    </div>
  );
}
