import { wordType } from "../types/homePageTypes";
const wordsCooking: wordType[] = [
  {
    id: 0,
    word: "patelnia",
    hints: ["smażenie", "okrągła", "rączka", "teflonowa", "kuchnia"],
  },
  {
    id: 1,
    word: "makaron",
    hints: ["włoski", "gotowanie", "sos", "al dente", "pszenny"],
  },
  {
    id: 2,
    word: "nóż",
    hints: ["ostrze", "krojenie", "stal", "rękojeść", "ostrzenie"],
  },
  {
    id: 3,
    word: "zupa",
    hints: ["gorąca", "talerz", "łyżka", "bulion", "warzywa"],
  },
  {
    id: 4,
    word: "piekarnik",
    hints: ["pieczenie", "temperatura", "blacha", "elektryczny", "ciasto"],
  },
  {
    id: 5,
    word: "czosnek",
    hints: ["ostry", "główka", "ząbek", "zapach", "włoski"],
  },
  {
    id: 6,
    word: "deska",
    hints: ["krojenie", "drewniana", "kuchnia", "warzywa", "prostokąt"],
  },
  {
    id: 7,
    word: "sos",
    hints: ["pomidorowy", "gęsty", "przyprawy", "patelnia", "polewanie"],
  },
  {
    id: 8,
    word: "jajko",
    hints: ["skorupka", "żółtko", "omlet", "kurczak", "białko"],
  },
  {
    id: 9,
    word: "mąka",
    hints: ["biała", "sypka", "ciasto", "pszenica", "przesiewanie"],
  },
  {
    id: 10,
    word: "cebula",
    hints: ["warstwa", "płacz", "biała", "fioletowa", "włoska"],
  },
  {
    id: 11,
    word: "marchewka",
    hints: ["pomarańczowa", "crunchy", "słodka", "beta karoten", "warzywo"],
  },
  {
    id: 12,
    word: "pomidor",
    hints: ["czerwony", "solanina", "owoc", "włoska", "sos"],
  },
  {
    id: 13,
    word: "pieprz",
    hints: ["ostry", "czarny", "przyprawy", "ziarno", "młynek"],
  },
  {
    id: 14,
    word: "sól",
    hints: ["biała", "sypka", "przyprawy", "morska", "konserwant"],
  },
  {
    id: 15,
    word: "maślanka",
    hints: ["żółta", "smaż", "masło", "krowy", "kuchnia"],
  },
  {
    id: 16,
    word: "mleko",
    hints: ["białe", "krowa", "pić", "śmietana", "ser"],
  },
  {
    id: 17,
    word: "ser",
    hints: ["żółty", "dziura", "mleko", "dojrzewanie", "sera"],
  },
  {
    id: 18,
    word: "mięso",
    hints: ["czerwone", "białe", "porcja", "wołowina", "drób"],
  },
  {
    id: 19,
    word: "rybka",
    hints: ["ocean", "łuska", "mąka", "sushi", "gotowanie"],
  },
  {
    id: 20,
    word: "ryż",
    hints: ["białe", "ziarno", "azja", "gotowanie", "sushi"],
  },
  {
    id: 21,
    word: "chleb",
    hints: ["piekarnia", "drożdże", "zapacha", "krojenie", "kanapka"],
  },
  {
    id: 22,
    word: "masło",
    hints: ["żółte", "roztopić", "mleko", "tost", "piekarstwo"],
  },
  {
    id: 23,
    word: "cukier",
    hints: ["słodki", "sypki", "trzcinowy", "pudding", "desery"],
  },
  {
    id: 24,
    word: "mód",
    hints: ["drożdże", "fermentacja", "piwo", "chleb", "drożdżowy"],
  },
  {
    id: 25,
    word: "żelatyna",
    hints: ["przezroczysta", "żelki", "galaretka", "gelatyna", "żeb"],
  },
  {
    id: 26,
    word: "miód",
    hints: ["słodki", "pszczoła", "lipowy", "naturalny", "ziarna"],
  },
  {
    id: 27,
    word: "śmietana",
    hints: ["białą", "gęsta", "mleko", "deserowy", "kwaśna"],
  },
  {
    id: 28,
    word: "jogurt",
    hints: ["probiotyk", "mleko", "kultur", "desert", "białkowy"],
  },
  {
    id: 29,
    word: "twaróg",
    hints: ["mleko", "grudy", "białkowy", "słodki", "słodka"],
  },
  {
    id: 30,
    word: "kasza",
    hints: ["ziarno", "kasze", "gotowanie", "grykowa", "manna"],
  },
  {
    id: 31,
    word: "fasola",
    hints: ["roślinny", "białko", "konserwowana", "gotowanie", "biała"],
  },
  {
    id: 32,
    word: "groch",
    hints: ["zielony", "roślinny", "zupą", "suszony", "grochowa"],
  },
  {
    id: 33,
    word: "soczewica",
    hints: ["roślinny", "gotowanie", "czerwona", "czarna", "biały"],
  },
  {
    id: 34,
    word: "banan",
    hints: ["żółty", "owoc", "tropikalny", "słodki", "kwas"],
  },
  {
    id: 35,
    word: "jabłko",
    hints: ["czerwone", "owoc", "zielone", "soczysty", "kwaśne"],
  },
  {
    id: 36,
    word: "pomarańcza",
    hints: ["owoc", "pomarańczowy", "cytryna", "sok", "dojrzały"],
  },
  {
    id: 37,
    word: "cytryna",
    hints: ["żółta", "kwaśna", "sok", "owoc", "cytrynolik"],
  },
  {
    id: 38,
    word: "truskawka",
    hints: ["czerwona", "owoc", "lato", "malinowy", "słodka"],
  },
  {
    id: 39,
    word: "malinę",
    hints: ["czerwona", "owoc", "lato", "konfitura", "malinowy"],
  },
  {
    id: 40,
    word: "gruszka",
    hints: ["owoc", "zielona", "słodka", "jesień", "pigułka"],
  },
  {
    id: 41,
    word: "winogrono",
    hints: ["owoc", "winieć", "zielone", "czerwone", "słodkie"],
  },
  {
    id: 42,
    word: "kiwi",
    hints: ["owoc", "zielone", "małe", "czarne", "tropikalny"],
  },
  {
    id: 43,
    word: "mango",
    hints: ["owoc", "tropikalny", "żółte", "słodkie", "miękkie"],
  },
  {
    id: 44,
    word: "ananas",
    hints: ["owoc", "tropikalny", "ostry", "żółty", "słodki"],
  },
  {
    id: 45,
    word: "kokos",
    hints: ["owoc", "białe", "mleko", "twardy", "mąka"],
  },
  {
    id: 46,
    word: "brzoskwinia",
    hints: ["owoc", "miękka", "żółta", "pestek", "słodka"],
  },
  {
    id: 47,
    word: "czereśnia",
    hints: ["owoc", "czerwona", "mała", "lato", "pestek"],
  },
  {
    id: 48,
    word: "śliwka",
    hints: ["owoc", "fioletowa", "pestek", "suszona", "kwaśna"],
  },
  {
    id: 49,
    word: "arbuz",
    hints: ["owoc", "zielone", "czerwone", "letni", "duży"],
  },
  {
    id: 50,
    word: "ogórek",
    hints: ["warzywo", "zielone", "sałatka", "kwaśny", "crunchy"],
  },
  {
    id: 51,
    word: "sałata",
    hints: ["warzywo", "zielone", "liście", "sałatka", "świeża"],
  },
  {
    id: 52,
    word: "szpinak",
    hints: ["warzywo", "zielone", "żelazo", "liście", "sałatka"],
  },
  {
    id: 53,
    word: "kapusta",
    hints: ["warzywo", "zielona", "fioletowa", "kapusniak", "fermentacja"],
  },
  {
    id: 54,
    word: "brokuł",
    hints: ["warzywo", "zielone", "florety", "kapusta", "gotowanie"],
  },
  {
    id: 55,
    word: "kalafior",
    hints: ["warzywo", "białe", "florety", "gotowanie", "kapusta"],
  },
  {
    id: 56,
    word: "burak",
    hints: ["warzywo", "fioletowy", "cukier", "sałatka", "żytni"],
  },
  {
    id: 57,
    word: "rzodkiewka",
    hints: ["warzywo", "czerwona", "ostry", "mała", "crunchy"],
  },
  {
    id: 58,
    word: "por",
    hints: ["warzywo", "biały", "cebula", "zupa", "sałatka"],
  },
  {
    id: 59,
    word: "baklażan",
    hints: ["warzywo", "fioletowy", "miękki", "gotowanie", "włoski"],
  },
  {
    id: 60,
    word: "paprika",
    hints: ["warzywo", "czerwona", "zielona", "słodka", "gotowanie"],
  },
  {
    id: 61,
    word: "papryka",
    hints: ["warzywo", "czerwona", "zielona", "słodka", "gotowanie"],
  },
  {
    id: 62,
    word: "żeczyk",
    hints: ["warzywo", "zielone", "mały", "gotowanie", "sałatka"],
  },
  {
    id: 63,
    word: "szparagi",
    hints: ["warzywo", "zielone", "chude", "wiosna", "grille"],
  },
  {
    id: 64,
    word: "cukinia",
    hints: ["warzywo", "zielone", "miękkie", "lato", "gotowanie"],
  },
  {
    id: 65,
    word: "dynia",
    hints: ["warzywo", "żółta", "duża", "jesień", "Halloween"],
  },
  {
    id: 66,
    word: "lubczyk",
    hints: ["warzywo", "biały", "korzeniowy", "gotowanie", "sałatka"],
  },
  {
    id: 67,
    word: "pietruszka",
    hints: ["zioło", "zielone", "liść", "aroma", "gotowanie"],
  },
  {
    id: 68,
    word: "koperek",
    hints: ["zioło", "zielone", "liść", "ryba", "kwaśny"],
  },
  {
    id: 69,
    word: "bazylia",
    hints: ["zioło", "zielone", "włoski", "tomato", "aroma"],
  },
  {
    id: 70,
    word: "oregano",
    hints: ["zioło", "suszone", "włoski", "pizza", "aroma"],
  },
  {
    id: 71,
    word: "tymianek",
    hints: ["zioło", "suszone", "liść", "mały", "aroma"],
  },
  {
    id: 72,
    word: "rozmaryn",
    hints: ["zioło", "suszone", "liść", "włoski", "mięso"],
  },
  {
    id: 73,
    word: "szafran",
    hints: ["zioło", "żółty", "drogi", "ryż", "aroma"],
  },
  {
    id: 74,
    word: "kumin",
    hints: ["zioło", "ciemne", "ziarno", "orientalne", "zapach"],
  },
  {
    id: 75,
    word: "cynamon",
    hints: ["zioło", "brąz", "słodki", "kory", "desery"],
  },
  {
    id: 76,
    word: "gałka muszkatołowa",
    hints: ["zioło", "brąz", "słodka", "deser", "miękkie"],
  },
  {
    id: 77,
    word: "kmin",
    hints: ["zioło", "brąz", "chleb", "ziarno", "smaż"],
  },
  {
    id: 78,
    word: "kolyander",
    hints: ["zioło", "brąz", "orientalne", "curry", "zapach"],
  },
  {
    id: 79,
    word: "ginger",
    hints: ["zioło", "brąz", "ostre", "chai", "korony"],
  },
  {
    id: 80,
    word: "turmeric",
    hints: ["zioło", "żółty", "curry", "antioksydant", "korzeniowy"],
  },
  {
    id: 81,
    word: "gotowanie",
    hints: ["proces", "ciepło", "kuchnia", "gotowana", "posiłek"],
  },
  {
    id: 82,
    word: "smażenie",
    hints: ["proces", "patelnia", "oliwa", "gorąco", "kolor"],
  },
  {
    id: 83,
    word: "pieczenie",
    hints: ["proces", "piekarnik", "temperatura", "brąz", "ciasto"],
  },
  {
    id: 84,
    word: "gotowaniu",
    hints: ["proces", "woda", "temperaturę", "pary", "posiłek"],
  },
  {
    id: 85,
    word: "mieszanie",
    hints: ["proces", "łyżka", "składniki", "jednorodny", "ciasto"],
  },
  {
    id: 86,
    word: "marynowanie",
    hints: ["proces", "płyn", "godziny", "smak", "mięso"],
  },
  {
    id: 87,
    word: "fermentacja",
    hints: ["proces", "bakterie", "czas", "zachowanie", "chleb"],
  },
  {
    id: 88,
    word: "caramelize",
    hints: ["proces", "cukier", "brąz", "słodki", "palący"],
  },
  {
    id: 89,
    word: "drażniące",
    hints: ["proces", "ostrze", "czynności", "ruch", "szybko"],
  },
  {
    id: 90,
    word: "przyprawianie",
    hints: ["proces", "sól", "pieprz", "smak", "przyprawy"],
  },
  {
    id: 91,
    word: "oliwa",
    hints: ["płyn", "zielone", "oliwne", "gotowanie", "sałatka"],
  },
  {
    id: 92,
    word: "ocet",
    hints: ["płyn", "kwaśny", "zakwas", "ocetowy", "cukier"],
  },
  {
    id: 93,
    word: "wino",
    hints: ["napój", "fermentacja", "winogrono", "gotowanie", "sosem"],
  },
  {
    id: 94,
    word: "piwo",
    hints: ["napój", "fermentacja", "słód", "drożdże", "gorzkie"],
  },
  {
    id: 95,
    word: "woda",
    hints: ["płyn", "przejrzysta", "gotowanie", "gotuje", "niezbędne"],
  },
  {
    id: 96,
    word: "mleko kokosowe",
    hints: ["napój", "kokos", "białe", "curry", "orientalne"],
  },
  {
    id: 97,
    word: "soju",
    hints: ["sos", "ciemny", "soja", "orientalne", "sypki"],
  },
  {
    id: 98,
    word: "wasabi",
    hints: ["sos", "ostry", "zielony", "sushi", "gorący"],
  },
  {
    id: 99,
    word: "majonez",
    hints: ["sos", "gęsty", "białe", "jajko", "oliwa"],
  },
];
export { wordsCooking };
