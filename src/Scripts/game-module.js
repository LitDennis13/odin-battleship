import Player from "./player-class/player";
import { loadGameBoard } from "./game-display-module";
import placeShipsOnGameBoard from "./ship-placement-module";

const testPlayer1 = new Player("Test Player One");
const testPlayer2 = new Player("Test Player Two");

placeShipsOnGameBoard(testPlayer1);
placeShipsOnGameBoard(testPlayer2);

const a = true;

if (a) {
    loadGameBoard(testPlayer1, testPlayer2);
} else {
    loadGameBoard(testPlayer2, testPlayer1);
}
