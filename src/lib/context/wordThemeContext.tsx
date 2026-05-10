"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode, SetStateAction } from "react";

type WordThemeContextType = {
  wordTheme: string;
  setWordTheme: React.Dispatch<SetStateAction<string>>;
};

type UserProviderProps = {
  children: ReactNode;
};

const WordThemeContext = createContext<WordThemeContextType | undefined>(
  undefined,
);

export const useWordThemeContext = (): WordThemeContextType => {
  const context = useContext(WordThemeContext);
  if (!context) {
    throw new Error(
      "useWordThemeContext must be used within an UserContextProvider",
    );
  }
  return context;
};

export const WordThemeProvider = ({ children }: UserProviderProps) => {
  const [wordTheme, setWordTheme] = useState<string>(() => {
    if (typeof window === "undefined") return "All";
    const stored = localStorage.getItem("wordTheme");
    return stored ? stored : "All";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem("wordTheme", wordTheme);
  }, [wordTheme]);

  const value: WordThemeContextType = {
    wordTheme,
    setWordTheme,
  };

  return (
    <WordThemeContext.Provider value={value}>
      {children}
    </WordThemeContext.Provider>
  );
};
