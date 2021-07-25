import Player from '../factories/player.mjs';
import Ship from '../factories/ship.mjs';
import Gameboard from '../factories/gameboard.mjs';

// Generate random x and y coordinates and select either vertical or horizontal.
// Whenever you'd like to implement user input, this function will not be used
// for user, but only for AI. Another function must be used but return the same array
function randomCoord() {
  const layouts = ['horizontal', 'vertical'];
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  const layout = layouts[Math.floor(Math.random() * layouts.length)];
  return [x, y, layout];
}

function whichIsActive(player, opponent) {
  const activePlayer = player.isActive ? player : opponent;
  return activePlayer;
}

// Deploy each ship in an empty and within boarders location
function deploy(player, ship) {
  const vessel = new Ship(ship);
  let coords = randomCoord();
  let vesselLocationPoints = player.gameboard.getLocationPoints(
    coords[0],
    coords[1],
    vessel,
    coords[2]
  );
  // Make sure there is not another ship in the same location,
  // and that the ship is within borders
  while (
    !player.gameboard.withinBorders(vesselLocationPoints) ||
    player.gameboard.isThereAnotherShip(vesselLocationPoints)
  ) {
    coords = randomCoord();
    vesselLocationPoints = player.gameboard.getLocationPoints(
      coords[0],
      coords[1],
      vessel,
      coords[2]
    );
  }
  player.gameboard.deploy(vessel, vesselLocationPoints);
}

// Deploy the entire fleet
function deployFleet(player) {
  const fleet = ['carrier', 'battleship', 'destroyer', 'submarine', 'boat'];
  fleet.forEach((element) => {
    deploy(player, element);
  });
  console.log(player.gameboard.board);
}

export default deployFleet;
