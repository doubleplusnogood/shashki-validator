import { isCoordInRange, getOppositeTurn } from '../shared';

const checkTakes = (fromRow, fromCol, boardState, selfTurn) => {
    const possibleMoves = [];

    const handleDirectionTake = (dirRow, dirCol, turn) => {
        let nextRow = fromRow + dirRow;
        let nextCol = fromCol + dirCol;
        let isFirstPieceFound = false;

        while (isCoordInRange(nextRow) && isCoordInRange(nextCol) && !isFirstPieceFound) {
            const piece = boardState[nextRow][nextCol];
            if (piece !== null) {
                isFirstPieceFound = true;
                const { isTaken, turn: pieceTurn } = piece;
                if (!isTaken) {
                    const oppositeTurn = getOppositeTurn(turn);
                    if (pieceTurn === oppositeTurn) {
                        let afterTakeRow = nextRow + dirRow;
                        let afterTakeCol = nextCol + dirCol;

                        while (isCoordInRange(afterTakeRow) && isCoordInRange(afterTakeCol)) {
                            if (boardState[afterTakeRow][afterTakeCol] === null) {
                                possibleMoves.push({
                                    to: [afterTakeRow, afterTakeCol],
                                    takenPiece: [nextRow, nextCol],
                                });
                            } else {
                                break;
                            }
                            afterTakeRow += dirRow;
                            afterTakeCol += dirCol;
                        }
                    }
                }
            }

            nextRow += dirRow;
            nextCol += dirCol;
        }
    };

    handleDirectionTake(-1, -1, selfTurn);
    handleDirectionTake(-1, 1, selfTurn);
    handleDirectionTake(1, -1, selfTurn);
    handleDirectionTake(1, 1, selfTurn);

    return possibleMoves;
};

export default checkTakes;
