function resetGameStatus() {
    activePlayer = 0;
    round = 1;
    drawDisplay.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverDisplay.style.display = 'none';

    let gameIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameState[i][j] = -1;
            gameBoard.children[gameIndex].textContent = '';
            gameBoard.children[gameIndex].classList.remove('disabled');
            gameIndex++;
        }
    }
    isWinner = false;
}

function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert("Please enter player names for both the players");
        return;
    }
    resetGameStatus();
    activeGame.style.display = 'block';
    activePlayerDisplay.textContent = players[activePlayer].name;
}

function switchPlayer() {
    if (activePlayer === 1) {
        activePlayer = 0;
    } else {
        activePlayer = 1;
    }
    activePlayerDisplay.textContent = players[activePlayer].name;
}

function selectGameTile(event) {
    if (event.target.tagName !== 'LI') {
        return;
    }
    if (isWinner) {
        return;
    }
    const col = +event.target.dataset["col"];
    const row = +event.target.dataset["row"];
    if (gameState[row][col] !== -1) {
        return;
    }
    gameState[row][col] = activePlayer;
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    const winner = determineWinner();
    if (winner !== -1) {
        endGame(winner)
        return;
    }
    round++;
    switchPlayer();
}

function determineWinner() {
    // For rows
    for (let i = 0; i < 3; i++) {
        if (gameState[i][0] !== -1 && gameState[i][0] === gameState[i][1] && gameState[i][1] === gameState[i][2]) {
            return gameState[i][0];
        }
    }

    // For columns
    for (let i = 0; i < 3; i++) {
        if (gameState[0][i] !== -1 && gameState[0][i] === gameState[1][i] && gameState[1][i] === gameState[2][i]) {
            return gameState[0][i];
        }
    }

    // For diagonals
    if (gameState[0][0] !== -1 && gameState[0][0] === gameState[1][1] && gameState[1][1] === gameState[2][2]) {
        return gameState[0][0];
    }
    if (gameState[0][2] !== -1 && gameState[0][2] === gameState[1][1] && gameState[1][1] === gameState[2][0]) {
        return gameState[0][2];
    }

    // Draw
    if (round === 9) {
        return 2;
    }

    return -1;
}

function endGame(winner) {
    isWinner = true;
    gameOverDisplay.style.display = 'block';

    if (winner !== 2) {
        const winnerName = players[winner].name;
        drawDisplay.firstElementChild.textContent = winnerName;
    } else {
        drawDisplay.textContent = "It's a draw!";
    }
}