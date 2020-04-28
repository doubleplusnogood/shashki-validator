/* eslint-disable import/prefer-default-export */
import { isCoordInRange, getOppositeTurn, checkAllTakes } from './shared';

const checkTakes = (fromRow, fromCol, boardState, selfTurn) => {
    const possibleMoves = [];

    const handleDirectionTake = (dirRow, dirCol, turn) => {
        let nextRow = fromRow + dirRow;
        let nextCol = fromCol + dirCol;

        while (isCoordInRange(nextRow) && isCoordInRange(nextCol)) {
            const piece = boardState[nextRow][nextCol];
            if (piece !== null) {
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

const checkMoves = (from, boardState, checkOnlyTakes) => {
    const [fromRow, fromCol] = from;
    const selfTurn = boardState[fromRow][fromCol].turn;

    const possibleMoves = checkTakes(fromRow, fromCol, boardState, selfTurn);

    let canTake = possibleMoves.length > 0;

    if (!canTake) {
        canTake = checkAllTakes(boardState, selfTurn, checkTakes);
    }

    if (!canTake && !checkOnlyTakes) {
        const handleDirectionSimpleMove = (dirRow, dirCol) => {
            let nextRow = fromRow + dirRow;
            let nextCol = fromCol + dirCol;

            while (isCoordInRange(nextRow) && isCoordInRange(nextCol)) {
                if (boardState[nextRow][nextCol] === null) {
                    possibleMoves.push({
                        to: [nextRow, nextCol],
                        takenPiece: null,
                    });
                }

                nextRow += dirRow;
                nextCol += dirCol;
            }
        };

        handleDirectionSimpleMove(-1, -1);
        handleDirectionSimpleMove(-1, 1);
        handleDirectionSimpleMove(1, -1);
        handleDirectionSimpleMove(1, 1);
    }

    return possibleMoves.length > 0 ? { isTake: canTake, moves: possibleMoves } : null;
};

export default {
    checkMoves,
};
