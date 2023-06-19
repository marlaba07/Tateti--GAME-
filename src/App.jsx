import { useState } from 'react'
import './App.css'

// Constantes para identificar los turnos. 
const TURNS = {
  X: 'x',
  O: 'o'
}

// El cuadrado del tablero
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

// Definir combinaciones ganadoras como consantes [No es la más optima, pero si la más fácil]
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  // Estado para inicializar nuestro tablero (arreglo de 9 posiciones)
  const [board, setBoard] = useState(Array(9).fill(null))
  // Estado para saber de quien es el turno
  const [turn, setTurn] = useState(TURNS.X)
  // Estado para que me indique quien es el ganador 
  // null es que no hay ganador, false es que hay empate.
  const [winner, setWinner] = useState(null)

  // Método para saber quien es el ganador ó si hay empate. 
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      // Sí hay ganador hay que chequear posición por posición.
      // Revisamos todas las combinaciones ganadoras para ver si X u O ganó.
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }

    // Si no hay ganador
    return null
  }

  // Función más importante que se encarga de actualizar estados, cambiar estados, ver quien es el ganador.
  const updateBoard = (index) => {
    // Sí en el tablero ya hay algo (x ó o) ó ya hay un gandaor: no reescribas o no actualizarlo cuando ya hay algo. 
    if (board[index] || winner) return

    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      alert(`El ganador es: ${newWinner}`)
    }
  }

  // Lo que se renderiza
  return (
    <>
      <main className='board'>
        <h1>Ta Te Ti</h1>
        <section className='game'>
          {
            board.map((_, index) => {
              return (
                <Square key={index} index={index} updateBoard={updateBoard}>
                  {board[index]}
                </Square>
              )
            })
          }
        </section>

        {/* Mostrar visualmente de quién es el turno.
              lo hacemos de la siguiente forma: */}

        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
      </main>
    </>
  )
}


export default App
