import Player from './factories/player.mjs';
import Ship from './factories/ship.mjs';
import Gameboard from './factories/gameboard.mjs';
import { randomCoord, deployFleet } from './logic/deployment.mjs';

// import renderBoard from './logic/render.mjs';

let playerOne;
let playerTwo;
let activePlayer;

function restartGame() {
  window.location.reload();
}
function whichIsActive(player, opponent) {
  activePlayer = player.isActive ? player : opponent;
  // return activePlayer;
}
function lost(player) {
  if (player.spots === 0) {
    const winnerName = document.getElementById('winnerName');
    const restartBtn = document.getElementById('restart');
    const gameScreen = document.getElementById('gameScreen');
    restartBtn.addEventListener('click', restartGame);
    gameScreen.classList.add('hidden');
    winnerName.innerText = player.name.toUpperCase() + ' lost!';
    restartBtn.classList.remove('hidden');
    winnerName.classList.remove('hidden');
    // console.log(player.name + ' lost!');
  }
}
function aiAttack(player) {
  let coords = randomCoord();
  let coordX = coords[0];
  let coordY = coords[1];
  while (player.gameboard.board[coordY][coordX].isShot) {
    coords = randomCoord();
    coordX = coords[0];
    coordY = coords[1];
  }
  player.gameboard.receiveShot(coordX, coordY);
  if (player.gameboard.board[coordY][coordX].hasShip) {
    player.destroy();
  }
  lost(player);
  // console.log('ai attacked.');
  renderBoard(player);
}

function attack(player, playerData) {
  if (player === playerOne && playerData.player === playerTwo) {
    // console.log('playerOne attacked.');
    const { coordX, coordY } = playerData;
    if (!playerTwo.gameboard.board[coordY][coordX].isShot) {
      playerTwo.gameboard.receiveShot(coordX, coordY);
      renderBoard(playerTwo);
      if (playerTwo.gameboard.board[coordY][coordX].hasShip) {
        playerTwo.destroy();
      }
      lost(playerTwo);
      aiAttack(player);
    }
  }
}

function think(event) {
  whichIsActive(playerOne, playerTwo);
  const { playerData } = event.target;
  attack(activePlayer, playerData);
}

function renderBoard(player) {
  let htmlBoardContainer;
  // const player01Board = document.getElementById('player01Board');
  // const player02Board = document.getElementById('player02Board');
  if (player.name !== 'ai') {
    htmlBoardContainer = document.getElementById('player01Board');
  } else {
    htmlBoardContainer = document.getElementById('player02Board');
  }
  htmlBoardContainer.innerHTML = '';

  const columns = player.gameboard.board[0].length;
  const rows = player.gameboard.board[0].length;

  htmlBoardContainer.style.setProperty('--grid-rows', rows);
  htmlBoardContainer.style.setProperty('--grid-cols', columns);

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < columns; c += 1) {
      const cell = document.createElement('div');
      if (player.gameboard.board[r][c].hasShip && player.name !== 'ai') {
        cell.className = 'hasShip ';
      }
      if (player.gameboard.board[r][c].isShot) {
        cell.innerText = 'X';
      }
      if (player.gameboard.board[r][c].isShot && player.gameboard.board[r][c].hasShip) {
        cell.className = 'shipShot ';
      }
      cell.className += 'grid-item';
      cell.playerData = {};
      cell.playerData.coordX = c;
      cell.playerData.coordY = r;
      cell.playerData.hasShip = player.gameboard.board[r][c].hasShip;
      cell.playerData.isShot = player.gameboard.board[r][c].isShot;
      cell.playerData.player = player;
      cell.addEventListener('click', think);
      htmlBoardContainer.appendChild(cell);
    }
  }
}

function removeWelcomeScreen() {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('welcomeScreen').style.visibility = 'hidden';
}

function sendCoords(e) {
  // console.log(e);
  // console.log(`(x, y)\n${e.target.playerData.coordX}, ${e.target.playerData.coordY}`);
  const { coordX, coordY } = e.target.playerData;
  const coordsArray = [coordX, coordY];
  // deployHere
  return coordsArray;
}

function create2Players() {
  const player01Name = document.getElementById('name').value;
  const player02Name = 'ai';
  const playerOne = new Player(player01Name);
  const playerTwo = new Player(player02Name);
  const players = [playerOne, playerTwo];
  return players;
}

function init() {
  // const playerOne = create2players().playerOne
  const players = create2Players();
  playerOne = players[0];
  playerTwo = players[1];
  document.getElementById('name').value = '';
  deployFleet(playerOne);
  deployFleet(playerTwo);
  renderBoard(playerOne);
  renderBoard(playerTwo);
  removeWelcomeScreen();
  playerOne.toggleActive();
  // // console.log(playerOne.isActive);
  return false;
}
document.getElementById('greetingForm').onsubmit = init;
// // console.log(playerOne);
export default { playerOne, playerTwo };
