/* eslint-disable import/prefer-default-export */
import { isCoordInRange } from '../shared';
import checkTakes from './king-check-takes';
import checkAllTakes from './check-all-takes';

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
                } else {
                    break;
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
