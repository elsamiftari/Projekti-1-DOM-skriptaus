
const weatherApp = document.getElementById('weather-app');
const weatherInfo = document.getElementById('weather-info');
const getWeatherBtn = document.getElementById('get-weather');
const YOUR_API_KEY = 'can be found from https://openweathermap.org/'

getWeatherBtn.addEventListener('click', getWeather);

async function getWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Espoo&appid=' + YOUR_API_KEY + '&units=metric');
        const data = await response.json();
        console.log('Weather data:', data);

        weatherInfo.innerHTML = `
      <p>City: ${data.name}</p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
