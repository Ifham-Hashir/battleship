import GameBoard from "./gameboard";
import Ship from "./ship";

test('should place a ship at specific coordinates', () => {
  const board = GameBoard();
  const ship= Ship(3);
  board.placeShip(0, 0, ship);
  const grid = board.getBoard();
  expect(grid[0][0]).toBe(ship);
});

test('should place a ship horizontally based on length', () => {
  const board = GameBoard();
  const ship = Ship(2);
  board.placeShip(0,0, ship);
  const grid = board.getBoard();
  expect(grid[0][0]).toBe(ship);
  expect(grid[0][1]).toBe(ship);
  expect(grid[0][2]).toBe(null);
});

test('should receiveAttack and call hit function on the ship', () => {
  const board = GameBoard();
  const ship = Ship(2);
  board.placeShip(0,0, ship);
  board.receiveAttack(0,0);
  expect(ship.hits).toBe(1);
});

test('should record coordinates of the missed shot', () => {
  const board = GameBoard();
  board.receiveAttack(0,0);
  expect(board.getMissedShots()).toEqual([{x: 0, y: 0}]);
});

test('should report true if all ships are sunk', () => {
  const board = GameBoard();
  const ship = Ship(2);
  board.placeShip(0,0, ship);
  expect(board.allShipsSunk()).toBe(false);
  board.receiveAttack(0,0);
  board.receiveAttack(0,1);
  expect(board.allShipsSunk()).toBe(true);
});
