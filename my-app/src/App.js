import './App.css';
import { useState } from 'react';

function App() {
  const [background, setBackground] = useState('');
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState('');

  return (
    <div style={{ backgroundImage: background }} className='mainpage-bg'></div>
  );
}

export default App;
