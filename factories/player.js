import Gameboard from './gameboard';

function Player(name) {
  this.name = name;
  this.gameboard = new Gameboard();
}

export default Player;
