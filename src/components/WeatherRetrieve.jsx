import React, { useState } from 'react';
import { fetchWeather } from '../hooks/useFetch.js';
import toast from 'react-hot-toast';

const WeatherRetrieve = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); 

    const handleFetchWeather = async () => {
        setLoading(true); 
        setError(null); 
        try {
            const data = await fetchWeather(city);
            setWeatherData(data);
            toast.success(`Weather data retrieved for ${city}!`); 
            setCity(''); 
        } catch (err) {
            setError('Error fetching weather data');
            toast.error('Error fetching weather data'); 
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Retrieve Weather</h2>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city"
                className="border rounded-md p-2 w-full mb-4"
            />
            <button 
                onClick={handleFetchWeather} 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
                disabled={loading} 
            >
                {loading ? 'Loading...' : 'Get Weather'}
            </button>
            {weatherData && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    <h3 className="font-bold">Weather Data:</h3>
                    <pre>{JSON.stringify(weatherData, null, 2)}</pre>
                </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default WeatherRetrieve;
