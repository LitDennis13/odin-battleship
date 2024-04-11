import { checkIfArrInArr } from "./utility-functions/utility-functions";

const currentGameBoardDisplay = document.querySelector(
    "#current-player-game-board-display",
);

const otherGameBoardDisplay = document.querySelector(
    "#other-player-game-board-display",
);

const currentPlayerDisplay = document.querySelector("#current-player");

function changeCurrentPlayer(player) {
    const currentPlayerName = player.name;
    currentPlayerDisplay.textContent = currentPlayerName;
}

function loadCurrentPlayerBoard(player) {
    const currentPlayerBoard = player.playerGameBoard.board;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (currentPlayerBoard[i][j] === "none") {
                currentGameBoardDisplay.innerHTML += `<div id="game-board-location" class="none ${i}${j}"></div>`;
            } else if (currentPlayerBoard[i][j] === "missed") {
                currentGameBoardDisplay.innerHTML += `<div id="game-board-location" class="missed ${i}${j}"></div>`;
            } else if (checkIfArrInArr(player.playerGameBoard.attackedLocations, [i, j])) {
                if (currentPlayerBoard[i][j].hits >= currentPlayerBoard[i][j].length) {
                    currentGameBoardDisplay.innerHTML += `<div id="game-board-location" class="sunk ${i}${j}"></div>`;
                } else {
                    currentGameBoardDisplay.innerHTML += `<div id="game-board-location" class="hit ${i}${j}"></div>`;
                }
            } else {
                currentGameBoardDisplay.innerHTML += `<div id="game-board-location" class="ship ${i}${j}"></div>`;
            }
        }
    }
}

function loadOtherPlayerBoard(player) {
    const otherPlayerBoard = player.playerGameBoard.board;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (otherPlayerBoard[i][j] === "missed") {
                otherGameBoardDisplay.innerHTML += `<div id="game-board-location" class="missed ${i}${j}"></div>`;
            } else if (checkIfArrInArr(player.playerGameBoard.attackedLocations, [i, j])) {
                if (otherPlayerBoard[i][j].hits >= otherPlayerBoard[i][j].length) {
                    otherGameBoardDisplay.innerHTML += `<div id="game-board-location" class="sunk ${i}${j}"></div>`;
                } else {
                    otherGameBoardDisplay.innerHTML += `<div id="game-board-location" class="hit ${i}${j}"></div>`;
                }
            } else {
                otherGameBoardDisplay.innerHTML += `<div id="game-board-location" class="filler ${i}${j}"></div>`;
            }
        }
    }
}

function loadGameBoard(currentPlayer, otherPlayer) {
    changeCurrentPlayer(currentPlayer);
    loadCurrentPlayerBoard(currentPlayer);
    loadOtherPlayerBoard(otherPlayer);
}

export { loadGameBoard, changeCurrentPlayer };
