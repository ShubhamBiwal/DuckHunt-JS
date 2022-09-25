var startScreen = new StartScreen();

function launchApplication() {
    let gameParameters = startScreen.getGameParametersFromUserSelect();
    let selectedModeName = gameParameters.modeName;
    let selectedMode;

    if (selectedModeName == "EXTREME") {
        selectedMode = new ExtremeGame(gameParameters);
    }
    else{
        selectedMode = new ClassicGame(gameParameters);
    }

    startScreen.hideStartScreen();
    selectedMode.startGame();
}