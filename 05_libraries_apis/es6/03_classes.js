
class Vacation {

  // This function will run when a class is instanced
  constructor (destination, duration) {
    this.destination = destination
    this.duration = duration
  }

  print () {
    return `A trip to ${this.destination} will take ${this.duration} days`;
  }

  informDestination () {
    return `You will go to ${this.destination}`
  }

}

const floridaTrip = new Vacation('Florida', 12)
const japanTrip = new Vacation('Japan', 20)

console.log(floridaTrip, japanTrip)