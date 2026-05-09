"use client";

import UserCard from "@/src/components/gamePage/UserCard";
import { useUserContext } from "@/src/lib/context/userContext";
import { words } from "@/src/lib/data/words";
import { UserListType, wordType } from "@/src/lib/types/homePageTypes";
import { useEffect, useState } from "react";

export default function page() {
  const { userList } = useUserContext();

  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<UserListType | null>(null);
  const [word, setWord] = useState<wordType | null>(null);
  const [impostorId, setImpostorId] = useState<string>("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (userList.length < 2) return;

    const randomImpostorId =
      userList[Math.floor(Math.random() * userList.length)]?.id;
    const randomWord = words[Math.floor(Math.random() * words.length)];

    setWord(randomWord);
    setImpostorId(randomImpostorId);
    setUser(userList[0]);
  }, [userList]);

  console.log(impostorId, word);

  console.log(userList);

  if (!mounted) return null;

  if (userList.length <= 2) return <div>musi byc wiecej niz 2</div>;

  if (user == null || word == null) return <div>coś poszło nie tak</div>;

  return (
    <div className="h-full">
      <UserCard user={user} word={word} />
    </div>
  );
}
