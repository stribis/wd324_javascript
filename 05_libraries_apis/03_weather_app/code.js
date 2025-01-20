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
  if (document.querySelector(".weather-info")) {
    document.querySelector(".weather-info").remove();
  }

  const weatherInfo = document.createElement("div");
  weatherInfo.classList.add("weather-info");
  const template = `
  <p class="plain top">It is:</p>
  <div class="display">${Math.round(data.main.temp)} °C</div>
  <p class="plain bottom">in ${data.name} <span class="flag">${getCountryFlagEmoji(data.sys.country)}</span></p>
  <p class="feels">Feels like ${Math.round(data.main.feels_like)}°C</p>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">
  <p class="description">${data.weather[0].description}</p>
  <div class="misc">
    <span>
      <h6 class="bold">Visibility</h6>
      <i class="fa-regular fa-eye"></i>
      <p class="info">${classifyVisibility(data.visibility)}</p>
    </span>
    <span>
      <h6 class="bold">Wind</h6>
      <i class="fa-solid fa-chevron-up" style="transform: rotate(${
        data.wind.deg
      }deg);"></i>
      <p class="info">${data.wind.speed} m/s</p>
    </span>
    <span>
      <h6 class="bold">Humidity</h6>
      <i class="fa-solid fa-droplet"></i>
      <p class="info">${data.main.humidity}%</p>
    </span>
    
  </div>
  <div class="misc">
    <span>
      <h6 class="bold">Sunrise</h6>
      <i class="wi-sunrise wi"></i>
      <p class="info">${convertTimestamp(data.sys.sunrise)}</p>
    </span>
    <span>
      <h6 class="bold">Sunset</h6>
      <i class="wi-sunset wi"></i>
      <p class="info">${convertTimestamp(data.sys.sunset)}</p>
    </span>
    <span>
      <h6 class="bold">max: ${Math.round(data.main.temp_max)}</h6>
      <i class="wi-thermometer wi"></i>
      <h6 class="bold">min: ${Math.round(data.main.temp_min)}</h6>
    </span>
    
  </div>
  `;
  weatherInfo.innerHTML = template;
  document.querySelector(".container").appendChild(weatherInfo);
}

function convertTimestamp(timestamp) {

  const date = new Date(timestamp * 1000);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return date.toLocaleString("de-CH", options);
}



function getCountryFlagEmoji(countryCode) {
  const codePoints = [...countryCode.toUpperCase()]
      .map(char => 127397 + char.charCodeAt(0)); // Offset for regional indicator symbols
  return String.fromCodePoint(...codePoints);
}


function classifyVisibility(visibilityMeters) {
  if (visibilityMeters > 10000) {
      return "Excellent";
  } else if (visibilityMeters > 5000) {
      return "Good";
  } else if (visibilityMeters > 2000) {
      return "Moderate";
  } else if (visibilityMeters > 1000) {
      return "Poor";
  } else if (visibilityMeters > 500) {
      return "Very Poor";
  } else {
      return "Extremely Poor";
  }
}

function setTheme(theme) {
  document.documentElement.classList.remove('light', 'dark');
  
  if (theme === 'light' || theme === 'dark') {
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
  } else {
      console.error("Invalid theme specified. Use 'light' or 'dark'.");
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light'; 
  setTheme(savedTheme);
});


async function captureScreenshot() {
  if (!document.querySelector('.weather-info')) return;
  const element = document.querySelector('.weather-info');

  const images = element.getElementsByTagName('img');
  await Promise.all(Array.from(images).map(img => {
      if (!img.complete) {
          return new Promise(resolve => {
              img.onload = img.onerror = resolve;
          });
      }
  }));

  html2canvas(element, { useCORS: true }).then(canvas => {
      canvas.toBlob(async blob => {
          const file = new File([blob], "weather-snapshot.png", { type: "image/png" });
          try {
              await navigator.clipboard.write([
                  new ClipboardItem({ "image/png": blob })
              ]);
              alert("📋 Screenshot copied to clipboard!");

          } catch (error) {
              console.error("Failed to copy image:", error);
              alert("❌ Error copying image to clipboard.");
          }
          if (navigator.share) {
              navigator.share({
                  title: 'Weather Snapshot',
                  text: 'Check out the current weather!',
                  files: [file]
              }).catch(console.error);
          } else {
              const link = document.createElement('a');
              link.href = canvas.toDataURL("image/png");
              link.download = "weather-snapshot.png";
              link.click();
          }
      });
  });
}
