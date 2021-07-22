import Player from './factories/player.mjs';
import Ship from './factories/ship.mjs';
import Gameboard from './factories/gameboard.mjs';

function deploy(player, opponent, coordsArray) {
  //    check which player is active, assign activePlayer to active player
  const activePlayer = whichIsActive(player, opponent);
  //    grab coords and put them in x and y vars
  const x = coordsArray[0];
  const y = coordsArray[1];
  // start using them in Gameboard on the OPPOsite active player
  //do all checks one by one
  //rerender after each deplyment?
}

function whichIsActive(player, opponent) {
  const activePlayer = player.isActive ? player : opponent;
  return activePlayer;
}
export default deploy;
