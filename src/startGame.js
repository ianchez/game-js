function startGame() {
	// Camera starting pos
	cameraPosX = 0;

	// Game Char general attributes
	gameChar = {
		x_pos: width / 2,
		y_pos: game_state.floorPos_y,
		...GAME_CHAR_GENERAL_ATTRIBUTES,
		...GAME_CHAR_PROPORTIONS,
		...GAME_CHAR_MOVEMENT_ATTRIBUTES,
	};
}