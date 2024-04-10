import Player from "./player";

describe("Player Tests", () => {
    test("Player Class Exists", () => {
        expect(Player).toBeDefined();
    });

    test("Setting Player Name Works", () => {
        const testPlayer = new Player("Player One");
        expect(testPlayer.name).toBe("Player One");
    });

    test("Player can send attack", () => {
        const testPlayerOne = new Player("Player One");
        const testPlayerTwo = new Player("Player Two");

        testPlayerOne.sendAttack(testPlayerTwo, [4, 4]);

        expect(testPlayerTwo.playerGameBoard.board[4][4]).toBe("missed");
    });
});
