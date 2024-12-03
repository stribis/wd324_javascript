// inital application state configuration
let state = {
  suggestedPokemons: [], // array to store the pokemons suggested by the API
  offset: 0, // offset to manage pagination for fetching pokemon in batches -> determines the starting index of a pokemon
  currentIndex: 0, // the index of the current displayed pokeon
};

// asynchronous function to fetch the Pokemon suggestions
async function getSuggestedPokemons() {
  /*
    Objective:
        Fetch a list of Pokemon data from the Pokemon API (PokeAPI).
        Each Pokemon will have additional attributes (e.g., image and types)
        fetched and added to the state for displaying in the UI.
    */
  // we fetch the Pokemon data with the help of a try-catch block
  // try{}catch(){} -> syntax
  try {
    // Fetch the Pokemon List with a limit of 20 results.
    // The offest determines which group of Pokemon to retrieve
    // (useful for pagination)
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${state.offset}`
    );

    /*
    Parse the response from the API into JSON format.
    Because the API returns a JSON object, we can use the JSON.parse()
    The results array contains basic information about each pokemon
    */
    const data = await response.json();
    // console.log("data: ", data);
    const results = data.results;
    // console.log("Pokemon List: ", results);

    /*
    We need to fetch additional data for each pokemon, such as image and types.
    Because the API only returns the basic information (name, url)
    And we need to fetch the additional information (image and types)

    The `await Promise.all()` ensures all Pokemon data is fetched before proceeding
    */
    const pokemonData = await Promise.all(
      // now we loop through the results array
      results.map(async (result, index) => {
        // Calculate Pokemon ID using offset and index
        const id = state.offset + index + 1;
        //Format the image ID as a three-digit string for the image URL
        const imgIndex = id.toString().padStart(3, "0");
        // Construct the Pokémon's image URL
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgIndex}.png`;

        /*
        Fetch additional Pokemon details (type) from the pokemon-form endpoint
        */
        const statResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`);
        const statData = await statResponse.json();

        /*
            Return an object that combines the Pokémon's base data
            (e.g., name, URL) with the additional details (e.g., types).
          */
        return {
          ...result, // Include base Pokémon data, the spread operator copies the properties from the source object to the target object
          id, // Pokémon ID
          image, // Pokémon image URL
          types: statData.types.map((typeInfo) => typeInfo.type.name).join(", "), // Pokémon types as a comma-separated string
        };
      })
    );

    // update state with the fetchted Pokemon data
    state.suggestedPokemons = pokemonData;
    state.currentIndex = 0; // reset the index to diplay the first pokemon after fetching

    // Debug: log the fetched Pokemon data
    console.log("Suggested Pokemons: ", state.suggestedPokemons);

    // render the current pokemon
    displayCurrentPokemon();
  } catch (error) {
    /*
    The catch only activates whenever there is an error in the try block.
    When there is an error, it stops the execution of the try block and executes the catch block.
    */
    console.error("Error fetching Pokemon suggestions: ", error);
  }
}

// function to display the current pokemon
function displayCurrentPokemon() {
  /*
    Objective:
    Clear the Pokemon container and display the current pokemon
    with details of the Pokemon at the current index
    */
  // get the pokemon__container element
  const pokemonContainer = document.querySelector(".pokemon__container");

  // Retrievet the current Pokemon based on the index
  const pokemon = state.suggestedPokemons[state.currentIndex];

  // Create a card element for the pokemon
  const card = document.createElement("div");
  card.className = "pokemon__card";

  /*
      Use a template string to populate the Pokémon card with:
      - An image of the Pokémon (using `pokemon.image` for the src)
      - The Pokémon's name
      - The Pokémon's types
    */
  card.innerHTML = `
      <img class="pokemon__image" src="${pokemon.image}" alt="${pokemon.name}">
      <div class="pokemon__name">${pokemon.name}</div>
      <div class="pokemon__types">${pokemon.types}</div>
    `;

  // Append the Pokémon card to the container
  pokemonContainer.appendChild(card);
}

// Function to handle the "Skip" button click
function handleSkip() {
  /*
        Objective:
        Add an animation to the Pokémon card when skipping
        and load the next Pokémon once the animation ends.
      */

  // Select the current Pokémon card

  // Add the skip animation class

  /*
        Listen for the end of the CSS transition (animation).
        Once the animation ends, load the next Pokémon.
      */
  card.addEventListener(
    "transitionend",
    () => {
      // Increment the currentIndex to show the next Pokémon

      /*
            If the currentIndex exceeds the length of the suggested Pokémon array,
            increment the offset and fetch the next batch of Pokémon from the API.
          */
      if ("") {
      } else {
        // Otherwise, display the next Pokémon
      }
    },
    { once: true } // Ensure the event listener runs only once
  );
}

// Function to handle the "Like" button click
function handleLike() {
  /*
        Objective:
        Add an animation to the Pokémon card when liking
        and load the next Pokémon once the animation ends.
      */

  // Select the current Pokémon card

  // Add the like animation class

  /*
        Listen for the end of the CSS transition (animation).
        Once the animation ends, load the next Pokémon.
      */
  card.addEventListener(
    "transitionend",
    () => {
      // Increment the currentIndex to show the next Pokémon

      /*
            If the currentIndex exceeds the length of the suggested Pokémon array,
            increment the offset and fetch the next batch of Pokémon from the API.
          */
      if ("") {
      } else {
        // Otherwise, display the next Pokémon
      }
    },
    { once: true } // Ensure the event listener runs only once
  );
}

// Fetch the initial batch of suggested Pokémon
getSuggestedPokemons();

// Attach event listeners to the Skip and Like buttons
