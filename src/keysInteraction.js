function keyPressed()
{
	const gameEnded = game_state.isCompleted || game_state.isOver;

	if (keyCode === 32) { // Space
		if (gameEnded) {
			// Restart Game
			setup();
		} else if (!gameChar.isPlummeting) {
			gameCharJump();
		}
	}

	if (!gameChar.isPlummeting && !gameEnded) {
		if (keyCode === 65 || keyCode === 37) { // Left Arrow or A
			gameChar.isLeft = true;
		}
		else if (keyCode === 68 || keyCode === 39) { // Right Arrow or D
			gameChar.isRight = true;
		}
		
		if (keyCode === 87) { // W
			gameCharJump()
		}
	}
}

function keyReleased()
{
	if (keyCode === 65 || keyCode === 37) {
		gameChar.isLeft = false;
	}
	else if (keyCode === 68 || keyCode === 39) {
		gameChar.isRight = false;
	}
}