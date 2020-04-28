/* eslint-disable import/prefer-default-export */
import {
    isCoordInRange,
    getOppositeTurn,
    Turns,
    checkAllTakes,
} from './shared';

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
            const nextRow = fromRow + dirRow;
            const nextCol = fromCol + dirCol;

            if (isCoordInRange(nextRow) && isCoordInRange(nextCol)) {
                if (boardState[nextRow][nextCol] === null) {
                    possibleMoves.push({
                        to: [nextRow, nextCol],
                        takenPiece: null,
                    });
                }
            }
        };

        if (selfTurn === Turns.White) {
            handleDirectionSimpleMove(-1, -1);
            handleDirectionSimpleMove(-1, 1);
        } else {
            handleDirectionSimpleMove(1, -1);
            handleDirectionSimpleMove(1, 1);
        }
    }

    return possibleMoves.length > 0 ? { isTake: canTake, moves: possibleMoves } : null;
};

export default {
    checkMoves,
};
