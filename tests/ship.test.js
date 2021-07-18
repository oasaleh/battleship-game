import { expect, test } from '@jest/globals';
import { Ship } from '../factories/ship';

let ship;
beforeEach(() => {
  ship = new Ship('carrier');
});
const hit1 = ['', 'hit', '', '', ''];
const hit2 = ['', '', 'hit', '', ''];
const hit4 = ['', '', '', '', 'hit'];
test('Position 1 is hit', () => {
  expect(ship.hit(1)).toEqual(hit1);
});
test('Position 2 is hit', () => {
  expect(ship.hit(2)).toEqual(hit2);
});
test('Position 4 is hit', () => {
  expect(ship.hit(4)).toEqual(hit4);
});

test('Ship sunk when all position are hit', () => {
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  ship.hit(4);
  expect(ship.isSunk()).toBeTruthy();
});
test('Ship did not sink as position 2 still there', () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(3);
    ship.hit(4);
    expect(ship.isSunk()).toBeFalsy();
  });
