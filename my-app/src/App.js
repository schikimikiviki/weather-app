import "./App.css";
import { useState, useEffect } from "react";
import fetchWeather from "./API/fetchWeather.js";

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

	return (
		<div style={{ backgroundImage: background }} className="mainpage-bg">
			<p>{weatherData ? weatherData.weather[0].description : "Loading..."}</p>
		</div>
	);
}

export default App;
