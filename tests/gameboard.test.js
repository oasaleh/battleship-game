import { expect, test } from '@jest/globals';
import Ship from '../factories/ship.js';
import Gameboard from '../factories/gameboard.js';

let ship;
let gameboard;
beforeEach(() => {
  ship = new Ship('destroyer');
  gameboard = new Gameboard();
});

test('Position (4, 6) is shot: ', () => {
  gameboard.receiveShot(4, 6);
  expect(gameboard.board[4][6].isShot).toBeTruthy();
});

test('Position (2, 3) is not shot: ', () => {
  gameboard.receiveShot(4, 6);
  expect(gameboard.board[2][6].isShot).toBeFalsy();
});