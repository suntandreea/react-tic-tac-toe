export default function Log({turns}) {
  return <ol id="log">
    {turns.map(turn => <li
      key={`${turn.box.row}${turn.box.col}`}>{"Player " + turn.player + " has clicked on row " + (turn.box.row + 1) + " and" +
      " column " + (turn.box.col + 1) + "."}</li>)}
  </ol>;
}
