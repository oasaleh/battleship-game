import Player from './factories/player.mjs'

const player01Board = document.getElementById('player01Board');
const player02Board = document.getElementById('player02Board');
let playerOne;
let playerTwo;

document.getElementById('greetingForm').onsubmit = function () {
  const player01Name = document.getElementById('name').value;
  const player02Name = 'ai';
  playerOne = new Player(player01Name);
  playerTwo = new Player(player02Name);
  makeRows(10, 10);
  console.log(player01Name);
  return false;
};
console.log(playerOne)
function makeRows(rows, cols) {
  player01Board.style.setProperty('--grid-rows', rows);
  player02Board.style.setProperty('--grid-rows', rows);
  player01Board.style.setProperty('--grid-cols', cols);
  player02Board.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell1 = document.createElement('div');
    let cell2 = document.createElement('div');
    // cell1.innerText = c + 1;
    // cell2.innerText = c + 1;
    player01Board.appendChild(cell1).className = 'grid-item1';
    player02Board.appendChild(cell2).className = 'grid-item2';
  }
}


// function makeRows(rows, cols) {
//   player01Board.style.setProperty('--grid-rows', rows);
//   player02Board.style.setProperty('--grid-rows', rows);
//   player01Board.style.setProperty('--grid-cols', cols);
//   player02Board.style.setProperty('--grid-cols', cols);
//   for (let c = 0; c < rows * cols; c++) {
//     let cell1 = document.createElement('div');
//     let cell2 = document.createElement('div');
//     // cell1.innerText = c + 1;
//     // cell2.innerText = c + 1;
//     player01Board.appendChild(cell1).className = 'grid-item1';
//     player02Board.appendChild(cell2).className = 'grid-item2';
//   }
// }

// makeRows(10, 10);
