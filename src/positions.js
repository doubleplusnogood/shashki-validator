import { Turns, PieceTypes } from './shared';

export const EMPTY = () => [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
];

export const STARTING_POSITION = () => [
    [
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
    ],
    [
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
    ],
    [
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
    ],
    [
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
    ],
    [
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
    ],
];
