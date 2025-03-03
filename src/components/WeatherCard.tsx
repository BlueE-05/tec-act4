import { Wind, Droplet, Thermometer, MapPin } from "lucide-react";
interface TemperatureProps {
  city: string;
  temperature: GLfloat;
  humidity: GLfloat;
  windSpeed: GLfloat;
}
const WeatherCard = ({ city, temperature, humidity, windSpeed }: TemperatureProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col gap-10 transition-transform duration-200 hover:scale-105">
      
      <div className="flex items-center gap-2 text-xl font-semibold">
        <MapPin className="text-blue-500" />
        <span>{city}</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-5xl font-bold">
          <Thermometer className="text-red-500" />
          <span>{temperature}°C</span>
        </div>
        <span className="text-sm text-gray-500">Temperature</span>
      </div>
      
      <div className="flex justify-between text-lg">

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <Droplet className="text-blue-400" />
            <span>{humidity}%</span>
          </div>
          <span className="text-sm text-gray-500">Humidity</span>
        </div>
      
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <Wind className="text-gray-600" />
            <span>{windSpeed} km/h</span>
          </div>
          <span className="text-sm text-gray-500">Winds</span>
        </div>
      
      </div>

    </div>
  );
};

export default WeatherCard;