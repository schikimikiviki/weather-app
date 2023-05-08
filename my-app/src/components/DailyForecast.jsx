import { useState } from "react";

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
			<div className="icon"></div>
			<div className="data">
				<span>Today</span>
				<div className="city-name">{data.name}</div>
				<div className="temperature">
					Temperature: {temperature}
					{unit}{" "}
				</div>
				<button onClick={() => changeTemp()}>°F</button>
				<div className="weather">
					<img
						alt="icon"
						src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
					/>
				</div>
			</div>
		</div>
	);
};

export default DailyForecast;
