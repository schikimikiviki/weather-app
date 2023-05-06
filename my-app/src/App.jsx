import "./App.css";
import { useState, useEffect } from "react";
import fetchWeather from "./API/fetchWeather.js";
import UserInput from "./components/Input.jsx";
import WeeklyForecast from "./components/WeeklyForecast";

function App() {
  const [background, setBackground] = useState("");
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await fetchWeather(city);

        if (response !== undefined) {
          setWeatherData(response);
          setErrorMessage("");

          // degrees in Kelvin

          if (response.weather[0].main === "Clouds") {
            setBackground({
              image:
                "https://images.pexels.com/photos/2569471/pexels-photo-2569471.jpeg",
            });
          } else if (response.main.temp > 290) {
            //hot
            setBackground({
              image:
                "https://images.pexels.com/photos/13207700/pexels-photo-13207700.jpeg",
            });
          } else if (response.main.temp < 270 && response.main.temp > 250) {
            //cold but not snowy
            setBackground({
              image:
                "https://images.pexels.com/photos/1640882/pexels-photo-1640882.jpeg",
            });
          } else if (response.main.temp < 250) {
            //snowy
            setBackground({
              image:
                "https://images.pexels.com/photos/6533455/pexels-photo-6533455.jpeg",
            });
          }
        } else {
          setWeatherData(null);
          setBackground("");
          setErrorMessage(`Unable to retrieve weather data`);
        }
      } catch (error) {
        setWeatherData(null);
        setBackground("");
        setErrorMessage(`Unable to retrieve weather data`);
      }
    };

    getWeatherData();
  }, [city]);

  const onUserInput = (e) => {
    setCity(e);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      className="mainpage-bg"
    >
      <UserInput onUserInput={onUserInput} />
      <div className="error"> {errorMessage && <p>{errorMessage}</p>}</div>
      {weatherData && <WeeklyForecast data={weatherData} />}
    </div>
  );
}

export default App;
