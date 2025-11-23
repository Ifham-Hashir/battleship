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
})