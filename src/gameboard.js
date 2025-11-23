import Ship from './ship'; 

function GameBoard() {
  const rows = 10;
  const cols = 10;
  const grid = Array(rows).fill().map(() => Array(cols).fill(null));
  
  const ships = [];
  const missedShots = [];
  const hits = [];

  const isValidPlacement = (ship, x, y, direction) => {
    if (direction === 'horizontal') {
      if (y + ship.length > cols) return false;
    } else { 
      if (x + ship.length > rows) return false;
    }
    for (let i = 0; i < ship.length; i++) {
      let r = x;
      let c = y;
      
      if (direction === 'horizontal') c = y + i;
      else r = x + i;

      if (grid[r][c] !== null) return false;
    }

    return true;
  };

  return {
    getBoard: () => grid,
    getMissedShots: () => missedShots,
    getHits: () => hits,
    
    placeShip(ship, x, y, direction = 'horizontal') {
      if (!isValidPlacement(ship, x, y, direction)) {
        return false;
      }

      for (let i = 0; i < ship.length; i++) {
        if (direction === 'horizontal') {
          grid[x][y + i] = ship;
        } else {
          grid[x + i][y] = ship;
        }
      }
      ships.push(ship);
      return true;
    },

    placeRandom(ship) {
      let placed = false;
      while (!placed) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';

        if (this.placeShip(ship, x, y, direction)) {
          placed = true; 
        }
      }
    },

    receiveAttack(x, y) {
      if (grid[x][y]) {
        grid[x][y].hit();
        hits.push({ x, y });
      } else {
        missedShots.push({ x, y });
      }
    },

    allShipsSunk() {
      return ships.every(ship => ship.isSunk());
    }
  };
}

export default GameBoard;