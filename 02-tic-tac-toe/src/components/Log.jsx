export default function Log({ turns, players }) {

  return (
    <ol id="log">
      {turns.map((turn, index) => <li key={`${turn.square.row},${turn.square.col}`}>{players[turn.player].toUpperCase()} selected {turn.square.row}, {turn.square.col}</li>)}
    </ol>
  )
}