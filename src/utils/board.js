import { WINNER_COMBOS } from '../constants/app.js'

export const checkWinnerFrom = (boardToCheck) => {
    // Método para saber quien es el ganador ó si hay empate. 
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

export const checkEndGame = (newBoard) => {
    // Chequear si hay empate
    // Revisamos si hay un empate
    // Si no hay espacios vacios en el tablero
    return newBoard.every((square) => square != null) // 'Sí TODAS (.every) las posiciones del array newBoard son distintas que null significa que ya terminó el juego.'

    // Como sabemos todos los valores del tablero son inicializados en 'null', por ende acorde vayamos jugando los valores van cambiando a 'x' ó a 'o'. 
    // Cuando esto pase el tablero debe evaluar si hay un ganador o sí hay un empate. 
}