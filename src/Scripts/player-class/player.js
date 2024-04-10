import GameBoard from "../game-board-class/game-board";

class Player {
    constructor(name) {
        this.name = name;
        this.playerGameBoard = new GameBoard();
    }

    sendAttack(player, location) {
        player.playerGameBoard.receiveAttack(location);
    }
}

export default Player;
