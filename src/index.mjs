import Player from './factories/player.mjs';
import Ship from './factories/ship.mjs';
import Gameboard from './factories/gameboard.mjs';
import deployFleet from './logic/deployment.mjs';

const player01Board = document.getElementById('player01Board');
const player02Board = document.getElementById('player02Board');
// let playerOne;
// let playerTwo;

function removeWelcomeScreen() {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('welcomeScreen').style.visibility = 'hidden';
}
function sendCoords(e) {
  console.log(e)
  console.log(`(x, y)\n${e.target.coordX}, ${e.target.coordY}`);
  console.log([e.target.coordX, e.target.coordY]);
  const { coordX, coordY } = e.target;
  const coordsArray = [coordX, coordY];
  // deployHere
  // return coordsArray;
}
function renderBoard(board, htmlBoardContainer) {
  // shampoo grid

  const columns = board[0].length;
  const rows = board.length;

  htmlBoardContainer.style.setProperty('--grid-rows', rows);
  htmlBoardContainer.style.setProperty('--grid-cols', columns);

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < columns; c += 1) {
      // if (board[r][c].hasShip) {

      // }
      const cell = document.createElement('div');
      cell.className = 'grid-item1';
      cell.coordY = r + 1;
      cell.coordX = c + 1;
      cell.addEventListener('click', sendCoords);
      htmlBoardContainer.appendChild(cell);
    }
  }
}
function create2Players() {
  const player01Name = document.getElementById('name').value;
  const player02Name = 'ai';
  const playerOne = new Player(player01Name);
  const playerTwo = new Player(player02Name);
  return { playerOne, playerTwo };
}
function init() {
  // const playerOne = create2players().playerOne
  const { playerOne, playerTwo } = create2Players();
  document.getElementById('name').value = '';
  deployFleet(playerOne);
  deployFleet(playerTwo);
  renderBoard(playerOne.gameboard.board, player01Board);
  renderBoard(playerTwo.gameboard.board, player02Board);
  removeWelcomeScreen();
  playerOne.toggleActive();
  // console.log(playerOne.isActive);
  return false;
}
document.getElementById('greetingForm').onsubmit = init;
