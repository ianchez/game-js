const CANVAS = {
  width: 1024,
  height: 576,
}

const GAME_INITIAL_STATE = {
	isOver: false,
	isCompleted: false,
	lives: 3,
	maxLives: 3,
	score: 0,
  floorPos_y: CANVAS.height * 3/4,
  cameraPosX: 0,
};

const COLORS = {
  ground: 'rgb(0,155,0)', // Green
  sky: 'rgb(100,155,255)', // Light Blue
  tree: {
    trunk: 'rgb(61,48,31)', // Dark Brown
    leaves: 'rgb(60,88,69)' // Palid Green
  },
  platform: {
    stroke: 'rgb(20,20,50)', // Dark Blue
    fill: 'rgb(50,25,30)', // Reddish Brown
  }
};

const GAME_CHAR_HEIGHT = 60;

const GAME_CHAR_GENERAL_ATTRIBUTES = {
  height: GAME_CHAR_HEIGHT,
  walkingSpeed: 2,
  fallingSpeed: 2,
  colors: {
    skin: 'rgb(203,190,181)', // Skin
    arms: 'rgb(255,115,115)', // Pink
    torso: 'rgb(14,47,68)', // Dark Green Blue
    legs: 'rgb(24,50,90)', // Dark Blue
  },
  jumpingCount: 0,
  // This combination	of attributes will determine the height of the jump,
  // ex: 11 frames of 10px each will make the char jump 110px
  jumpingFrames: 11,
  jumpingVelocity: 10,
};

const GAME_CHAR_PROPORTIONS = {
  width: GAME_CHAR_HEIGHT * 4 / 10,
  depth: GAME_CHAR_HEIGHT * 22 / 60,
  torsoHeight: GAME_CHAR_HEIGHT / 2,
  legWidth: GAME_CHAR_HEIGHT / 6,
  legHeight: GAME_CHAR_HEIGHT * 7/30,
  neckLength: GAME_CHAR_HEIGHT / 10,
  headHeight: GAME_CHAR_HEIGHT / 3,
  headWidth: GAME_CHAR_HEIGHT / 3,
}

const GAME_CHAR_MOVEMENT_ATTRIBUTES = {
  ...gameChar,
  isLeft: false,
  isRight: false,
  isFalling: false,
  isInTheAir: false,
  isPlummeting: false,
}

const POLE_STATE = {
  x_pos: 2000,
  y_pos: GAME_INITIAL_STATE.floorPos_y,
  isReached: false,
  poleHeight: 200,
}