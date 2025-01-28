
// import { apiKeys } from "./keys.js";
function setup () {
  const OPENWEATHER_API_KEY = ''
  const WAQI_API_KEY = ''


  const weatherEl = document.getElementById('weather')
  const aqiEl =  document.getElementById('aqi')
  const journalEl =  document.getElementById('journal')
  const moodInput =  document.getElementById('mood')
  const saveEntryBtn =  document.getElementById('save-entry')

  let weatherData = {}
  let aqiData = {}


  function getAQIDescription(aqi) {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 200) return 'Very Unhealthy';
    return 'Hazardous'; 
  }

  function getLocation () {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords
        fetchWeather(latitude, longitude)
        fetchAQI(latitude, longitude)
      }, (error) => {

        weatherEl.innerHTML = `<i class="fas fa-exclamation-triangle"></i>Geolocation Error: Unable to fetch weather data`
        aqiEl.innerHTML = `<i class="fas fa-exclamation-triangle"></i>Geolocation Error: Unable to fetch AQI data`

        console.error(error)
      })
    } else {
      weatherEl.innerHTML = `<i class="fas fa-exclamation-triangle"></i>Geolocation is not supported in your browser`
      aqiEl.innerHTML = ``
    }
  }

  async function fetchWeather (lat, lon) {
    try {
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`);
      const weatherJson = await weatherResponse.json()
      weatherData = {
        description: weatherJson.weather[0].description,
        temp: weatherJson.main.temp
      }
      weatherEl.innerHTML = `<i class="fas fa-cloud-sun"></i>Weather: ${weatherData.description}, ${weatherData.temp}°C`

    } catch (error) {
      weatherEl.innerHTML = `<i class="fas fa-exclamation-triangle"></i>Failed to fetch weather data`
      console.error(error)
    }
  }

  async function fetchAQI (lat, lon) {
    try {
      const aqiResponse = await fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${WAQI_API_KEY}`);
      const aqiJson = await aqiResponse.json()
      aqiData = {
        aqi: aqiJson.data.aqi,
        description: getAQIDescription(aqiJson.data.aqi)
      }
      aqiEl.innerHTML = `<i class="fas fa-wind"></i>AQI: ${aqiData.aqi} (${aqiData.description})`

    } catch (error) {
      aqiEl.innerHTML = `<i class="fas fa-exclamation-triangle"></i>Failed to fetch AQI data`
      console.error(error)
    }
  }

  function saveEntry (e) {
    e.preventDefault();
    const mood = moodInput.value.trim()
    if (!mood) {
      alert('Please enter your mood')
      return;
    }

    const entries = JSON.parse(localStorage.getItem('journalEntries')) || []
    video.loadPixels()
    const newEntry = {
      mood,
      weather: weatherData,
      aqi: aqiData,
      timestamp: new Date().toISOString(),
      image: video.canvas.toDataURL()
    }

    entries.push(newEntry)
    localStorage.setItem('journalEntries', JSON.stringify(entries))

    moodInput.value = ''

    displayEntries()

  }


  function displayEntries () {
    const entries = JSON.parse(localStorage.getItem('journalEntries')) || []
    journalEl.innerHTML = ''

    entries.forEach(entry => {
      const entryEl = document.createElement('div')
      entryEl.classList.add('entry')

      const date = new Date(entry.timestamp).toLocaleString();
      entryEl.innerHTML = `
      <h3>${date}</h3>
      <p><i class="fas fa-smile"></i> <strong>Mood:</strong> ${entry.mood}</p>
      <p><i class="fas fa-cloud-sun"></i> <strong>Weather:</strong> ${entry.weather.description}, ${entry.weather.temp}°C</p>
      <p><i class="fas fa-wind"></i> <strong>AQI:</strong> ${entry.aqi.aqi}, ${entry.aqi.description}</p>
      <img src="${entry.image}" width="100" height="100">
      `
      journalEl.appendChild(entryEl)
    })
  }

  saveEntryBtn.addEventListener('click', saveEntry)



    noCanvas()
    const video = createCapture(VIDEO)
    video.parent('video-container')
    video.size(240, 240)
    



  getLocation ()
  displayEntries()

}