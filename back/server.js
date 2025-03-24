require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Habilitar CORS para el frontend
app.use(express.json());

const API_KEY = process.env.OPENWEATHER_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

// Lista de ciudades desde un JSON local
const cities = require("./assets/cities_updated.json");

// Variable para almacenar los datos de clima
let cachedWeatherData = [];
let lastUpdate = null;

// Función para actualizar los datos de clima y reintentar si hay 404
const updateWeatherData = async () => {
  try {
    const MAX_ATTEMPTS = 12;
    let attempts = 0;
    let foundDestination = false;

    while (attempts < MAX_ATTEMPTS && !foundDestination) {
      const randomCities = cities.sort(() => 0.5 - Math.random()).slice(0, 10);
      console.log("Ciudades seleccionadas:", randomCities);

      let weatherResponses = await Promise.all(
        randomCities.map(async (city) => {
          let retries = 0;
          while (retries < 3) { // Reintenta hasta 3 veces si hay un 404
            try {
              const response = await axios.get(API_URL, {
                params: {
                  lat: city.latitude,
                  lon: city.longitude,
                  appid: API_KEY,
                  units: "metric",
                },
              });
              return response.data;
            } catch (error) {
              if (error.response && error.response.status === 404) {
                console.warn(`404 Not Found para ${city.name}. Reintentando... (${retries + 1}/3)`);
                retries++;
                await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos
              } else {
                console.error(`Error al obtener el clima para ${city.name}:`, error.message);
                return null;
              }
            }
          }
          return null;
        })
      );

      const filteredDestinations = weatherResponses
        .filter(response => response !== null)
        .filter(destination => 
          destination.weather[0].main === "Clear" &&
          destination.main.temp >= 18 &&
          destination.main.temp <= 25
        );

      if (filteredDestinations.length > 0) {
        foundDestination = true;
        cachedWeatherData = filteredDestinations;
        lastUpdate = Date.now();
        console.log("Destinos filtrados:", filteredDestinations);
      } else {
        attempts++;
        console.log(`No sunny destinations found. Attempt ${attempts} of ${MAX_ATTEMPTS}`);
      }
    }

    if (!foundDestination) {
      console.log("No sunny destinations found after multiple attempts.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

// Actualizamos los datos cada 4 horas
const UPDATE_INTERVAL = 4 * 60 * 60 * 1000;
setInterval(updateWeatherData, UPDATE_INTERVAL);

// Ejecutamos la actualización al inicio
updateWeatherData();

// Ruta para obtener los datos de clima
app.get("/weather", (req, res) => {
  // Verificamos si los datos están actualizados
  if (cachedWeatherData.length > 0 && lastUpdate && Date.now() - lastUpdate < UPDATE_INTERVAL) {
    res.json(cachedWeatherData); // Enviamos los datos almacenados
  } else {
    res.status(404).json({ error: "Weather data is not available yet." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
