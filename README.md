# 🌦️ Weather App

Aplicación web del clima desarrollada con **React**, **Tailwind CSS** y **JavaScript**, que muestra el estado del tiempo en tiempo real según tu ubicación y permite buscar el clima en cualquier ciudad del mundo.

---

## 🔗 Demo

👉 [Ver demo en vivo](https://weather-app-jeanlucasofm.vercel.app/) <!-- Reemplaza con tu URL real -->

---

## ✨ Características

- Detección automática de ubicación al abrir la app
- Búsqueda de ciudades por nombre (en todo el mundo)
- Visualización de:
  - Temperatura actual
  - Estado del cielo (despejado, nublado, lluvia, etc.)
  - Humedad y viento
- Ver pronósticos para futuros días
- Diseño responsive y limpio con Tailwind CSS
- Consumo de datos en tiempo real desde OpenWeatherMap API

---

## 🛠️ Tecnologías utilizadas

- React
- Tailwind CSS
- JavaScript (ES6)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Vercel](https://vercel.com/)

---

## 🚀 Instalación local

```bash
# Clona este repositorio
git clone https://github.com/JeanLucasOFM18/WeatherApp.git

# Entra al directorio
cd weather-app

# Instala dependencias
npm install

# Crea un archivo .env y agrega tu clave de API:
VITE_API_KEY=tu_clave_de_openweather

# Inicia la app
npm run dev
