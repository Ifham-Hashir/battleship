import GameBoard from './gameboard';

function Player() {
  const possibleMoves = [];
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      possibleMoves.push({ x, y });
    }
  }
  return {
    gameboard: GameBoard(),

    attack(enemyBoard, x, y) {
      enemyBoard.receiveAttack(x, y);
    },

    randomAttack(enemyBoard) {
      if (possibleMoves.length === 0) return;
      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      const move = possibleMoves.splice(randomIndex, 1)[0];
      this.attack(enemyBoard, move.x, move.y);
    }
  };
}
export default Player;