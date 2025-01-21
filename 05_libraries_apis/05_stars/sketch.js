let stars = [];
let ship;

function preload() {
  ship = loadImage('ship.webp');
}

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
    stars[i].update();
  }
  image(ship, mouseX - 128, mouseY - 128);
}

function Star() {
  this.x = random(0, 600);
  this.y = random(0, 600);
  this.size = random(5, 12);
  this.speed = random(1, 5);
  this.color = color(`hsl(54, 100%, ${random(20, 60)}%)`);
  console.log(this.color);
  this.display = function () {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  };

  this.update = function () {
    if (this.y > height) {
      this.y = 0;
    }

    this.updatedSpeed = map(mouseX, 0, width, 1, this.speed);
    this.y = this.y + this.updatedSpeed;
  };
}
