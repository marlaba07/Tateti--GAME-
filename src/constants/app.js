// Constantes para identificar los turnos. 
export const TURNS = {
    X: 'x',
    O: 'o'
}

// Definir combinaciones ganadoras como consantes [No es la más optima, pero si la más fácil]
export const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]