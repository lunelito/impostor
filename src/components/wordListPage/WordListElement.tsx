"use client";
import React, { SetStateAction } from "react";

type WordListElement = {
  title: string;
  wordTheme: string;
  setSelectedTheme: React.Dispatch<SetStateAction<string>>;
};

export default function WordListElement({
  title,
  wordTheme,
  setSelectedTheme,
}: WordListElement) {
  return (
    <div
      className={`m-4 text-xl text-center rounded-2xl px-4 py-8 bg-surface-2/30 backdrop-blur-lg duration-300 transition-all ease-in-out ${wordTheme === title ? "border-4 border-border font-bold" : "border-4 border-transparent"}`}
      onClick={() => {
        setSelectedTheme(title);
      }}
    >
      <p>{title}</p>
    </div>
  );
}
