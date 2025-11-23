import Player from './player';
import GameBoard from './gameboard';
import Ship from './ship';
import DOM from './dom';
import './style.css';

let player;
let computer;
let isGameOver;

const playerBoardDiv = document.getElementById('player-board');
const computerBoardDiv = document.getElementById('computer-board');
const restartBtn = document.getElementById('restart-btn');

function populateBoard(gameboard) {
  const sizes = [5, 4, 3, 3, 2];
  sizes.forEach(size => {
    gameboard.placeRandom(Ship(size));
  });
}

function startNewGame() {
  player = Player();
  computer = Player();
  isGameOver = false;

  populateBoard(player.gameboard);
  populateBoard(computer.gameboard);

  renderGame();
  restartBtn.innerText = "Random Placement";
}

function renderGame() {
  DOM.renderBoard(playerBoardDiv, player.gameboard, false);
  DOM.renderBoard(computerBoardDiv, computer.gameboard, true);
}

startNewGame();


restartBtn.addEventListener('click', () => {
  startNewGame();
});

computerBoardDiv.addEventListener('click', (e) => {
  if (isGameOver || !e.target.classList.contains('cell')) return;

  const x = parseInt(e.target.dataset.x);
  const y = parseInt(e.target.dataset.y);

  const hits = computer.gameboard.getHits();
  const missed = computer.gameboard.getMissedShots();
  if (hits.some(h => h.x === x && h.y === y) || 
      missed.some(m => m.x === x && m.y === y)) {
    return;
  }

  player.attack(computer.gameboard, x, y);

  if (computer.gameboard.allShipsSunk()) {
    renderGame();
    alert("You Won! 🎉");
    isGameOver = true;
    return;
  }

  computer.randomAttack(player.gameboard);

  if (player.gameboard.allShipsSunk()) {
    renderGame();
    alert("Computer Won! 🤖");
    isGameOver = true;
    return;
  }

  renderGame();
});