import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'

import { TURNS } from './constants/app'
import { checkWinnerFrom, checkEndGame } from './utils/board'

function App() {
  // Estado para inicializar nuestro tablero (arreglo de 9 posiciones)
  const [board, setBoard] = useState(Array(9).fill(null))
  // Estado para saber de quien es el turno
  const [turn, setTurn] = useState(TURNS.X)
  // Estado para que me indique quien es el ganador 
  // null es que no hay ganador, false es que hay empate.
  const [winner, setWinner] = useState(null)


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
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  // Para resetear un juego, un formulario, o algo concreto en la página 
  // Lo que debemos hacer es devolver los estados a su estado original (state que empezaron)
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  // Lo que se renderiza
  return (
    <>
      <main className='board'>
        {/* Mostrar el tablero. */}
        <h1>Ta Te Ti</h1>
        <button onClick={resetGame}>Reiniciar el juego</button>
        <section className='game'>
          {
            board.map((square, index) => {
              return (
                <Square key={index} index={index} updateBoard={updateBoard}>
                  {square}
                </Square>
              )
            })
          }
        </section>

        {/* Mostrar visualmente de quién es el turno. */}
        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner} />
      </main>
    </>
  )
}


export default App
