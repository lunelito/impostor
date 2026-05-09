import { UserListType, wordType } from "@/src/lib/types/homePageTypes";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type UserCardProps = {
  user: UserListType;
  word: wordType;
};

export default function UserCard({ user, word }: UserCardProps) {
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

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden ">
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden"
      >
        <div ref={hintRef}>
          <div className="absolute bottom-30 w-full h-100 bg-surface-2" />
          <div className="absolute bottom-0 w-full h-30 bg-surface-2 flex justify-center items-center">
            <p>Pod spodem</p>
          </div>
        </div>

        <motion.div
          style={{ y }}
          className={`absolute inset-0 bg-bg flex justify-center items-center cursor-grab flex-col ${isDragged ? "rounded-b-4xl" : ""}`}
          drag="y"
          onDragEnd={() => {
            SetDragged(true);
            animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
          }}
          dragConstraints={{ top: -bottomBarHeight, bottom: 0 }}
          dragElastic={{ top: 0.2, bottom: 0 }}
        >
          <div className="relative invert w-15 h-15">
            <Image alt="arrow-up" src="/icons/arrow-up.svg" fill />
          </div>
          {dragged && <p>next osoba</p>}
          <p>Przeciągnij w górę aby odsłonić hasło</p>
        </motion.div>
      </div>
    </div>
  );
}
