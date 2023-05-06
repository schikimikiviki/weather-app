import "./App.css";
import DailyForecast from "./components/DailyForecast.jsx";
import fetchWeather from "./API/fetchWeather.js";

fetchWeather("tokyo");

function App() {
	return <DailyForecast />;
}

export default App;
