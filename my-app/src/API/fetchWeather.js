const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=e6d6f52a59b95d863e5083ee5200a623
`
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
};

export default fetchWeather;
