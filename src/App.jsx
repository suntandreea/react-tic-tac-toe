import {useState} from "react";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [turns, setTurns] = useState([]);

  function handleTurn(rowIndex, colIndex) {
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    setTurns(prevTurn => {
      let currentPlayer = "X";
      if (prevTurn.length && prevTurn[0].player === "X") currentPlayer = "O";
      return [{box: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurn];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          turns={turns}
          handleTurn={handleTurn}
        />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;
