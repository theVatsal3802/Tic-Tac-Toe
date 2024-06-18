const player1EditButton = document.getElementById("edit-1-btn");
const player2EditButton = document.getElementById("edit-2-btn");

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");

const cancelButton = document.getElementById("cancel");
const confirmButton = document.getElementById("confirm");


player1EditButton.addEventListener('click', openPlayerConfig);
player2EditButton.addEventListener('click', openPlayerConfig);

cancelButton.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);