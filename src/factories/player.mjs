import Gameboard from './gameboard.mjs';

function Player(name) {
  this.name = name;
  this.gameboard = new Gameboard();
  this.isActive = false;
  this.spots = 17;
}
Player.prototype.toggleActive = function toggleActive() {
  this.isActive = !this.isActive;
};
Player.prototype.destroy = function destroy() {
  this.spots -= 1;
};
// const player01 = new Player('Omar');
// console.log(player01.gameboard.board[0][0].hasShip);
export default Player;
