import RussianShashki from '../index';
import { Turns } from '../shared';

test('adds 1 + 2 to equal 3', () => {
    const game = new RussianShashki();
    expect(game.getMoveTurn()).toBe(Turns.White);
});
