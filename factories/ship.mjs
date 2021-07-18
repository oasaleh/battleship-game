export function Ship(type) {
  this.name = type;
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