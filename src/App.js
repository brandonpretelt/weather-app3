import './App.css';
import React, { useState, useEffect } from 'react';
import Forecast from './components/Forecast';
import LocationForm from './components/LocationForm';

//   `https://api.weatherapi.com/v1/forecast.json?key=07b3305bfdd74765b2e05359222103&q=${location}&days=1&aqi=no&alerts=no`

function App() {
    const [forecast, setForecast] = useState([]);
    const [location, setLocation] = useState('Provo,UT');
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const [currentTemp, setCurrentTemp] = useState('');

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

            const { forecast, location: cityName, current } = data;
            setForecast(forecast.forecastday);
            setName(cityName.name);
            setIcon(current.condition.icon);
            setCurrentTemp(current.temp_f);
        }
        getWeather();
    }, [location]);

    return (
        <div className='App'>
            <header>
                <h1> Weather app </h1>
                <LocationForm cityOrZip={cityOrZip} />

                <h2>{name}</h2>
                <div className='current-info'>
                    <img src={icon} />
                    {currentTemp} Fahrenheit
                </div>
            </header>
            <section className='card-container'>
                {forecast.map((weather) => {
                    return (
                        <div className='card'>
                            <Forecast
                                date={weather.date}
                                avgTempC={weather.day.avgtemp_c}
                                avgTempF={weather.day.avgtemp_f}
                                icon={weather.day.condition.icon}
                            />
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default App;
