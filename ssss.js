// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Replace with your OpenWeatherMap API key
const OPENWEATHER_API_KEY = '390cbfe18abeaf1b340bd54ef5436adf';

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Proxy weather API to hide the key
app.get('/weather', async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${26.4525}&lon=${ 87.2718}&appid=${'390cbfe18abeaf1b340bd54ef5436ad'}&units=metric`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Weather fetch failed', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
