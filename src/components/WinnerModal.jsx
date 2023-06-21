import PropTypes from 'prop-types';
import Square from "./Square"

export function WinnerModal({ winner, resetGame }) {
    if (winner == null) return null
    const winnerText = winner === false ? 'Empate' : 'Ganó'

    return (
        <section className='winner'>
            {/* Mostrar Modal para que aparezca quién ganó. */}
            <div className='text'>
                <h2>{winnerText}</h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Emprezar de nuevo</button>
                </footer>
            </div>
        </section >
    )
}

WinnerModal.propTypes = {
    winner: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    resetGame: PropTypes.func.isRequired,
};

export default WinnerModal;