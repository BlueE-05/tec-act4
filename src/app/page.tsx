'use client'

import { useState } from 'react';
import { useWeatherApi } from '@/hooks/useWeatherApi';
import WeatherCard from '@/components/WeatherCard';

interface CityWeather {
  city: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

export default function Home() {
  const [city, setCity] = useState('');
  const [citiesSearched, setCitiesSearched] = useState<CityWeather[]>([]); // Estado para almacenar las ciudades buscadas y su información
  const { weatherData, loading, error, fetchData } = useWeatherApi(city);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && city.trim()) {
      // Si hay datos de clima disponibles, se guarda la ciudad y su información en el array
      if (weatherData) {
        const newCityWeather: CityWeather = {
          city: weatherData.city,
          temperature: weatherData.temperature,
          humidity: weatherData.humidity,
          windSpeed: weatherData.windSpeed,
        };

        setCitiesSearched((prevCities) => [...prevCities, newCityWeather]);
      }

      fetchData();
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-20">
      <div className="relative w-full max-w-md mb-5">
        <input
          type="text"
          placeholder="Busca una ciudad"
          className="w-full p-3 pl-12 text-lg border border-gray-300 rounded-full focus:outline-none focus:shadow-xl"
          value={city}
          onChange={handleCityChange}
          onKeyDown={handleKeyDown} // Escucha el evento de tecla presionada
        />
        <svg className="absolute left-5 top-3 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0z" />
        </svg>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {citiesSearched.map((cityWeather, index) => (
          <WeatherCard
            key={index}
            city={cityWeather.city}
            temperature={cityWeather.temperature}
            humidity={cityWeather.humidity}
            windSpeed={cityWeather.windSpeed}
          />
        ))}
      </div>
    </main>
  );
}