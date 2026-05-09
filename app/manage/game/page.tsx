"use client";

import UserCard from "@/src/components/gamePage/UserCard";
import { useUserContext } from "@/src/lib/context/userContext";
import { words } from "@/src/lib/data/words";
import { UserListType, wordType } from "@/src/lib/types/homePageTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const { userList } = useUserContext();

  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<UserListType | null>(null);
  const [word, setWord] = useState<wordType | null>(null);
  const [impostor, setImpostor] = useState<UserListType | null>(null);
  const [count, setCount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (userList.length < 2) return;

    const impostor = userList[Math.floor(Math.random() * userList.length)];
    const randomWord = words[Math.floor(Math.random() * words.length)];

    setWord(randomWord);
    setImpostor(impostor);
    setUser(userList[0]);
    setCount(0);
  }, [userList]);

  const nextPerson = () => {
    if (impostor?.name == null) return;

    let next = count + 1;

    if (next == userList.length) {
      router.replace("/manage/finish");
      localStorage.setItem("impostor", impostor.name);
    }

    setCount(next);
    setUser(userList[next]);
  };

  if (!mounted) return null;

  if (userList.length <= 2) return <div>musi byc wiecej niz 2</div>;

  if (user == null || word == null || impostor == null)
    return <div>coś poszło nie tak</div>;

  return (
    <div className="h-full">
      <UserCard
        user={user}
        word={word}
        impostor={impostor}
        nextPerson={nextPerson}
      />
    </div>
  );
}
