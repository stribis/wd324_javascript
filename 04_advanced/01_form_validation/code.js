// Add an event listenet to the submit button
document.querySelector(".button").addEventListener("click", validateForm);

// function to validate the form
function validateForm(event) {
  // prevents the default behaviour of the form submission
  // which is a page reload
  event.preventDefault();

  // create an empty object to store the form data
  let data = {};
  // create  a empty object for storing form errors
  let validationErrors = {};

  /*
  Try to get the form data from the form
  - first name
  - last name
  - email
  - city
  - street adress
  - region
  - postal code
  */

  // clear any existing error messages
  // we call it here so that we have a clean slate
  // before we start validating the form
  // so we can ensure that we don't have multiple error messages
  clearErrors();

  // retrieve the form field values and assign them to the data ojbect
  data.firstName = document.querySelector("#firstName").value;
  data.lastName = document.querySelector("#lastName").value;
  data.email = document.querySelector("#email").value;
  data.city = document.querySelector("#city").value;
  data.streetAddress = document.querySelector("#streetAddress").value;
  data.region = document.querySelector("#region").value;
  data.postalCode = document.querySelector("#postalCode").value;

  // debugging log the object
  console.log("data object ", data);
  console.log("validation errors object ", validationErrors);

  // validate the first name
  if (!data.firstName) {
    validationErrors.firstName = "First name is required";
  } else if (data.firstName.length <= 2) {
    validationErrors.firstName = "First name must be at least 3 characters";
  }

  // validate the last name
  if (!data.lastName) {
    validationErrors.lastName = "Last name is required";
  } else if (data.lastName.length <= 2) {
    validationErrors.lastName = "First name must be at least 3 characters";
  }

  // validate email adress (tip + regex)
  if (!data.email) {
    validationErrors.email = "Email adress is required";
  } else {
    // regular expression for validating email format
    // this reges checks if there is something before the @ symbol
    // and after the @ symbol there is something before the . symbol
    // and after the . symbol
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      validationErrors.email = "Invalid email address";
    }
  }

  // validate the city
  if (!data.city) {
    validationErrors.city = "City is required";
  }

  // validate the street address
  if (!data.streetAddress) {
    validationErrors.streetAddress = "Street address is required";
  }

  // validate the region
  if (!data.region) {
    validationErrors.region = "State/Province is required";
  }

  // validate the postal code postal code bus be numeric, and 4 digits long
  if (!data.postalCode) {
    validationErrors.postalCode = "Postal code is required";
  } else if (!/^\d{4}$/.test(data.postalCode)) {
    validationErrors.postalCode = "Postal code must be 4 digits long and numeric";
  }

  // if there are no validation errors
  // log the form data to the console
  /*
    const testObject = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
    }

    console.log(Object.keys(testObject).length) => returns 3

    ** SYNTAX **
    Object.keys(yourObject).length
  */

  // if there is no error in the validationErrors object
  if (Object.keys(validationErrors).length === 0) {
    console.log("Form data: ", data);
    // usually we would now send the form data to our backend server / api
    // for further processing
  } else {
    // if there are no validation errors, display them on the page
    displayErrors(validationErrors);
  }
}

// function to display validation errors next to the relevant form fields
function displayErrors(errors) {
  // iterate over the validation erros and dynamically display them
  for (const field in errors) {
    // get the input element by ID
    const inputField = document.querySelector(`#${field}`);

    // rudimentary input field check
    if (!inputField) {
      console.error(`Field with ID #${field} not found`);
    }

    // create a span element to hold the error message
    const errorSpan = document.createElement("span");
    // add class for styling
    errorSpan.classList.add("error-message");
    errorSpan.textContent = errors[field]; // set the error message
    // append the error span after the relevant input field
    inputField.after(errorSpan);
  }
}

// create a function to clear all existing error messages
// an use the function somwhere inside the other functions
// so that in each form submit, we have an clean slate
// and we reset the error messages
function clearErrors() {
  // remove all elements with the error-message class
  document.querySelectorAll("span.error-message").forEach((element) => {
    element.remove();
  });
}
