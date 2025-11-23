import GameBoard from './gameboard';

function Player() {
  return {
    gameboard: GameBoard(),

    attack(enemyBoard, x, y) {
      enemyBoard.receiveAttack(x, y);
    },

    randomAttack(enemyBoard){
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      this.attack(enemyBoard, x, y);
    }
  };
}
export default Player;