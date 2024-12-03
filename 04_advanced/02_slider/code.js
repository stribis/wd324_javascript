// Select the slider container
const slider = document.querySelector(".slider");

// Function to dynamically select all slides
// This ensures we always get the current list of slides after any DOM updates
function getAllSlides() {
  return document.querySelectorAll(".slider__slide");
}

// Add event listeners for the left and right arrow buttons
document.querySelector(".slider__button--left").addEventListener("click", moveLeft);
document.querySelector(".slider__button--right").addEventListener("click", moveRight);

// Initialize the current slide index to 1
const allSlides = getAllSlides();
let currentSlide = allSlides.length - allSlides.length + 1;

/**
 * Function to move the slides to the right.
 * Moves the first slide to the end of the slider.
 */
function moveRight() {
  // get all slides
  const allSlides = getAllSlides();

  // Move the first slide to the end of the container
  slider.append(allSlides[0]);
  // Update the current slide index
  changeCurrentSlide("right");
  // Update the description to match the new first slide
  updateDescription();
}

/**
 * Function to move the slides to the left.
 * Moves the last slide to the beginning of the slider.
 */
function moveLeft() {
  // get all slides
  const allSlides = getAllSlides();

  // Move the last slide to the beginning of the container
  slider.prepend(allSlides[allSlides.length - 1]);

  // Update the current slide index
  changeCurrentSlide("left");
  // Update the description to match the new first slide
  updateDescription();
}

/**
 * Function to update the current slide index.
 * Adjusts the `currentSlide` value based on the movement direction.
 * @param {string} direction - The direction of movement ("left" or "right").
 */
function changeCurrentSlide(direction) {
  // get all slides
  const allSlides = getAllSlides();

  if (direction === "right") {
    // If moving right, increment the slide index, or reset to 1 if at the last slide
    currentSlide === allSlides.length ? (currentSlide = 1) : currentSlide++;
  } else {
    // If moving left, decrement the slide index, or reset to the last slide if at the first slide
    currentSlide === 1 ? (currentSlide = allSlides.length) : currentSlide--;
  }
}

/**
 * Function to update the slide description and current slide number.
 * Ensures the description and current slide number are in sync with the visible slide.
 */
function updateDescription() {
  // get all slides
  const allSlides = getAllSlides();
  // Update the slide number
  document.querySelector(".slider__legend-title").innerText = `Current slide: ${currentSlide}`;
  // Here we select the first slide and fetch the alt text from its image
  const description = allSlides[0].querySelector("img").alt;
  // here we update the description
  document.querySelector(".slider__legend-text").innerText = description;
}

// Call updateDescription once on page load to ensure the correct description is displayed initially

updateDescription();
