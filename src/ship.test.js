import Ship from "./ship";

test('should return an object with the correct length', () => {
  expect(Ship(3).length).toBe(3);
});

test('should start with 0 hits', () => {
  expect(Ship(3).hits).toBe(0);
});

test('should increment hits when hit() is called', () => {
  const ship = Ship(3);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test('should return true when ship is sunk', () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});