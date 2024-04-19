import Player from "./player-class/player";
import { placeShipsOnGameBoard, placeComputerShipsOnGameBoard } from "./ship-placement-module";
import { vsComputer, vsPlayer } from "./game-module";
import { loadGameMarkup, loadGameModeOptions } from "./HTML-loading";

function getGameMode() {
    return new Promise((resolve) => {
        loadGameModeOptions();
        const vsComputerButton = document.querySelector("#vs-computer");
        const vsPlayerButton = document.querySelector("#vs-player");

        vsComputerButton.addEventListener("click", () => {
            resolve(false);
        });

        vsPlayerButton.addEventListener("click", () => {
            resolve(true);
        });
    });
}

async function loadGame() {
    const player1 = new Player("Player One");
    const player2 = new Player("Player Two");

    const againstPlayer = await getGameMode();

    await placeShipsOnGameBoard(player1);

    if (againstPlayer) {
        await placeShipsOnGameBoard(player2);
        loadGameMarkup();
        setTimeout(vsPlayer, 2000, player1, player2);
    } else {
        player2.name = "Computer";
        placeComputerShipsOnGameBoard(player2);
        loadGameMarkup();
        vsComputer(player1, player2);
    }
}
loadGame();
