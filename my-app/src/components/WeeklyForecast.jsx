import "./WeeklyForecast.css";

function WeeklyForecast({ data }) {
  console.log(data);
  return (
    <div className="container-div">
      <div className="box-single">
        <h2>Humidity</h2>
        <img
          alt="humidity"
          src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
          width="80px"
          height="80px"
        />
        <div className="text-single">{data.main.humidity} %</div>
      </div>
      <div className="box-single">
        <h2>Pressure</h2>
        <img
          alt="pressure"
          src="https://cdn-icons-png.flaticon.com/512/1839/1839341.png"
          width="80px"
          height="80px"
        />
        <div className="text-single">{data.main.pressure} hPa</div>
      </div>
      <div className="box-single">
        <h2>Wind speed</h2>
        <img
          alt="pressure"
          src="https://cdn-icons-png.flaticon.com/512/481/481476.png"
          width="80px"
          height="80px"
        />
        <div className="text-single">{data.wind.speed} m/sec</div>
      </div>
    </div>
  );
}

export default WeeklyForecast;
