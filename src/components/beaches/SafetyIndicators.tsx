import React from 'react';
import { AlertTriangle, ThumbsUp, Droplets, Wind, Thermometer, Flag } from 'lucide-react';
import { SeaConditions, WeatherInfo } from '../../types';

interface SafetyIndicatorsProps {
  seaConditions: SeaConditions;
  weather: WeatherInfo;
}

const SafetyIndicators = ({ seaConditions, weather }: SafetyIndicatorsProps) => {
  // Helper function to get warning flag color
  const getFlagColor = () => {
    switch (seaConditions.warningFlags) {
      case 'green': return 'bg-success-500';
      case 'yellow': return 'bg-warning-500';
      case 'red': return 'bg-danger-500';
      default: return 'bg-gray-300';
    }
  };
  
  // Helper function to get wave height risk level
  const getWaveRisk = () => {
    if (seaConditions.waveHeight < 0.5) return { text: 'Low', color: 'text-success-500' };
    if (seaConditions.waveHeight < 1.5) return { text: 'Moderate', color: 'text-warning-500' };
    return { text: 'High', color: 'text-danger-500' };
  };
  
  // Helper function to get current strength risk level
  const getCurrentRisk = () => {
    switch (seaConditions.currentStrength) {
      case 'mild': return { text: 'Mild', color: 'text-success-500' };
      case 'moderate': return { text: 'Moderate', color: 'text-warning-500' };
      case 'strong': return { text: 'Strong', color: 'text-danger-500' };
      default: return { text: 'Unknown', color: 'text-gray-500' };
    }
  };
  
  // Helper function to get UV index risk level
  const getUvRisk = () => {
    if (weather.uvIndex <= 2) return { text: 'Low', color: 'text-success-500' };
    if (weather.uvIndex <= 5) return { text: 'Moderate', color: 'text-success-500' };
    if (weather.uvIndex <= 7) return { text: 'High', color: 'text-warning-500' };
    if (weather.uvIndex <= 10) return { text: 'Very High', color: 'text-warning-500' };
    return { text: 'Extreme', color: 'text-danger-500' };
  };
  
  const waveRisk = getWaveRisk();
  const currentRisk = getCurrentRisk();
  const uvRisk = getUvRisk();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        {seaConditions.warningFlags === 'green' ? (
          <ThumbsUp className="h-5 w-5 text-success-500 mr-2" />
        ) : (
          <AlertTriangle className="h-5 w-5 text-warning-500 mr-2" />
        )}
        <h3 className="text-lg font-semibold text-gray-800">Current Safety Status</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Warning Flag */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Flag className="h-4 w-4 text-gray-700 mr-2" />
            <span className="text-sm font-medium text-gray-700">Warning Flag</span>
          </div>
          <div className="flex items-center">
            <div className={`h-4 w-4 rounded-full ${getFlagColor()} mr-2`}></div>
            <span className="capitalize">{seaConditions.warningFlags === 'none' ? 'No flags' : `${seaConditions.warningFlags} flag`}</span>
          </div>
        </div>
        
        {/* Wave Height */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Droplets className="h-4 w-4 text-gray-700 mr-2" />
            <span className="text-sm font-medium text-gray-700">Wave Height</span>
          </div>
          <div className="flex items-center justify-between">
            <span>{seaConditions.waveHeight} meters</span>
            <span className={`text-sm font-medium ${waveRisk.color}`}>
              {waveRisk.text} Risk
            </span>
          </div>
        </div>
        
        {/* Current Strength */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Wind className="h-4 w-4 text-gray-700 mr-2" />
            <span className="text-sm font-medium text-gray-700">Current Strength</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Tide: {seaConditions.tideStatus}</span>
            <span className={`text-sm font-medium ${currentRisk.color}`}>
              {currentRisk.text}
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Water Temperature */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Thermometer className="h-4 w-4 text-gray-700 mr-2" />
            <span className="text-sm font-medium text-gray-700">Water Temperature</span>
          </div>
          <span>{seaConditions.temperature}°C</span>
        </div>
        
        {/* UV Index */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <span className="text-sm font-medium text-gray-700">UV Index</span>
          </div>
          <div className="flex items-center justify-between">
            <span>{weather.uvIndex}</span>
            <span className={`text-sm font-medium ${uvRisk.color}`}>
              {uvRisk.text}
            </span>
          </div>
        </div>
        
        {/* Wind Speed */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Wind className="h-4 w-4 text-gray-700 mr-2" />
            <span className="text-sm font-medium text-gray-700">Wind Speed</span>
          </div>
          <span>{weather.windSpeed} km/h</span>
        </div>
      </div>
      
      {/* Safety recommendation based on conditions */}
      <div className="mt-6 p-4 rounded-lg bg-primary-50 border-l-4 border-primary-500">
        <p className="text-gray-700">
          {seaConditions.warningFlags === 'green' ? (
            <span>
              <strong>Safe for swimming.</strong> Conditions are currently favorable with mild currents and calm waters.
              Always swim in designated areas and keep an eye on children.
            </span>
          ) : seaConditions.warningFlags === 'yellow' ? (
            <span>
              <strong>Exercise caution when swimming.</strong> Moderate currents and wave heights may pose risks for inexperienced swimmers.
              Stay close to shore and be aware of changing tide conditions.
            </span>
          ) : (
            <span>
              <strong>Swimming not advised!</strong> Dangerous conditions with strong currents and high waves.
              Please enjoy the beach from the shore today and follow lifeguard instructions.
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default SafetyIndicators;