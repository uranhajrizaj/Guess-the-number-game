import { useEffect, useState } from "react";

import "./App.css";
import { Game } from "./components/game";
import { Innstructions } from "./components/how_to_play";

function App() {
  return (
    <div className="container">
      <h1>Guess the number game</h1>
      <div className="app">
        <Innstructions/>
        <Game/>
      </div>
    </div>
  );
}

export default App;
