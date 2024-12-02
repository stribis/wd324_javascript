// Select the slider container

// Function to dynamically select all slides
// This ensures we always get the current list of slides after any DOM updates
function getAllSlides() {}

// Add event listeners for the left and right arrow buttons

// Initialize the current slide index to 1

/**
 * Function to move the slides to the right.
 * Moves the first slide to the end of the slider.
 */
function moveRight() {
  // get all slides
  // Move the first slide to the end of the container
  // Update the current slide index
  // Update the description to match the new first slide
}

/**
 * Function to move the slides to the left.
 * Moves the last slide to the beginning of the slider.
 */
function moveLeft() {
  // get all slides
  // Move the last slide to the beginning of the container
  // Update the current slide index
  // Update the description to match the new first slide
}

/**
 * Function to update the current slide index.
 * Adjusts the `currentSlide` value based on the movement direction.
 * @param {string} direction - The direction of movement ("left" or "right").
 */
function changeCurrentSlide(direction) {
  // get all slides
  // If moving right, increment the slide index, or reset to 1 if at the last slide
  // If moving left, decrement the slide index, or reset to the last slide if at the first slide
}

/**
 * Function to update the slide description and current slide number.
 * Ensures the description and current slide number are in sync with the visible slide.
 */
function updateDescription() {
  // get all slides
  // Update the slide number
  // Select the first slide and fetch the alt text from its image
}

// Call updateDescription once on page load to ensure the correct description is displayed initially
