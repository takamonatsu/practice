import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid4 } from 'uuid';
import './WeatherApp.css'

interface WeatherData {
    title: string;
    description: {
        headlineText: string;
        bodyText: string;
    };
    forecasts: Array<
        {
            date: string;
            dateLabel: string;
            telop: string;
            temperature: {
                max: {
                    celsius: number;
                }
            }
            image: {
                url: string;
                width: number;
                height: number;
            }
        }
    >
}

const cities = [
    { name: '東京', cityId: '130010' },
    { name: '大阪', cityId: '270000' },
    { name: '名古屋', cityId: '230010' },
    { name: '札幌', cityId: '016010' },
    { name: '福岡', cityId: '400010' },
    { name: '那覇', cityId: '471010' }
];

const WeatherApp: React.FC = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);


    const fetchWeather = async (cityId: string) => {
        const weather_url = `https://weather.tsukumijima.net/api/forecast/city/${cityId}`;
        try {
            const response = await axios.get<WeatherData>(weather_url);
            setWeatherData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (city) {
            fetchWeather(city);
        }
    }, [city]);

    const fetchArea = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value)
    }

    return (
        <div className='weather-app'>
            <h2>天気情報表示</h2>
            <select value={city} onChange={fetchArea}>
                <option hidden>選択してください</option>
                {cities.map(city => (
                    <option key={city.cityId} value={city.cityId}>{city.name}</option>
                ))};
            </select>
            <div className='weather-ttl'>{weatherData?.title}</div>
            <ul className='weather-list'>
                {weatherData?.forecasts.map(forecast => (
                    <li className='weather-list-item' key={uuid4()}>
                        <div>
                            <p><span className='date-icon'>{forecast.dateLabel}</span>{forecast.date}</p>
                            <p>{forecast.telop}</p>
                            <p>{forecast.temperature.max.celsius}</p>
                        </div>
                        <img src={forecast.image.url} alt="天気アイコン" width={forecast.image.width} height={forecast.image.height} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WeatherApp
