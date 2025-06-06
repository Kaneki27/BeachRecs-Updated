import React, { useState } from 'react';
import { MapPin, Filter, Search } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import BeachCard from '../components/ui/BeachCard';
import SearchBar from '../components/ui/SearchBar';
import { filterBeaches, getUniqueStates, getAllActivities } from '../utils/mockData';
import { Activity } from '../types';

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [safetyRating, setSafetyRating] = useState(0);
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique states and activities
  const states = getUniqueStates();
  const activities = getAllActivities();
  
  // Filter beaches based on criteria
  const filteredBeaches = filterBeaches(
    searchQuery,
    selectedState,
    selectedActivities as Activity[],
    safetyRating,
    cleanlinessRating
  );
  
  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  // Toggle activity selection
  const toggleActivity = (activity: string) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter(a => a !== activity));
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };
  
  // Reset filters
  const resetFilters = () => {
    setSelectedState('');
    setSelectedActivities([]);
    setSafetyRating(0);
    setCleanlinessRating(0);
  };
  
  return (
    <Layout>
      <div className="bg-primary-600 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-heading font-bold text-white mb-2">
            Explore Beaches
          </h1>
          <p className="text-white/90 mb-6">
            Discover safe and beautiful beaches across India. Use filters to find the perfect beach for your needs.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="w-full md:w-2/3">
              <SearchBar 
                onSearch={handleSearch} 
                placeholder="Search by beach name, location, or activity..." 
                className="w-full"
              />
            </div>
            <Button
              variant={showFilters ? "accent" : "outline"}
              size="lg"
              icon={<Filter className="h-4 w-4" />}
              className={showFilters ? "text-white" : "text-white border-white hover:bg-white hover:text-primary-600"}
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Panel */}
          {showFilters && (
            <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-5 h-fit">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Reset All
                </button>
              </div>
              
              {/* State Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">All States</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Activities Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Activities
                </label>
                <div className="flex flex-wrap gap-2">
                  {activities.map((activity) => (
                    <button
                      key={activity}
                      onClick={() => toggleActivity(activity)}
                      className={`text-xs px-3 py-1.5 rounded-full ${
                        selectedActivities.includes(activity)
                          ? 'bg-primary-100 text-primary-800'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {activity}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Safety Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Safety Rating
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={safetyRating}
                    onChange={(e) => setSafetyRating(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 min-w-[20px]">
                    {safetyRating > 0 ? safetyRating : 'Any'}
                  </span>
                </div>
              </div>
              
              {/* Cleanliness Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Cleanliness Rating
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={cleanlinessRating}
                    onChange={(e) => setCleanlinessRating(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 min-w-[20px]">
                    {cleanlinessRating > 0 ? cleanlinessRating : 'Any'}
                  </span>
                </div>
              </div>
              
              <Button variant="primary" size="md" fullWidth>
                Apply Filters
              </Button>
            </div>
          )}
          
          {/* Results */}
          <div className={`w-full ${showFilters ? 'lg:w-3/4' : 'w-full'}`}>
            {/* Results Summary */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {filteredBeaches.length} {filteredBeaches.length === 1 ? 'Beach' : 'Beaches'} Found
                </h2>
                <div className="text-sm text-gray-600 flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <span>
                    {selectedState ? selectedState : 'All of India'}
                    {searchQuery && ` • Search: "${searchQuery}"`}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                <select className="p-1.5 text-sm border border-gray-300 rounded">
                  <option>Safety Rating</option>
                  <option>Cleanliness Rating</option>
                  <option>Popularity</option>
                  <option>A-Z</option>
                </select>
              </div>
            </div>
            
            {/* Beach Cards */}
            {filteredBeaches.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBeaches.map((beach) => (
                  <BeachCard key={beach.id} beach={beach} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">No Beaches Found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any beaches matching your current filters. Try adjusting your search criteria.
                </p>
                <Button variant="primary" size="md" onClick={resetFilters}>
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExplorePage;