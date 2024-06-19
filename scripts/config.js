function openPlayerConfig(event) {
    error.textContent = "";
    error.classList.remove("showError");
    nameInput.classList.remove("showError");
    nameInput.value = "";
    backdrop.style.display = 'block';
    playerConfigOverlay.style.display = 'block';
    editedPlayer = +event.target.dataset["playerid"];
}

function closePlayerConfig() {
    backdrop.style.display = 'none';
    playerConfigOverlay.style.display = 'none';
}

function savePlayeConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const playerName = formData.get('playerName').trim();
    if (!playerName) {
        error.textContent = "Enter a valid name!";
        error.classList.add("showError");
        nameInput.classList.add("showError");
        return;
    }

    const editedPlayerData = document.getElementById('player-' + editedPlayer + '-data');
    editedPlayerData.children[1].textContent = playerName;
    players[editedPlayer - 1].name = playerName;
    closePlayerConfig();
}