import { wordType } from "../types/homePageTypes";
import { wordsAnimals } from "./animals";
import { wordsCooking } from "./cooking";
import { wordsFilms } from "./films";
import { wordsMedicine } from "./medicine";
import { wordsMusic } from "./music";
import { wordsNature } from "./nature";
import { wordsSport } from "./sport";
import { wordsTechnology } from "./technology";
import { wordsTravels } from "./travels";
import { wordsUniverse } from "./universe";

const wordsAll: wordType[] = [
  ...wordsAnimals,
  ...wordsCooking,
  ...wordsFilms,
  ...wordsMedicine,
  ...wordsMusic,
  ...wordsNature,
  ...wordsSport,
  ...wordsTechnology,
  ...wordsTravels,
  ...wordsUniverse,
];

export { wordsAll };
