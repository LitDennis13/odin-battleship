/* eslint-disable prettier/prettier */
import Ship from "../ship-class/ship";
import GameBoard from "./game-board";

// prettier-ignore
const emptyGameBoard = [
    ["none", "none", "none", "none", "none","none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none","none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none","none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none","none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none","none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none","none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none","none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none","none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none","none", "none", "none", "none", "none"],
    
    ["none", "none", "none", "none", "none","none", "none", "none", "none", "none"]
];

describe("GameBoard Tests", () => {
    test("GameBoard Exists", () => {
        expect(GameBoard).toBeDefined();
    });

    test("GameBoard made correctly", () => {
        const testGameBoard = new GameBoard();
        expect(testGameBoard.board).toStrictEqual(emptyGameBoard);
    });

    describe("GameBoard can place Ships", () => {
        const testGameBoard = new GameBoard();
        const testShip = new Ship("Four Length Ship", 4);
        const testLocationData = [
            [4, 5],
            [4, 6],
            [4, 7],
            [4, 8],
        ];
        testGameBoard.placeShip(testShip, testLocationData);

        for (const location of testLocationData) {
            test(`${testShip.name} is at ${location}`, () => {
                const itemAtLocation =
                    testGameBoard.board[location[0]][location[1]];
                expect(itemAtLocation).toBe(testShip);
            });
        }
    });

    test("Ships on GameBoard go up in hits when hit", () => {
        const testGameBoard = new GameBoard();
        const testShip = new Ship("Four Length Ship", 4);
        const testLocationData = [
            [4, 5],
            [4, 6],
            [4, 7],
            [4, 8],
        ];
        testGameBoard.placeShip(testShip, testLocationData);

        testGameBoard.receiveAttack([4, 7]);
        
        expect(testGameBoard.shipsOnBoard[0].hits).toBe(1);
    });

    test("Ships on GameBoard go up in hits with  multiple ships", () => {
        const testGameBoard = new GameBoard();
        const testShip = new Ship("Four Length Ship", 4);
        const testLocationData = [
            [4, 5],
            [4, 6],
            [4, 7],
            [4, 8],
        ];
        const testShip2 = new Ship("Three Length Ship", 4);
        const testLocationData2 = [
            [5, 5],
            [6, 5],
            [7, 5],
        ];
        testGameBoard.placeShip(testShip, testLocationData);
        testGameBoard.placeShip(testShip2, testLocationData2);

        testGameBoard.receiveAttack([6, 5]);
        testGameBoard.receiveAttack([7, 3]);
        testGameBoard.receiveAttack([4, 6]);
        testGameBoard.receiveAttack([4, 5]);

        expect(testGameBoard.shipsOnBoard[1].hits).toBe(1);
        expect(testGameBoard.shipsOnBoard[0].hits).toBe(2);
    });

    test("Cannot Attack same area more then once", () => {
        const testGameBoard = new GameBoard();
        const testShip = new Ship("Four Length Ship", 4);
        const testLocationData = [
            [4, 5],
            [4, 6],
            [4, 7],
            [4, 8],
        ];
        testGameBoard.placeShip(testShip, testLocationData);

        testGameBoard.receiveAttack([4, 5]);
        testGameBoard.receiveAttack([4, 5]);

        expect(testGameBoard.shipsOnBoard[0].hits).toBe(1);
    });

    test("GameBoard records missed attacks", () => {
        const testGameBoard = new GameBoard();
        const testShip = new Ship("Four Length Ship", 4);
        const testLocationData = [
            [4, 5],
            [4, 6],
            [4, 7],
            [4, 8],
        ];
        testGameBoard.placeShip(testShip, testLocationData);

        testGameBoard.receiveAttack([7, 7]);
        testGameBoard.receiveAttack([8, 8]);

        expect(testGameBoard.board[7][7]).toBe("missed");
        expect(testGameBoard.board[8][8]).toBe("missed");
    });

    test("GameBoards knows if all ships sunk", () => {
        const testGameBoard = new GameBoard();
        const testShip = new Ship("Four Length Ship", 4);
        const testLocationData = [
            [4, 5],
            [4, 6],
            [4, 7],
            [4, 8],
        ];
        testGameBoard.placeShip(testShip, testLocationData);

        const testShip2 = new Ship("Three Length Ship", 3);
        const testLocationData2 = [
            [4, 4],
            [4, 3],
            [4, 2],
        ];
        testGameBoard.placeShip(testShip2, testLocationData2);

        testGameBoard.receiveAttack([4, 4]);
        testGameBoard.receiveAttack([4, 3]);
        testGameBoard.receiveAttack([4, 2]);

        testGameBoard.receiveAttack([4, 5]);
        testGameBoard.receiveAttack([4, 6]);
        testGameBoard.receiveAttack([4, 7]);
        testGameBoard.receiveAttack([4, 8]);
        
        expect(testGameBoard.allSunk()).toBe(true);

    });
});
