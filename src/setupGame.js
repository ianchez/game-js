function setupGame() {
	game_state = { ...GAME_INITIAL_STATE };

  // Collectables
  collectables = generate(Collectable, 6);

	// Canyons
	canyons = generateXPos(Canyon, [
		random(-200,100),
		400,
		random(1000,1400),
	]);

	// Trees
	trees = generateXPos(Tree, [-400, 100, 350, 700, 900, 1600]);

	// Clouds
	clouds = generate(Cloud ,random(3, 15));

	// Mountains
	mountains = generate(Mountain, random(5, 20));

	// Platforms
	platforms = generateXPos(Platform, [-300, 100, 400, 800, 1200]);

	// Flagpole
	flagpole = { ...POLE_STATE };
}