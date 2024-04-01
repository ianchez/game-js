function checkGameCharInteraction() {
	// Smoothly move char while jumping
  if (gameChar.jumpingCount > 0) {
		gameChar.y_pos -= gameChar.jumpingVelocity;
		gameChar.jumpingCount--;
	}

	if (gameChar.isLeft) {
		gameChar.x_pos -= gameChar.walkingSpeed;
	}
	if (gameChar.isRight) {
		gameChar.x_pos += gameChar.walkingSpeed;
	}

	gameChar.isInTheAir = gameChar.y_pos < game_state.floorPos_y;

	if (gameChar.isInTheAir) {
		gameChar.y_pos += gameChar.fallingSpeed;
		gameChar.isFalling = true;
	} else {
		gameChar.isFalling = false;
	}

  // Avoid gameChar to movement when plummeting
  if (gameChar.isPlummeting) {
		gameChar.y_pos += gameChar.fallingSpeed;
		gameChar.isLeft = false;
		gameChar.isRight = false;
	}
}

function checkCanyons(t_canyons) {
	for (let i = 0; i < t_canyons.length; i ++) {
		let t_canyon = t_canyons[i];
		let isCharOverTheCanyon =
			(gameChar.x_pos - gameChar.width / 3 >= t_canyon.x_pos) && // Left validation
			(gameChar.x_pos + gameChar.width / 3 <= t_canyon.x_pos + t_canyon.width); // Right validation

		if (isCharOverTheCanyon && !gameChar.isInTheAir) {
			gameChar.isPlummeting = true;
		}
	}
}

function checkPlatforms(t_platforms) {
	for (let i = 0; i < t_platforms.length; i ++) {
		let t_platform = t_platforms[i];
		let isCharOverThePlatform =
			(gameChar.x_pos >= t_platform.x_pos) && // Left validation
			(gameChar.x_pos <= t_platform.x_pos + t_platform.width); // Right validation

		if (
			isCharOverThePlatform &&
			(gameChar.y_pos - t_platform.y_pos) <= 4 &&
			(gameChar.y_pos - t_platform.y_pos) >= 0
		) {
			gameChar.y_pos = t_platform.y_pos;
			gameChar.isInTheAir = false;
			gameChar.isFalling = false;
		}
	}
}

function checkCollectables(t_collectables) {
	for (let i = 0; i < t_collectables.length; i ++) {
		let t_collectable = t_collectables[i];

		let rangeFromCollectable = dist(
			t_collectable.x_pos, t_collectable.y_pos,
			gameChar.x_pos, gameChar.y_pos
		);

		if ((rangeFromCollectable <= t_collectable.size * 1.6) && !t_collectable.isFound) { 
			sounds.collectedItem.play();
			t_collectable.isFound = true;
			game_state.score += 1;
		}
	}
}

function checkFlagpole() {
	let charFlagpoleDist_x = dist(gameChar.x_pos, gameChar.y_pos, flagpole.x_pos, gameChar.y_pos);
	if (charFlagpoleDist_x === 0) {
		sounds.completedGame.play();
		flagpole.isReached = true;
	}
}

function checkPlayerDie() {
	if (gameChar.y_pos > height + gameChar.height) {
		sounds.charDied.play();
		game_state.lives = constrain(game_state.lives - 1, 0, game_state.maxLives);
		if (game_state.lives > 0) {
			startGame();
		}
	}
}

function gameCharJump() {
	if (!gameChar.isFalling) {
		sounds.jump.play();
		isJumping = true;
		gameChar.y_pos -= gameChar.jumpingVelocity;
		gameChar.jumpingCount = gameChar.jumpingFrames - 1;
	}
};

function checkGameOver() {
	if (game_state.lives < 1) {
		if (!game_state.isOver) {
			sounds.gameOver.play();
		}
		game_state.isOver = true;
		drawGameOver();
	}
	return game_state.isOver;
}

