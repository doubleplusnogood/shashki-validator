import { POSITION_WK_70_16_BK_43_36_27, POSITION_WK_43, POSITION_WK_72_BM_54_45 } from '../positions';
import king from '../rules/king';

test('king', () => {
    expect(king.checkMoves([7, 0], POSITION_WK_70_16_BK_43_36_27, false))
        .toStrictEqual({
            isTake: true,
            moves: [
                {
                    to: [3, 4],
                    takenPiece: [4, 3],
                },
                {
                    to: [2, 5],
                    takenPiece: [4, 3],
                },
            ],
        });

    expect(king.checkMoves([4, 3], POSITION_WK_70_16_BK_43_36_27, false))
        .toStrictEqual({
            isTake: true,
            moves: [
                {
                    to: [0, 7],
                    takenPiece: [1, 6],
                },
                {
                    to: [7, 6],
                    takenPiece: [6, 5],
                },
            ],
        });

    expect(king.checkMoves([2, 7], POSITION_WK_70_16_BK_43_36_27, false))
        .toStrictEqual({
            isTake: true,
            moves: [{
                to: [0, 5],
                takenPiece: [1, 6],
            }],
        });

    expect(king.checkMoves([3, 6], POSITION_WK_70_16_BK_43_36_27, false))
        .toStrictEqual(null);

    expect(king.checkMoves([4, 3], POSITION_WK_43, false))
        .toStrictEqual({
            isTake: false,
            moves: [
                {
                    to: [3, 2],
                    takenPiece: null,
                },
                {
                    to: [2, 1],
                    takenPiece: null,
                },
                {
                    to: [1, 0],
                    takenPiece: null,
                },
                {
                    to: [3, 4],
                    takenPiece: null,
                },
                {
                    to: [2, 5],
                    takenPiece: null,
                },
                {
                    to: [1, 6],
                    takenPiece: null,
                },
                {
                    to: [0, 7],
                    takenPiece: null,
                },
                {
                    to: [5, 2],
                    takenPiece: null,
                },
                {
                    to: [6, 1],
                    takenPiece: null,
                },
                {
                    to: [7, 0],
                    takenPiece: null,
                },
                {
                    to: [5, 4],
                    takenPiece: null,
                },
                {
                    to: [6, 5],
                    takenPiece: null,
                },
                {
                    to: [7, 6],
                    takenPiece: null,
                },
            ],
        });

    expect(king.checkMoves([7, 2], POSITION_WK_72_BM_54_45, false))
        .toStrictEqual({
            isTake: false,
            moves: [
                {
                    to: [6, 1],
                    takenPiece: null,
                },
                {
                    to: [5, 0],
                    takenPiece: null,
                },
                {
                    to: [6, 3],
                    takenPiece: null,
                },
            ],
        });
});
