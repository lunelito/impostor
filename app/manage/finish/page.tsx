"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const [impostor, setImpostor] = useState<string | null>(null);
  const router = useRouter();
  const [finish, setFinish] = useState<boolean>(false);

  useEffect(() => {
    const data = localStorage.getItem("impostor");
    setImpostor(data);
  }, []);
  return (
    <div className="flex justify-center items-center">
      <p>Czas na gre...</p>
      <button onClick={() => setFinish(true)}>Koniec</button>
      {finish && (
        <div>
          <p>Impostorem był {impostor}</p>
          <button onClick={() => router.replace("/manage/game")}>
            Nowa gra
          </button>
        </div>
      )}
    </div>
  );
}
