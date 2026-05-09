import { UserListType, wordType } from "@/src/lib/types/homePageTypes";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type UserCardProps = {
  user: UserListType;
  word: wordType;
  impostor: UserListType;
  nextPerson: () => void;
};

export default function UserCard({
  user,
  word,
  impostor,
  nextPerson,
}: UserCardProps) {
  const [dragged, SetDragged] = useState<boolean>(false);
  const [isDragged, setIsDragged] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  //   30 * 4
  const bottomBarHeight = 120;

  const y = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = y.on("change", (latest) => {
      setIsDragged(latest < -1);
    });
    return unsubscribe;
  }, [y]);

  const isImpostor = impostor.id == user.id;

  const hint = useMemo(() => {
    return word.hints[Math.floor(Math.random() * word.hints.length)];
  }, [word]);

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden ">
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden"
      >
        <div ref={hintRef}>
          <div className="absolute bottom-30 w-full h-100 bg-primary" />
          <div className="absolute bottom-0 w-full h-30 bg-primary flex justify-center items-center text-surface text-xl flex-col">
            <p className="text-3xl">
              Jesteś {isImpostor ? "Impostorem" : "bambikiem"}
            </p>
            {isImpostor ? (
              <p>Twoja podpowiedz to {hint}</p>
            ) : (
              <p>Twoje hasło to {word.word}</p>
            )}
          </div>
        </div>

        <motion.div
          style={{ y }}
          className={`absolute inset-0 bg-bg cursor-grab flex-col ${isDragged ? "rounded-b-4xl" : ""}`}
          drag="y"
          onDragEnd={() => {
            SetDragged(true);
            animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
          }}
          dragConstraints={{ top: -bottomBarHeight, bottom: 0 }}
          dragElastic={{ top: 0.2, bottom: 0 }}
        >
          <div className="h-5/6 flex justify-center items-center flex-col gap-8">
            <p className="text-7xl font-bold">{user.name}</p>
            {dragged && (
              <button
                onClick={() => {
                  nextPerson();
                  SetDragged(false);
                }}
                className="bg-surface-2 px-4 py-2 rounded-2xl text-lg cursor-pointer"
              >
                Nastepna osoba
              </button>
            )}
          </div>
          <div className="h-1/6 flex justify-center items-center flex-col gap-4">
            <div
              className={`relative invert w-15 h-15 ${isDragged ? "rotate-180" : ""}`}
            >
              <Image alt="arrow-up" src="/icons/arrow-up.svg" fill />
            </div>
            <p>Przeciągnij w górę aby odsłonić hasło</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
