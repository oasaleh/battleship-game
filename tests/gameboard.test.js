import { expect, test } from '@jest/globals';
import Ship from '../factories/ship.js';
import Gameboard from '../factories/gameboard.js';

let ship;
let gameboard;
beforeEach(() => {
  ship = new Ship('carrier');
  gameboard = new Gameboard();
});
/* --------------------------------- hasShip -------------------------------- */
test('Position (1, 9) does not have a ship: ', () => {
  expect(gameboard.board[1][9].hasShip).toBeFalsy();
});

test('Position (2, 6) is does not have a ship: ', () => {
  expect(gameboard.board[2][6].hasShip).toBeFalsy();
});

test('Position (2, 6) has a ship: ', () => {
  gameboard.board[2][6].hasShip = true;
  expect(gameboard.board[2][6].hasShip).toBeTruthy();
});
/* ------------------------------- receiveShot ------------------------------ */
test('Position (4, 6) is not shot: ', () => {
  gameboard.receiveShot(4, 6);
  expect(gameboard.board[4][6].isShot).toBeFalsy();
});

test('Position (2, 3) is not shot: ', () => {
  gameboard.receiveShot(4, 6);
  expect(gameboard.board[2][6].isShot).toBeFalsy();
});
/* ----------------------------- checkIfShotHit ----------------------------- */
test('Shot hit a ship at (4, 5): ', () => {
  gameboard.board[5][4].hasShip = true;
  expect(gameboard.checkIfShotHit(4, 5)).toBeTruthy();
});

/* ---------------------------- getLocationPoints --------------------------- */
test('Horizontal coordinates has sequential x values: ', () => {
  const location = gameboard.getLocationPoints(5, 2, ship, 'horizontal');
  expect(location[0][0]).toBe(5);
  expect(location[1][0]).toBe(6);
  expect(location[2][0]).toBe(7);
  expect(location[3][0]).toBe(8);
  expect(location[4][0]).toBe(9);
});
test('Vertical coordinates has same x values: ', () => {
  const location = gameboard.getLocationPoints(5, 2, ship, 'vertical');
  expect(location[0][0]).toBe(5);
  expect(location[1][0]).toBe(5);
  expect(location[2][0]).toBe(5);
  expect(location[3][0]).toBe(5);
  expect(location[4][0]).toBe(5);
});
/* ------------------------------ withinBorders ----------------------------- */
test('Ship is within borders: ', () => {
  const vessel = new Ship('carrier');
  const location = gameboard.getLocationPoints(5, 2, vessel, 'vertical');
  expect(gameboard.withinBorders(location)).toBeTruthy();
});
test('Ship is within borders: ', () => {
  const vessel = new Ship('carrier');
  const location = gameboard.getLocationPoints(6, 6, vessel, 'horizontal');
  expect(gameboard.withinBorders(location)).toBeFalsy();
});
test('Ship is within borders: ', () => {
  const vessel = new Ship('boat');
  const location = gameboard.getLocationPoints(5, 9, vessel, 'vertical');
  expect(gameboard.withinBorders(location)).toBeFalsy();
});
test('Ship is within borders: ', () => {
  const vessel = new Ship('destroyer');
  const location = gameboard.getLocationPoints(6, 10, vessel, 'horizontal');
  expect(gameboard.withinBorders(location)).toBeFalsy();
});
test('Ship is within borders: ', () => {
  const vessel = new Ship('battleship');
  const location = gameboard.getLocationPoints(2, 2, vessel, 'vertical');
  expect(gameboard.withinBorders(location)).toBeTruthy();
});
/* --------------------------- isThereAnotherShip --------------------------- */
test('Ship collided: ', () => {
  const vessel1 = new Ship('carrier');
  const vessel2 = new Ship('carrier');
  const location1 = gameboard.getLocationPoints(1, 2, vessel1, 'horizontal');
  const location2 = gameboard.getLocationPoints(2, 2, vessel2, 'vertical');
  gameboard.board[2][1].hasShip = true;
  expect(gameboard.isThereAnotherShip(location1)).toBeTruthy();
});
test('Ship collided: ', () => {
  const vessel1 = new Ship('carrier');
  const vessel2 = new Ship('carrier');
  const location1 = gameboard.getLocationPoints(1, 2, vessel1, 'horizontal');
  const location2 = gameboard.getLocationPoints(2, 2, vessel2, 'vertical');
  gameboard.board[2][2].hasShip = true;
  expect(gameboard.isThereAnotherShip(location1)).toBeTruthy();
});
test('There is not another ship here: ', () => {
  const vessel1 = new Ship('carrier');
  const vessel2 = new Ship('carrier');
  const location1 = gameboard.getLocationPoints(1, 2, vessel1, 'horizontal');
  const location2 = gameboard.getLocationPoints(2, 2, vessel2, 'vertical');
  expect(gameboard.isThereAnotherShip(location1)).toBeFalsy();
});
test('There is another ship here: ', () => {
  const location = [
    [3, 4],
    [2, 4],
  ];
  gameboard.board[4][3].hasShip = true;
  expect(gameboard.isThereAnotherShip(location)).toBeTruthy();
});
test('There is not another ship here: ', () => {
  const location = [
    [3, 4],
    [2, 4],
  ];
  // gameboard.board[4][3].hasShip = true;
  expect(gameboard.isThereAnotherShip(location)).toBeFalsy();
});
/* --------------------------------- deploy --------------------------------- */
test('Deploy ship at (2, 3) vertically: ', () => {
  const vessel1 = new Ship('carrier');
  const location1 = gameboard.getLocationPoints(2, 3, vessel1, 'vertical');
  gameboard.deploy(vessel1, location1);
  expect(gameboard.board[3][2].hasShip).toBeTruthy();
  expect(gameboard.board[4][2].hasShip).toBeTruthy();
  expect(gameboard.board[5][2].hasShip).toBeTruthy();
  expect(gameboard.board[6][2].hasShip).toBeTruthy();
  expect(gameboard.board[7][2].hasShip).toBeTruthy();
});

test('Deploy ship at (2, 3) vertically: ', () => {
  const vessel1 = new Ship('carrier');
  const location1 = gameboard.getLocationPoints(2, 3, vessel1, 'horizontal');
  gameboard.deploy(vessel1, location1);
  expect(gameboard.board[3][2].hasShip).toBeTruthy();
  expect(gameboard.board[3][3].hasShip).toBeTruthy();
  expect(gameboard.board[3][4].hasShip).toBeTruthy();
  expect(gameboard.board[3][5].hasShip).toBeTruthy();
  expect(gameboard.board[3][6].hasShip).toBeTruthy();
});
