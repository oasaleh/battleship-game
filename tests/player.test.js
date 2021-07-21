import { beforeEach, expect, test } from '@jest/globals';
import Ship from '../factories/ship';
import Gameboard from '../factories/gameboard.js';
import Player from '../factories/player.js';

let player01;
beforeEach(() => {
  player01 = new Player('Omar');
});
/* ------------------------------- properties ------------------------------- */
test('Player01 name property is Omar: ', () => {
  expect(player01.name).toBe('Omar');
});
test('Player01 has an empty board: ', () => {
  expect(player01.gameboard.board[0][0].hasShip).toEqual(false);
});
test('Player01 status is active: ', () => {
  player01.isActive = true;
  expect(player01.isActive).toBe(true);
});
test('Player01 status is inactive: ', () => {
  expect(player01.isActive).toBe(false);
});
/* ------------------------------ toggleActive ------------------------------ */
test('Check if activity status changed to being active/true: ', () => {
  player01.toggleActive();
  expect(player01.isActive).toBe(true);
});
