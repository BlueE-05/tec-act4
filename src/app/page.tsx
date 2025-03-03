import WeatherCard from "@/components/WeatherCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-20">
      <div className="relative w-full max-w-md mb-5">
        <input type="text" placeholder="Busca una ciudad" className="w-full p-3 pl-12 text-lg border border-gray-300 rounded-full focus:outline-none focus:shadow-xl"/>
        <svg
          className="absolute left-5 top-3 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"/>
        </svg>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
        <WeatherCard city={"Monterrey"} temperature={25.0} humidity={12.5} windSpeed={25}/>
      </div>
    </main>

  );
}