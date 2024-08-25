import React from "react";

const Weather = ({ data }) => {
  return (
    <div className="weather">
      <h2>
        {data.name}, {data.sys.country}
      </h2>
      <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Description: {data.weather[0].description}</p>
    </div>
  );
};

export default Weather;
