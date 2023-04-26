import {create} from "zustand"
import { State } from "./types"

// const [table, setTable] = useState([
//     [" ", " ", " "],
//     [" ", " ", " "],
//     [" ", " ", " "],
//     [" ", " ", " "],
//     [" ", " ", " "],
//   ]);
//   const [guessedNumber, setGuessedNumber] = useState([]);
//   const [randomNumber, setRandomNumber] = useState("666");
//   const [show, setShow] = useState(false);
//   const [win, setWin] = useState(false);
//   const [lose, setLose] = useState(false);

export const useStore=create<State>((set,get)=>({
    randomNumber:"666",
    playAgain:false,
    error: false,

    setRandomNumber:()=>set({randomNumber:""}),
    setPlayAgain:(playAgain:boolean)=>set({playAgain:!playAgain}),
    setError:(error:boolean)=>set({error:!error})
}))