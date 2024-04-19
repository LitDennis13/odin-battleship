import { checkIfArrInArr, checkDuplicates } from "./utility-functions";

describe("Check if arrayA contains arrayB function", () => {
    test("Function Exists", () => {
        expect(checkIfArrInArr).toBeDefined();
    });

    test("[3,3] is in [[5,4],[4,2],[5,4]]", () => {
        const testArr = [
            [5, 4],
            [4, 2],
            [5, 4],
        ];
        const testArrToFind = [3, 3];
        expect(checkIfArrInArr(testArr, testArrToFind)).toBe(false);
    });

    test("[5,3] is in [[5,4],[4,2],[5,4]]", () => {
        const testArr = [
            [5, 4],
            [4, 2],
            [5, 4],
        ];
        const testArrToFind = [5, 3];
        expect(checkIfArrInArr(testArr, testArrToFind)).toBe(false);
    });

    test("[3,3] is in [[5,4],[3,3],[5,4]", () => {
        const testArr = [
            [5, 4],
            [3, 3],
            [5, 4],
        ];
        const testArrToFind = [3, 3];
        expect(checkIfArrInArr(testArr, testArrToFind)).toBe(true);
    });
});

describe("Check Duplicates Function Tests", () => {
    test("Check Duplicates Function Exists", () => {
        expect(checkDuplicates).toBeDefined();
    });

    test("[[5,4], [4,4], [4,6]] returns false", () => {
        expect(checkDuplicates([[5, 4], [4, 4], [4, 6]])).toBe(false);
    });

    test("[[5,4], [4,4], [4,6], [4,4]] returns true", () => {
        expect(checkDuplicates([[5, 4], [4, 4], [4, 6], [4, 4]])).toBe(true);
    });
});
