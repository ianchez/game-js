//############## GAME PROJECT Part 7 - Make it awesome! ##############
function preload() {
	soundsSetup();
}

function setup()
{
	createCanvas(CANVAS.width, CANVAS.height);

	// Game logic
	setupGame();
	startGame();
}

function draw()
{
	// Center camera on char in the middle of screen
	game_state.cameraPosX = gameChar.x_pos - width / 2;

	///////////DRAWING CODE//////////
	drawSkyAndGround();
	drawScrollingScenery();
	drawScore();

	///////////GAME LOGIC//////////
	const isGameOver = checkGameOver();
	if (isGameOver) return;

	if (flagpole.isReached) {
		game_state.isCompleted = true;
		drawLevelCompleted();
		return;
	} else {
		checkFlagpole();
	}

	checkPlayerDie();

	///////////INTERACTION CODE//////////
	checkGameCharInteraction();
	checkCollectables(collectables);
	checkCanyons(canyons);
	checkPlatforms(platforms);
}
