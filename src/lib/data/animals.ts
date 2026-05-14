import { wordType } from "../types/homePageTypes";
const wordsAnimals: wordType[] = [
  {
    id: 0,
    word: "pingwin",
    hints: ["antarktyka", "czarno-biały", "nie lata", "ryby", "kolonia"],
  },
  {
    id: 1,
    word: "żyrafa",
    hints: ["szyja", "afryka", "plamy", "wysoka", "akacja"],
  },
  {
    id: 2,
    word: "rekin",
    hints: ["zęby", "ocean", "drapieżnik", "płetwa", "atak"],
  },
  {
    id: 3,
    word: "kameleon",
    hints: ["kolor", "język", "jaszczurka", "oczy", "kamuflaż"],
  },
  {
    id: 4,
    word: "gepard",
    hints: ["szybki", "cętki", "afryka", "polowanie", "kot"],
  },
  {
    id: 5,
    word: "ośmiornica",
    hints: ["macki", "atrament", "morze", "inteligentna", "8 ramion"],
  },
  {
    id: 6,
    word: "goryl",
    hints: ["małpa", "afryka", "silny", "dżungla", "srebrnogrzbiety"],
  },
  {
    id: 7,
    word: "flaming",
    hints: ["różowy", "jedna noga", "dziób", "jezioro", "stado"],
  },
  {
    id: 8,
    word: "komodo",
    hints: ["jaszczurka", "wyspa", "język", "jadowity", "duży"],
  },
  {
    id: 9,
    word: "wydra",
    hints: ["woda", "rybożerna", "futro", "trzymanie łap", "słodka"],
  },
  {
    id: 10,
    word: "słoń",
    hints: ["trąba", "duży", "afryka", "słuch", "pamięć"],
  },
  {
    id: 11,
    word: "panda",
    hints: ["czarno-biała", "bambus", "chiny", "miła", "niedźwiedź"],
  },
  {
    id: 12,
    word: "tygrys",
    hints: ["paski", "kot", "indie", "drapieżnik", "siła"],
  },
  {
    id: 13,
    word: "lew",
    hints: ["grywa", "savannahs", "roi", "kotowaty", "król"],
  },
  {
    id: 14,
    word: "hipopotam",
    hints: ["rzeka", "gruby", "afryka", "woda", "duże usta"],
  },
  {
    id: 15,
    word: "krokodyl",
    hints: ["rzeka", "zęby", "pancerz", "afryka", "łapki"],
  },
  {
    id: 16,
    word: "zebra",
    hints: ["paski", "konie", "afryka", "czarno-białe", "stado"],
  },
  {
    id: 17,
    word: "antylopa",
    hints: ["rogacizna", "szybka", "afryka", "trawożerna", "skok"],
  },
  {
    id: 18,
    word: "nosorożec",
    hints: ["róg", "gruby", "afryka", "duży", "pancerz"],
  },
  {
    id: 19,
    word: "bizon",
    hints: ["grzywa", "америка", "duży", "przyczółek", "siła"],
  },
  {
    id: 20,
    word: "wilk",
    hints: ["paczka", "zwój", "howling", "szary", "drapieżnik"],
  },
  {
    id: 21,
    word: "niedźwiedź",
    hints: ["futro", "miód", "las", "niebezpieczny", "gryzak"],
  },
  {
    id: 22,
    word: "lis",
    hints: ["rudy", "ogon", "chytry", "królik", "las"],
  },
  {
    id: 23,
    word: "jeleń",
    hints: ["poroże", "las", "ryczenie", "rogacizna", "szybki"],
  },
  {
    id: 24,
    word: "łoś",
    hints: ["poroże", "duży", "las", "woda", "ssak"],
  },
  {
    id: 25,
    word: "renifer",
    hints: ["poroże", "śnieg", "szybki", "świętojańskie", "sanie"],
  },
  {
    id: 26,
    word: "bobr",
    hints: ["gat", "woda", "drewno", "ogon", "pałac"],
  },
  {
    id: 27,
    word: "wydra rzeczna",
    hints: ["woda", "futro", "rybożerna", "uwodzenie", "ssak"],
  },
  {
    id: 28,
    word: "jaszczurka",
    hints: ["skalista", "ogon", "4 nogi", "zmieniająca ciepła", "mała"],
  },
  {
    id: 29,
    word: "żaba",
    hints: ["skakanie", "żaby", "kiwanie", "woda", "zielona"],
  },
  {
    id: 30,
    word: "pyton",
    hints: ["wąż", "zwijanie", "wielkość", "dusić", "gad"],
  },
  {
    id: 31,
    word: "anankon",
    hints: ["wąż", "afryka", "wyspa", "największy", "reticulated"],
  },
  {
    id: 32,
    word: "papuga",
    hints: ["ptak", "kolor", "mówić", "tropiki", "inteligentna"],
  },
  {
    id: 33,
    word: "sowa",
    hints: ["ptak", "noc", "głowa", "oczy", "uszy"],
  },
  {
    id: 34,
    word: "orzeł",
    hints: ["ptak", "drapieżnik", "latanie", "wzrok", "stado"],
  },
  {
    id: 35,
    word: "kruk",
    hints: ["ptak", "czarny", "inteligentny", "krzyczeć", "mięsożerna"],
  },
  {
    id: 36,
    word: "bocian",
    hints: ["ptak", "dzieci", "długie nogi", "gniazdo", "latanie"],
  },
  {
    id: 37,
    word: "czapla",
    hints: ["ptak", "ryby", "długie nogi", "woda", "polowanie"],
  },
  {
    id: 38,
    word: "łabędź",
    hints: ["ptak", "biały", "piękny", "woda", "szyjny"],
  },
  {
    id: 39,
    word: "kaczka",
    hints: ["ptak", "woda", "dziób", "pływanie", "gąska"],
  },
  {
    id: 40,
    word: "gęś",
    hints: ["ptak", "woda", "hałaśliwa", "gąska", "kolonia"],
  },
  {
    id: 41,
    word: "kogut",
    hints: ["ptak", "ranne", "grzebień", "kochanka", "kurzątko"],
  },
  {
    id: 42,
    word: "skowronek",
    hints: ["ptak", "śpiewanie", "niebo", "dźwięk", "polska"],
  },
  {
    id: 43,
    word: "szpak",
    hints: ["ptak", "kolonia", "czarny", "lśniący", "śpiew"],
  },
  {
    id: 44,
    word: "wróbel",
    hints: ["ptak", "mały", "miasto", "czary", "powszechny"],
  },
  {
    id: 45,
    word: "kos",
    hints: ["ptak", "czarny", "pomarańczowy", "śpiewanie", "ogród"],
  },
  {
    id: 46,
    word: "śliwa",
    hints: ["ptak", "brązowy", "śpiewanie", "ogród", "mały"],
  },
  {
    id: 47,
    word: "serce",
    hints: ["ptak", "motyle", "kwiaty", "latanie", "kolorowy"],
  },
  {
    id: 48,
    word: "pchła",
    hints: ["insekt", "skakanie", "mały", "pasożyt", "piski"],
  },
  {
    id: 49,
    word: "pszczoła",
    hints: ["insekt", "miód", "ból", "kolonia", "pyłek"],
  },
  {
    id: 50,
    word: "osa",
    hints: ["insekt", "pasek", "ból", "latanie", "gniazdo"],
  },
  {
    id: 51,
    word: "mrówka",
    hints: ["insekt", "pracowita", "kolonia", "ziemia", "silna"],
  },
  {
    id: 52,
    word: "motyl",
    hints: ["insekt", "skrzydła", "kwiaty", "kolorowy", "metamorfoza"],
  },
  {
    id: 53,
    word: "gąsienica",
    hints: ["insekt", "liście", "jedz", "motyl", "zielona"],
  },
  {
    id: 54,
    word: "biedronka",
    hints: ["insekt", "plamki", "czerwona", "czarny", "latanie"],
  },
  {
    id: 55,
    word: "chrząszcz",
    hints: ["insekt", "czarny", "twardy", "latanie", "mały"],
  },
  {
    id: 56,
    word: "konik polny",
    hints: ["insekt", "skakanie", "zielony", "śpiewanie", "lato"],
  },
  {
    id: 57,
    word: "karakal",
    hints: ["kot", "uszy", "azja", "czarna", "drapieżnik"],
  },
  {
    id: 58,
    word: "linsang",
    hints: ["kot", "smukły", "tajlandia", "roślinność", "rzadki"],
  },
  {
    id: 59,
    word: "serwal",
    hints: ["kot", "plamy", "afryka", "długie nogi", "skok"],
  },
  {
    id: 60,
    word: "ocelot",
    hints: ["kot", "plamy", "ameryka", "nocny", "puszcza"],
  },
  {
    id: 61,
    word: "puma",
    hints: ["kot", "brązowa", "ameryka", "silna", "górski"],
  },
  {
    id: 62,
    word: "jaguar",
    hints: ["kot", "plamy", "ameryka", "woda", "drapieżnik"],
  },
  {
    id: 63,
    word: "lemiur",
    hints: ["małpa", "madagaskar", "ogon", "nocny", "skakanie"],
  },
  {
    id: 64,
    word: "orangutan",
    hints: ["małpa", "borneo", "ruda", "inteligentna", "drzewo"],
  },
  {
    id: 65,
    word: "szympans",
    hints: ["małpa", "afryka", "inteligentna", "silna", "społeczna"],
  },
  {
    id: 66,
    word: "bonobo",
    hints: ["małpa", "kongo", "czarna", "inteligentna", "społeczna"],
  },
  {
    id: 67,
    word: "makak",
    hints: ["małpa", "azja", "kolonia", "agresywna", "rozsądna"],
  },
  {
    id: 68,
    word: "gibbon",
    hints: ["małpa", "azja", "drzewo", "śpiewanie", "monogamia"],
  },
  {
    id: 69,
    word: "delfin",
    hints: ["morze", "ssak", "inteligentny", "skok", "echolokacja"],
  },
  {
    id: 70,
    word: "wieloryb",
    hints: ["ocean", "ogromny", "ssak", "mleko", "niebieska"],
  },
  {
    id: 71,
    word: "foka",
    hints: ["morze", "ssak", "futro", "lód", "wąsy"],
  },
  {
    id: 72,
    word: "mniszek",
    hints: ["morze", "foka", "lód", "afryka", "kolonia"],
  },
  {
    id: 73,
    word: "niebieskorybik",
    hints: ["ryba", "ocean", "niebieska", "srebrzysta", "skok"],
  },
  {
    id: 74,
    word: "miecznik",
    hints: ["ryba", "ocean", "miecz", "szybka", "skakanie"],
  },
  {
    id: 75,
    word: "tuńczyk",
    hints: ["ryba", "ocean", "szybka", "duża", "jedzenie"],
  },
  {
    id: 76,
    word: "łosoś",
    hints: ["ryba", "rzeka", "ocean", "mięso", "powrót"],
  },
  {
    id: 77,
    word: "pstrąg",
    hints: ["ryba", "rzeka", "plamki", "zimna", "rzęska"],
  },
  {
    id: 78,
    word: "suma",
    hints: ["ryba", "rzeka", "duża", "wąsy", "nocna"],
  },
  {
    id: 79,
    word: "karp",
    hints: ["ryba", "staw", "duża", "zjadliwa", "łuska"],
  },
  {
    id: 80,
    word: "szczupak",
    hints: ["ryba", "rzeka", "drapieżnik", "duża", "zęby"],
  },
  {
    id: 81,
    word: "sandacz",
    hints: ["ryba", "rzeka", "paski", "jadowity", "drapieżnik"],
  },
  {
    id: 82,
    word: "okoń",
    hints: ["ryba", "rzeka", "jezioro", "oczy", "grzbiet"],
  },
  {
    id: 83,
    word: "kiełb",
    hints: ["ryba", "rzeka", "mała", "srebrna", "stado"],
  },
  {
    id: 84,
    word: "płoć",
    hints: ["ryba", "rzeka", "zielona", "stado", "mała"],
  },
  {
    id: 85,
    word: "dorsz",
    hints: ["ryba", "ocean", "duża", "wąsy", "tran"],
  },
  {
    id: 86,
    word: "makrela",
    hints: ["ryba", "ocean", "szybka", "srebrzysta", "paski"],
  },
  {
    id: 87,
    word: "pływak",
    hints: ["płaz", "woda", "skakanie", "czarny", "żaba"],
  },
  {
    id: 88,
    word: "salamandra",
    hints: ["płaz", "wilgotny", "czarna", "pomarańczowa", "ziemia"],
  },
  {
    id: 89,
    word: "traszka",
    hints: ["płaz", "woda", "mała", "kolanka", "czarna"],
  },
  {
    id: 90,
    word: "żółw",
    hints: ["gad", "skorupa", "długo żyje", "powolny", "mały"],
  },
  {
    id: 91,
    word: "wąż uzębieny",
    hints: ["gad", "trujący", "europejski", "czarny", "żółty"],
  },
  {
    id: 92,
    word: "wąż zwojnik",
    hints: ["gad", "tujący", "europejski", "szary", "zwoje"],
  },
  {
    id: 93,
    word: "żaba kumaczka",
    hints: ["płaz", "woda", "głośna", "noc", "mała"],
  },
  {
    id: 94,
    word: "żaba zielona",
    hints: ["płaz", "woda", "zielona", "skakanie", "głośna"],
  },
  {
    id: 95,
    word: "ropucha",
    hints: ["płaz", "wada", "duża", "zęby", "toksyka"],
  },
  {
    id: 96,
    word: "kuon",
    hints: ["pies", "azja", "kolonia", "niebezpieczny", "zwój"],
  },
  {
    id: 97,
    word: "hiena",
    hints: ["drapieżnik", "afryka", "śmiech", "silne", "kości"],
  },
  {
    id: 98,
    word: "fretka",
    hints: ["ssak", "domownik", "zwinny", "długa", "gryzak"],
  },
  {
    id: 99,
    word: "norka",
    hints: ["ssak", "woda", "futro", "mroczna", "gryzak"],
  },
];
export { wordsAnimals };
