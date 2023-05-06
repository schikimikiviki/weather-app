const fetchWeather = async (city) => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=3165b7995bfc5c9530915aa03d113f98
`
	);
	const weatherData = await response.json();
	console.log(weatherData);
	return weatherData;
};

export default fetchWeather;
