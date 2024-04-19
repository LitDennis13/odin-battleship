const startHTML = '<h1 id="title">BattleShip</h1>';

const gameMarkup = `<h2 id="current-player">Current Player</h2>
<div id="current-player-game-board-outer">
    <div id="current-start-block"></div>
    <div id="horizontal-numbering-current">
        <p>0</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
    </div>
    <div id="vertical-numbering-current">
    <p>9</p>
    <p>8</p>
    <p>7</p>
    <p>6</p>
    <p>5</p>
    <p>4</p>
    <p>3</p>
    <p>2</p>
    <p>1</p>
    <p>0</p>
    </div>
    <div id="current-player-game-board-display"></div>
</div>
<div id="other-player-game-board-outer">
    <div id="other-start-block"></div>
    <div id="horizontal-numbering-other">
        <p>0</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
    </div>
    <div id="vertical-numbering-other">
        <p>9</p>
        <p>8</p>
        <p>7</p>
        <p>6</p>
        <p>5</p>
        <p>4</p>
        <p>3</p>
        <p>2</p>
        <p>1</p>
        <p>0</p>
    </div>
    <div id="other-player-game-board-display"></div>
</div>

<button id="change-turn-button"></button>`;

const gameModeOptionScreen = `
<button id="vs-computer">Computer</button>
<button id="vs-player">Two Player</button>
`;
function shipPlacementScreen(name) {
    return `<div id="ship-placement-screen">
    <h2 id="player-title-ship-placement">${name} Placement</h2>
    
    <div id="ship-placement-container">
        <div id="placement-game-board">
            <div id="placement-start-block"></div>
            <div id="horizontal-numbering-placement">
                <p>0</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
            </div>
            <div id="vertical-numbering-placement">
            <p>9</p>
            <p>8</p>
            <p>7</p>
            <p>6</p>
            <p>5</p>
            <p>4</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
            <p>0</p>
            </div>
    
            <div id="locations"></div>
        </div>
        <div id="player-ships">
            <div id="player-ships-container">
                <div id="carrier"></div>
                <div id="battleship"></div>
                <div id="cruiser"></div>    
                <div id="submarine"></div>
                <div id="destroyer"></div>
            </div>
        </div>
    </div>
    
    <div id="ship-placement-buttons">
        <button id="reset-placing-button">Reset</button>
        <button id="done-placing-button">Done</button>
        
    </div>
    
    </div>`;
}

function loadGameMarkup() {
    const htmlBody = document.querySelector("body");
    htmlBody.innerHTML = (startHTML + gameMarkup);
}

function PassScreen() {
    const currentGameBoardLocations = document.querySelectorAll("#current-player-game-board-display > div");
    const otherGameBoardLocations = document.querySelectorAll("#other-player-game-board-display > div");
    for (const location of currentGameBoardLocations) {
        location.style.backgroundColor = "rgb(0,175,255)";
    }
    for (const location of otherGameBoardLocations) {
        location.style.backgroundColor = "rgb(0,200,255)";
    }
}

function loadWinnerScreen(player) {
    const currentPlayerDisplay = document.querySelector("#current-player");

    if (player === "draw") {
        currentPlayerDisplay.textContent = "Draw";
        return;
    }

    const currentPlayerName = player.name;
    currentPlayerDisplay.textContent = `${currentPlayerName} Wins`;
}

function loadGameModeOptions() {
    const htmlBody = document.querySelector("body");
    htmlBody.innerHTML = (startHTML + gameModeOptionScreen);
}

function loadShipPlacementScreen(name) {
    const htmlBody = document.querySelector("body");
    htmlBody.innerHTML = (startHTML + shipPlacementScreen(name));
}

export {
    loadGameMarkup, PassScreen, loadWinnerScreen, loadGameModeOptions,
    loadShipPlacementScreen,
};
