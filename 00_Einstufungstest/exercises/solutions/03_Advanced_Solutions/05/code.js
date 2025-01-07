//Advanced DOM Manipulation and API Integration

// Task: Build a web page that allows users to search for movies by title using the OMDB API. 
// Implement a search input and a "Search" button. 
// When the user enters a title and clicks "Search," display a list of matching movie titles with posters and details.

// Select DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

// Add event listener to the search button
searchButton.addEventListener('click', async () => {
    // Get the search query from the input
    const query = searchInput.value.trim();

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Check if the input is empty
    if (!query) {
        resultsContainer.innerHTML = '<p>Please enter a movie title.</p>';
        return;
    }

    // Fetch data from OMDB API
    const apiKey = ''; // Replace with your OMDB API key
    const apiUrl = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the API returned movies
        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            resultsContainer.innerHTML = `<p>No results found for "${query}".</p>`;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        resultsContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
});

// Function to display movies in the results container
function displayMovies(movies) {
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <p>Year: ${movie.Year}</p>
        `;

        resultsContainer.appendChild(movieElement);
    });
}
