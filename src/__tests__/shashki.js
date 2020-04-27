import RussianShashki from '../index';

test('getPossibleMoves', () => {
    const game = new RussianShashki();
    game.setStartingPosition();
    console.log(game.ascii());
    expect(game.getPossibleMoves([5, 0]))
        .toStrictEqual({ isTake: false, moves: [{ takenPiece: null, to: [4, 1] }] });
    console.log(game.makeMove([5, 0], [4, 1]));
    console.log(game.ascii());
    console.log(game.makeMove([2, 3], [3, 2]));
    console.log(game.ascii());
    console.log(game.makeMove([4, 1], [2, 3]));
    console.log(game.ascii());
    console.log(game.getMoveTurn());
});
