function GameBoard() {
  const rows = 10;
  const cols = 10;
  const grid = Array(rows).fill().map(() => Array(cols).fill(null));
  const missedShots = [];
  const ships = [];
  return {
    getBoard() {
      return grid;
    },

    placeShip(x, y, ship){
      ships.push(ship);
      for(let i = 0; i < ship.length; i++){
        grid[x][y+i] = ship;
      }
    },

    receiveAttack(x, y){
      if (grid[x][y]) {
        grid[x][y].hit();
      }else{
        missedShots.push({x, y});
      }
    },

    getMissedShots(){
      return missedShots;
    },

    allShipsSunk(){
      return ships.every(ship => ship.isSunk());
    }
  };
}

export default GameBoard;