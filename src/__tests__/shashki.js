import RussianShashki from '../index';
import { Turns, PieceTypes } from '../shared';

test('getPossibleMoves', () => {
    const game = new RussianShashki();
    game.setStartingPosition();

    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.White);

    game.makeMove([5, 2], [4, 3]);

    // assert_eq!(game.board_state(), POSITION_C3_D4);
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.Black);

    game.makeMove([2, 5], [3, 4]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.White);

    game.makeMove([4, 3], [2, 5]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.Black);

    game.makeMove([4, 3], [2, 5]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.Black);

    game.makeMove([1, 4], [3, 6]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.White);

    game.makeMove([5, 6], [4, 7]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.Black);

    game.makeMove([2, 3], [3, 4]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.White);

    expect(game.makeMove([5, 0], [4, 1])).toBe(false);

    game.makeMove([4, 7], [2, 5]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(false);
    expect(game.getMoveTurn()).toBe(Turns.White);

    game.makeMove([2, 5], [4, 3]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.Black);

    game.makeMove([2, 1], [3, 0]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.White);

    game.makeMove([4, 3], [3, 2]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.Black);

    game.makeMove([1, 0], [2, 1]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.White);

    expect(game.makeMove([5, 0], [4, 1])).toBe(false);
    expect(game.makeMove([3, 2], [2, 3])).toBe(false);

    game.makeMove([3, 2], [1, 0]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.Black);

    game.makeMove([1, 2], [2, 1]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.White);

    game.makeMove([1, 0], [3, 2]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.Black);

    game.makeMove([4, 2], [2, 1]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.Black);

    game.makeMove([0, 3], [1, 2]);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.White);

    expect(game.makeMove([3, 2], [2, 1])).toBe(true);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.Black);

    expect(game.makeMove([0, 5], [1, 4])).toBe(true);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.White);

    expect(game.makeMove([2, 1], [0, 3])).toBe(true);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(false);
    expect(game.getMoveTurn()).toBe(Turns.White);
    expect(game.getBoardState()[0][3]).toStrictEqual({
        pieceType: PieceTypes.King,
        isTaken: false,
        turn: Turns.White,
    });

    expect(game.makeMove([0, 3], [2, 1])).toBe(false);

    expect(game.makeMove([0, 3], [4, 7])).toBe(true);
    console.log(game.ascii());
    expect(game.getIsMoveFinished()).toBe(true);
    expect(game.getMoveTurn()).toBe(Turns.Black);
});
