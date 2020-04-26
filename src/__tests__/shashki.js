import RussianShashki from '../index';

test('getPossibleMoves', () => {
    const game = new RussianShashki();
    game.setStartingPosition();
    expect(game.getPossibleMoves([5, 0]))
        .toStrictEqual({ isTake: false, moves: [{ takenPiece: null, to: [4, 1] }] });
});
