import { Coordinates } from './coordinates';
import { Ship } from './ship';
const shipsNeeded = {
  carrier: 1,
  battleship: 2,
  destroyer: 3,
  submarine: 4,
  boat: 5,
};
export function Gameboard() {
  let ships = getShips(shipsNeeded);
  const getShips = function (shipsNeeded) {
    let ships = [];
    for (const key in shipsNeeded) {
      for (const i = 0; i < shipsNeeded[key]; i++) {
        ships.push(new Ship(key));
      }
    }
    return ships;
  };

let coordinations = []
const getCoordinations = function() {
    for (const i; i <= 10; i++){
        coordinations.push(['',''])
    }
}
}
