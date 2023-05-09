import { useState } from "react";
import "./DailyForecast.css";

const DailyForecast = ({ data }) => {
  const [celsius, setCelsius] = useState(true);
  const [temperature, setTemperature] = useState(
    Math.round(data.main.temp - 273.15)
  );
  const [unit, setUnit] = useState("°C");

  const changeTemp = () => {
    if (celsius === true) {
      setCelsius(false);
      setTemperature(Math.round(temperature * (9 / 5) + 32));
      setUnit("°F");
    } else {
      setCelsius(true);
      setTemperature(Math.round((temperature - 32) * (5 / 9)));
      setUnit("°C");
    }
  };

  return (
    <div className="container">
      <div className="icon">
        <img
          id="icon"
          alt="icon"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          min-width="60%"
          min-height="70%"
        />
      </div>
      <div className="data">
        <span>Today</span>
        <h1 className="city-name">{data.name}</h1>
        <div className="temperature">
          Temperature: {temperature}
          {unit}{" "}
          <button className="convert-button" onClick={() => changeTemp()}>
            °F
          </button>
        </div>

        <div className="weather">{data.weather[0].main}</div>
      </div>
    </div>
  );
};

export default DailyForecast;
