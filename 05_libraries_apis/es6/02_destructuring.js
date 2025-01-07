
const subway = { 
  bread: 'Plain Italian',
  meat: 'Pulled Pork',
  cheese: 'Chedar',
  topping: ['Lettuce', 'Tomato', 'Cucumber']
}

// console.log(subway.bread)

// subway.bread = 'Grain'

// console.log(subway)

let {bread, cheese} = subway

// console.log(bread)

bread = 'Grain'

// console.log(subway)
// console.log(bread)

// Object Literal Enhancement

const name = 'Colombia'
const capital = 'Bogota'

let completeName = function () {
  console.log(`${this.name}'s capital is ${this.capital}`)
}

const country = {name, capital, completeName}


country.completeName()

console.log(country)
