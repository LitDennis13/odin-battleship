import Ship from "./ship-class/ship";
// import { changeCurrentPlayer } from "./game-display-module";

function placeShipsOnGameBoard(player) {
    const FiveLength = new Ship(`${player.name}'s Carrier(5)`, 5);
    const FourLength = new Ship(`${player.name}'s Battleship(4)`, 4);
    const ThreeLengthC = new Ship(`${player.name}'s Cruiser(3)`, 3);
    const ThreeLengthS = new Ship(`${player.name}'s Submarine(3)`, 3);
    const TwoLength = new Ship(`${player.name}'s Destroyer(2)`, 2);

    player.playerGameBoard.placeShip(FiveLength, [
        [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
    ]);

    player.playerGameBoard.placeShip(FourLength, [
        [2, 0], [2, 1], [2, 2], [2, 3],
    ]);

    player.playerGameBoard.placeShip(ThreeLengthC, [
        [4, 0], [4, 1], [4, 2],
    ]);

    player.playerGameBoard.placeShip(ThreeLengthS, [
        [6, 0], [6, 1], [6, 2],
    ]);

    player.playerGameBoard.placeShip(TwoLength, [
        [8, 0], [8, 1],
    ]);
}

export default placeShipsOnGameBoard;
