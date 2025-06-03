import { useState, useEffect} from 'react'
import './App.css'

function App() {
  
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [country, setCountry] = useState([]);
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [conditions, setConditions] = useState([
    {
      "code": 1000,
      "day": "Soleado",
      "night": "Despejado"
    },
    {
      "code": 1003,
      "day": "Parcialmente nublado",
      "night": "Parcialmente nublado"
    },
    {
      "code": 1006,
      "day": "Nublado",
      "night": "Nublado"
    },
    {
      "code": 1009,
      "day": "Cubierto",
      "night": "Cubierto"
    },
    {
      "code": 1030,
      "day": "Niebla",
      "night": "Niebla"
    },
    {
      "code": 1063,
      "day": "Lluvia intermitente posible",
      "night": "Lluvia intermitente posible"
    },
    {
      "code": 1066,
      "day": "Nieve intermitente posible",
      "night": "Nieve intermitente posible"
    },
    {
      "code": 1069,
      "day": "Aguanieve intermitente posible",
      "night": "Aguanieve intermitente posible"
    },
    {
      "code": 1072,
      "day": "Llovizna helada intermitente posible",
      "night": "Llovizna helada intermitente posible"
    },
    {
      "code": 1087,
      "day": "Posibles tormentas eléctricas",
      "night": "Posibles tormentas eléctricas"
    },
    {
      "code": 1114,
      "day": "Nieve levantada por el viento",
      "night": "Nieve levantada por el viento"
    },
    {
      "code": 1117,
      "day": "Ventisca",
      "night": "Ventisca"
    },
    {
      "code": 1135,
      "day": "Neblina",
      "night": "Neblina"
    },
    {
      "code": 1147,
      "day": "Neblina helada",
      "night": "Neblina helada"
    },
    {
      "code": 1150,
      "day": "Llovizna ligera intermitente",
      "night": "Llovizna ligera intermitente"
    },
    {
      "code": 1153,
      "day": "Llovizna ligera",
      "night": "Llovizna ligera"
    },
    {
      "code": 1168,
      "day": "Llovizna helada",
      "night": "Llovizna helada"
    },
    {
      "code": 1171,
      "day": "Llovizna helada intensa",
      "night": "Llovizna helada intensa"
    },
    {
      "code": 1180,
      "day": "Lluvia ligera intermitente",
      "night": "Lluvia ligera intermitente"
    },
    {
      "code": 1183,
      "day": "Lluvia ligera",
      "night": "Lluvia ligera"
    },
    {
      "code": 1186,
      "day": "Lluvia moderada ocasional",
      "night": "Lluvia moderada ocasional"
    },
    {
      "code": 1189,
      "day": "Lluvia moderada",
      "night": "Lluvia moderada"
    },
    {
      "code": 1192,
      "day": "Lluvia intensa ocasional",
      "night": "Lluvia intensa ocasional"
    },
    {
      "code": 1195,
      "day": "Lluvia intensa",
      "night": "Lluvia intensa"
    },
    {
      "code": 1198,
      "day": "Lluvia helada ligera",
      "night": "Lluvia helada ligera"
    },
    {
      "code": 1201,
      "day": "Lluvia helada moderada o intensa",
      "night": "Lluvia helada moderada o intensa"
    },
    {
      "code": 1204,
      "day": "Aguanieve ligera",
      "night": "Aguanieve ligera"
    },
    {
      "code": 1207,
      "day": "Aguanieve moderada o intensa",
      "night": "Aguanieve moderada o intensa"
    },
    {
      "code": 1210,
      "day": "Nieve ligera intermitente",
      "night": "Nieve ligera intermitente"
    },
    {
      "code": 1213,
      "day": "Nieve ligera",
      "night": "Nieve ligera"
    },
    {
      "code": 1216,
      "day": "Nieve moderada intermitente",
      "night": "Nieve moderada intermitente"
    },
    {
      "code": 1219,
      "day": "Nieve moderada",
      "night": "Nieve moderada"
    },
    {
      "code": 1222,
      "day": "Nieve intensa intermitente",
      "night": "Nieve intensa intermitente"
    },
    {
      "code": 1225,
      "day": "Nieve intensa",
      "night": "Nieve intensa"
    },
    {
      "code": 1237,
      "day": "Granizo",
      "night": "Granizo"
    },
    {
      "code": 1240,
      "day": "Lluvia ligera en chubascos",
      "night": "Lluvia ligera en chubascos"
    },
    {
      "code": 1243,
      "day": "Lluvia moderada o intensa en chubascos",
      "night": "Lluvia moderada o intensa en chubascos"
    },
    {
      "code": 1246,
      "day": "Chubascos torrenciales",
      "night": "Chubascos torrenciales"
    },
    {
      "code": 1249,
      "day": "Aguanieve ligera en chubascos",
      "night": "Aguanieve ligera en chubascos"
    },
    {
      "code": 1252,
      "day": "Aguanieve moderada o intensa en chubascos",
      "night": "Aguanieve moderada o intensa en chubascos"
    },
    {
      "code": 1255,
      "day": "Nieve ligera en chubascos",
      "night": "Nieve ligera en chubascos"
    },
    {
      "code": 1258,
      "day": "Nieve moderada o intensa en chubascos",
      "night": "Nieve moderada o intensa en chubascos"
    },
    {
      "code": 1261,
      "day": "Granizo ligero en chubascos",
      "night": "Granizo ligero en chubascos"
    },
    {
      "code": 1264,
      "day": "Granizo moderado o intenso en chubascos",
      "night": "Granizo moderado o intenso en chubascos"
    },
    {
      "code": 1273,
      "day": "Lluvia ligera intermitente con truenos",
      "night": "Lluvia ligera intermitente con truenos"
    },
    {
      "code": 1276,
      "day": "Lluvia moderada o intensa con truenos",
      "night": "Lluvia moderada o intensa con truenos"
    },
    {
      "code": 1279,
      "day": "Nieve ligera intermitente con truenos",
      "night": "Nieve ligera intermitente con truenos"
    },
    {
      "code": 1282,
      "day": "Nieve moderada o intensa con truenos",
      "night": "Nieve moderada o intensa con truenos"
    }
  ]);
  const [status, setStatus] = useState('');
  const [forecast, setForecast] = useState(null);
  const [buttonText, setButtonText] = useState("Cambiar a °F");
  const [temperature, setTemperature] = useState('');
  const [loading, setLoading] = useState(true);

  const getWeather = async () => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
    if (!response.ok) {
      throw new Error('Ciudad no encontrada');
    }
    const data = await response.json();
    setWeather(data);
    setTemperature(data.current.temp_c + '°C');

    const response2 = await fetch(`https://restcountries.com/v3.1/name/${data.location.country}`);
    if (!response2.ok) {
      throw new Error('No se pudo obtener la información del país');
    }
    const data2 = await response2.json();
    setCountry(data2);

    const response3 = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`);
    if (!response3.ok) {
      throw new Error('No se pudo obtener el pronóstico');
    }
    const data3 = await response3.json();
    setForecast(data3);

    const [fecha, hora] = data.location.localtime.split(' ');
    setDate(changeFormatDate(fecha));
    setHour(hora);

    const code = data.current.condition.code;
    const condition = conditions.find((condition) => condition.code === code);

    if(data.current.is_day === 1) {
      setStatus(condition.day);
    }
    else{
      setStatus(condition.night);
    }

    console.log(data3);
    } catch (error) {
      alert(error.message); 
    }
  }

  const getStatus = (code) => {
    const condition = conditions.find((condition) => condition.code === code);
    return condition.day;
  }

  const change = () => {
    if(buttonText === 'Cambiar a °F'){
      setTemperature(weather.current.temp_f + '°F');
      setButtonText('Cambiar a °C');
    }
    else{
      setTemperature(weather.current.temp_c + '°C');
      setButtonText('Cambiar a °F');
    }
  }

  const changeFormatDate = (fecha) => {

    const [anio, mes, dia] = fecha.split("-");
  
    return `${dia}-${mes}-${anio}`;
  };

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        setCity(data.city);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener la ubicación:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && city) {
      getWeather(); 
      setLoading(true);
    }
  }, [loading, city]); 

  return (
    <>
      <div className='p-1'>
        <div className='mb-2'>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-2 lg:text-center'>WEATHER APP</h1>
          <div className='flex flex-col md:flex-row gap-3 lg:justify-center'>
            <input type='text' className='w-full md:w-[250px] bg-emerald-500/10 border-2 border-emerald-500 rounded-lg p-1' value={city} placeholder='Ingrese su ciudad' onChange={(e) => setCity(e.target.value)} required></input>
            <button className='cursor-pointer bg-blue-500 p-2 rounded-lg text-sm md:text-xs hover:bg-green-700' onClick={getWeather}>Consultar</button>
          </div>
        </div>
      </div>
      <div>
        {weather && forecast && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="bg-sky-500/10 p-4 rounded-lg">
                <div className='flex flex-col md:flex-row items-center justify-between'>
                  <div className='flex items-center'>
                    <p className='text-2xl font-bold'> {weather.location.name}, {weather.location.country}</p>
                    {country.length > 0 && (
                      <img
                        src={country[0].flags.png}
                        alt={`Bandera de ${country[0].name.common}`}
                        className='w-[30px] ml-2 mt-1'
                      />
                    )}
                  </div>
                  <img 
                    src={weather.current.is_day === 1 ? 
                    'https://i.postimg.cc/1XKRxH2N/day-forecast-hot-svgrepo-com.png' : 
                    'https://i.postimg.cc/QNgdW8Cx/night-software-star-svgrepo-com.png'}
                    alt='Icono del dia/noche'
                    className='w-[50px] mt-4 md:mt-0'
                  />
                </div>
                <div className='flex flex-col md:flex-row items-center gap-5 mt-4'>
                  <div className='text-left'>
                    <p>Latitud: {weather.location.lat}</p>
                    <p>Longitud: {weather.location.lon}</p>
                  </div>
                  <div className='text-left'>
                    <p>{hour} hrs</p>
                    <p>{date}</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-500/10 p-4 rounded-lg">
              <p className='text-4xl font-bold flex items-center'>{status}</p>
              <div className='flex flex-col md:flex-row items-center gap-5 mt-3'>
                <p className='text-2xl font-bold'>{temperature}</p>
                <button className='p-2 text-xs rounded-xl border-dashed bg-blue-950 cursor-pointer' onClick={change}>{buttonText}</button>
              </div>
              <div className='flex flex-col md:flex-row items-center gap-5 mt-4'>
                <img src={weather.current.condition.icon} className='w-[150px] h-[150px] object-contain' alt='weather icon' />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                  <div>
                    <div className='flex items-center mb-5'>
                      <img src='https://i.postimg.cc/8k6kpm48/rain-storm-svgrepo-com.png' className='w-[30px] mr-2'/>
                      <p>Humedad: {weather.current.humidity}%</p>
                    </div>
                    <div className='flex items-center'>
                      <img src='https://i.postimg.cc/SsV5LsWb/pressure-svgrepo-com.png' className='w-[30px] mr-2'/>
                      <p>Presión: {weather.current.pressure_mb}mb</p>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-5'>
                      <img src='https://i.postimg.cc/sDtVG6j9/rain-svgrepo-com.png' className='w-[30px] mr-2'/>
                      <p>Precipitaciones: {weather.current.precip_mm}mm</p> 
                    </div>
                    <div className='flex items-center'>
                      <img src='https://i.postimg.cc/SxCm66j0/wind-svgrepo-com.png' className='w-[30px] mr-2'/>
                      <p>Vel. Viento: {weather.current.wind_kph}km/h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:flex-row justify-between mt-6'>
                <p className='text-xs'>Datos proporcionados por Weather API</p>
                <p className='text-xs'>Última Actualización: {weather.current.last_updated}</p>
              </div>
              </div>
            </div>
            <div className="bg-yellow-500/10 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Pronósticos</h2>
              {forecast.forecast.forecastday.map((day, index) => (
                <div
                  key={index}
                  className="bg-indigo-500/10 mt-2 mb-3 p-2 rounded-lg"
                >
                  <div className="flex justify-between">
                    <p className="text-lg font-bold ml-2">
                      {getStatus(day.day.condition.code)}
                    </p>
                    <p className="italic mr-2">{changeFormatDate(day.date)}</p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center ml-2">
                    <img
                      src={day.day.condition.icon}
                      className="w-[80px]"
                      alt="weather icon"
                    />
                    <p className="text-4xl font-bold">{day.day.maxtemp_c}°C</p>
                    <p className="text-base ml-1 mt-1 mb-3 text-gray-600 dark:text-red-50">
                      /{day.day.mintemp_c}°C
                    </p>
                    <div className="ml-4">
                      <div className="flex items-center gap-1 mb-2">
                        <img
                          src="https://i.postimg.cc/FRc4xkj6/sun-svgrepo-com.png"
                          className="w-[20px]"
                        />
                        <p className="text-[10px]">Índice UV: {day.day.uv}</p>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <img
                          src="https://i.postimg.cc/4NfDYSFq/rain-water-svgrepo-com.png"
                          className="w-[20px]"
                        />
                        <p className="text-[10px]">
                          Prob. Lluvia: {day.day.daily_chance_of_rain}%
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img
                          src="https://i.postimg.cc/SNgwCfBs/snow-svgrepo-com.png"
                          className="w-[20px]"
                        />
                        <p className="text-[10px]">
                          Prob. Nieve: {day.day.daily_chance_of_snow}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center mt-3'>
        <p className='font-bold text-xs'>👽Creado por JeanLucasOFM👽</p>
        <div className='flex gap-1 mt-4 md:mt-0'>
          <a href='https://github.com/JeanLucasOFM18' target='_block'><img src='https://i.postimg.cc/qgVKb5ZT/github-color-svgrepo-com.png' className='w-[20px] h-[20px] mr-2' alt='GitHub'/></a>
          <a href='https://www.linkedin.com/in/jean-lucas-rivera-rodr%C3%ADguez/' target='_block'><img src='https://i.postimg.cc/BQmL1tJ3/linkedin-svgrepo-com.png' className='w-[20px] h-[20px]' alt='Linkedin'/></a>
        </div>
      </div>
    </>
  )
}

export default App
