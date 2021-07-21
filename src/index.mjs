import Player from './factories/player.mjs';
import Ship from './factories/ship.mjs';
import Gameboard from './factories/gameboard.mjs';

const player01Board = document.getElementById('player01Board');
const player02Board = document.getElementById('player02Board');
let playerOne;
let playerTwo;

function removeWelcomeScreen() {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('welcomeScreen').style.visibility = 'hidden';
}
function grabCoords(e) {
  console.log(`(x, y)\n${e.target.coordX}, ${e.target.coordY}`);
  console.log([e.target.coordX, e.target.coordY]);
  let coordX = e.target.coordX;
  let coordY = e.target.coordY;
  return [coordX, coordY];
}
function renderBoards(rows, cols) {
  player01Board.style.setProperty('--grid-rows', rows);
  player02Board.style.setProperty('--grid-rows', rows);
  player01Board.style.setProperty('--grid-cols', cols);
  player02Board.style.setProperty('--grid-cols', cols);

  for (let r = 0; r < 10; r += 1) {
    for (let c = 0; c < 10; c += 1) {
      const cell1 = document.createElement('div');
      const cell2 = document.createElement('div');
      cell1.coordY = r + 1;
      cell1.coordX = c + 1;
      cell2.coordY = r + 1;
      cell2.coordX = c + 1;
      cell1.addEventListener('click', grabCoords);
      cell2.addEventListener('click', grabCoords);

      player01Board.appendChild(cell1).className = 'grid-item1';
      player02Board.appendChild(cell2).className = 'grid-item2';
    }
  }
}
function create2Players() {
  const player01Name = document.getElementById('name').value;
  const player02Name = 'ai';
  playerOne = new Player(player01Name);
  playerTwo = new Player(player02Name);
}
function startPlay() {
  create2Players();
  document.getElementById('name').value = '';
  renderBoards(10, 10);
  removeWelcomeScreen();
  return false;
}
document.getElementById('greetingForm').onsubmit = startPlay;
