import Ship from './ship.js';

function Gameboard() {
  function createBoard() {
    const board = [];
    for (let i = 0; i < 10; i += 1) {
      board.push([]);
      for (let k = 0; k < 10; k += 1) {
        board[i].push({ hasShip: false, isShot: false });
      }
    }
    return board;
  }
  this.board = createBoard();
}
Gameboard.prototype.receiveShot = function receiveShot(coordX, coordY) {
  this.board[coordX][coordY].isShot = true;
};
Gameboard.prototype.checkIfShotHit = function checkIfShotHit(coordX, coordY) {
  // return true for hit, false for miss
  return this.board[coordX][coordY].hasShip;
};
Gameboard.prototype.getLocationPoints = function getLocationPoints(coordX, coordY, ship, axis) {
  const shipLocation = [];
  for (let i = 0; i < ship.size; i += 1) {
    if (axis === 'horizontal') {
      // shipLocation[coordY] = coordY;
      shipLocation.push([coordX + i, coordY]);
    } else {
      shipLocation.push([coordX, coordY + i]);
    }
  }
  return shipLocation;
};
Gameboard.prototype.withinBorders = function withinBorders(shipLocation) {
  return shipLocation.every((cords) => cords[0] <= 10 && cords[1] <= 10);
};
Gameboard.prototype.checkCollision = function checkCollision(shipLocation, board) {
  for (let i = 0; i < shipLocation.length; i += 1) {
    return board[shipLocation[i][0]][shipLocation[i][1]].hasShip;
  }
};
const carrier = new Ship('carrier');
const gameboard = new Gameboard();
const player1Board = gameboard.board;
gameboard.receiveShot(3, 3);
console.log(gameboard.board[3][3]);
const play1CarrierLocation = gameboard.getLocationPoints(4, 5, carrier, 'horizontal');
console.log(play1CarrierLocation);
console.log('Is the ship within board borders? ' + gameboard.withinBorders(play1CarrierLocation));
console.log(
  'Is the ship colliding with another ship? ' +
    gameboard.checkCollision(play1CarrierLocation, player1Board)
);
export default Gameboard;
