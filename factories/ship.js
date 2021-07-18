import { Coordinates } from './coordinates';

// import { Coordinates } from './coordinates';
export function Ship(type, layout = 'h', coordinates = new Coordinates()) {
  this.name = type;
  this.layout = layout;
  this.coordinates = coordinates;
  this.size;
  switch (type) {
    case 'carrier':
      this.size = 5;
      break;
    case 'battleship':
      this.size = 4;
      break;
    case 'destroyer':
      this.size = 3;
      break;
    case 'submarine':
      this.size = 3;
      break;
    case 'boat':
      this.size = 2;
      break;
  }
  // create an array with positions
  // [...Array(size + 1).keys()].slice(1);
  this.shipSize = new Array(this.size).fill('');

  this.hit = function (position) {
    this.shipSize[position] = 'hit';
    return this.shipSize;
  };

  this.isSunk = function () {
    return this.shipSize.every((position) => position === 'hit');
  };
}
// const carrier = new Ship('carrier', 'h', new Coordinates(4, 7))
// console.log(carrier.name)
//   module.exports = Ship;
