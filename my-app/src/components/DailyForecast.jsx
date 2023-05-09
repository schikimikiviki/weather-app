import "./DailyForecast.css";
const DailyForecast = (weatherData) => {
  console.log(weatherData.name);
  return (
    <div className="container">
      <div className="icon"></div>
      <div className="data">
        <span>
          <h2>Today</h2>
        </span>
        <div className="city-name">
          <h1>{weatherData.name}</h1>
        </div>
        <div className="temperature">
          <h2>Temperature: {weatherData.temperature} </h2>
        </div>
        <div className="weather"> {weatherData.weather}</div>
      </div>
    </div>
  );
};

export default DailyForecast;
