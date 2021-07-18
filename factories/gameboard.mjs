import { Ship } from './ship.mjs';

export function Gameboard() {
  this.grid = [];
  this.createGrid = function () {
    for (let i = 0; i < 10; i++) {
      this.grid.push([]);
      for (let k = 0; k < 10; k++) {
        this.grid[i].push('');
      }
    }
    return this.gird;
  };
  this.deploy = function (shipObject, coordinatesObject, deploymentCoords) {
    
  }
}
let gameboard = new Gameboard();
gameboard.createGrid();
console.log(gameboard.grid);

// this.shipsNeeded = {
//   carrier: 1,
//   battleship: 1,
//   destroyer: 1,
//   submarine: 1,
//   boat: 1,
// };

// this.getShips = function () {
//   let ships = [];
//   for (const key in shipsNeeded) {
//     for (const i = 0; i < shipsNeeded[key]; i++) {
//       ships.push(new Ship(key));
//     }
//   }
//   return ships;
// };
// this.ships = getShips(shipsNeeded);
