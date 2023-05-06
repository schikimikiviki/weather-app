const fetchWeather = {
  apiKey: 'e6d6f52a59b95d863e5083ee5200a623',
  async fetchWeather(city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    );
    const weatherData = await response.json();
    this.displayWeather(weatherData);

    return weatherData;
  },
};

export default fetchWeather;
