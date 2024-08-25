import React, { useState, useEffect } from "react";
import Weather from "./components/Weather";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Get user location on component mount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error(`Error getting location: ${error.message}`);
          setError(
            "Unable to retrieve your location. Please ensure location services are enabled."
          );
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const fetchWeatherByCoordinates = async (lat, lon) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:5000/weather?lat=${lat}&lon=${lon}`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
      } else {
        setError(data.message || "Error fetching weather data");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:5000/weather?city=${location}`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        setLocation("");
      } else {
        setError(data.message || "Error fetching weather data");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather Forecasting App</h1>
      <form onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
