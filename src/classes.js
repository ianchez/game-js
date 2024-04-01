class Cloud {
  constructor() {
    this.x_pos = random(-1000, CANVAS.width + 1000);
    this.y_pos = random(70, 200);
    this.size = random(40, 120);
    this.speed = random(0.05, 0.20);
  }
}

class Tree {
  constructor(x_pos) {
    this.x_pos = x_pos;
    this.y_pos = game_state.floorPos_y;
  }
}

class Canyon {
  constructor(x_pos) {
    this.x_pos = x_pos;
    this.width = random(30, 110);
  }
}

class Mountain {
  constructor() {
    this.x_pos = random(-1000, CANVAS.width + 800);
    this.y_pos = game_state.floorPos_y;
    this.size = random(30, 100);
    this.color = randomMountainColor();
  }
}

class Collectable {
  constructor() {
    this.x_pos = random(-700, CANVAS.width + 1000);
    this.y_pos = game_state.floorPos_y - random(80, 115);
    this.size = random(20, 25);
    this.isFound = false;
  }
}

class Platform {
  constructor() {
    this.x_pos = random(-700, CANVAS.width + 1000);
    // Be aware of the character jumping height 
    this.y_pos = game_state.floorPos_y - random(40, 90);
    this.width = random(40, 300);
    this.height = 16;
  }
}