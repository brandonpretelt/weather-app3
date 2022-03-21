import './Forecast.css';
import moment from 'moment';

function Forecast({ date, avgTempC, avgTempF, icon }) {
    return (
        <div className='forecast'>
            <figure>
                <img src={icon} alt='icon goes here' />
            </figure>
            <div>
                <div className='date'>
                    <span>{moment(date).format('dddd')}</span>
                    <span>{date}</span>
                    <div>
                        <span>{avgTempF} Fahrenheit</span>
                        <span>{avgTempC} Celsius</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forecast;
