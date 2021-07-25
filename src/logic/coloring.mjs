import Player from '../factories/player.mjs';
import Ship from '../factories/ship.mjs';
import Gameboard from '../factories/gameboard.mjs';

function color(player) {
  if (player.name !== 'ai') {
    const columns = player.gameboard.board[0].length;
    const rows = player.gameboard.board[0].length;
  
    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < columns; c += 1) {
        if (player.gameboard.board[r][c].hasShip) {

        }
  }
}

export default color;
