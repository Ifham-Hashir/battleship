import GameBoard from "./gameboard";
import Player from "./player"

test('should attack enemy gameboard', () => {
  const player = Player();
  const enemyBoard = GameBoard();
  player.attack(enemyBoard, 0, 0);
  expect(enemyBoard.getMissedShots()).toContainEqual({x: 0, y: 0});
});

test('should make a random attack on the enemy board', () => {
  const computer = Player();
  const enemyBoard = GameBoard();
  computer.randomAttack(enemyBoard);
  expect(enemyBoard.getMissedShots().length).toBe(1);
});

test('should ensure computer does not make the same move twice', () => {
  const computer = Player();
  const enemyBoard = GameBoard();
  for (let i = 0; i < 20; i++) {
    computer.randomAttack(enemyBoard);
  }
  const missedShots = enemyBoard.getMissedShots();
  const uniqueShots = new Set(missedShots.map(shot => JSON.stringify(shot)));
  expect(uniqueShots.size).toBe(20);
});