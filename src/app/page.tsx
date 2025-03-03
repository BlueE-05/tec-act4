'use client';

import React, { useState } from 'react';
import WeatherCard from "@/components/WeatherCard";

const Home: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const API_KEY = 'cc79efb5282c4b2cbfc193250252602';

  const handleSearch = async () => {
    if (city.trim() === '') return;

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      const data = await response.json();

      if (data.error) {
        setErrorMessage("No existe");
        return;
      }

      const formattedData = {
        city: data.location.name,
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
      };

      setWeatherData((prevData) => [...prevData, formattedData]);
      setCity('');
      setErrorMessage('');
    } catch (error) {
      console.error("Failed to fetch weather data", error);
      setErrorMessage("No existe");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-20">
      
      <div className="absolute w-full max-w-md fixed top-20">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} onKeyPress={handleKeyPress} placeholder="Busca una ciudad"
          className="w-full p-3 pl-12 text-lg border border-gray-300 rounded-full focus:outline-none focus:shadow-xl"/>
        <svg className="absolute left-5 top-3 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"/>
        </svg>
      {errorMessage && <p className="text-red-500 text-lg font-bold">{errorMessage}</p>}
      </div>


      <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {weatherData.map((data, index) => (
          <WeatherCard key={index} city={data.city} temperature={data.temperature} humidity={data.humidity} windSpeed={data.windSpeed}/>
        ))}
      </div>
      
    </main>
  );
};

export default Home;
