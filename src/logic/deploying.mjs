import Player from '../factories/player.mjs';
import Ship from '../factories/ship.mjs';
import Gameboard from '../factories/gameboard.mjs';

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
  // and that the ship is within borders.
  while (
    !player.gameboard.withinBorders(vesselLocationPoints) &&
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

function deployFleet(player) {
  const fleet = ['carrier', 'battleship', 'destroyer', 'submarine', 'boat'];
  fleet.forEach((element) => {
    deploy(player, element);
  });
  //    check which player is active, assign activePlayer to active player
  // const activePlayer = whichIsActive(player, opponent);
  //    grab coords and put them in x and y vars
  // const x = coordsArray[0];
  // const y = coordsArray[1];
  // start using them in Gameboard on the OPPOsite active player
  //do all checks one by one
  //rerender after each deplyment?
  console.log(player.gameboard.board);
}

export default deployFleet;
