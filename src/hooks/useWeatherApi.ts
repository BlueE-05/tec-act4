'use client'

import { useEffect, useState } from "react";

interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

export const useWeatherApi = (cityName: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5aa9ea7fec20467b8ac234115252602&q=${cityName}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      const weather: WeatherData = {
        city: data.location.name,
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
      };

      setWeatherData(weather);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cityName) {
      fetchData();
    }
  }, [cityName]);

  return { weatherData, loading, error, fetchData };
};