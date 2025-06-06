import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Thermometer, 
  Droplets,
  ChevronLeft, 
  Sun, 
  Heart,
  Share2,
  Bookmark,
  Image
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Rating from '../components/ui/Rating';
import Badge from '../components/ui/Badge';
import SafetyIndicators from '../components/beaches/SafetyIndicators';
import AmenitiesSection from '../components/beaches/AmenitiesSection';
import VolunteerSection from '../components/beaches/VolunteerSection';
import { getBeachById } from '../utils/mockData';

const BeachDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Get beach data
  const beach = getBeachById(id || '');
  
  if (!beach) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Beach Not Found</h1>
          <p className="text-gray-600 mb-6">The beach you're looking for doesn't exist or has been removed.</p>
          <Button variant="primary" size="lg">
            <Link to="/explore">Explore Other Beaches</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="bg-primary-50 pt-24 pb-6">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center mb-4">
            <Link to="/" className="text-primary-600 hover:text-primary-700">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/explore" className="text-primary-600 hover:text-primary-700">
              Explore
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{beach.name}</span>
          </div>
          
          {/* Back button */}
          <Link to="/explore" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>Back to all beaches</span>
          </Link>
          
          {/* Beach Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-heading font-bold text-gray-800">{beach.name}</h1>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{beach.city}, {beach.state}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                icon={<Bookmark className="h-4 w-4" />}
              >
                Save
              </Button>
              <Button
                variant="outline"
                size="sm"
                icon={<Share2 className="h-4 w-4" />}
              >
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                icon={<Heart className="h-4 w-4" />}
              >
                Favorite
              </Button>
            </div>
          </div>
          
          {/* Ratings Overview */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap gap-6">
            <div>
              <span className="text-sm text-gray-600 block mb-1">Safety Rating</span>
              <Rating value={beach.safetyRating} size="md" showValue type="safety" />
            </div>
            <div>
              <span className="text-sm text-gray-600 block mb-1">Cleanliness Rating</span>
              <Rating value={beach.cleanlinessRating} size="md" showValue type="cleanliness" />
            </div>
            <div className="ml-auto flex items-center">
              <div className="flex items-center mr-4">
                <Sun className="h-5 w-5 text-amber-500 mr-1" />
                <span className="font-medium">{beach.weather.temperature}°C</span>
              </div>
              <div className="flex items-center">
                <Droplets className="h-5 w-5 text-blue-500 mr-1" />
                <span className="font-medium">{beach.seaConditions.temperature}°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Description */}
          <div className="lg:col-span-2">
            {/* Main Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="relative h-96">
                <img 
                  src={beach.images[activeImageIndex]} 
                  alt={beach.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<Image className="h-4 w-4" />}
                  >
                    View All Photos
                  </Button>
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="p-4 flex gap-2">
                {beach.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-16 w-24 rounded-md overflow-hidden border-2 ${
                      index === activeImageIndex ? 'border-primary-500' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${beach.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Beach Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">About {beach.name}</h2>
              <p className="text-gray-700 mb-6">{beach.description}</p>
              
              {/* Activities */}
              <h3 className="text-lg font-medium text-gray-800 mb-3">Popular Activities</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {beach.activities.map((activity, index) => (
                  <Badge key={index} variant="primary" size="md">
                    {activity}
                  </Badge>
                ))}
              </div>
              
              {/* Best Time to Visit */}
              <h3 className="text-lg font-medium text-gray-800 mb-3">Best Time to Visit</h3>
              <div className="flex items-start mb-6">
                <Calendar className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                <div>
                  <p className="text-gray-700">
                    October to March is the ideal time to visit {beach.name} when the weather is pleasant and the sea is calm.
                    Avoid monsoon season (June to September) when swimming can be dangerous due to rough seas.
                  </p>
                </div>
              </div>
              
              {/* Accessibility Information */}
              <h3 className="text-lg font-medium text-gray-800 mb-3">Accessibility</h3>
              <p className="text-gray-700">
                The beach has moderate accessibility with some paved paths. Limited wheelchair access is available near the main entrance.
                Service animals are allowed on the beach area.
              </p>
            </div>
            
            {/* Safety Indicators */}
            <SafetyIndicators 
              seaConditions={beach.seaConditions} 
              weather={beach.weather} 
            />
          </div>
          
          {/* Right Column - Amenities and Volunteer Activities */}
          <div>
            {/* Weather Widget */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Thermometer className="h-5 w-5 text-primary-500 mr-2" />
                Today's Weather
              </h3>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-center">
                  {beach.weather.condition === 'sunny' && (
                    <Sun className="h-10 w-10 text-amber-500 mx-auto" />
                  )}
                  {beach.weather.condition === 'cloudy' && (
                    <svg className="h-10 w-10 text-gray-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  )}
                  {beach.weather.condition === 'rainy' && (
                    <svg className="h-10 w-10 text-blue-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                      <path d="M16 14v6" />
                      <path d="M8 14v6" />
                      <path d="M12 16v6" />
                    </svg>
                  )}
                  <p className="text-sm mt-1 capitalize">{beach.weather.condition}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-800">{beach.weather.temperature}°C</p>
                  <p className="text-sm text-gray-600">Feels like {beach.weather.temperature - 1}°C</p>
                </div>
                <div className="text-center">
                  <p className="text-sm">Humidity</p>
                  <p className="font-medium">{beach.weather.humidity}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm">Wind</p>
                  <p className="font-medium">{beach.weather.windSpeed} km/h</p>
                </div>
              </div>
              
              <div className="mt-2 text-center">
                <Button variant="outline" size="sm" fullWidth>
                  See 7-Day Forecast
                </Button>
              </div>
            </div>
            
            {/* Amenities Section */}
            <AmenitiesSection amenities={beach.amenities} className="mb-8" />
            
            {/* Volunteer Opportunities */}
            <VolunteerSection activities={beach.volunteerActivities} />
            
            {/* Nearby Attractions */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Nearby Attractions
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 text-primary-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Coral Reef Diving Point</p>
                    <p className="text-sm text-gray-600">2 km away • Diving & Snorkeling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 text-primary-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Beach Shack Restaurant</p>
                    <p className="text-sm text-gray-600">0.5 km away • Seafood Restaurant</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 text-primary-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Nature Trail</p>
                    <p className="text-sm text-gray-600">1.5 km away • Hiking</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button variant="outline" size="sm" fullWidth>
                  View All Nearby Places
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BeachDetailsPage;