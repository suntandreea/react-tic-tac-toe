export default function GameOver({winner, resetGame}) {
  return <div id="game-over">
    <h2>Game over!</h2>
    {winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
    <button onClick={resetGame}>Restart game</button>
  </div>;
}
