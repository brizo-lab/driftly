<template>
  <div v-if="selectedDestination" class="weather-container">
    <div class="left-side">
      <img
        :src="`/countries/${selectedDestination.sys.country}.jpg`"
        :alt="selectedDestination.name"
        class="city-image"
        @error="setDefaultImage"
      />
      <div class="text-overlay">
        <p class="medium-size">Hi, digital nomad!</p>
        <p class="title-size">Today's best place to live.</p>
      </div>
    </div>

    <div class="right-side">
      <div class="weather-card">
        <hr class="line1" />
        <div class="now">
          <p>
            <span class="big-size">{{ currentHour }}</span
            ><span class="small-size">&nbsp;{{ ampm }}</span>
          </p>
          <span class="small-size">{{ currentDate }}</span>
        </div>
        <div class="place">
          <div class="destination">
            <p class="big-size">{{ selectedDestination.name }}</p>
            <hr class="line" />
            <p class="medium-size">
              {{ getCountryName(selectedDestination.sys.country) }}
            </p>
          </div>
          <div class="coord">
            <p class="small-size">
              {{ convertToDMS(selectedDestination.coord.lat) }}
            </p>
            <p class="small-size">
              {{ convertToDMS(selectedDestination.coord.lon) }}
            </p>
          </div>
        </div>
        <div class="meteo">
          <div
            class="p-weather"
            v-for="(item, index) in weatherDetails"
            :key="index"
          >
            <img :src="item.icon" />
            <div class="temp">
              <p class="medium-size">
                {{ item.value }}<span class="small-size">{{ item.unit }}</span>
              </p>
              <p class="small-size">{{ item.label }}</p>
            </div>
          </div>
        </div>
        <p class="ironic-comment">~ {{ randomPhrase }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { countryNames } from "../assets/countryNames.js";
import axios from "axios";
import quotesData from "../assets/phrases.json";

const UPDATE_INTERVAL = 12 * 60 * 60 * 1000;

export default {
  data() {
    return {
      destinations: [],
      selectedDestination: null,
      currentHour: "",
      ampm: "",
      currentDate: "",
      randomPhrase: this.getRandomQuote(),
    };
  },
  mounted() {
    this.loadDestinations();
    this.updateDateTime();
    setInterval(this.updateDateTime, 60000);
  },
  methods: {
    async loadDestinations() {
      await this.fetchSunnyDestinations();
    },

    async fetchSunnyDestinations() {
      try {
        const response = await axios.get("http://localhost:3000/weather"); // Reemplaza por la URL de tu servidor
        const filteredDestinations = response.data.filter(
          (dest) =>
            dest.weather[0].main === "Clear" &&
            dest.main.temp >= 18 &&
            dest.main.temp <= 25
        );
        if (filteredDestinations.length > 0) {
          this.destinations = filteredDestinations;
          localStorage.setItem(
            "weatherData",
            JSON.stringify(filteredDestinations)
          );
          localStorage.setItem("lastUpdate", Date.now());
          this.selectRandomDestination(filteredDestinations); // Pasa las ciudades filtradas aquí
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },

    selectRandomDestination(filteredDestinations) {
      if (filteredDestinations.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * filteredDestinations.length
        );
        this.selectedDestination = filteredDestinations[randomIndex]; // Selección aleatoria
      }
    },

    updateDateTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      this.currentHour = `${hours}:${minutes}`;
      this.ampm = ampm;
      this.currentDate = now.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      });
    },
    getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotesData.quotes.length);
      return quotesData.quotes[randomIndex];
    },

    getCountryName(code) {
      return countryNames[code] || code;
    },
    convertToDMS(degrees) {
      const direction = degrees >= 0 ? "N" : "S";
      degrees = Math.abs(degrees);
      const d = Math.floor(degrees);
      const m = Math.floor((degrees - d) * 60);
      const s = ((degrees - d) * 60 - m) * 60;
      return `${d}° ${m}' ${s.toFixed(2)}" ${direction}`;
    },
    setDefaultImage(event) {
      event.target.src = "/countries/window.jpg";
    },
    
  },
  computed: {
    weatherDetails() {
      if (!this.selectedDestination) return [];
      return [
        {
          label: "Temperature",
          value: this.selectedDestination.main.temp,
          unit: "ºC",
          icon: "/ellipse.png",
        },
        {
          label: "Humidity",
          value: this.selectedDestination.main.humidity,
          unit: "%",
          icon: "/humid.png",
        },
        {
          label: "Wind Speed",
          value: this.selectedDestination.wind.speed,
          unit: "m/s",
          icon: "/wind.png",
        },
      ];
    },
  },
};
</script>

<style scoped>
/* Contenedor principal con CSS Grid */
.weather-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
  width: 100vw;
  gap: 10px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* 🔥 Evita cualquier desbordamiento */
  min-height: 700px;
}

/* Sección izquierda con la imagen */
.left-side {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.city-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  /* 🔥 Asegura que no haya espacios extra */
}

.text-overlay {
  font-family: "Sora", sans-serif;
  font-weight: 900;
  text-shadow: #000;
  position: absolute;
  top: 25%;
  left: 5%;
  color: white;
  text-align: left;
  max-width: 70%;
  padding: 10px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
}

/* Sección derecha con la tarjeta del clima */
.right-side {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.weather-card {
  width: 90%;
  max-width: 600px;
  padding: 8%;
  border-radius: 45px;
  background: linear-gradient(
    180deg,
    rgba(216, 216, 216, 0.55) 0%,
    rgba(216, 216, 216, 0.07) 66%
  );
  backdrop-filter: blur(32.5px);
  font-family: "Sora", sans-serif;
  color: #262626;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
}

.line1 {
  transform: translateX(-50%);
  width: 10%;
  border: 2px solid #262626;
  margin-bottom: 10px;
}

/* Hora y fecha */
.now {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4em;
}

/* Información de la ubicación */
.place {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.destination {
  text-align: left;
  padding: 15px 0;
  grid-row: span 2;
}

.coord {
  padding-top: 45%;
  text-align: right;
}

/* Texto con tamaño dinámico */
.title-size {
  font-size: clamp(2.5rem, 6vw, 7em);
  font-weight: 500;
  margin-top: 0;
}

.big-size {
  font-size: 1.8em;
  font-weight: 600;
}

.medium-size {
  font-size: clamp(1rem, 3vw, 1.5em);
  font-weight: 200;
}

.small-size {
  font-size: clamp(0.8rem, 1.1vw, 1.1rem);
  font-weight: 200;
}

.line {
  height: 3px;
  background-color: #000;
  width: 120px;
  margin: 0;
}

/* Sección de datos meteorológicos */
.meteo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Asegura que las imágenes y el texto estén alineados verticalmente */
}

.p-weather {
  position: relative;
  /* Necesario para posicionar absolutamente las imágenes */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Centra el texto horizontalmente */
  justify-content: center;
  /* Asegura que el texto esté centrado verticalmente */
  padding: 0;
  /* Elimina los espacios extra */
  text-align: center;
  /* Centra el texto dentro de cada contenedor */
}

.p-weather img {
  position: absolute;
  width: 50px;
  /* Tamaño de la imagen */
  height: auto;
  z-index: -1;
  /* Coloca la imagen detrás del texto */
  top: 50%;
  /* Coloca la imagen en el centro */
  left: 50%;
  /* Centra la imagen horizontalmente */
  transform: translate(-50%, -50%);
  /* Ajusta para que esté perfectamente centrada */
}

.temp {
  position: relative;
  /* El texto debe estar por encima de la imagen */
  z-index: 1;
  /* Asegura que el texto esté encima de la imagen */
}

.temp p {
  line-height: 0;
}

/* Texto inferior */
.ironic-comment {
  text-align: right;
  text-decoration: underline;
  font-size: 1em;
  font-family: "Sora";
  font-style: normal;
  font-weight: 200;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #3e3f3e;
}

@media (max-width: 980px) {
  .weather-container {
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
}

@media (max-width: 768px) {
  .weather-container {
    display: flex;
    flex-direction: column;
    /* Apila los elementos en columna */
    height: auto;
    /* Altura ajustable */
    min-height: 100vh;
    /* Asegurar que ocupa toda la pantalla */
  }

  .left-side {
    width: 100%;
    height: 50vh;
    /* Ocupa la mitad superior de la pantalla */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .city-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text-overlay {
    position: absolute;
    top: 33%;
    left: 6%;
    max-width: 90%;
  }

  .right-side {
    width: 100%;
    height: auto;
    /* Ajuste dinámico según el contenido */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-top: 0;
    /* Elimina el margen que causaba superposición */
  }

  .weather-card {
    width: 92%;
    padding: 20px;
    border-radius: 20px;
  }

  .medium-size {
    margin: 5px;
  }

  .temp p {
    line-height: 0.25;
  }
}
</style>
