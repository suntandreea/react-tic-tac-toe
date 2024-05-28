const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({turns, handleTurn}) {
  let board = initialBoard;

  for (const turn of turns) {
    const {box, player} = turn;
    const {row, col} = box;
    board[row][col] = player;
  }

  return (
    <ol id="game-board">
      {board.map((row, rIdx) => (
        <li key={rIdx}>
          <ol>
            {row.map((col, cIdx) => (
              <li key={cIdx}>
                <button onClick={() => handleTurn(rIdx, cIdx)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
