import Header from "@/src/components/UI/Header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col items-center bg-bg text-white">
      <div className="w-full h-full lg:w-[40vw]">
        <Header />
        {children}
      </div>
    </div>
  );
}
