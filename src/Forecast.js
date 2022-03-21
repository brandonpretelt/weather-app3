import './Forecast.css';

function Forecast({ date, avgTempC, avgTempF }) {
    return (
        <div className='forecast'>
            <div>{date}</div>
            <div>{avgTempC} Celsius</div>
            <div>{avgTempF} Farenheit</div>
        </div>
    );
}

export default Forecast;
