import { expect, test, beforeEach } from '@jest/globals';
import Ship from '../factories/ship';

let ship;
beforeEach(() => {
  ship = new Ship('carrier');
});
const hit1 = ['', 'hit', '', '', ''];
const hit2 = ['', '', 'hit', '', ''];
const hit4 = ['', '', '', '', 'hit'];

test('Ship is correctly choosing destroyer as type:', () => {
  const destroyer = new Ship('destroyer');
  expect(destroyer.name).toBe('destroyer');
});
test('Ship is correctly choosing number of blocks: ', () => {
  expect(ship.size).toBe(5);
});
test('Ship is correctly choosing number of blocks: ', () => {
  const battleship = new Ship('battleship');
  expect(battleship.size).toBe(4);
});
test('Ship is correctly choosing number of blocks: ', () => {
  const destroyer = new Ship('destroyer');
  expect(destroyer.size).toBe(3);
});
test('Ship is correctly choosing number of blocks: ', () => {
  const submarine = new Ship('submarine');
  expect(submarine.size).toBe(3);
});
test('Ship is correctly choosing number of blocks: ', () => {
  const boat = new Ship('boat');
  expect(boat.size).toBe(2);
});

test('Position 1 is hit', () => {
  expect(ship.hit(1)).toEqual(hit1);
});
test('Position 2 is hit', () => {
  expect(ship.hit(2)).toEqual(hit2);
});
test('Position 4 is hit', () => {
  expect(ship.hit(4)).toEqual(hit4);
});

test('Destroyer has an array of 3 empty elements', () => {
  const destroyer = new Ship('destroyer');
  expect(destroyer.shipSize).toEqual(new Array(3).fill(''));
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
