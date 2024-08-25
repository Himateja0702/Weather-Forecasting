const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI =
  "mongodb+srv://Himateja:Teja123@atlascluster.epnrmb7.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Weather route
app.get("/weather", async (req, res) => {
  const { city, lat, lon } = req.query;
  const apiKey = "584711cd1659380995808dfdb443660e";
  let url;

  if (city) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  } else if (lat && lon) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  } else {
    return res
      .status(400)
      .json({ message: "City name or coordinates are required" });
  }

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching weather data" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
