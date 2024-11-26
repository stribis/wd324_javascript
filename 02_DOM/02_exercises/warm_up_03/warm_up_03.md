# **Dynamic Profile Builder**

## **Objective**
Create a script to dynamically generate and display profile cards using JavaScript and DOM manipulation. 
This exercise will help you practice the learned JavaScript basics

---

## **Scenario**
You are given a dataset of users. Each user profile should display the following details:
1. **Name and Age** of the user.
2. A **status message** indicating whether the user is a minor or an adult.
3. A **list of hobbies** the user enjoys.

You will dynamically create and insert these profiles into the DOM.

## Example Output

Alice, 15  
This person is a minor.
- Reading
- Drawing
- Cycling

## Tasks: 
1. Determine Age Status

2. Write a function getAgeStatus that:
   - Accepts a person's age as a parameter.
   - Returns "Minor" if the age is less than 18, and "Adult" otherwise.
   - Create a Profile Card
   
3. Write a function createProfileCard that:
   - Accepts a single user object.
   - Dynamically creates a <div> with the class profile.
   - Adds the following elements inside the `<div>`:
     - `<h2>` with the user's name and age.
     - `<p>` with a message:`
       - `This person is a minor.` for minors (styled with a red class).
       - `This person is an adult.` for adults (styled with a green class).
     - `<ul>` listing the user's hobbies.
       
4. Render All Profiles
   - Write a function renderProfiles that:
     - Loops through the users array.
     - Calls createProfileCard for each user.
     - Appends each profile card to the `<div id="profiles">` container in the HTML.

5. Clear Existing Profiles (Optional)
   - Before rendering profiles, ensure the #profiles container is empty.

---

## **Setup Instructions**

1. **HTML Setup**
    - User the existing `index.html` file

2. **JavaScript Setup**
    - Create a `solution.js` file and link it to the HTML file.

3. **Dataset**  
   The dataset structure be like:
``` javascript
   const users = [
        {
            name: "Alice",
            age: 15,
            hobbies: ["Reading", "Drawing", "Cycling"]
        },
        ...
    ];
```

   
