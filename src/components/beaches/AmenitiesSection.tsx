import React from 'react';
import { Car, Bath, ShowerHead as Shower, UtensilsCrossed, Tent, Umbrella, ShieldCheck, ChevronFirst as FirstAidKit } from 'lucide-react';
import { Amenity } from '../../types';

interface AmenitiesSectionProps {
  amenities: Amenity[];
  className?: string;
}

const AmenitiesSection = ({ amenities, className = '' }: AmenitiesSectionProps) => {
  // Helper function to get icon for amenity
  const getAmenityIcon = (amenity: Amenity) => {
    switch (amenity) {
      case 'parking':
        return <Car className="h-5 w-5" />;
      case 'restrooms':
        return <Bath className="h-5 w-5" />;
      case 'showers':
        return <Shower className="h-5 w-5" />;
      case 'foodStalls':
        return <UtensilsCrossed className="h-5 w-5" />;
      case 'rentals':
        return <Umbrella className="h-5 w-5" />;
      case 'camping':
        return <Tent className="h-5 w-5" />;
      case 'lifeguards':
        return <ShieldCheck className="h-5 w-5" />;
      case 'firstAid':
        return <FirstAidKit className="h-5 w-5" />;
      default:
        return null;
    }
  };
  
  // Helper function to get display name for amenity
  const getAmenityName = (amenity: Amenity) => {
    switch (amenity) {
      case 'parking': return 'Parking';
      case 'restrooms': return 'Restrooms';
      case 'showers': return 'Showers';
      case 'foodStalls': return 'Food Stalls';
      case 'rentals': return 'Equipment Rentals';
      case 'camping': return 'Camping Allowed';
      case 'lifeguards': return 'Lifeguards';
      case 'firstAid': return 'First Aid';
      default: return '';
    }
  };
  
  // Helper function to determine if amenity is available
  const amenitiesSet = new Set(amenities);
  
  // List of all possible amenities to display
  const allAmenities: Amenity[] = [
    'parking', 'restrooms', 'showers', 'foodStalls', 
    'rentals', 'lifeguards', 'firstAid', 'camping'
  ];
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Beach Amenities</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {allAmenities.map((amenity) => {
          const isAvailable = amenitiesSet.has(amenity);
          
          return (
            <div 
              key={amenity}
              className={`p-3 rounded-lg flex flex-col items-center text-center ${
                isAvailable ? 'bg-primary-50' : 'bg-gray-50 opacity-60'
              }`}
            >
              <div className={`p-2 rounded-full ${isAvailable ? 'text-primary-600' : 'text-gray-400'}`}>
                {getAmenityIcon(amenity)}
              </div>
              <span className={`text-sm mt-1 font-medium ${
                isAvailable ? 'text-gray-800' : 'text-gray-400'
              }`}>
                {getAmenityName(amenity)}
              </span>
              <span className={`text-xs mt-1 ${
                isAvailable ? 'text-success-600' : 'text-gray-400'
              }`}>
                {isAvailable ? 'Available' : 'Not Available'}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-sand-300 text-gray-700">
        <p className="text-sm">
          <strong>Note:</strong> Amenity availability may change seasonally or based on weather conditions. 
          It's recommended to check with local authorities for the most up-to-date information.
        </p>
      </div>
    </div>
  );
};

export default AmenitiesSection;