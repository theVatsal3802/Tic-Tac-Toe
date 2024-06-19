let editedPlayer = 0;
let activePlayer = 0;
let isWinner = false;
let round = 1;

const players = [
    {
        name: '',
        symbol: 'X',
    },
    {
        name: '',
        symbol: 'O',
    },
];

const gameState = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
];

const player1EditButton = document.getElementById("edit-1-btn");
const player2EditButton = document.getElementById("edit-2-btn");

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");

const cancelButton = document.getElementById("cancel");
const confirmButton = document.getElementById("confirm");

const form = document.querySelector('form');
const nameInput = document.getElementById("playerName");
const error = document.getElementById("config-error");

const startNewGameButton = document.getElementById("new-game");
const activeGame = document.getElementById("active-game");

// const gameTiles = document.querySelectorAll("#game-board li");
const gameBoard = document.getElementById('game-board');
const activePlayerDisplay = document.getElementById('active-player-name');

const gameOverDisplay = document.getElementById('game-over');
const drawDisplay = document.getElementById("winner-draw");

player1EditButton.addEventListener('click', openPlayerConfig);
player2EditButton.addEventListener('click', openPlayerConfig);

cancelButton.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

form.addEventListener('submit', savePlayeConfig);

startNewGameButton.addEventListener('click', startNewGame);

// for (const gameTile of gameTiles) {
//     gameTile.addEventListener('click', selectGameTile);
// }

gameBoard.addEventListener('click', selectGameTile);