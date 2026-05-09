"use client";
import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const TransitionContext = createContext<(href: string) => void>(() => {});

export function useTransitionRouter() {
  return useContext(TransitionContext);
}

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  const navigate = (href: string) => {
    setIsExiting(true);
    setTimeout(() => {
      router.push(href ?? "/");
      setIsExiting(false);
    }, 300);
  };

  return (
    <TransitionContext.Provider value={navigate}>
      <AnimatePresence mode="wait">
        {!isExiting && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
