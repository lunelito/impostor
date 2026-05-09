"use client";
import Hero from "@/src/components/UI/Hero";
import { useTransitionRouter } from "@/src/lib/animations/PageTransition";
import { useEffect, useState } from "react";

export default function page() {
  const [impostor, setImpostor] = useState<string | null>(null);
  const navigate = useTransitionRouter();
  const [finish, setFinish] = useState<boolean>(false);

  useEffect(() => {
    const data = localStorage.getItem("impostor");
    setImpostor(data);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <Hero />
      <div className="bg-surface-2/70 drop-shadow-2xl w-100 h-50 flex justify-center items-center flex-col gap-4 rounded-2xl">
        {finish ? (
          <>
            <p className="text-3xl">Impostorem był/a {impostor}</p>
            <button
              onClick={() => navigate("/manage/game")}
              className="bg-surface-2 px-4 py-2 rounded-2xl text-lg cursor-pointer"
            >
              Nowa gra
            </button>
          </>
        ) : (
          <>
            <p className="text-3xl">Czas na gre...</p>
            <button
              onClick={() => setFinish(true)}
              className="bg-surface-2 px-4 py-2 rounded-2xl text-lg cursor-pointer"
            >
              Koniec
            </button>
          </>
        )}
      </div>
    </div>
  );
}
