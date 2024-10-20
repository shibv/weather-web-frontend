import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeatherRetrieve from './components/WeatherRetrieve';
import WeatherSummary from './components/WeatherSummary';
import AlertsTrigger from './components/AlertsTrigger';
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <>
      <div>
        <Toaster position="top-center" />
      </div>
      <Router>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Weather Monitoring System</h1>
            <nav className="flex flex-col md:flex-row md:space-x-4 mt-2">
              <Link
                to="/retrieve"
                className="text-lg text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 mb-2 md:mb-0"
              >
                Retrieve Weather
              </Link>
              <Link
                to="/summary"
                className="text-lg text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 mb-2 md:mb-0"
              >
                Weather Summary
              </Link>
              <Link
                to="/alerts"
                className="text-lg text-white bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-600 mb-2 md:mb-0"
              >
                Trigger Alerts
              </Link>
            </nav>
          </header>

          <main className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
            <Routes>
              <Route path="/retrieve" element={<WeatherRetrieve />} />
              <Route path="/summary" element={<WeatherSummary />} />
              <Route path="/alerts" element={<AlertsTrigger />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
};

export default App;
