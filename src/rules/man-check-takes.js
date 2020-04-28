import { isCoordInRange, getOppositeTurn } from '../shared';

const checkTakes = (fromRow, fromCol, boardState, selfTurn) => {
    const possibleMoves = [];

    const handleDirectionTake = (dirRow, dirCol, turn) => {
        const nextRow = fromRow + dirRow;
        const nextCol = fromCol + dirCol;

        if (isCoordInRange(nextRow) && isCoordInRange(nextCol)) {
            const piece = boardState[nextRow][nextCol];
            if (piece !== null) {
                const { isTaken, turn: pieceTurn } = piece;
                if (!isTaken) {
                    const oppositeTurn = getOppositeTurn(turn);
                    if (pieceTurn === oppositeTurn) {
                        const afterTakeRow = nextRow + dirRow;
                        const afterTakeCol = nextCol + dirCol;

                        if (isCoordInRange(afterTakeRow) && isCoordInRange(afterTakeCol)) {
                            if (boardState[afterTakeRow][afterTakeCol] === null) {
                                possibleMoves.push({
                                    to: [afterTakeRow, afterTakeCol],
                                    takenPiece: [nextRow, nextCol],
                                });
                            }
                        }
                    }
                }
            }
        }
    };

    handleDirectionTake(-1, -1, selfTurn);
    handleDirectionTake(-1, 1, selfTurn);
    handleDirectionTake(1, -1, selfTurn);
    handleDirectionTake(1, 1, selfTurn);

    return possibleMoves;
};

export default checkTakes;
