export const Turns = {
    White: true,
    Black: false,
};

export const getOppositeTurn = (turn) => !turn;

export const PieceTypes = {
    Man: 0,
    King: 1,
};

export const isCoordInRange = (coord) => (coord >= 0) && (coord <= 7);

export const cmpCoords = (a, b) => a[0] === b[0] && a[1] === b[1];

export const clonePiece = (piece) => ({
    turn: piece.turn,
    isTaken: piece.isTaken,
    pieceType: piece.pieceType,
});

export const checkAllTakes = (boardState, selfTurn, checkTakes) => {
    for (let row = 0; row < 8; ++row) {
        const boardRow = boardState[row];
        for (let col = 0; col < 8; ++col) {
            const piece = boardRow[col];
            if (piece !== null
                && piece.turn === selfTurn
                && checkTakes(row, col, boardState, selfTurn).length > 0
            ) {
                return true;
            }
        }
    }
    return false;
};
