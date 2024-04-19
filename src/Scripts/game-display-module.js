/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { checkIfArrInArr } from "./utility-functions/utility-functions";

function changeCurrentPlayer(player) {
    const currentPlayerDisplay = document.querySelector("#current-player");

    const currentPlayerName = player.name;
    currentPlayerDisplay.textContent = currentPlayerName;
}

function loadCurrentPlayerBoard(player, currentGameBoardDisplay) {
    const currentPlayerBoard = player.playerGameBoard.board;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const arrSpot = j;
            const arrNum = 9 - i;
            if (currentPlayerBoard[arrNum][arrSpot] === "none") {
                currentGameBoardDisplay.innerHTML += `<div id="game-board-location" class="none ${arrNum}${arrSpot}"></div>`;
            } else if (currentPlayerBoard[arrNum][j] === "missed") {
                currentGameBoardDisplay.innerHTML += `<div id="game-board-location" class="missed ${arrNum}${arrSpot}"></div>`;
            } else if (checkIfArrInArr(player.playerGameBoard.attackedLocations, [arrNum, arrSpot])) {
                if (currentPlayerBoard[arrNum][arrSpot].hits >= currentPlayerBoard[arrNum][arrSpot].length) {
                    currentGameBoardDisplay.innerHTML += `<div id="game-board-location" class="sunk ${arrNum}${arrSpot}"></div>`;
                } else {
                    currentGameBoardDisplay.innerHTML += `<div id="game-board-location" class="hit ${arrNum}${arrSpot}"></div>`;
                }
            } else {
                currentGameBoardDisplay.innerHTML += `<div id="game-board-location" class="ship ${arrNum}${arrSpot}"></div>`;
            }
        }
    }
}

function loadOtherPlayerBoard(player, otherGameBoardDisplay) {
    const otherPlayerBoard = player.playerGameBoard.board;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const arrNum = 9 - i;
            const arrSpot = j;
            if (otherPlayerBoard[arrNum][arrSpot] === "missed") {
                otherGameBoardDisplay.innerHTML += `<div id="game-board-location" class="missed ${arrNum}${arrSpot}"></div>`;
            } else if (checkIfArrInArr(player.playerGameBoard.attackedLocations, [arrNum, j])) {
                if (otherPlayerBoard[arrNum][arrSpot].hits >= otherPlayerBoard[arrNum][arrSpot].length) {
                    otherGameBoardDisplay.innerHTML += `<div id="game-board-location" class="sunk ${arrNum}${arrSpot}"></div>`;
                } else {
                    otherGameBoardDisplay.innerHTML += `<div id="game-board-location" class="hit ${arrNum}${arrSpot}"></div>`;
                }
            } else {
                otherGameBoardDisplay.innerHTML += `<div id="game-board-location" class="noneOther ${arrNum}${arrSpot}"></div>`;
            }
        }
    }
}

function loadGameBoard(currentPlayer, otherPlayer) {
    const currentGameBoardDisplay = document.querySelector(
        "#current-player-game-board-display",
    );
    const otherGameBoardDisplay = document.querySelector(
        "#other-player-game-board-display",
    );

    currentGameBoardDisplay.innerHTML = "";
    otherGameBoardDisplay.innerHTML = "";
    changeCurrentPlayer(currentPlayer);
    loadCurrentPlayerBoard(currentPlayer, currentGameBoardDisplay);
    loadOtherPlayerBoard(otherPlayer, otherGameBoardDisplay);
}

function loadPlacementGameBoard() {
    const placementGameBoardLocations = document.querySelector("#locations");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const arrSpot = j;
            const arrNum = 9 - i;
            placementGameBoardLocations.innerHTML += `<div id="game-board-location" class="none ${arrNum}${arrSpot}"></div>`;
        }
    }
}

export { loadGameBoard, changeCurrentPlayer, loadPlacementGameBoard };
