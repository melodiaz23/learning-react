import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import { useState } from "react"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";


const PLAYERS = { X: 'Player 1', O: 'Player 2' }
const INITIAL_GAME_BOARD = [[null, null, null], [null, null, null], [null, null, null]];

function deriveActivePlayer(turns) {
  let currentPlayer = 'X';
  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner; // It must return some value since is a helper function.
}


function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])]; // This way we make a deep copy of the array

  for (const turn of gameTurns) {
    const { square, player } = turn; // Object destructuring
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X'); // For avoid use multiple states when is not nedded.

  const currentPlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer(curActivePlayer => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      return [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
    })
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => ({ ...prevPlayers, [symbol]: newName }))
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className={`highlight-player ${currentPlayer}`}>
          <Player initialName={PLAYERS.X} symbol="X" isActive={currentPlayer === 'X'} onNameChange={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol="O" isActive={currentPlayer === 'O'} onNameChange={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} players={players} />
    </main >
  )
}

export default App
