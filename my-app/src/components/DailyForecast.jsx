const DailyForecast = (weatherData) => {
	return (
		<div className="container">
			<div className="icon"></div>
			<div className="data">
				<span>Today</span>
				<div className="city-name">{weatherData.name}</div>
				<div className="temperature">
					Temperature: {weatherData.temperature}{" "}
				</div>
				<div className="weather"> {weatherData.weather}</div>
			</div>
		</div>
	);
};

export default DailyForecast;
