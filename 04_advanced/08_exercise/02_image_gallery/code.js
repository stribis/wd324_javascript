// declare all needed variables for the image gallery
// current image -> main-img
const currentImage = document.querySelector("#active");
// all images -> images
const allImages = document.querySelectorAll(".images img");
// set the initial opacity of the first image to 0.3
const opacity = 0.3;
allImages[0].style.opacity = opacity;

/*
 1. iterate through all images and add an eventListener to each image
 INSIDE THE EVENTLISTENER
 2. inside the eventListener of a single image, check if the seletec image is the currentImage,
    if yes, we do an early return to not do anying
 3. set all the opacity of all images to 1, before we exchange the currentImage
 4. exchange the currentImage with the selected image
 5. add the fade in class to the currentImage
 6. remove the fade in class after 0.5 seconds (cleanup)
 7. set the opacity of the clicked image to 0.3
*/

// 1. iterate through all images and add an eventListener to each image
allImages.forEach((image) => {
  //  2. inside the eventListener of a single image, check if the seletec image is the currentImage,
  image.addEventListener("click", (event) => {
    //if yes, we do an early return to not do anything
    if (currentImage.src === event.target.src) {
      return;
    }
    // 3. set all the opacity of all images to 1, before we exchange the currentImage
    allImages.forEach((image) => {
      image.style.opacity = 1;
    });

    // console.log(event); // event of the clicked object
    // console.log(event.target); // HTML element of the clicked object
    // console.log(event.target.src); // srce of the HTML element of the clicked object

    // 4. exchange the currentImage with the selected image
    currentImage.src = event.target.src; // here we only change the src of the html element with the active id

    // 5. add the fade in class to the currentImage
    currentImage.classList.add("fade-in");

    // 6. remove the fade in class after 0.5 seconds (cleanup)
    setTimeout(() => {
      currentImage.classList.remove("fade-in");
    }, 500);

    // 7. set the opacity of the clicked image to 0.3
    event.target.style.opacity = opacity;
  });
});
