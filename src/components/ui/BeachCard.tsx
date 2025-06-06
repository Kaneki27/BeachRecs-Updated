import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Droplets, Wind, Umbrella } from 'lucide-react';
import Card from './Card';
import Rating from './Rating';
import Badge from './Badge';
import { Beach } from '../../types';

interface BeachCardProps {
  beach: Beach;
  className?: string;
}

const BeachCard = ({ beach, className = '' }: BeachCardProps) => {
  // Helper function to determine safe conditions badge
  const getSafetyBadge = () => {
    const { warningFlags } = beach.seaConditions;
    
    if (warningFlags === 'green') {
      return <Badge variant="success">Safe</Badge>;
    } else if (warningFlags === 'yellow') {
      return <Badge variant="warning">Caution</Badge>;
    } else if (warningFlags === 'red') {
      return <Badge variant="danger">Danger</Badge>;
    } 
    return null;
  };
  
  return (
    <Card 
      className={`h-full transition-transform duration-300 hover:scale-[1.02] ${className}`} 
      hoverable
    >
      <Link to={`/beach/${beach.id}`}>
        <div className="relative overflow-hidden h-48">
          <img 
            src={beach.mainImage} 
            alt={beach.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {getSafetyBadge()}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{beach.name}</h3>
            
            <div className="flex flex-col items-end">
              <div className="text-sm text-gray-500 flex items-center">
                <span className="font-medium text-primary-500">
                  {beach.weather.temperature}°C
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{beach.city}, {beach.state}</span>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-1">Safety:</span>
              <Rating value={beach.safetyRating} size="sm" type="safety" />
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-1">Cleanliness:</span>
              <Rating value={beach.cleanlinessRating} size="sm" type="cleanliness" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-3">
            <div className="flex items-center">
              <Droplets className="h-3.5 w-3.5 mr-1 text-blue-500" />
              <span>Waves: {beach.seaConditions.waveHeight}m</span>
            </div>
            <div className="flex items-center">
              <Wind className="h-3.5 w-3.5 mr-1 text-gray-500" />
              <span>{beach.weather.windSpeed} km/h</span>
            </div>
            <div className="flex items-center">
              <Umbrella className="h-3.5 w-3.5 mr-1 text-accent-500" />
              <span>{beach.weather.condition}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1.5">
            {beach.activities.slice(0, 3).map((activity, index) => (
              <Badge key={index} variant="accent" size="sm">
                {activity}
              </Badge>
            ))}
            {beach.activities.length > 3 && (
              <Badge variant="primary" size="sm">
                +{beach.activities.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default BeachCard;