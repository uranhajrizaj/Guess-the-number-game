export type State={
    randomNumber:string,
    playAgain:boolean,
    error: boolean,

    setRandomNumber:()=>void,
    setPlayAgain:(playAgain:boolean)=>void,
    setError:(error:boolean)=>void
}