"use client";

import UserCard from "@/src/components/gamePage/UserCard";
import { useUserContext } from "@/src/lib/context/userContext";
import { useWordThemeContext } from "@/src/lib/context/wordThemeContext";
import { wordsMap } from "@/src/lib/data/words";
import { UserListType, wordType } from "@/src/lib/types/homePageTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const { userList } = useUserContext();
  const { wordTheme } = useWordThemeContext();
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<UserListType | null>(null);
  const [word, setWord] = useState<wordType | null>(null);
  const [impostor, setImpostor] = useState<UserListType | null>(null);
  const [count, setCount] = useState<number>(0);
  const navigate = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (userList.length < 2) return;

    const wordsSet = wordsMap.get(wordTheme.toLowerCase()) ?? []

    console.log(wordsSet)

    const impostor = userList[Math.floor(Math.random() * userList.length)];
    const randomWord = wordsSet[Math.floor(Math.random() * wordsSet.length)];

    setWord(randomWord);
    setImpostor(impostor);
    setUser(userList[0]);
    setCount(0);
    
  }, [userList, wordTheme]);


  const nextPerson = () => {
    if (impostor?.name == null) return;

    let next = count + 1;

    if (next == userList.length) {
      navigate.replace("/manage/finish");
      localStorage.setItem("impostor", impostor.name);
    } else {
      setCount(next);
      setUser(userList[next]);
    }
  };

  if (!mounted) return null;

  if (userList.length <= 2) return <div>musi byc wiecej niz 2</div>;

  if (user == null || word == null || impostor == null)
    return <div>coś poszło nie tak</div>;

  return (
    <div className="h-full w-full">
      <UserCard
        user={user}
        word={word}
        impostor={impostor}
        nextPerson={nextPerson}
      />
    </div>
  );
}
