type NavElementType = {
  id: number;
  goTo: string;
  icon: string;
  title: string;
};

type wordType = {
  id: number;
  word: string;
  hints: string[];
};

type UserListType = {
  id: string;
  name: string;
};

export type { NavElementType, wordType,UserListType };
