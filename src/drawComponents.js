function drawScrollingScenery() {
	// Start Scrolling Scenery
	push();
	translate(-game_state.cameraPosX, 0);

	// Landscape
	drawCanyons(canyons);
	drawClouds();
	drawMountains();
	drawTrees();
	drawPlatforms();
	drawCollectableItems(collectables);
	renderFlagpole();
	drawGameChar();
	// Hide Char from canyon borders when falling
	drawCanyonsBorders(canyons);

	// End Scrolling scenery
	pop();
}

function drawGameOver() {
	stroke(10);
	fill(255);
	textSize(40);
	text('Game over. Press space to continue.', 200, height / 2);
}

function drawLevelCompleted() {
	stroke(10);
	fill(255);
	textSize(40);
	text('Level complete. Press space to continue.', 160, height / 2);
}

function drawScore() {
	stroke(10);
	fill(255);

	textSize(16);
	text('Lives:', 20, 20);
	fill(255, 0, 0);
	for (let i = 1; i <= game_state.maxLives; i++) {
		let tokenColor = game_state.lives >= i ? color(255, 0, 0) : color(0);
		fill(tokenColor);
		ellipse(
			76 + 16 * (i - 1),
			15,
			12
		)
	}

	fill(255);
	text(`Score: ${game_state.score}`, 20, 40);
}

function renderFlagpole() {
	strokeWeight(5);
	stroke(180);
	// Pole
	line(
		flagpole.x_pos, game_state.floorPos_y,
		flagpole.x_pos, game_state.floorPos_y - flagpole.poleHeight,
	);

	// Flag
	noStroke();
	fill(200, 0, 0);
	if (flagpole.isReached) {
		rect(
			flagpole.x_pos, game_state.floorPos_y - 30,
			40, 30
		);
	} else {
		rect(
			flagpole.x_pos, game_state.floorPos_y - flagpole.poleHeight,
			40, 30
		);
	}
}

function drawSkyAndGround() {
	background(COLORS.sky);
	noStroke();
	fill(COLORS.ground);
	rect(0, game_state.floorPos_y, width, height - game_state.floorPos_y);
}

function drawClouds() {
	noStroke();
	fill(255); // White
	for (let i = 0; i < clouds.length; i++) {
		circle(clouds[i].x_pos + clouds[i].size * 1.1, clouds[i].y_pos, clouds[i].size * 0.3);
		circle(clouds[i].x_pos + clouds[i].size * 0.8, clouds[i].y_pos, clouds[i].size * 0.6);
		circle(clouds[i].x_pos, clouds[i].y_pos, clouds[i].size);
		circle(clouds[i].x_pos + clouds[i].size * 0.5, clouds[i].y_pos, clouds[i].size * 0.7);
		circle(clouds[i].x_pos - clouds[i].size * 0.5, clouds[i].y_pos - 10, clouds[i].size * 0.6);
		circle(clouds[i].x_pos - clouds[i].size * 0.8, clouds[i].y_pos, clouds[i].size * 0.4);

		// Make them move
		clouds[i].x_pos += clouds[i].speed;
	}
}

function drawMountains() {
	noStroke();
	for (let i = 0; i < mountains.length; i++) {
		fill(mountains[i].color);
		triangle(
			mountains[i].x_pos, mountains[i].y_pos,
			mountains[i].x_pos + mountains[i].size * 12, mountains[i].y_pos,
			mountains[i].x_pos + mountains[i].size * 7, game_state.floorPos_y - 4 * mountains[i].size,
		);
	}
}

function randomMountainColor () {
	return random(50, 120);
}

function drawTrees() {
	noStroke();
	for (let i = 0; i < trees.length; i++) {
		let t_tree = trees[i];
		// Trunk
		fill(COLORS.tree.trunk);
		rect(t_tree.x_pos, t_tree.y_pos, 40, -40);

		// Leaves
		fill(COLORS.tree.leaves);
		triangle(t_tree.x_pos - 90, t_tree.y_pos - 40, t_tree.x_pos + 20, t_tree.y_pos - 100, t_tree.x_pos + 130, t_tree.y_pos - 40);
		triangle(t_tree.x_pos - 80, t_tree.y_pos - 80, t_tree.x_pos + 20, t_tree.y_pos - 160, t_tree.x_pos + 120, t_tree.y_pos - 80);
		triangle(t_tree.x_pos - 70, t_tree.y_pos - 120, t_tree.x_pos + 20, t_tree.y_pos - 200, t_tree.x_pos + 110, t_tree.y_pos - 120);
		triangle(t_tree.x_pos - 60, t_tree.y_pos - 160, t_tree.x_pos + 20, t_tree.y_pos - 240, t_tree.x_pos + 100, t_tree.y_pos - 160);
		triangle(t_tree.x_pos - 50, t_tree.y_pos - 200, t_tree.x_pos + 20, t_tree.y_pos - 280, t_tree.x_pos + 90, t_tree.y_pos - 200);
	}
}

function drawPlatforms() {
	stroke(COLORS.platform.stroke)
	fill(COLORS.platform.fill);
	for (let i = 0; i < platforms.length; i++) {
		let t_platform = platforms[i];
		rect(t_platform.x_pos, t_platform.y_pos, t_platform.width, t_platform.height);
	}
}

function drawCollectableItems(t_collectables) {
	for (let i = 0; i < t_collectables.length; i ++) {
		let t_collectable = t_collectables[i];
		if (!t_collectable.isFound) {
			noStroke();
			fill(179,154,56); // Gold
			beginShape();
			vertex(t_collectable.x_pos - t_collectable.size * 4/5, t_collectable.y_pos + t_collectable.size / 2);
			vertex(t_collectable.x_pos - t_collectable.size * 4/5, t_collectable.y_pos - t_collectable.size / 2);
			vertex(t_collectable.x_pos + t_collectable.size * 4/5, t_collectable.y_pos - t_collectable.size / 2);
			vertex(t_collectable.x_pos + t_collectable.size * 4/5, t_collectable.y_pos + t_collectable.size / 2);
			endShape();
			fill(159,124,46); // Darker gold
			beginShape();
			vertex(t_collectable.x_pos + t_collectable.size * 7/10, t_collectable.y_pos + t_collectable.size / 2);
			vertex(t_collectable.x_pos + t_collectable.size * 7/10, t_collectable.y_pos - t_collectable.size / 2);
			vertex(t_collectable.x_pos - t_collectable.size * 7/10, t_collectable.y_pos - t_collectable.size / 2);
			vertex(t_collectable.x_pos - t_collectable.size * 7/10, t_collectable.y_pos + t_collectable.size / 2);
			endShape();
	
			fill(0); // Black
			beginShape();
			vertex(t_collectable.x_pos - t_collectable.size * 4/5, t_collectable.y_pos - t_collectable.size * 1/10);
			vertex(t_collectable.x_pos - t_collectable.size * 4/5, t_collectable.y_pos - t_collectable.size * 1/50);
			vertex(t_collectable.x_pos + t_collectable.size * 4/5, t_collectable.y_pos - t_collectable.size * 1/50);
			vertex(t_collectable.x_pos + t_collectable.size * 4/5, t_collectable.y_pos - t_collectable.size * 1/10);
			endShape();
	
			fill(131,30,26); // Ruby red
			beginShape();
			vertex(t_collectable.x_pos - t_collectable.size * 1/10, t_collectable.y_pos - t_collectable.size * 1/5);
			vertex(t_collectable.x_pos - t_collectable.size * 1/10, t_collectable.y_pos - t_collectable.size * 2/50);
			vertex(t_collectable.x_pos + t_collectable.size * 1/10, t_collectable.y_pos - t_collectable.size * 2/50);
			vertex(t_collectable.x_pos + t_collectable.size * 1/10, t_collectable.y_pos - t_collectable.size * 1/5);
			endShape();
		}
	}
}

function drawCanyons(t_canyons) {
	for (let i = 0; i < t_canyons.length; i ++) {
		let t_canyon = t_canyons[i];
		noStroke();
		fill(18,19,29); // Dark Grey
		rect(
			t_canyon.x_pos,
			game_state.floorPos_y,
			constrain(t_canyon.width, 10, t_canyon.width),
			height - game_state.floorPos_y
		);
		fill(18,36,18); // Darkest Green
		rect(
			t_canyon.x_pos + 1,
			game_state.floorPos_y,
			-90,
			height - game_state.floorPos_y
		);
	}
}

function drawCanyonsBorders(t_canyons) {
	for (let i = 0; i < t_canyons.length; i ++) {
		let t_canyon = t_canyons[i];
		noStroke();
		// Side ground (Left)
		fill(30,60,30); // Darkest Green
		rect(
			t_canyon.x_pos - 10,
			game_state.floorPos_y + 68,
			-90,
			height - game_state.floorPos_y + 68
		);

		// Side ground (Right)
		fill(20,40,20); // Darkest Green
		rect(
			t_canyon.x_pos + constrain(t_canyon.width - 53, -50, t_canyon.width - 53),
			game_state.floorPos_y + 28,
			100,
			height - game_state.floorPos_y + 28,
		);
		fill(35, 70, 35); // Dark Green
		rect(
			t_canyon.x_pos + constrain(t_canyon.width - 3, -70, t_canyon.width - 3),
			game_state.floorPos_y + 108,
			130,
			height - game_state.floorPos_y + 108,
		);

		// Side ground (Left)
		fill(50, 100, 50); // Lesser Dark Green
		rect(
			t_canyon.x_pos + 40,
			game_state.floorPos_y + 128,
			-100,
			40
		);


		fill(COLORS.ground);
		// Left side
		beginShape();
		vertex(t_canyon.x_pos - 102, game_state.floorPos_y)
		vertex(t_canyon.x_pos, game_state.floorPos_y);
		vertex(t_canyon.x_pos - 60, game_state.floorPos_y + 28);
		vertex(t_canyon.x_pos - 10, game_state.floorPos_y + 68);
		vertex(t_canyon.x_pos - 100, game_state.floorPos_y + 118);
		vertex(t_canyon.x_pos + 40, game_state.floorPos_y + 128);
		vertex(t_canyon.x_pos - 20, game_state.floorPos_y + 146);
		vertex(t_canyon.x_pos - 102, height);
		endShape();

		// Right side
		beginShape();
		vertex(t_canyon.x_pos + t_canyon.width + 127, game_state.floorPos_y + 146);
		vertex(t_canyon.x_pos + constrain(t_canyon.width + 127, 80, t_canyon.width + 127), game_state.floorPos_y + 128);
		vertex(t_canyon.x_pos + constrain(t_canyon.width - 3, -70, t_canyon.width - 3), game_state.floorPos_y + 108);
		vertex(t_canyon.x_pos + constrain(t_canyon.width + 27, 0, t_canyon.width + 27), game_state.floorPos_y + 68);
		vertex(t_canyon.x_pos + constrain(t_canyon.width - 53, -50, t_canyon.width - 53), game_state.floorPos_y + 28);
		vertex(t_canyon.x_pos + constrain(t_canyon.width, 10, t_canyon.width), game_state.floorPos_y)
		vertex(t_canyon.x_pos + t_canyon.width + 130, game_state.floorPos_y);
		vertex(t_canyon.x_pos + t_canyon.width + 130, height);
		endShape();
	}
}