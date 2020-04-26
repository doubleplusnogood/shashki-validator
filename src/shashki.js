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
}

export default RussianShashki;
