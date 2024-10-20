import React, { useState } from 'react';
import { fetchWeatherSummary } from '../hooks/useFetch.js'; 
import toast from 'react-hot-toast';

const WeatherSummary = () => {
    const [city, setCity] = useState('');
    const [summaryData, setSummaryData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); 

    const handleFetchSummary = async () => {
        setLoading(true); 
        setError(null); 
        try {
            const data = await fetchWeatherSummary(city);
            setSummaryData(data);
            toast.success(`Weather summary retrieved for ${city}!`);
            setCity(''); 
        } catch (err) {
            setError('Error fetching weather summary');
            toast.error('Error fetching weather summary'); 
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Retrieve Weather Summary</h2>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city"
                className="border rounded-md p-2 w-full mb-4"
            />
            <button 
                onClick={handleFetchSummary} 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
                disabled={loading} 
            >
                {loading ? 'Loading...' : 'Get Summary'}
            </button>
            {summaryData && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    <h3 className="font-bold">Weather Summary:</h3>
                    <pre>{JSON.stringify(summaryData, null, 2)}</pre>
                </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default WeatherSummary;
