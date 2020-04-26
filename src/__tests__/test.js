import RussianShashki from '../index';
import { Turns } from '../shared';

test('adds 1 + 2 to equal 3', () => {
    const game = new RussianShashki();
    console.log(game.ascii());
    game.setStartingPosition();
    console.log(game.ascii());
    expect(game.getMoveTurn()).toBe(Turns.White);
});
