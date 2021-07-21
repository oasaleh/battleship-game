// import Ship from './ship.mjs';

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
  this.board[coordY][coordX].isShot = true;
};
Gameboard.prototype.checkIfShotHit = function checkIfShotHit(coordX, coordY) {
  // return true for hit, false for miss
  return this.board[coordY][coordX].hasShip;
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
  return shipLocation.every((cords) => cords[0] < 10 && cords[1] < 10);
};
Gameboard.prototype.isThereAnotherShip = function isThereAnotherShip(shipLocation) {
  for (let i = 0; i < shipLocation.length; i += 1) {
    if (this.board[shipLocation[i][1]][shipLocation[i][0]].hasShip) {
      return true;
    }
  }
  return false;
};
Gameboard.prototype.deploy = function deploy(ship, shipLocation) {
  for (let i = 0; i < shipLocation.length; i += 1) {
    this.board[shipLocation[i][1]][shipLocation[i][0]].shipName = ship.name;
    this.board[shipLocation[i][1]][shipLocation[i][0]].hasShip = true;
  }
  return this.board;
};
// const carrier = new Ship('carrier');
// console.log(carrier);
// const gameboard = new Gameboard();
// const player1Board = gameboard.board;
// gameboard.receiveShot(3, 3);

// const play1CarrierLocation = gameboard.getLocationPoints(1, 2, carrier, 'horizontal');
// console.log(play1CarrierLocation);
// console.log('Is the ship within board borders? ' + gameboard.withinBorders(play1CarrierLocation));

// gameboard.board[2][2].hasShip = true;
// console.log(
//   'Is the ship colliding with another ship? ' + gameboard.isThereAnotherShip(play1CarrierLocation)
// );
// // gameboard.deploy(carrier, play1CarrierLocation);
// console.log(gameboard.board);
export default Gameboard;
