
const cell = 20
let s
let food
let scoreText = 'Score: 0'

function setup () {
  createCanvas(600, 600)
  frameRate(10)
  s = new Snake()
  pickLocation ()
}

function draw () {
  background(0)
  stroke(255)

  // Left to right
  for (let i = 0; i < height; i += cell) {
    line(0, i, width, i)
  }

  // Top to bottom
  for (let i = 0; i < width; i += cell) {
    line(i, 0, i, height)
  }
  
  if (s.eat(food)) {
    // Food was eaten, draw a new one
    pickLocation()
  }

  s.death()
  s.update()
  s.show()

  // Draw food using food Picklocation vector
  fill(255, 0, 0)
  square(food.x, food.y, cell)

  // Score Text
  fill('yellow')
  textSize(48)
  text(scoreText, 10, 40)
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW){
    s.dir(1, 0)
  } else if (keyCode === LEFT_ARROW){
    s.dir(-1, 0)
  } else if (keyCode === UP_ARROW) {
    s.dir(0, -1)
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1)
  }
}

function pickLocation () {
  const cols = floor(width/cell)
  const rows = floor(height/cell)

  food = createVector(floor(random(0, cols)), floor(random(0, rows)))
  food.mult(cell)
}