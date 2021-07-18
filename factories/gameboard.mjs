import { Ship } from './ship.mjs';

function Gameboard() {
  this.board = [];
  this.createBoard = function () {
    for (let i = 0; i < 10; i++) {
      this.board.push([]);
      for (let k = 0; k < 10; k++) {
        this.board[i].push({ hasShip: false, isShot: false });
      }
    }
    return this.board;
  };
  this.receiveShot = function (coordX, coordY) {
    this.board[coordY][coordX].isShot = true;
  };

  this.checkIfShotHit = function (coordX, coordY) {
    // return true for hit, false for miss
    return this.board[coordY][coordX].hasShip;
  };
  this.determineShipLocation = function (coordX, coordY, ship, axis) {
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
  this.outOfBoardBounds = function (shipLocation) {
    return shipLocation.every((cords) => cords[0] <= 10 && cords[1] <= 10);
    // for (let i = 0; i < shipLocation.length; i += 1) {
    //   for (let k = 0; k < shipLocation[i].length; k += 1) {
    //     if (shipLocation[i][k] > 10) {
    //       return false;
    //     }
    //   }
    // }
    // return true;
  };
}
const carrier = new Ship('carrier');
const board = new Gameboard();
const player1Board = board.createBoard();
const play1CarrierLocation = board.determineShipLocation(4, 5, carrier, 'horizontal');
console.log(play1CarrierLocation);
console.log(board.outOfBoardBounds(play1CarrierLocation));
