import Gameboard from './gameboard';

function Player(name) {
  this.name = name;
  this.gameboard = new Gameboard();
  this.active = false;
}
Player.prototype.toggleActive = function toggleActive() {
  this.active = !this.active;
};
export default Player;
