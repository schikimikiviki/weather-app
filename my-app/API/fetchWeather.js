const fetchWeather = {
	apiKey: "Your key",
	async fetchWeather(city) {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}=${this.apiKey}`
		);
		const weatherData = await response.json();
		this.displayWeather(weatherData);
	},
};

export default fetchWeather;
