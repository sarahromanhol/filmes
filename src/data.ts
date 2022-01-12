import { character, GENDER, movie } from "./types";


export let characters: character[] = [
    {
        id: 1,
        name: "Storm",
        gender: GENDER.FEMALE
    },
    {
        id: 2,
        name: "Deadpool",
        gender: GENDER.OTHER,
        description: "Sexy motherf***"
    },
    {
        id: 3,
        name: "Colossus",
        gender: GENDER.MALE
    }
]