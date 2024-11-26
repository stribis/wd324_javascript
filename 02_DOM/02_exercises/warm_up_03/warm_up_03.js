// Data representing users
const users = [
    {
        name: "Alice",
        age: 15,
        hobbies: ["Reading", "Drawing", "Cycling"]
    },
    {
        name: "Bob",
        age: 22,
        hobbies: ["Gaming", "Hiking", "Photography"]
    },
    {
        name: "Charlie",
        age: 17,
        hobbies: ["Swimming", "Coding", "Chess"]
    },
    {
        name: "Diana",
        age: 29,
        hobbies: ["Traveling", "Cooking", "Gardening"]
    }

];
// Function to determine if a person is a minor or an adult
function getAgeStatus(age) {
    return age < 18 ? "Minor" : "Adult";
    /* this is the same as:
    if (age < 18)
    {
        return "Minor" ;
    }
    else
    {
        return "Adult";
    }
     */
}

// Function to create a single profile card
function createProfileCard(user) {
    // Create the main profile container
    const profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");

    // Add the name and age
    const nameElement = document.createElement("h2");
    nameElement.textContent = `${user.name}, ${user.age}`;
    profileDiv.appendChild(nameElement);

    // Add the age status
    const ageStatus = getAgeStatus(user.age);
    const ageStatusElement = document.createElement("p");
    ageStatusElement.textContent = ageStatus === "Minor"
        ? "This person is a minor."
        : "This person is an adult.";
    /* again the same as:
    if (ageStatus === "Minor")
    {
        ageStatusElement.textContent "This person is a minor." ;
    }
    else
    {
        ageStatusElement.textContent = "This person is an adult.";
    }
    */

    ageStatusElement.classList.add(ageStatus.toLowerCase()); // Adds "minor" or "adult" class for styling
    profileDiv.appendChild(ageStatusElement);

    // Add hobbies as a list
    const hobbiesList = document.createElement("ul");
    user.hobbies.forEach((hobby) => {
        const hobbyItem = document.createElement("li");
        hobbyItem.textContent = hobby;
        hobbiesList.appendChild(hobbyItem);
    });
    /* or loop for (let hobby in user.hobbies) // for (let i = 0; i < user.hobbies.length; i++)
    {
        const hobbyItem = document.createElement("li");
        hobbyItem.textContent = hobby;
        hobbiesList.appendChild(hobbyItem);
    }
    */
    profileDiv.appendChild(hobbiesList);

    return profileDiv;
}

// Main function to render all profiles
function renderProfiles(data) {
    const profilesContainer = document.getElementById("profiles");

    // Clear any existing profiles
    profilesContainer.innerHTML = "";

    // Loop through the data and create profiles
    data.forEach((user) => {
        const profileCard = createProfileCard(user);
        profilesContainer.appendChild(profileCard);
    }); // or for loops :)
}

// Call the main function to render profiles
renderProfiles(users);

renderProfiles()