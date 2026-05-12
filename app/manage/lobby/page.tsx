"use client";
import Hero from "@/src/components/UI/Hero";
import { useUserContext } from "@/src/lib/context/userContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function page() {
  const [user, setUser] = useState<string>("");
  const { userList, setUserList } = useUserContext();
  const [mounted, setMounted] = useState(false);
  const add = () => {
    if (user.length == 0) return;

    setUserList([
      ...userList,
      {
        id: crypto.randomUUID(),
        name: user,
      },
    ]);
    setUser("");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const remove = (idToDelete: string) => {
    setUserList((prev) => prev.filter((el) => el.id !== idToDelete));
  };

  if (!mounted) return null;

  return (
    <div className="w-full h-full">
      <Hero />
      <div className="p-4 text-white w-full z-20">
        <div className="w-full h-[4vh] flex justify-between items-center gap-4">
          <input
            type="text"
            className="bg-surface-2/50 backdrop-blur-lg border-2 border-border py-4 text-xl px-8 h-full w-full rounded-2xl focus:outline-0 z-10"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
          <button
            className="w-[10%] h-full bg-surface-2/50 backdrop-blur-lg border-2 border-border rounded-2xl flex justify-center items-center relative cursor-pointer"
            onClick={add}
          >
            <Image className="invert" src={"/icons/add.svg"} fill alt="add" />
          </button>
        </div>
        <div className="flex flex-col mt-4 gap-4">
          {userList.map((el) => (
            <div
              key={el.id}
              className="w-full h-[4vh] flex items-center justify-between bg-surface-2/50 backdrop-blur-lg border-2 border-border px-8 text-xl rounded-2xl"
            >
              <p>{el.name}</p>
              <div className="flex justify-center items-center invert relative w-10 h-full cursor-pointer">
                <Image
                  src={"/icons/remove.svg"}
                  fill
                  alt="add"
                  onClick={() => remove(el.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
