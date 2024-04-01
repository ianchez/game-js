function drawGameChar() {
	if (gameChar.isLeft && gameChar.isFalling) {
		drawCharLeftJumping();
	} else if (gameChar.isRight && gameChar.isFalling) {
		drawCharRightJumping();
	} else if (gameChar.isLeft) {
		drawCharLeftWalking();
	} else if (gameChar.isRight) {
		drawCharRightWalking();
	} else if (gameChar.isFalling || gameChar.isPlummeting) {
		drawCharFrontJumping();
	} else {
		drawCharFrontFacing();
	}
}

function drawCharFrontFacing() {
	// Torso
	fill(gameChar.colors.torso);
	rect(
		gameChar.x_pos - gameChar.width / 2,
		gameChar.y_pos - gameChar.legHeight,
		gameChar.width,
		- gameChar.torsoHeight
	);

	// Head
	fill(gameChar.colors.skin);
	ellipse(
		gameChar.x_pos,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight - gameChar.neckLength,
		gameChar.headWidth,
		gameChar.headHeight
	);

	// Arms
	fill(gameChar.colors.arms);
	// Left
	rect(
		gameChar.x_pos - gameChar.width / 2,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight * 0.2,
		- gameChar.width / 6,
		- gameChar.torsoHeight * 0.7
	);
	// Right
	rect(
		gameChar.x_pos + gameChar.width / 2,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight * 0.2,
		gameChar.width / 6,
		- gameChar.torsoHeight * 0.7
	);

	// Legs
	fill(gameChar.colors.legs);
	// Upper
	rect(
		gameChar.x_pos - gameChar.width / 2,
		gameChar.y_pos - gameChar.legHeight * 0.8,
		gameChar.width,
		- gameChar.legHeight * 0.4
	)
	// Left
	rect(
		gameChar.x_pos - gameChar.width / 2,
		gameChar.y_pos - gameChar.legHeight,
		gameChar.width / 2.5,
		gameChar.legHeight
	)
	// Right
	rect(
		gameChar.x_pos + gameChar.width / 2,
		gameChar.y_pos - gameChar.legHeight,
		- gameChar.width / 2.5,
		gameChar.legHeight
	)
}

function drawCharFrontJumping() {
	// Torso
	fill(gameChar.colors.torso);
	rect(
		gameChar.x_pos - gameChar.width / 2,
		gameChar.y_pos - gameChar.legHeight,
		gameChar.width,
		- gameChar.torsoHeight
	);

	// Head
	fill(gameChar.colors.skin);
	ellipse(
		gameChar.x_pos,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight - gameChar.neckLength,
		gameChar.headWidth,
		gameChar.headHeight
	);

	// Arms
	fill(gameChar.colors.arms);
	// Left
	rect(
		gameChar.x_pos - gameChar.width / 2,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight * 0.2,
		- gameChar.width / 6,
		- gameChar.torsoHeight * 0.7
	);
	// Right
	rect(
		gameChar.x_pos + gameChar.width / 2.3,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight * 0.7,
		gameChar.width / 4.5,
		-gameChar.torsoHeight * 0.7
	);

	// Legs
	fill(gameChar.colors.legs);
	// Upper
	rect(
		gameChar.x_pos - gameChar.width / 2,
		gameChar.y_pos - gameChar.legHeight * 0.8,
		gameChar.width,
		- gameChar.legHeight * 0.4
	)
	// Left
	rect(
		gameChar.x_pos - gameChar.width / 2,
		gameChar.y_pos - gameChar.legHeight,
		gameChar.width / 2.5,
		gameChar.legHeight
	)
	// Right
	rect(
		gameChar.x_pos + gameChar.width / 2,
		gameChar.y_pos - gameChar.legHeight * 1.6,
		- gameChar.width / 2.5,
		gameChar.legHeight
	)
}

function drawCharLeftWalking() {
	// Left Arm
	fill(gameChar.colors.arms);
	rect(
		gameChar.x_pos - gameChar.depth / 1.6,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight * 0.3,
		gameChar.depth / 4,
		- gameChar.torsoHeight * 0.6
	);

	// Torso
	fill(gameChar.colors.torso);
	rect(
		gameChar.x_pos - gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight,
		gameChar.depth,
		- gameChar.torsoHeight
	);

	// Head
	fill(gameChar.colors.skin);
	ellipse(
		gameChar.x_pos,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight - gameChar.neckLength,
		gameChar.headWidth,
		gameChar.headHeight
	);

	// Right Arm
	fill(gameChar.colors.arms);
	rect(
		gameChar.x_pos + gameChar.depth / 1.6,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight * 0.2,
		- gameChar.depth / 2.8,
		- gameChar.torsoHeight * 0.7
	);

	// Legs
	fill(gameChar.colors.legs);
	// Upper
	rect(
		gameChar.x_pos - gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight * 0.8,
		gameChar.depth,
		- gameChar.legHeight * 0.4
	)
	// Left
	rect(
		gameChar.x_pos - gameChar.depth / 1.7,
		gameChar.y_pos - gameChar.legHeight * 1.2,
		gameChar.depth * 0.5,
		gameChar.legHeight
	)
	// Right
	rect(
		gameChar.x_pos + gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight,
		- gameChar.depth * 0.5,
		gameChar.legHeight
	)
}

function drawCharRightWalking() {
	// Left Arm
	fill(gameChar.colors.arms);
	rect(
		gameChar.x_pos + gameChar.depth / 3,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight * 0.3,
		gameChar.depth / 4,
		- gameChar.torsoHeight * 0.6
	);

	// Torso
	fill(gameChar.colors.torso);
	rect(
		gameChar.x_pos - gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight,
		gameChar.depth,
		- gameChar.torsoHeight
	);

	// Head
	fill(gameChar.colors.skin);
	ellipse(
		gameChar.x_pos,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight - gameChar.neckLength,
		gameChar.headWidth,
		gameChar.headHeight
	);

	// Right Arm
	fill(gameChar.colors.arms);
	rect(
		gameChar.x_pos - gameChar.depth / 5,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight * 0.2,
		- gameChar.depth / 2.8,
		- gameChar.torsoHeight * 0.7
	);

	// Legs
	fill(gameChar.colors.legs);
	// Upper
	rect(
		gameChar.x_pos - gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight * 0.8,
		gameChar.depth,
		- gameChar.legHeight * 0.4
	)
	// Left
	rect(
		gameChar.x_pos - gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight,
		gameChar.depth * 0.5,
		gameChar.legHeight
	)
	// Right
	rect(
		gameChar.x_pos + gameChar.depth / 1.7,
		gameChar.y_pos - gameChar.legHeight * 1.2,
		- gameChar.depth * 0.5,
		gameChar.legHeight
	)
}

function drawCharLeftJumping() {
	// Right Arm
	fill(gameChar.colors.arms);
	rect(
		gameChar.x_pos - gameChar.depth / 4,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight,
		- gameChar.depth / 3,
		- gameChar.torsoHeight * 0.7
	);

	// Torso
	fill(gameChar.colors.torso);
	rect(
		gameChar.x_pos - gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight,
		gameChar.depth,
		- gameChar.torsoHeight
	);

	// Head
	fill(gameChar.colors.skin);
	ellipse(
		gameChar.x_pos,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight - gameChar.neckLength,
		gameChar.headWidth,
		gameChar.headHeight
	);

	// Left Arm
	fill(gameChar.colors.arms);
	rect(
		gameChar.x_pos + gameChar.depth / 5,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight * 0.2,
		gameChar.depth / 2.8,
		- gameChar.torsoHeight * 0.7
	);

	// Legs
	fill(gameChar.colors.legs);
	// Upper
	rect(
		gameChar.x_pos - gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight * 0.8,
		gameChar.depth,
		- gameChar.legHeight * 0.4
	)
	// Right
	rect(
		gameChar.x_pos - gameChar.depth / 1.7,
		gameChar.y_pos - gameChar.legHeight * 1.3,
		gameChar.depth * 0.5,
		gameChar.legHeight * 0.8
	)
	// Left
	rect(
		gameChar.x_pos + gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight,
		- gameChar.depth * 0.5,
		gameChar.legHeight
	)
}

function drawCharRightJumping() {
	// Left Arm
	fill(gameChar.colors.arms);
	rect(
		gameChar.x_pos + gameChar.depth / 4,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight,
		gameChar.depth / 3,
		- gameChar.torsoHeight * 0.7
	);

	// Torso
	fill(gameChar.colors.torso);
	rect(
		gameChar.x_pos - gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight,
		gameChar.depth,
		- gameChar.torsoHeight
	);

	// Head
	fill(gameChar.colors.skin);
	ellipse(
		gameChar.x_pos,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight - gameChar.neckLength,
		gameChar.headWidth,
		gameChar.headHeight
	);

	// Right Arm
	fill(gameChar.colors.arms);
	rect(
		gameChar.x_pos - gameChar.depth / 5,
		gameChar.y_pos - gameChar.legHeight - gameChar.torsoHeight * 0.2,
		- gameChar.depth / 2.8,
		- gameChar.torsoHeight * 0.7
	);

	// Legs
	fill(gameChar.colors.legs);
	// Upper
	rect(
		gameChar.x_pos - gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight * 0.8,
		gameChar.depth,
		- gameChar.legHeight * 0.4
	)
	// Left
	rect(
		gameChar.x_pos - gameChar.depth / 2,
		gameChar.y_pos - gameChar.legHeight,
		gameChar.depth * 0.5,
		gameChar.legHeight
	)
	// Right
	rect(
		gameChar.x_pos + gameChar.depth / 1.7,
		gameChar.y_pos - gameChar.legHeight * 1.3,
		- gameChar.depth * 0.5,
		gameChar.legHeight * 0.8
	)
}