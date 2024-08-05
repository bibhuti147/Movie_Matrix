import { createContext, useEffect, useState } from "react";

export const MyContext = createContext({
  category: "",
  setCategory: () => null,
  suggestedItems: null,
  setSuggestedItems: () => null,
  getRandomSuggestions: () => null,
});

export const MyContextProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [suggestedItems, setSuggestedItems] = useState([]);
  const Movies = [
    {
      Title: "Transformers",
      Year: "2007",
      imdbID: "tt0418279",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWI1NjkxM2MtOTU4My00YzQ5LTliNGMtNmFlM2U5NWM3MDY1XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    },
    {
      Title: "Transformers: Dark of the Moon",
      Year: "2011",
      imdbID: "tt1399103",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg",
    },
    {
      Title: "Transformers: Revenge of the Fallen",
      Year: "2009",
      imdbID: "tt1055369",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw@@._V1_SX300.jpg",
    },
    {
      Title: "Transformers: Age of Extinction",
      Year: "2014",
      imdbID: "tt2109248",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@._V1_SX300.jpg",
    },
    {
      Title: "Transformers: The Last Knight",
      Year: "2017",
      imdbID: "tt3371366",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2YwOWM4ODgtZTMzMi00ZmFmLTk5NTEtNmY4ZDcwNzQxNDhjXkEyXkFqcGdeQXVyNTI0NzAyNjY@._V1_SX300.jpg",
    },
    {
      Title: "Transformers: Rise of the Beasts",
      Year: "2023",
      imdbID: "tt5090568",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTNiNDA4NmMtNTExNi00YmViLWJkMDAtMDAxNmRjY2I2NDVjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Transformers: The Movie",
      Year: "1986",
      imdbID: "tt0092106",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGM1MGY4OTYtOGZkOC00NjYyLTk3OTMtODUyZDdhYWQ3NGFjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
    },
    {
      Title: "The Transformers",
      Year: "1984–1987",
      imdbID: "tt0086817",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjgxYjBmYTktNDRmYi00N2IzLWIxMGUtNWJlM2RiN2M3NzgzXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    },
    {
      Title: "Beast Wars: Transformers",
      Year: "1996–1999",
      imdbID: "tt0115108",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDUxODg4MzE5NV5BMl5BanBnXkFtZTYwNDA0OTc4._V1_SX300.jpg",
    },
    {
      Title: "Transformers Prime",
      Year: "2010–2013",
      imdbID: "tt1659175",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGY0ZGMwY2QtMGUwOC00MmVhLTljMzktNGYzNDFmYzAzODMwXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_SX300.jpg",
    },
    {
      Title: "Transformers: War for Cybertron Trilogy",
      Year: "2020–2021",
      imdbID: "tt9789660",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzRkNjllZjktZTkwZC00YTgxLTlmMWEtZWYzYzUwODQ0NzZiXkEyXkFqcGdeQXVyMjQ3MjU3NTU@._V1_SX300.jpg",
    },
    {
      Title: "Beast Machines: Transformers",
      Year: "1999–2001",
      imdbID: "tt0189315",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTI3NTcxODAxOV5BMl5BanBnXkFtZTcwMjQ0NTA0MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Transformers: Animated",
      Year: "2007–2009",
      imdbID: "tt1055335",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzA5ZWE4ZDMtYzMxMS00NTE2LWI2NDMtYjhhYmI1N2Q5N2NiXkEyXkFqcGdeQXVyMjQ3MjU3NTU@._V1_SX300.jpg",
    },
    {
      Title: "Transformers: Earthspark",
      Year: "2022–",
      imdbID: "tt14298658",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2JmOGUyMGMtMWQwYi00NDA5LWFiOTgtNjZmNGIxYWU5MTNjXkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg",
    },
    {
      Title: "Transformers Prime Beast Hunters: Predacons Rising",
      Year: "2013",
      imdbID: "tt2788526",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg5MTQ2NDYzNl5BMl5BanBnXkFtZTgwNDcwNDg2MTE@._V1_SX300.jpg",
    },
    {
      Title: "Transformers: Armada",
      Year: "2002–2003",
      imdbID: "tt0329938",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg5NzgwOTkwNF5BMl5BanBnXkFtZTcwOTI4MDczMQ@@._V1_SX300.jpg",
    },
    {
      Title: "Transformers: Robots in Disguise",
      Year: "2014–2020",
      imdbID: "tt3604232",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjk0NjY1YjItZjNlNC00ZGJhLTg1YzAtZWYzZDljOGUyN2IxXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    },
    {
      Title: "Transformers: Rescue Bots",
      Year: "2011–2016",
      imdbID: "tt2139371",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTkwNTE2MzU1Nl5BMl5BanBnXkFtZTgwNjQ1MDgwMDE@._V1_SX300.jpg",
    },
    {
      Title: "Transformers: Cybertron",
      Year: "2005",
      imdbID: "tt0472252",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjU4ZTE1OWItZDg1MC00MWJlLWE2MjYtMzZkNzY0NzQzMzc4XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VII - The Force Awakens",
      Year: "2015",
      imdbID: "tt2488496",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode I - The Phantom Menace",
      Year: "1999",
      imdbID: "tt0120915",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode III - Revenge of the Sith",
      Year: "2005",
      imdbID: "tt0121766",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode II - Attack of the Clones",
      Year: "2002",
      imdbID: "tt0121765",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },
    {
      Title: "Rogue One: A Star Wars Story",
      Year: "2016",
      imdbID: "tt3748528",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VIII - The Last Jedi",
      Year: "2017",
      imdbID: "tt2527336",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode IX - The Rise of Skywalker",
      Year: "2019",
      imdbID: "tt2527338",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
    },
    {
      Title: "Solo: A Star Wars Story",
      Year: "2018",
      imdbID: "tt3778644",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: The Clone Wars",
      Year: "2008–2020",
      imdbID: "tt0458290",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWFlNzRmOTItZjY1Ni00ZjZkLTk5MDgtOGFhOTYzNWFhYzhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: The Clone Wars",
      Year: "2008",
      imdbID: "tt1185834",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTJiYTMyMGEtNjE0Zi00MzczLWI3ZWYtMmFkMDk0NWVjZGYzXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Rebels",
      Year: "2014–2018",
      imdbID: "tt2930604",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2Q1ZTAzNzMtMzlmNy00NjdjLThhYjgtMzgxN2ZkYmFhMDIwXkEyXkFqcGdeQXVyMjg5NDMwMQ@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: The Bad Batch",
      Year: "2021–2024",
      imdbID: "tt12708542",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWU5Mjg5ZDctOWZmMi00ZjQ4LTkzYzYtY2FkY2E4YWIxMGNkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Tales of the Jedi",
      Year: "2022",
      imdbID: "tt20723374",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODMwYmE1ZGItYWVjNi00ZWUxLWFjYjQtNjdjN2MzNzY0NmRlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    },
    {
      Title: "Kenobi: A Star Wars Fan Film",
      Year: "2019",
      imdbID: "tt11502498",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGUwZjg2NjUtMGViZC00ZjgxLTljZTYtNWU0ODcyNzg2NzBhXkEyXkFqcGdeQXVyMzMxMzQ2ODA@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Clone Wars",
      Year: "2003–2005",
      imdbID: "tt0361243",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTJiYzkwZDEtMDJkYy00ZmJiLTg3M2QtYjU3MmU4MzBiZDc2XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Visions",
      Year: "2021–",
      imdbID: "tt13622982",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjBjNWExN2QtYTRiMS00MzJhLTg0MTAtMDk5YzMzMjgwMjIyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
    {
      Title: "The Star Wars Holiday Special",
      Year: "1978",
      imdbID: "tt0193524",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWY1NWEwZjUtZWE0Zi00ZGQ5LWJhYTQtMWFkZDdhMjUzNDUwXkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      Year: "2003",
      imdbID: "tt0325980",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: Dead Man's Chest",
      Year: "2006",
      imdbID: "tt0383574",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: At World's End",
      Year: "2007",
      imdbID: "tt0449088",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: On Stranger Tides",
      Year: "2011",
      imdbID: "tt1298650",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: Dead Men Tell No Tales",
      Year: "2017",
      imdbID: "tt1790809",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_SX300.jpg",
    },
    {
      Title: "Ip Man",
      Year: "2008",
      imdbID: "tt1220719",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTFmMjM3M2UtOTIyZC00Zjk3LTkzODUtYTdhNGRmNzFhYzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Ip Man 2",
      Year: "2010",
      imdbID: "tt1386932",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWM2MTcyMDgtZTZkNS00NTg5LWIwNzEtMmY1Y2I1MTZjYTE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Ip Man 3",
      Year: "2015",
      imdbID: "tt2888046",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGMwZDU3OGItYmM5ZS00MDhkLTllNjgtMDA1ZjlmNjk4OTg3XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SX300.jpg",
    },
    {
      Title: "Ip Man 4: The Finale",
      Year: "2019",
      imdbID: "tt2076298",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzYyZWIwZjQtZGVjZi00NWIxLTk0ODMtNzA3YzE5MWM3OWI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "The Legend Is Born: Ip Man",
      Year: "2010",
      imdbID: "tt1641638",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2ODgyMjE1MF5BMl5BanBnXkFtZTcwMzE3MDU3Ng@@._V1_SX300.jpg",
    },
    {
      Title: "Ip Man: The Final Fight",
      Year: "2013",
      imdbID: "tt2495118",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmEwOGFhOTAtNDY0Yy00MDIwLWJjZWEtMzk5OGFmNTljMjE2XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
    },
    {
      Title: "Master Z: The Ip Man Legacy",
      Year: "2018",
      imdbID: "tt7262882",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDVjZGE2ZTEtYzI3Zi00MzY1LTg5ZGItNWRmZDY4MzM2OTM0XkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_SX300.jpg",
    },
    {
      Title: "Ip Man: Kung Fu Master",
      Year: "2019",
      imdbID: "tt12567246",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjA1YWEzOGQtNDEzOS00ODlkLWFjZGEtZDM4NmRmMjFmZjlhXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_SX300.jpg",
    },
    {
      Title: "Ip Man: The Awakening",
      Year: "2021",
      imdbID: "tt21028848",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMThjOGQyZDItMTM2ZS00YmE3LWEwNDktZGU0N2Y1YjRjMzU5XkEyXkFqcGdeQXVyMTUzNzU2OTIy._V1_SX300.jpg",
    },
    {
      Title: "Young Ip Man: Crisis Time",
      Year: "2020",
      imdbID: "tt13418144",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzAyNTQxYzYtNTU2NC00NGJkLWE0NGEtNTU0YTA5NzNiNzY4XkEyXkFqcGdeQXVyMjMxMTE2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "John Wick",
      Year: "2014",
      imdbID: "tt2911666",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    },
    {
      Title: "John Wick: Chapter 2",
      Year: "2017",
      imdbID: "tt4425200",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg",
    },
    {
      Title: "John Wick: Chapter 3 - Parabellum",
      Year: "2019",
      imdbID: "tt6146586",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
    },
    {
      Title: "John Wick: Chapter 4",
      Year: "2023",
      imdbID: "tt10366206",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    },
    {
      Title: "The Boys",
      Year: "2019–",
      imdbID: "tt1190634",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_SX300.jpg",
    },
  ];
  const getRandomSuggestions = () => {
    const shuffledMovies = [...Movies].sort(() => 0.5 - Math.random());
    setSuggestedItems(shuffledMovies.slice(0, 10));
  };

  useEffect(() => {}, [suggestedItems]);

  const value = {
    category,
    setCategory,
    suggestedItems,
    setSuggestedItems,
    Movies,
    getRandomSuggestions,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
