import Ship from "./ship-class/ship";
// import { changeCurrentPlayer } from "./game-display-module";

function placeShipsOnGameBoard(player) {
    const FiveLength = new Ship(`${player.name}'s Carrier(5)`, 5);
    const FourLength = new Ship(`${player.name}'s Battleship(4)`, 4);
    const ThreeLengthC = new Ship(`${player.name}'s Cruiser(3)`, 3);
    const ThreeLengthS = new Ship(`${player.name}'s Submarine(3)`, 3);
    const TwoLength = new Ship(`${player.name}'s Destroyer(2)`, 2);

    player.playerGameBoard.placeShip(FiveLength, [
        [9, 0], [9, 1], [9, 2], [9, 3], [9, 4],
    ]);

    player.playerGameBoard.placeShip(FourLength, [
        [7, 0], [7, 1], [7, 2], [7, 3],
    ]);

    player.playerGameBoard.placeShip(ThreeLengthC, [
        [5, 0], [5, 1], [5, 2],
    ]);

    player.playerGameBoard.placeShip(ThreeLengthS, [
        [3, 0], [3, 1], [3, 2],
    ]);

    player.playerGameBoard.placeShip(TwoLength, [
        [1, 0], [1, 1],
    ]);
}

export default placeShipsOnGameBoard;
