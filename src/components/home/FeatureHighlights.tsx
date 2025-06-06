import React from 'react';
import { Shield, Cloud, Map, Umbrella, RefreshCw, Users } from 'lucide-react';
import Card, { CardContent } from '../ui/Card';

const features = [
  {
    icon: <Shield className="h-6 w-6 text-primary-500" />,
    title: 'Real-time Safety Alerts',
    description: 'Get up-to-date safety information including tide warnings, water quality, and lifeguard statuses.',
  },
  {
    icon: <Cloud className="h-6 w-6 text-primary-500" />,
    title: 'Weather Forecasts',
    description: 'Accurate weather predictions tailored specifically for beach conditions and activities.',
  },
  {
    icon: <Map className="h-6 w-6 text-primary-500" />,
    title: 'Interactive Maps',
    description: 'Explore beaches with detailed maps showing amenities, entry points, and safe swimming zones.',
  },
  {
    icon: <Umbrella className="h-6 w-6 text-primary-500" />,
    title: 'Activity Recommendations',
    description: 'Personalized suggestions for beach activities based on current conditions and your preferences.',
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-primary-500" />,
    title: 'Live Updates',
    description: 'Continuous updates on crowd levels, parking availability, and special events.',
  },
  {
    icon: <Users className="h-6 w-6 text-primary-500" />,
    title: 'Community Insights',
    description: 'Real visitor reviews, tips, and photos to help you plan the perfect beach day.',
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Why Choose <span className="text-primary-500">BeachRecs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with comprehensive beach data to provide you with the most accurate and helpful information for your beach visits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent>
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;