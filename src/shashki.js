import { EMPTY, STARTING_POSITION } from './positions';
import { Turns, PieceTypes } from './shared';

class RussianShashki {
    constructor() {
        this.boardState = EMPTY();
        this.moveTurn = Turns.White;
        this.isMoveFinished = true;
    }

    getBoardState() {
        return this.boardState;
    }

    getIsMoveFinished() {
        return this.isMoveFinished;
    }

    getMoveTurn() {
        return this.moveTurn;
    }

    setStartingPosition() {
        this.boardState = STARTING_POSITION();
        this.moveTurn = Turns.White;
        this.isMoveFinished = true;
    }

    setPosition(boartState, moveTurn, isMoveFinished) {
        this.boardState = boartState;
        this.moveTurn = moveTurn;
        this.isMoveFinished = isMoveFinished;
    }

    checkMoves(from, checkOnlyTakes) {
        const [fromRow, fromCol] = from;
        const piece = this.boardState[fromRow][fromCol];
        if (piece !== null) {
            if (piece.isTaken || piece.turn !== this.moveTurn) {
                return null;
            }
            const { pieceType } = piece;
            if (pieceType === PieceTypes.King) {
                return null;
            }
            if (pieceType === PieceTypes.Man) {
                return null;
            }
        }
        return null;
    }

    getPossibleMoves(from) {
        return this.checkMoves(from, false);
    }

    ascii() {
        let asciiStr = '   0  1  2  3  4  5  6  7';
        for (let row = 0; row < 8; ++row) {
            asciiStr += `\n\n${row} `;
            const boardRow = this.boardState[row];
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
    }
}

export default RussianShashki;
