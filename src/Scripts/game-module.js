/* eslint-disable max-len */
import { loadGameBoard } from "./game-display-module";
import { checkIfArrInArr, shuffleArray } from "./utility-functions/utility-functions";
import { PassScreen, loadWinnerScreen } from "./HTML-loading";

let canBeClicked = true;
function checkWinner(player1, player2) {
    const getPlayerOneWin = player2.playerGameBoard.allSunk();
    const getPlayerTwoWIn = player1.playerGameBoard.allSunk();

    if (getPlayerOneWin) loadWinnerScreen(player1);
    if (getPlayerTwoWIn) loadWinnerScreen(player2);

    if (getPlayerOneWin && getPlayerTwoWIn) {
        loadWinnerScreen(true);
    }

    if (getPlayerOneWin || getPlayerTwoWIn) {
        canBeClicked = false;
    }
}

const computerMovesLeft = [];

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        computerMovesLeft.push([i, j]);
    }
}
shuffleArray(computerMovesLeft);

function checkComputerMove(player, move) {
    const { board } = player.playerGameBoard;
    const atLocation = board[move[0]][move[1]];
    const locationsToCheck = [[], [], [], []];
    if (atLocation !== "missed") {
        locationsToCheck[0] = [move[0] + 1, move[1]];
        locationsToCheck[1] = [move[0] - 1, move[1]];
        locationsToCheck[2] = [move[0], move[1] + 1];
        locationsToCheck[3] = [move[0], move[1] - 1];
    } else {
        return;
    }
    let index = 0;
    for (const location of locationsToCheck) {
        if (location[0] > 9 || location[0] < 0 || location[1] > 9 || location[1] < 0) {
            for (let i = 0; i < computerMovesLeft.length; i++) {
                if (location[0] === computerMovesLeft[i][0] && location[1] === computerMovesLeft[i][1]) {
                    locationsToCheck.splice(index, 1);
                    break;
                }
            }
            index++;
        }
    }
    for (let i = 0; i < computerMovesLeft.length; i++) {
        for (const location of locationsToCheck) {
            if (location[0] === computerMovesLeft[i][0] && location[1] === computerMovesLeft[i][1]) {
                computerMovesLeft.splice(i, 1);
                computerMovesLeft.push(location);
            }
        }
    }
}

function vsComputer(player1, player2) {
    const changeTurnButton = document.querySelector("#change-turn-button");

    changeTurnButton.textContent = "";
    changeTurnButton.disabled = true;
    changeTurnButton.style.height = ".001px";

    loadGameBoard(player1, player2);

    const otherGameBoardDisplay = document.querySelector(
        "#other-player-game-board-display",
    );

    otherGameBoardDisplay.addEventListener("click", (event) => {
        if (event.target.id === "game-board-location" && canBeClicked === true) {
            const X = +event.target.classList[1].split("")[0];
            const Y = +event.target.classList[1].split("")[1];
            if (!checkIfArrInArr(player2.playerGameBoard.attackedLocations, [X, Y])) {
                player1.sendAttack(player2, [X, Y]);
                const computerMove = computerMovesLeft.pop();

                player2.sendAttack(player1, computerMove);
                checkComputerMove(player1, computerMove);
                loadGameBoard(player1, player2);
            }
        }
        checkWinner(player1, player2);
    });
}

function vsPlayer(player1, player2) {
    const changeTurnButton = document.querySelector("#change-turn-button");

    function activateChangeTurn() {
        changeTurnButton.textContent = "Change Turn";
        changeTurnButton.disabled = false;
        changeTurnButton.style.height = "50%";
    }
    function deactivateChangeTurn() {
        changeTurnButton.textContent = "";
        changeTurnButton.disabled = true;
        changeTurnButton.style.height = ".001px";
    }
    deactivateChangeTurn();

    let haveGone = false;
    let playerOneTurn = true;
    loadGameBoard(player1, player2);

    const otherGameBoardDisplay = document.querySelector("#other-player-game-board-display");

    otherGameBoardDisplay.addEventListener("click", async (event) => {
        if (event.target.id === "game-board-location" && haveGone === false && canBeClicked === true) {
            const X = +event.target.classList[1].split("")[0];
            const Y = +event.target.classList[1].split("")[1];
            if (playerOneTurn) {
                if (!checkIfArrInArr(player2.playerGameBoard.attackedLocations, [X, Y])) {
                    player1.sendAttack(player2, [X, Y]);
                    loadGameBoard(player1, player2);
                }
            } else if (!checkIfArrInArr(player1.playerGameBoard.attackedLocations, [X, Y])) {
                player2.sendAttack(player1, [X, Y]);
                loadGameBoard(player2, player1);
            }
            haveGone = true;
            checkWinner(player1, player2);
            if (canBeClicked) {
                const activatePassScreenAndChangeTurn = new Promise((resolve) => {
                    setTimeout(() => {
                        PassScreen();
                        resolve();
                    }, 1000);
                });
                activatePassScreenAndChangeTurn.then(() => {
                    activateChangeTurn();
                });
            }
        }
    });

    changeTurnButton.addEventListener("click", () => {
        if (playerOneTurn) {
            playerOneTurn = false;
            loadGameBoard(player2, player1);
        } else {
            playerOneTurn = true;
            loadGameBoard(player1, player2);
        }
        haveGone = false;
        deactivateChangeTurn();
    });
}

export { vsComputer, vsPlayer };
