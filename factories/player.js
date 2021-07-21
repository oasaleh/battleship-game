import Gameboard from './gameboard.js';

function Player(name) {
  this.name = name;
  this.gameboard = new Gameboard();
  this.isActive = false;
}
Player.prototype.toggleActive = function toggleActive() {
  this.isActive = !this.isActive;
};
const player01 = new Player('Omar');
console.log(player01.gameboard.board[0][0].hasShip);
export default Player;
