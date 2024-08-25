import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"; // Import the CSS file
const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("Could not fetch weather data. Please check the city name.");
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, error, fetchWeather };
};

const Weather = () => {
  const [city, setCity] = useState("");
  const { weatherData, loading, error, fetchWeather } = useWeather();

  const handleFetchWeather = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        className="weather-input"
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleFetchWeather}>Get Weather</button>

      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error-message">{error}</div>}
      {weatherData && (
        <div className="weather-data">
          <div className="weather-temperature">{weatherData.main.temp}°C</div>
          <div className="weather-description">
            {weatherData.weather[0].description}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
