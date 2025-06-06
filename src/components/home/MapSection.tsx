import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { MapPin } from 'lucide-react';
import { beaches } from '../../utils/mockData';
import Button from '../ui/Button';

const MapSection = () => {
  const [hoveredBeach, setHoveredBeach] = useState<string | null>(null);
  const [selectedBeach, setSelectedBeach] = useState<string | null>(null);
  
  const mapStyles = {
    height: '500px',
    width: '100%'
  };
  
  const defaultCenter = {
    lat: 20.5937,
    lng: 78.9629
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Explore Beaches <span className="text-primary-500">Near You</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our interactive map shows real-time safety conditions, weather updates, and beach statuses across India.
            Zoom in to discover detailed information about each location.
          </p>
        </div>
        
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={5}
              center={defaultCenter}
            >
              {beaches.map((beach) => {
                let markerColor = 'bg-success-500';
                if (beach.seaConditions.warningFlags === 'yellow') {
                  markerColor = 'bg-warning-500';
                } else if (beach.seaConditions.warningFlags === 'red') {
                  markerColor = 'bg-danger-500';
                }
                
                return (
                  <Marker
                    key={beach.id}
                    position={beach.coordinates}
                    onClick={() => setSelectedBeach(beach.id)}
                    onMouseOver={() => setHoveredBeach(beach.id)}
                    onMouseOut={() => setHoveredBeach(null)}
                    icon={{
                      path: "M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0z",
                      fillColor: markerColor === 'bg-success-500' ? '#10b981' : 
                               markerColor === 'bg-warning-500' ? '#f59e0b' : '#ef4444',
                      fillOpacity: 1,
                      strokeWeight: 0,
                      scale: 1.5
                    }}
                  />
                );
              })}
              
              {selectedBeach && (
                <InfoWindow
                  position={beaches.find(b => b.id === selectedBeach)?.coordinates}
                  onCloseClick={() => setSelectedBeach(null)}
                >
                  <div className="p-2 min-w-[200px]">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {beaches.find(b => b.id === selectedBeach)?.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {beaches.find(b => b.id === selectedBeach)?.city}, 
                      {beaches.find(b => b.id === selectedBeach)?.state}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span>Weather: {beaches.find(b => b.id === selectedBeach)?.weather.temperature}°C</span>
                      <span>Waves: {beaches.find(b => b.id === selectedBeach)?.seaConditions.waveHeight}m</span>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          <div className="flex items-center">
            <div className="h-3 w-3 bg-success-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Safe for Swimming</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 bg-warning-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Exercise Caution</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 bg-danger-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Dangerous Conditions</span>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="primary" size="lg">
            View Detailed Map
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;