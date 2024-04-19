/* eslint-disable max-len */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
import Ship from "./ship-class/ship";
import { loadShipPlacementScreen } from "./HTML-loading";
import { loadPlacementGameBoard } from "./game-display-module";
import { checkDuplicates } from "./utility-functions/utility-functions";

function placeShipsOnGameBoard(player) {
    return new Promise((resolve) => {
        loadShipPlacementScreen(player.name);

        const donePlacingButton = document.querySelector("#done-placing-button");
        const resetButton = document.querySelector("#reset-placing-button");

        const FiveLength = new Ship(`${player.name}'s Carrier(5)`, 5);
        const FourLength = new Ship(`${player.name}'s Battleship(4)`, 4);
        const ThreeLengthC = new Ship(`${player.name}'s Cruiser(3)`, 3);
        const ThreeLengthS = new Ship(`${player.name}'s Submarine(3)`, 3);
        const TwoLength = new Ship(`${player.name}'s Destroyer(2)`, 2);

        loadPlacementGameBoard();
        const placementGameBoardLocation = document.querySelector("#locations");

        placementGameBoardLocation.addEventListener("click", (event) => {
            if (event.target.id === "game-board-location") {
                const X = +event.target.classList[1].split("")[0];
                const Y = +event.target.classList[1].split("")[1];

                console.log(X, Y);
            }
        });

        const playerShips = document.querySelectorAll("#player-ships-container > div");

        const middleOfScreenX = window.innerWidth / 2;

        const originalShipLocationInfo = [
            [0, 0, middleOfScreenX + 30, 0.2315 * window.innerHeight],
            [0, 0, middleOfScreenX + 120, 0.2315 * window.innerHeight],
            [0, 0, middleOfScreenX + 210, 0.2315 * window.innerHeight],
            [0, 0, middleOfScreenX + 30, 0.6315 * window.innerHeight],
            [0, 0, middleOfScreenX + 120, 0.6315 * window.innerHeight],
        ];

        const shipLocationInfo = [
            [0, 0, middleOfScreenX + 30, 0.2315 * window.innerHeight],
            [0, 0, middleOfScreenX + 120, 0.2315 * window.innerHeight],
            [0, 0, middleOfScreenX + 210, 0.2315 * window.innerHeight],
            [0, 0, middleOfScreenX + 30, 0.6315 * window.innerHeight],
            [0, 0, middleOfScreenX + 120, 0.6315 * window.innerHeight],
        ];

        function getIndex(identifier) {
            switch (identifier) {
            case "carrier": return 4;
            case "battleship": return 3;
            case "cruiser": return 2;
            case "submarine": return 1;
            default: return 0;
            }
        }

        function getLength(identifier) {
            switch (identifier) {
            case "carrier": return 5;
            case "battleship": return 4;
            case "cruiser": return 3;
            case "submarine": return 3;
            default: return 2;
            }
        }

        let canRotate = true;

        const newX = 0;
        const newY = 1;
        const startX = 2;
        const startY = 3;
        function mouseMove(event) {
            const { target } = event;
            const index = getIndex(event.target.id);
            canRotate = false;
            shipLocationInfo[index][newX] = shipLocationInfo[index][startX] - event.clientX;
            shipLocationInfo[index][newY] = shipLocationInfo[index][startY] - event.clientY;

            shipLocationInfo[index][startX] = event.clientX;
            shipLocationInfo[index][startY] = event.clientY;

            target.style.top = `${target.offsetTop - shipLocationInfo[index][newY]}px`;
            target.style.left = `${target.offsetLeft - shipLocationInfo[index][newX]}px`;
        }

        function mouseUp() {
            canRotate = true;
            document.removeEventListener("mousemove", mouseMove);
        }

        function mouseDown(event) {
            const index = getIndex(event.target.id);
            shipLocationInfo[index][startX] = event.clientX;
            shipLocationInfo[index][startY] = event.clientY;

            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);
        }
        let index = 0;
        for (const ship of playerShips) {
            ship.style.top = `${shipLocationInfo[index][startY]}px`;
            ship.style.left = `${shipLocationInfo[index][startX]}px`;
            index++;
            ship.addEventListener("mousedown", mouseDown);
        }

        for (const ship of playerShips) {
            ship.addEventListener("mouseup", (event) => {
                if (canRotate) {
                    const { target } = event;
                    if (target.classList.contains("rotate")) {
                        target.classList.remove("rotate");
                    } else {
                        target.classList.add("rotate");
                    }
                }
            });
        }

        const placementGameBoardLocations = document.querySelectorAll("#locations > div");

        function resetShips() {
            for (const ship of playerShips) {
                const shipIndex = 4 - getIndex(ship.id);
                ship.style.top = `${originalShipLocationInfo[shipIndex][startY]}px`;

                ship.style.left = `${originalShipLocationInfo[shipIndex][startX]}px`;
            }
        }

        function returnBoardLocation(shipGeometry, shipRotated, shipLen) {
            const boardLocationData = [];
            if (!shipRotated) {
                for (const location of placementGameBoardLocations) {
                    const locationGeometry = location.getBoundingClientRect();

                    const LocationHeight = (locationGeometry.bottom - locationGeometry.top);

                    const checkSidesX = shipGeometry.left > locationGeometry.left && shipGeometry.right < locationGeometry.right;

                    const checkSidesY = shipGeometry.top < locationGeometry.top + LocationHeight && shipGeometry.bottom > locationGeometry.bottom - LocationHeight;

                    if (checkSidesX && checkSidesY) {
                        boardLocationData.push([location.classList[1][0], location.classList[1][1]]);
                    }
                }
            } else {
                for (const location of placementGameBoardLocations) {
                    const locationGeometry = location.getBoundingClientRect();

                    const LocationWidth = (locationGeometry.right - locationGeometry.left);

                    const checkSidesX = shipGeometry.left < locationGeometry.left + LocationWidth && shipGeometry.right > locationGeometry.right - LocationWidth;

                    const checkSidesY = shipGeometry.top > locationGeometry.top && shipGeometry.bottom < locationGeometry.bottom;

                    if (checkSidesX && checkSidesY) {
                        boardLocationData.push([location.classList[1][0], location.classList[1][1]]);
                    }
                }
            }
            if (boardLocationData.length < shipLen) {
                return false;
            }
            if (boardLocationData.length > shipLen) {
                boardLocationData.pop();
            }
            let checkAllXAreEqual = true;
            let checkALLYAreEqual = true;
            const initX = boardLocationData[0][0];
            const initY = boardLocationData[0][1];
            for (const data of boardLocationData) {
                if (data[0] !== initX) {
                    checkAllXAreEqual = false;
                }
            }
            for (const data of boardLocationData) {
                if (data[1] !== initY) {
                    checkALLYAreEqual = false;
                }
            }
            if (checkAllXAreEqual || checkALLYAreEqual) {
                return boardLocationData;
            }
            return false;
        }

        donePlacingButton.addEventListener("click", () => {
            let allDone = true;
            const shipLocationData = [];
            for (const ship of playerShips) {
                const shipGeometry = ship.getBoundingClientRect();
                const shipRotated = ship.classList.contains("rotate");
                const boardLocation = returnBoardLocation(shipGeometry, shipRotated, getLength(ship.id));
                const shipIndex = 4 - getIndex(ship.id);
                if (boardLocation === false) {
                    ship.style.top = `${originalShipLocationInfo[shipIndex][startY]}px`;
                    ship.style.left = `${originalShipLocationInfo[shipIndex][startX]}px`;
                    allDone = false;
                } else {
                    shipLocationData.push(boardLocation);
                }
            }
            if (allDone) {
                if (checkDuplicates(shipLocationData.flat()) === true) {
                    resetShips();
                } else {
                    player.playerGameBoard.placeShip(FiveLength, shipLocationData[0]);

                    player.playerGameBoard.placeShip(FourLength, shipLocationData[1]);

                    player.playerGameBoard.placeShip(ThreeLengthC, shipLocationData[2]);

                    player.playerGameBoard.placeShip(ThreeLengthS, shipLocationData[3]);

                    player.playerGameBoard.placeShip(TwoLength, shipLocationData[4]);
                    resolve();
                }
            }
        });

        resetButton.addEventListener("click", resetShips);
    });
}

function booleanRandom() {
    const num = Math.random() * 100;
    if (num > 50) {
        return true;
    }
    return false;
}

function returnRandomLocations() {
    const computerShipLocationData = [];
    const shipLengths = [5, 4, 3, 3, 2];

    let rotate = false;

    for (const length of shipLengths) {
        let currentShipData = [];
        rotate = booleanRandom();
        let gotLocation = false;

        if (rotate) {
            while (gotLocation === false) {
                const X = Math.floor(Math.random() * 10);
                const Y = Math.floor(Math.random() * 6) + 4;
                for (let i = 0; i < length; i++) {
                    currentShipData.push([Y - i, X]);
                }
                const computerShipLocationDataCopyArr = [...computerShipLocationData];
                computerShipLocationDataCopyArr.push(currentShipData);
                if (checkDuplicates(computerShipLocationDataCopyArr.flat())) {
                    currentShipData = [];
                } else {
                    gotLocation = true;
                }
            }
        } else {
            while (gotLocation === false) {
                const Y = Math.floor(Math.random() * 10);
                const X = Math.floor(Math.random() * 6) + 4;
                for (let i = 0; i < length; i++) {
                    currentShipData.push([Y, X - i]);
                }
                const computerShipLocationDataCopyArr = [...computerShipLocationData];
                computerShipLocationDataCopyArr.push(currentShipData);
                if (checkDuplicates(computerShipLocationDataCopyArr.flat())) {
                    currentShipData = [];
                } else {
                    gotLocation = true;
                }
            }
        }

        /*  */
        computerShipLocationData.push(currentShipData);
    }
    return computerShipLocationData;
}
function placeComputerShipsOnGameBoard(computer) {
    const FiveLength = new Ship(`${computer.name}'s Carrier(5)`, 5);
    const FourLength = new Ship(`${computer.name}'s Battleship(4)`, 4);
    const ThreeLengthC = new Ship(`${computer.name}'s Cruiser(3)`, 3);
    const ThreeLengthS = new Ship(`${computer.name}'s Submarine(3)`, 3);
    const TwoLength = new Ship(`${computer.name}'s Destroyer(2)`, 2);

    const computerShipLocationData = returnRandomLocations();

    computer.playerGameBoard.placeShip(FiveLength, computerShipLocationData[0]);

    computer.playerGameBoard.placeShip(FourLength, computerShipLocationData[1]);

    computer.playerGameBoard.placeShip(ThreeLengthC, computerShipLocationData[2]);

    computer.playerGameBoard.placeShip(ThreeLengthS, computerShipLocationData[3]);

    computer.playerGameBoard.placeShip(TwoLength, computerShipLocationData[4]);
}

export { placeShipsOnGameBoard, placeComputerShipsOnGameBoard };
