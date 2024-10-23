// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '8ac5c4d57ba6a4b3dfcf622700447b1e'; // Your API key
    const weatherDetailsDiv = document.getElementById('weather-details');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const cityInput = document.getElementById('city-input');
    
    async function getWeather(city) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('City not found');
        }
  
        const data = await response.json();
        displayWeather(data);
      } catch (error) {
        alert('Error: ' + error.message);
      }
    }
  
    function displayWeather(data) {
      document.getElementById('city-name').textContent = data.name;
      document.getElementById('temperature').textContent = data.main.temp;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('humidity').textContent = data.main.humidity;
      document.getElementById('wind-speed').textContent = data.wind.speed;
    }
  
    getWeatherBtn.addEventListener('click', () => {
      const city = cityInput.value.trim();
      if (city) {
        getWeather(city);
      } else {
        alert('Please enter a city name');
      }
    });
  });
  