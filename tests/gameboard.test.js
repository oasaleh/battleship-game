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

test('Position (1, 9) is does not have a ship: ', () => {
  expect(gameboard.board[1][9].hasShip).toBeFalsy();
});

test('Position (2, 6) is does not have a ship: ', () => {
  expect(gameboard.board[2][6].hasShip).toBeFalsy();
});

test('Position (2, 6) has a ship: ', () => {
  gameboard.board[2][6].hasShip = true;
  expect(gameboard.board[2][6].hasShip).toBeTruthy();
});