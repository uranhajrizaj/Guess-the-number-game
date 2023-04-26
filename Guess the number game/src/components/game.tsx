import { useEffect, useState, useSyncExternalStore } from "react";

export function Game() {
  const [table, setTable] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);
  const [guessedNumber, setGuessedNumber] = useState([]);
  const [randomNumber, setRandomNumber] = useState("750");
  const [show, setShow] = useState(false);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [error, setError] = useState(false);
  // function random(){
  //   let x = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  //   setRandomNumber(String(x));
  //   console.log(randomNumber)
  // }
  useEffect(() => {
    let count = 0;
    for (let guess of guessedNumber) {
      if (guess == randomNumber) {
        setWin(true);
        setShow(true);
      } else count++;
    }
    if (count == 5) {
      setLose(true);
      setShow(true);
    }
  }, [guessedNumber]);
  return (
    <div className="game">
      <h3 className="subtitle">Play now </h3>
      <div className="game-countainer">
        <div className="table">
          {table.map((row, rowIndex) => (
            <li className="row">
              {row.map((cel, cellIndex) => (
                <li
                  className={`${
                    table[rowIndex][cellIndex] == " " &&
                    !guessedNumber[rowIndex]
                      ? "cell"
                      : randomNumber[cellIndex] ==
                        guessedNumber[rowIndex][cellIndex]
                      ? "green"
                      : randomNumber.includes(
                          guessedNumber[rowIndex][cellIndex]
                        )
                      ? "yellow"
                      : "red"
                  }`}
                >
                  {guessedNumber[rowIndex]
                    ? guessedNumber[rowIndex][cellIndex]
                    : cel}
                </li>
              ))}
            </li>
          ))}
        </div>
        <div className="input-number">
          {!show ? (
            <>
              <h3>Enter a 3 digit number</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (
                    guessedNumber.length <= 5 &&
                    table.length <= 5 &&
                    e.target.number.value.length === 3
                  ) {
                    setGuessedNumber([...guessedNumber, e.target.number.value]);
                    setTable([
                      e.target.number.value.split(""),
                      ...table.splice(1),
                    ]);
                    e.target.number.value = "";
                  }
                  if (guessedNumber.length == 5) {
                    setShow(true);
                  }
                }}
              >
                <div className="input-button">
                  <input type="number" name="number" autoComplete="off" />
                  <button>Enter</button>
                </div>
                {error ? (
                  <p className="error">
                    *Please check your number it should have exactly 3 digits*
                  </p>
                ) : null}
              </form>
            </>
          ) : null}
        </div>
      </div>
      {show ? (
        <button
          onClick={() => {
            setTable([
              [" ", " ", " "],
              [" ", " ", " "],
              [" ", " ", " "],
              [" ", " ", " "],
              [" ", " ", " "],
            ]);
            setGuessedNumber([]);
            setShow(false);
            setWin(false);
            setLose(false);
          }}
        >
          Play again
        </button>
      ) : null}
      {win ? <p className="win-game">Congarts! You won the game 🥳.</p> : null}
      {lose ? <p className="lose-game">Sorry! You lost the game 😞.</p> : null}
    </div>
  );
}
