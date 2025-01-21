const user = {
  location: {}
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(function (position){
    user.location.lat = position.coords.latitude
    user.location.lon = position.coords.longitude
    getWeather()
    getAQI ()
  })
}

async function getWeather () {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${user.location.lat}&lon=${user.location.lon}&appid=&units=metric`

  const response = await fetch(weatherUrl)
  const data = await response.json()

  user.weather = data
  showWeather(data)
}

async function getAQI () {
  const aqiUrl = `https://api.waqi.info/feed/geo:${user.location.lat};${user.location.lon}/?token=`
  const response = await fetch(aqiUrl)
  const data = await response.json()
  user.aqi = data
  showAqi(data)
}

function showWeather(weatherData) {
  const temperature = document.createElement('div')
  temperature.innerText = weatherData.main.temp
  document.querySelector('.main').append(temperature)
}


function showAqi(aqiData) {
  const aqi = document.createElement('div')
  aqi.innerText = aqiData.data.aqi
  document.querySelector('.main').append(aqi)
}


function generateEntry(entry) {

  const entryElement = document.createElement('div')
  entryElement.innerHTML = `
   MOOD: ${entry.mood}
   AQI: ${entry.aqi.data.aqi}
   Temperature: ${entry.weather.main.temp}
  `
  document.querySelector('.output').append(entryElement)
}


document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault()
  const mood = document.querySelector('#mood').value
  user.mood = mood
  console.log(user)
  generateEntry(user)
})