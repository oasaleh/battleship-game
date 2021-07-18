import { expect, test } from '@jest/globals';
import { Ship } from '../factories/ship';
import { Gameboard } from '../factories/gameboard';

let ship;
beforeEach(() => {
  ship = new Ship('carrier');
});
test('')