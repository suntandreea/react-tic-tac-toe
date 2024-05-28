

export default function GameBoard({board, handleTurn}) {

  return (
    <ol id="game-board">
      {board.map((row, rIdx) => (
        <li key={rIdx}>
          <ol>
            {row.map((col, cIdx) => (
              <li key={cIdx}>
                <button onClick={() => handleTurn(rIdx, cIdx)} disabled={!!col}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
