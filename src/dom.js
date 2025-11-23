const DOM = {
  renderBoard(boardElement, gameboard, isEnemy = false) {
    boardElement.innerHTML = "";
    const grid = gameboard.getBoard();
    const hits = gameboard.getHits();   
    const missed = gameboard.getMissedShots();

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.x = x;
        cell.dataset.y = y;

        // --- Check Status ---
        const isHit = hits.some(h => h.x === x && h.y === y);
        const isMiss = missed.some(m => m.x === x && m.y === y);
        const hasShip = grid[x][y] !== null;

        if (isHit) {
          cell.style.backgroundColor = "#ff9999";
          cell.textContent = "💥";
        } else if (isMiss) {
          cell.style.backgroundColor = "#99ccff";
          cell.textContent = "🌊";
        } else if (hasShip && !isEnemy) {
          cell.style.backgroundColor = "gray";
        }

        boardElement.appendChild(cell);
      }
    }
  }
};

export default DOM;