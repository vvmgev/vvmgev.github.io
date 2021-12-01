import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import List from '../list/list'
import { round, getWeekName } from '../../helpers';
import { usePrevious } from '../../hooks';
import './weather.css';


function Weather() {

    const weather = useSelector((state) => state.weather);
    const [activeDayIndex, setActiveDayIndex] = useState(0);
    const cityName = weather?.city?.name;
    const previousCityName = usePrevious(cityName)
    useEffect(() => previousCityName !== cityName && setActiveDayIndex(0), [cityName])


    if (!weather) {
        return (<h2> Please enter the city name</h2>)   
    }

    if(weather.error) {
        return (<h2>{weather.message}</h2>)
    }

    return (
        <div className="weather-info">
            <h2>{weather.city.name} {weather.city.country}</h2> 
            <div className="today-info">
                <div className="today-info-row">
                    <span>Day</span>
                    <span>{round(weather.list[activeDayIndex].temp.day)}</span>
                </div>
                <div className="today-info-row">
                    <span>Night</span>
                    <span>{round(weather.list[activeDayIndex].temp.night)}</span>
                </div>
                <div className="today-info-row">
                    <span>Humidity</span>
                    <span>{round(weather.list[activeDayIndex].humidity)}%</span>
                </div>
            </div>
            <List
                className="week-list"
                items={weather.list}
                itemClick={(_, index) => setActiveDayIndex(index)}
                render={({temp : { day, night }, dt }, index) => (
                    <div className={`day-info ${index === activeDayIndex ? "active" : ""}`}>
                        <span className="day-name">{getWeekName(dt)}</span>
                        <h3 className="day-temp">{round(day)}</h3>
                        <h4 className="day-temp">{round(night)}</h4>
                    </div>
                )}
            />
        </div>
    )

}

export default Weather;