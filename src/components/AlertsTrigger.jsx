import React, { useState } from 'react';
import { triggerAlert } from '../hooks/useFetch.js'; 
import toast from 'react-hot-toast';

const WeatherAlert = () => {
    const [city, setCity] = useState('');
    const [tempThreshold, setTempThreshold] = useState('');
    const [condition, setCondition] = useState('');
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);
    const [alertMessage, setAlertMessage] = useState(null); 
    const handleSetAlert = async () => {
        setLoading(true); 
        setError(null); 
        try {
            const response = await triggerAlert({ city, temp_threshold: tempThreshold, condition });
            setAlertMessage(response.message);
            toast.success(`Alert set for ${city}!`); 
            setCity(''); 
            setTempThreshold(''); 
            setCondition(''); 
        } catch (err) {
            setError('Error setting alert');
            toast.error('Error setting alert'); 
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Set Weather Alert</h2>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city"
                className="border rounded-md p-2 w-full mb-4"
            />
            <input 
                type="number" 
                value={tempThreshold} 
                onChange={(e) => setTempThreshold(e.target.value)} 
                placeholder="Temperature Threshold (°C)"
                className="border rounded-md p-2 w-full mb-4"
            />
            <input 
                type="text" 
                value={condition} 
                onChange={(e) => setCondition(e.target.value)} 
                placeholder="Weather Condition"
                className="border rounded-md p-2 w-full mb-4"
            />
            <button 
                onClick={handleSetAlert} 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
                disabled={loading} 
            >
                {loading ? 'Loading...' : 'Set Alert'}
            </button>
            {alertMessage && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    <p className="font-bold">{alertMessage}</p>
                </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default WeatherAlert;
