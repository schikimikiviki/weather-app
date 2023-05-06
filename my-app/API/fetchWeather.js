import dotenv from "dotenv";

dotenv.config({ path: "../config.env" });

const fetchWeather = {
	apiKey: process.env.apiKey,
	async fetchWeather(city) {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}=${this.apiKey}`
		);
		const weatherData = await response.json();
		console.log(weatherData);
		return weatherData;
	},
};

export default fetchWeather;
