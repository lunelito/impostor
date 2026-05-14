import { wordType } from "../types/homePageTypes";
const wordsCharacters: wordType[] = [
  {
    id: 0,
    word: "Harry Potter",
    hints: ["czarodziej", "młody", "Harry", "magiczny", "gryfindor"],
  },
  {
    id: 1,
    word: "Hermiona Granger",
    hints: [
      "czarodziejka",
      "inteligentna",
      "przyjaciółka",
      "zaklęcia",
      "hermiona",
    ],
  },
  {
    id: 2,
    word: "Ron Weasley",
    hints: ["rudzielec", "przyjaciół", "szachy", "rodzina", "ron"],
  },
  {
    id: 3,
    word: "Albus Dumbledore",
    hints: ["dyrektor", "brodaty", "czarodzej", "mądry", "szkoła"],
  },
  {
    id: 4,
    word: "Voldemort",
    hints: ["zły", "beznosowy", "czarny mag", "krakszynosy", "śmierciożerca"],
  },
  {
    id: 5,
    word: "Sherlock Holmes",
    hints: ["detektyw", "inteligentny", "fajka", "london", "angielski"],
  },
  {
    id: 6,
    word: "John Watson",
    hints: ["lekarz", "przyjaciół", "sherlock", "wspólnik", "angielski"],
  },
  {
    id: 7,
    word: "Frodo Baggins",
    hints: ["hobbit", "pierścień", "podróż", "malutki", "tolkien"],
  },
  {
    id: 8,
    word: "Gandalf",
    hints: ["czarodziej", "brodaty", "szary", "mądrość", "pierśćcień"],
  },
  {
    id: 9,
    word: "Aragorn",
    hints: ["człowiek", "król", "miecz", "arwen", "leśny"],
  },
  {
    id: 10,
    word: "Gollum",
    hints: ["hobbit", "mały", "pierśćcień", "złoty", "my"],
  },
  {
    id: 11,
    word: "Superman",
    hints: ["superbohater", "niebieski", "peleryna", "kryptonit", "clark"],
  },
  {
    id: 12,
    word: "Batman",
    hints: ["superbohater", "czarny", "maska", "bogaty", "gotham"],
  },
  {
    id: 13,
    word: "Wonder Woman",
    hints: ["superbohater", "kobieta", "lasso", "diana", "bogini"],
  },
  {
    id: 14,
    word: "Iron Man",
    hints: ["superbohater", "zbroja", "bogaty", "tony", "geniusz"],
  },
  {
    id: 15,
    word: "Captain America",
    hints: ["superbohater", "tarcza", "kroplina", "niebieski", "steve"],
  },
  {
    id: 16,
    word: "Thor",
    hints: ["superbohater", "bóg", "młot", "blond", "norweski"],
  },
  {
    id: 17,
    word: "Black Widow",
    hints: ["superbohater", "kobieta", "szpiegka", "czarna", "natasha"],
  },
  {
    id: 18,
    word: "Spider-Man",
    hints: ["superbohater", "pająk", "sieć", "młody", "peter"],
  },
  {
    id: 19,
    word: "Hulk",
    hints: ["superbohater", "zielony", "siła", "gniew", "bruce"],
  },
  {
    id: 20,
    word: "Thanos",
    hints: ["zły", "titan", "fioletowy", "rękawica", "połowa"],
  },
  {
    id: 21,
    word: "Luke Skywalker",
    hints: ["jedi", "miecz", "gwiezdne", "ojciec", "pustynia"],
  },
  {
    id: 22,
    word: "Darth Vader",
    hints: ["zły", "maska", "oddychanie", "ojciec", "miecz"],
  },
  {
    id: 23,
    word: "Yoda",
    hints: ["jedi", "mały", "zielony", "mądry", "gwiezdne"],
  },
  {
    id: 24,
    word: "Han Solo",
    hints: ["pilot", "millennium", "poszukiwacz", "chewbacca", "gwiezdne"],
  },
  {
    id: 25,
    word: "Leia Organa",
    hints: ["księżniczka", "kobieta", "włosy", "opór", "gwiezdne"],
  },
  {
    id: 26,
    word: "Chewbacca",
    hints: ["wookie", "włochaty", "ryczeć", "millennium", "gwiezdne"],
  },
  {
    id: 27,
    word: "R2-D2",
    hints: ["robot", "mały", "niebiesko-pomarańczowy", "piski", "gwiezdne"],
  },
  {
    id: 28,
    word: "C-3PO",
    hints: ["robot", "złoty", "etykieta", "obeznany", "gwiezdne"],
  },
  {
    id: 29,
    word: "Anakin Skywalker",
    hints: ["jedi", "wybrany", "vader", "miłość", "moc"],
  },
  {
    id: 30,
    word: "Джон Сноу",
    hints: ["bastard", "miecz", "nocna straż", "wilk", "got"],
  },
  {
    id: 31,
    word: "Daenerys Targaryen",
    hints: ["mać", "smoki", "włosy", "trony", "got"],
  },
  {
    id: 32,
    word: "Tyrion Lannister",
    hints: ["krasnolud", "wódka", "dowcipny", "złoto", "got"],
  },
  {
    id: 33,
    word: "Arya Stark",
    hints: ["dziewczyna", "miecz", "lista", "wilk", "got"],
  },
  {
    id: 34,
    word: "Sansa Stark",
    hints: ["dziewczyna", "włosy", "wędrówka", "wilk", "got"],
  },
  {
    id: 35,
    word: "Eddard Stark",
    hints: ["ojciec", "honorowy", "głowa", "północ", "got"],
  },
  {
    id: 36,
    word: "Cersei Lannister",
    hints: ["kobieta", "złoto", "dzieci", "trony", "got"],
  },
  {
    id: 37,
    word: "Jaime Lannister",
    hints: ["rycerz", "złoto", "miecz", "siostry", "got"],
  },
  {
    id: 38,
    word: "Theon Greyjoy",
    hints: ["chłopak", "ostrzeganie", "wyspy", "życzliwość", "got"],
  },
  {
    id: 39,
    word: "Brienne of Tarth",
    hints: ["kobieta", "rycerz", "miecz", "tall", "got"],
  },
  {
    id: 40,
    word: "Forrest Gump",
    hints: ["prosty", "biega", "czekolada", "америка", "film"],
  },
  {
    id: 41,
    word: "Tom Hanks",
    hints: ["aktor", "włosy", "dobry", "amerykański", "film"],
  },
  {
    id: 42,
    word: "Jack Sparrow",
    hints: ["pirat", "flota", "butelka", "włosy", "karaiby"],
  },
  {
    id: 43,
    word: "Bruce Willis",
    hints: ["aktor", "akcja", "łysy", "ameryakński", "film"],
  },
  {
    id: 44,
    word: "John McClane",
    hints: ["gliniarz", "budynek", "christmas", "terorysci", "akcja"],
  },
  {
    id: 45,
    word: "Rocky Balboa",
    hints: ["bokser", "muzyka", "amor", "schodów", "film"],
  },
  {
    id: 46,
    word: "Sylvester Stallone",
    hints: ["aktor", "muskuły", "akcja", "amerykański", "film"],
  },
  {
    id: 47,
    word: "Arnold Schwarzenegger",
    hints: ["aktor", "muskuły", "robot", "austriacki", "film"],
  },
  {
    id: 48,
    word: "Terminator",
    hints: ["robot", "ludzki", "przyszłość", "sent", "film"],
  },
  {
    id: 49,
    word: "Rambo",
    hints: ["żołnierz", "broń", "las", "poczta", "film"],
  },
  {
    id: 50,
    word: "Żelazo",
    hints: ["akcja", "ktoś", "przyszłość", "maszyna", "film"],
  },
  {
    id: 51,
    word: "Neo",
    hints: ["matrix", "zielony", "kod", "rzeczywistość", "film"],
  },
  {
    id: 52,
    word: "Morpheus",
    hints: ["matrix", "mentor", "okulary", "ubranie", "film"],
  },
  {
    id: 53,
    word: "Trinity",
    hints: ["matrix", "kobieta", "czarne", "skóra", "film"],
  },
  {
    id: 54,
    word: "Agent Smith",
    hints: ["matrix", "złe", "okulary", "krawat", "film"],
  },
  {
    id: 55,
    word: "Hannibal Lecter",
    hints: ["morderstwo", "psychopata", "inteligentny", "klatka", "film"],
  },
  {
    id: 56,
    word: "Joker",
    hints: ["zły", "batman", "śmiech", "zielone", "klaun"],
  },
  {
    id: 57,
    word: "Clarice Starling",
    hints: ["fbi", "kobieta", "psychopata", "jeleń", "film"],
  },
  {
    id: 58,
    word: "Dexter Morgan",
    hints: ["seryjny", "morderstwo", "krew", "serial", "miami"],
  },
  {
    id: 59,
    word: "Walter White",
    hints: ["nauczyciel", "meth", "chemia", "serial", "breaking"],
  },
  {
    id: 60,
    word: "Jesse Pinkman",
    hints: ["crystal", "meth", "młody", "serial", "breaking"],
  },
  {
    id: 61,
    word: "Tony Soprano",
    hints: ["mafia", "terapia", "psycholog", "serial", "sopranos"],
  },
  {
    id: 62,
    word: "Chandler Bing",
    hints: ["humor", "przyjaciele", "apartament", "sarcazm", "serial"],
  },
  {
    id: 63,
    word: "Ross Geller",
    hints: ["paleontolog", "przyjaciele", "wysoki", "rozkład", "serial"],
  },
  {
    id: 64,
    word: "Rachel Green",
    hints: ["moda", "przyjaciele", "fryzura", "dziewczyna", "serial"],
  },
  {
    id: 65,
    word: "Monica Geller",
    hints: ["czystość", "przyjaciele", "apartament", "gospodyni", "serial"],
  },
  {
    id: 66,
    word: "Phoebe Buffay",
    hints: ["piosenkarka", "przyjaciele", "dziwna", "ulica", "serial"],
  },
  {
    id: 67,
    word: "Joey Tribbiani",
    hints: ["aktor", "przyjaciele", "zmysłowy", "apartament", "serial"],
  },
  {
    id: 68,
    word: "Barney Stinson",
    hints: ["jak poznałem", "humor", "kostiumy", "serię", "serial"],
  },
  {
    id: 69,
    word: "Ted Mosby",
    hints: ["architekt", "jak poznałem", "miłość", "kobieta", "serial"],
  },
  {
    id: 70,
    word: "Sheldon Cooper",
    hints: ["geniusz", "big bang", "fizyka", "nerd", "serial"],
  },
  {
    id: 71,
    word: "Leonard Hofstadter",
    hints: ["naukowiec", "big bang", "fizycy", "sąsiad", "serial"],
  },
  {
    id: 72,
    word: "Penny",
    hints: ["sąsiadka", "big bang", "pielęgniarka", "aktorka", "serial"],
  },
  {
    id: 73,
    word: "Michael Scott",
    hints: ["szef", "biuro", "dyrektor", "glupkowaty", "serial"],
  },
  {
    id: 74,
    word: "Dwight Schrute",
    hints: ["biuro", "beet", "asystent", "dziwny", "serial"],
  },
  {
    id: 75,
    word: "Jim Halpert",
    hints: ["biuro", "miłość", "pracownik", "żart", "serial"],
  },
  {
    id: 76,
    word: "Pam Beesly",
    hints: ["biuro", "miłość", "recepcja", "artysta", "serial"],
  },
  {
    id: 77,
    word: "Geralt z Rivii",
    hints: ["wiedźmin", "polski", "miecz", "bestia", "film"],
  },
  {
    id: 78,
    word: "Yennefer",
    hints: ["czarodziejka", "wiedźmin", "fioletowy", "miłość", "film"],
  },
  {
    id: 79,
    word: "Ciri",
    hints: ["księżniczka", "wiedźmin", "moc", "uniwersum", "film"],
  },
  {
    id: 80,
    word: "Anya",
    hints: ["opowiadaczka", "polski", "babcia", "bajka", "film"],
  },
  {
    id: 81,
    word: "Shrek",
    hints: ["ogr", "śmieszny", "wioska", "osioł", "film"],
  },
  {
    id: 82,
    word: "Donkey",
    hints: ["osioł", "śmieszny", "mówi", "shrek", "film"],
  },
  {
    id: 83,
    word: "Fiona",
    hints: ["księżniczka", "ogr", "zielona", "shrek", "film"],
  },
  {
    id: 84,
    word: "Mufasa",
    hints: ["lew", "król", "ojciec", "król lew", "film"],
  },
  {
    id: 85,
    word: "Scar",
    hints: ["lew", "zły", "wujek", "blizna", "film"],
  },
  {
    id: 86,
    word: "Simba",
    hints: ["lew", "młody", "krąg", "życie", "film"],
  },
  {
    id: 87,
    word: "Hakuna Matata",
    hints: ["piosenka", "pomóż", "problem", "życie", "film"],
  },
  {
    id: 88,
    word: "Nemo",
    hints: ["rybka", "małe", "zagubiony", "ocean", "film"],
  },
  {
    id: 89,
    word: "Dory",
    hints: ["rybka", "niebieska", "zapominająca", "nemo", "film"],
  },
  {
    id: 90,
    word: "Marlin",
    hints: ["rybka", "ojciec", "nemo", "przeszukiwanie", "film"],
  },
  {
    id: 91,
    word: "Woody",
    hints: ["zabawka", "konik", "cowboy", "andy", "film"],
  },
  {
    id: 92,
    word: "Buzz Lightyear",
    hints: ["zabawka", "astronauta", "do nieskończoności", "space", "film"],
  },
  {
    id: 93,
    word: "Andy",
    hints: ["chłopak", "zabawka", "właściciel", "story", "film"],
  },
  {
    id: 94,
    word: "Genie",
    hints: ["duch", "lampa", "niebieski", "aladyn", "film"],
  },
  {
    id: 95,
    word: "Aladyn",
    hints: ["złodziej", "książę", "magiczny", "lampa", "film"],
  },
  {
    id: 96,
    word: "Jasmine",
    hints: ["księżniczka", "tygrys", "aladyn", "złota", "film"],
  },
  {
    id: 97,
    word: "Cruella de Vil",
    hints: ["zły", "dalmatyńczycy", "szycie", "szalona", "film"],
  },
  {
    id: 98,
    word: "Ursula",
    hints: ["czarownica", "arielka", "ośmiornica", "zmowa", "film"],
  },
  {
    id: 99,
    word: "Maleficent",
    hints: ["czarownica", "złe", "śpiąca królewna", "czara", "film"],
  },
];
export { wordsCharacters };
