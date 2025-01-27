
class Snake {
  constructor () {
    this.x = 0
    this.y = 0

    this.xspeed = 1
    this.yspeed = 0

    this.total = 0
    this.tail = []
  }

  show () {
    fill(0, 255, 0)

    for(let i = 0; i < this.tail.length; i++) {
      square(this.tail[i].x, this.tail[i].y, cell)
    }

    square(this.x, this.y, cell)

  } 

  update() {

    // Update tail position
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1]
    }
    
    if(this.total >=1 ) {
      this.tail[this.total- 1] = createVector(this.x, this.y)
    }

    this.x = this.x + this.xspeed * cell
    this.y = this.y + this.yspeed * cell


    this.x = constrain(this.x, 0, width - cell)
    this.y = constrain(this.y, 0, height - cell)
  }

  dir (x, y) {
    this.xspeed = x
    this.yspeed = y
  }

  death() {
    // Test if head touches tail
    for( let i = 0; i < this.tail.length; i++) {
      const pos = this.tail[i]
      const d = dist(this.x, this.y, pos.x, pos.y)
      if (d < 1) {
        console.log('You died')
        // Reset game
        scoreText = 'You Died'
        this.total = 0
        this.tail = []
      }
    }
  }

  eat (pos) {
    let d = dist(this.x, this.y, pos.x, pos.y)
    if (d < 1) {
      this.total++
      
      scoreText = `Score: ${this.total}`
      return true
    } else {
      return false
    }
  }

}