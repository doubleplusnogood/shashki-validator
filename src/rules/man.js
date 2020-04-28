/* eslint-disable import/prefer-default-export */
import {
    isCoordInRange,
    Turns,
} from '../shared';
import checkAllTakes from './check-all-takes';
import checkTakes from './man-check-takes';

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
