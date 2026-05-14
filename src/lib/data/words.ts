import { wordType } from "../types/homePageTypes";
import { wordsAnimals } from "./animals";
import { wordsCooking } from "./cooking";
import { wordsCharacters } from "./films";
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
  ...wordsCharacters,
  ...wordsMedicine,
  ...wordsMusic,
  ...wordsNature,
  ...wordsSport,
  ...wordsTechnology,
  ...wordsTravels,
  ...wordsUniverse,
];

const wordsMap = new Map([
  ["all", wordsAll],
  ["animals", wordsAnimals],
  ["cooking", wordsCooking],
  ["films", wordsCharacters],
  ["medicine", wordsMedicine],
  ["music", wordsMusic],
  ["nature", wordsNature],
  ["sport", wordsSport],
  ["technology", wordsTechnology],
  ["travels", wordsTravels],
  ["universe", wordsUniverse],
]);

export { wordsAll, wordsMap };
