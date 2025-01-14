const apiKey = "af1eb7ff29c464bd26db09fc2c06ca09";

document.querySelector("#query-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.querySelector("#city").value;

  getData(city);
});

async function getData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);
  displayData(data);
}

function displayData(data) {
  if (document.querySelector('.weather-info')) {
    document.querySelector('.weather-info').remove()
  }

  const weatherInfo = document.createElement("div");
  weatherInfo.classList.add("weather-info");
  const template = `
  <p class="plain top">It is:</p>
  <div class="display">${data.main.temp} °C</div>
  <p class="plain bottom">in ${data.name}</p>
  <p class="feels">Feels like ${data.main.feels_like}°C</p>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">
  <p class="description">${data.weather[0].description}</p>
  <div class="misc">
    <span>
      <h6 class="bold">Visibility</h6>
      <i class="fa-regular fa-eye"></i>
      <p class="info">${ data.visibility > 2000 ? 'Good' : 'Poor'}</p>
    </span>
    <span>
      <h6 class="bold">Wind</h6>
      <i class="fa-solid fa-chevron-up" style="transform: rotate(${data.wind.deg}deg);"></i>
      <p class="info">${data.wind.speed} m/s</p>
    </span>
    <span>
      <h6 class="bold">Humidity</h6>
      <i class="fa-solid fa-droplet"></i>
      <p class="info">${data.main.humidity}%</p>
    </span>
    
    
  </div>
  `;
  weatherInfo.innerHTML = template;
  document.querySelector(".container").appendChild(weatherInfo);
}

// Visibility: Conditional template depending on distance [check]
// Wind (displayed in m/s) - Change arrow depending on direction of wind
// Humidity: Display in %
