function soundsSetup() {
  soundFormats('mp3', 'wav');
  sounds = {
    collectedItem: loadSound('src/sounds/collectedItem.wav'),
    jump: loadSound('src/sounds/jump.wav'),
    charDied: loadSound('src/sounds/dead.wav'),
    completedGame: loadSound('src/sounds/completed.wav'),
    gameOver: loadSound('src/sounds/gameOver.wav'),
  };

  sounds.collectedItem.setVolume(0.2);
  sounds.jump.setVolume(0.2);
  sounds.charDied.setVolume(0.2);
  sounds.completedGame.setVolume(0.3);
  sounds.gameOver.setVolume(0.1);
}