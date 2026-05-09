"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ReactNode, SetStateAction } from "react";

type UserListType = {
  id: string;
  name: string;
};

type UserContextType = {
  userList: UserListType[];
  setUserList: React.Dispatch<SetStateAction<UserListType[]>>;
};

type UserProviderProps = {
  children: ReactNode;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within an UserContextProvider",
    );
  }
  return context;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userList, setUserList] = useState<UserListType[]>([]);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current === undefined || userList.length > 0) return;

    const stored = localStorage.getItem("users");

    if (stored) {
      setUserList(JSON.parse(stored));
    }

  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userList));
  }, [userList]);

  const value: UserContextType = {
    userList,
    setUserList,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
