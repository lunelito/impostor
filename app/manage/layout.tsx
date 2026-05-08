import Header from "@/src/components/UI/Header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <Header />
      <div>{children}</div>
    </div>
  );
}
