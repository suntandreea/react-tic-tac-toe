import {useState} from "react";
import GameBoard from "./components/GameBoard";
import GameOver from './components/GameOver.jsx';
import Log from "./components/Log";
import Player from "./components/Player";
import {WINNING_COMBINATIONS} from './winning-combinations.js';

const PLAYERS = {
  "X": "Player 1",
  "O": "Player 2"
};
const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length && turns[0].player === "X") currentPlayer = "O";
  return currentPlayer;
}

function deriveBoard(turns) {
  let board = [...INITIAL_BOARD.map(array => [...array])];
  for (const turn of turns) {
    const {box, player} = turn;
    const {row, col} = box;
    board[row][col] = player;
  }
  return board;
}

function deriveWinner(board, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS ) {
    const first = board[combination[0].row][combination[0].column];
    const second = board[combination[1].row][combination[1].column];
    const third = board[combination[2].row][combination[2].column];

    if (first && first === second && first === third) {
      winner = players[first];
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [turns, setTurns] = useState([]);
  let activePlayer = deriveActivePlayer(turns);
  const board = deriveBoard(turns);
  const winner = deriveWinner(board, players);
  const hasDraw = turns.length === 9 && !winner;

  function handleTurn(rowIndex, colIndex) {
    setTurns(prevTurn => {
      return [{box: {row: rowIndex, col: colIndex}, player: deriveActivePlayer(prevTurn)}, ...prevTurn];
    });
  }

  function resetGame() {
    setTurns([]);
  }

  function setPlayerName(symbol, newName) {
    setPlayers(prev => {
      return {...prev, [symbol]: newName};
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            setPlayerName={setPlayerName}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            setPlayerName={setPlayerName}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} resetGame={resetGame}/>}
        <GameBoard
          board={board}
          handleTurn={handleTurn}
        />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;
