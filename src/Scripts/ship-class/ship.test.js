import Ship from "./ship";

describe("Ship Class Tests", () => {
    test("Ship Class Exists", () => {
        expect(Ship).toBeDefined();
    });

    test('Ship Hits increases when "hit" is called', () => {
        const testShip = new Ship("Test Ship", 4);
        testShip.hit();
        expect(testShip.hits).toBe(1);
    });

    test('Ship "isSunk" returns false if not enough hits', () => {
        const testShip = new Ship("Test Ship", 5);
        testShip.hit();
        testShip.hit();
        testShip.hit();
        expect(testShip.isSunk()).toBe(false);
    });

    test('Ship "isSunk" returns true if enough hits', () => {
        const testShip = new Ship("Test Ship", 3);
        testShip.hit();
        testShip.hit();
        testShip.hit();
        expect(testShip.isSunk()).toBe(true);
    });
});
