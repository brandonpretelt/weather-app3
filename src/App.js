import './App.css';
import React, { useState, useEffect } from 'react';
import Forecast from './Forecast';
import LocationForm from './LocationForm';

//   `https://api.weatherapi.com/v1/forecast.json?key=07b3305bfdd74765b2e05359222103&q=${location}&days=1&aqi=no&alerts=no`

function App() {
    const [forecast, setForecast] = useState([]);
    const [location, setLocation] = useState('Provo,UT');
    const [name, setName] = useState('');

    function cityOrZip(place) {
        setLocation(place);
    }

    useEffect(() => {
        async function getWeather() {
            let place = location;

            const response = await fetch(
                `https://api.weatherapi.com/v1/forecast.json?&q=${place}&key=07b3305bfdd74765b2e05359222103&days=7&aqi=no&alerts=no`
            );
            const data = await response.json();

            const { forecast } = data;
            setForecast(forecast.forecastday);
            setName(data.location.name);
        }
        getWeather();
    }, [location]);

    return (
        <div className='App'>
            <header>
                <h1> Weather app </h1>
                <LocationForm cityOrZip={cityOrZip} />
                <h2>{name}</h2>
            </header>
            {forecast.map((weather) => {
                return (
                    <Forecast
                        date={weather.date}
                        avgTempC={weather.day.avgtemp_c}
                        avgTempF={weather.day.avgtemp_f}
                    />
                );
            })}
        </div>
    );
}

export default App;
