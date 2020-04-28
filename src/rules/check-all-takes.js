import { PieceTypes } from '../shared';
import manCheckTakes from './man-check-takes';
import kingCheckTakes from './king-check-takes';

const checkAllTakes = (boardState, selfTurn) => {
    for (let row = 0; row < 8; ++row) {
        const boardRow = boardState[row];
        for (let col = 0; col < 8; ++col) {
            const piece = boardRow[col];
            if (piece !== null
                && piece.turn === selfTurn
                // && checkTakes(row, col, boardState, selfTurn).length > 0
            ) {
                if (piece.pieceType === PieceTypes.Man) {
                    if (manCheckTakes(row, col, boardState, selfTurn).length > 0) return true;
                }
                if (piece.pieceType === PieceTypes.King) {
                    if (kingCheckTakes(row, col, boardState, selfTurn).length > 0) return true;
                }
            }
        }
    }
    return false;
};

export default checkAllTakes;
