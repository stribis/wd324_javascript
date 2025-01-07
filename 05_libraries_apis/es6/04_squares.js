 
let squares = []

class Square {

  constructor () {
    this.x =  Math.floor( Math.random() * window.innerWidth)
    this.y = Math.floor( Math.random() * window.innerHeight)
    // this.color = [
    //   Math.floor( Math.random() * 255),
    //   Math.floor( Math.random() * 255),
    //   Math.floor( Math.random() * 255)
    // ]
    this.color = `hsl(58 100% ${Math.floor( Math.random() * 100)}%`
    this.size = Math.ceil( Math.random() * 14)
  }

  show () {

    const element = document.createElement('div')
    element.classList.add('square')
    element.style.left = `${this.x}px`
    element.style.top = `${this.y}px`
    // element.style.backgroundColor = `rgb(${this.color[0]},${this.color[1]},${this.color[2]})`
    element.style.backgroundColor = this.color
    element.style.width = `${this.size}px`
    element.style.height = `${this.size}px`

    document.querySelector('.field').append(element)
  }


}

for (let i =0; i < 100; i++) {
  squares.push(new Square())
  squares[i].show()
}
