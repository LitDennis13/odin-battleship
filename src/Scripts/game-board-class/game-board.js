import checkIfItemInArray from "../utility-functions";

class GameBoard {
    constructor() {
        this.board = [];
        this.shipsOnBoard = [];
        this.attackedLocations = [];
        this.createBoard();
    }

    createBoard() {
        const dimensions = [10, 10];
        for (let i = 0; i < dimensions[0]; i++) {
            this.board.push([]);
            for (let j = 0; j < dimensions[1]; j++) {
                this.board[i].push("none");
            }
        }
    }

    placeShip(ship, locationData) {
        this.shipsOnBoard.push(ship);
        const currentShipNumber = this.shipsOnBoard.length - 1;

        for (const location of locationData) {
            this.board[location[0]][location[1]] =
                this.shipsOnBoard[currentShipNumber];
        }
    }

    receiveAttack(location) {
        if (checkIfItemInArray(this.attackedLocations, location)) {
            return;
        }

        if (this.board[location[0]][location[1]] !== "none") {
            this.board[location[0]][location[1]].hit();
        } else {
            this.board[location[0]][location[1]] = "missed";
        }

        this.attackedLocations.push(location);
    }

    allSunk() {
        for (const ship of this.shipsOnBoard) {
            if (ship.hits < ship.length) {
                return false;
            }
        }
        return true;
    }
}

export default GameBoard;
