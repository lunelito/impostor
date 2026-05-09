"use client";
import { useUserContext } from "@/src/lib/context/userContext";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [user, setUser] = useState<string>("");
  const { userList, setUserList } = useUserContext();
  const add = () => {
    if (user.length == 0) return;

    setUserList([
      ...userList,
      {
        id: crypto.randomUUID(),
        name: user,
      },
    ]);
  };

  const remove = (idToDelete: string) => {
    setUserList((prev) => prev.filter((el) => el.id !== idToDelete));
  };
  return (
    <div>
      <div className="w-full h-[4vh] flex justify-between items-center gap-5">
        <input
          type="text"
          className="bg-white py-4 text-xl px-8 h-full w-[80%] rounded-2xl text-black focus:outline-0"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <button
          className="w-[10%] h-full bg-white text-black rounded-2xl flex justify-center items-center relative"
          onClick={add}
        >
          <Image src={"/icons/add.svg"} fill alt="add" />
        </button>
      </div>
      <div className="flex flex-col mt-4 gap-4">
        {userList.map((el) => (
          <div
            key={el.id}
            className="w-full h-[4vh] flex items-center justify-between bg-white px-8 text-xl text-black rounded-2xl"
          >
            <p>{el.name}</p>
            <div className="flex justify-center items-center relative w-10 h-full">
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
  );
}
