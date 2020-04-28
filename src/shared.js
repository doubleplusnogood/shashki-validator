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

export const ascii = (boardState) => {
    let asciiStr = '   0  1  2  3  4  5  6  7';
    for (let row = 0; row < 8; ++row) {
        asciiStr += `\n\n${row} `;
        const boardRow = boardState[row];
        for (let col = 0; col < 8; ++col) {
            const piece = boardRow[col];
            if (piece === null) {
                asciiStr += ' . ';
            } else {
                const { pieceType, turn } = piece;
                if (pieceType === PieceTypes.King) {
                    if (turn === Turns.White) {
                        asciiStr += ' W ';
                    } else {
                        asciiStr += ' B ';
                    }
                }
                if (pieceType === PieceTypes.Man) {
                    if (turn === Turns.White) {
                        asciiStr += ' w ';
                    } else {
                        asciiStr += ' b ';
                    }
                }
            }
        }
    }
    return asciiStr;
};
