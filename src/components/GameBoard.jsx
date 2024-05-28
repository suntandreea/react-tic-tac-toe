import {useState} from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({activePlayer, handleTurn}) {
  const [board, setBoard] = useState(initialBoard);

  function handleClick(rowIndex, colIndex) {
    setBoard((prev) => {
      const newState = [...prev.map((inner) => [...inner])];
      newState[rowIndex][colIndex] = activePlayer;
      return newState;
    });
    handleTurn();
  }

  return (
    <ol id="game-board">
      {board.map((row, rIdx) => (
        <li key={rIdx}>
          <ol>
            {row.map((col, cIdx) => (
              <li key={cIdx}>
                <button onClick={() => handleClick(rIdx, cIdx)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
