// DOMContentLoaded in built-in event
// this event is fired when the DOM is fully loaded and parsed
addEventListener("DOMContentLoaded", () => castParallax());

// function for the parallax scroll effect
function castParallax() {
  // eventlistener for the window when it is being scrolled
  window.addEventListener("scroll", () => {
    // "this" always refers to its predefined context
    // in this context, "this" refers to the window object
    // if we would have a button.addEventListener("click", function(){...})
    // the "this" would refer to the button object
    let top = this.scrollY;

    // get all layers with the parallax class in the html
    const layers = document.querySelectorAll(".parallax");

    // here we now define 3 different variables
    // the first on is layer, for all the uniqe layers
    // the second one is for the speed, which refers to the data-attribute data-speed in the HTML
    // lastly, we have the yPos which is being calculated with the help of "top" and "speed" variable
    let layer, speed, yPos;

    // iterate through all the layers with the help of a for loop
    for (let index = 0; index < layers.length; index++) {
      // replace the value of the layer with the current iteration
      layer = layers[index];

      // get the speed of the layer from the data-speed attribute
      speed = layer.dataset.speed;

      // calculate the yPos to the top reference of the window
      // and the data-speed of the layer
      yPos = -((top * speed) / 100);
      //   console.log(yPos);

      // set the dynamic transform with the help of the yPos
      // we will use the transform translate3d to move the layer
      // with the help of the x,y and z axis
      layer.setAttribute("style", `transform: translate3d(0, ${yPos}px, 0);`);
    }
  });
}
