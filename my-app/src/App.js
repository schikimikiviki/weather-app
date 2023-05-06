import "./App.css";
import { useState, useEffect } from "react";
import fetchWeather from "./API/fetchWeather.js";
import UserInput from "./components/Input.jsx";

function App() {
  const [background, setBackground] = useState("");
  const [city, setCity] = useState("Vienna");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeather.fetchWeather(city);
      setWeatherData(data);
    };
    getWeatherData();
  }, [city]);

  useEffect(() => {
    if (weatherData) {
      // Update the background
      setBackground();
    }
  }, [weatherData]);

  const onUserInput = (e) => {
    setCity(e);
    console.log(city);
  };

  return (
    <div style={{ backgroundImage: background }} className="mainpage-bg">
      <UserInput onUserInput={onUserInput} />
      <p>{weatherData ? weatherData.weather[0].description : "Loading..."}</p>
    </div>
  );
}

export default App;
