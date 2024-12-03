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

    console.log("pokemonData: ", pokemonData);
  } catch (error) {}
}

getSuggestedPokemons();
