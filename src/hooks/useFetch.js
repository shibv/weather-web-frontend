const BASE_URL = 'https://weather-backend-phi.vercel.app/api/weather';

export const fetchWeather = async (city) => {
    const response = await fetch(`${BASE_URL}/retrieve?city=${city}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const fetchWeatherSummary = async (city) => {
    const response = await fetch(`${BASE_URL}/summary?city=${city}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const triggerAlert = async (data) => {
    const response = await fetch('https://weather-backend-phi.vercel.app/api/alerts/trigger', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};
