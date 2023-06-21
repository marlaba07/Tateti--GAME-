import PropTypes from 'prop-types';

export const Square = ({ children, isSelected, updateBoard, index }) => {
    // El cuadrado del tablero
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

Square.propTypes = {
    children: PropTypes.node.isRequired,
    isSelected: PropTypes.bool.isRequired,
    updateBoard: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default Square

