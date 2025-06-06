import React from 'react';
import { Search } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-beach-pattern bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-900/30"></div>
      
      {/* Wave animation at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,213.3C384,213,480,203,576,170.7C672,139,768,85,864,69.3C960,53,1056,75,1152,101.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight">
            Discover <span className="text-accent-500">Safe</span> &{' '}
            <span className="text-accent-500">Beautiful</span> Beaches Across India
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            AI-powered recommendations based on real-time weather, sea conditions, and safety alerts to find your perfect beach destination.
          </p>
          
          <div className="bg-white/95 p-4 rounded-lg shadow-lg max-w-2xl mb-8">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-grow">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search beaches by name, location, or activity..."
                    className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              <Button variant="primary" size="lg">
                Find Beaches
              </Button>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              <button className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 transition-colors">
                Goa Beaches
              </button>
              <button className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 transition-colors">
                Family-Friendly
              </button>
              <button className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 transition-colors">
                Surfing Spots
              </button>
              <button className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 transition-colors">
                Best for Swimming
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
              Explore All Beaches
            </Button>
            <Button variant="accent" size="lg">
              View Safety Guide
            </Button>
          </div>
        </div>
      </div>
      
      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-4 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 divide-x divide-gray-200">
            <div className="text-center p-2">
              <p className="text-primary-600 font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Beaches Analyzed</p>
            </div>
            <div className="text-center p-2">
              <p className="text-primary-600 font-bold text-2xl">24/7</p>
              <p className="text-gray-600 text-sm">Real-time Updates</p>
            </div>
            <div className="text-center p-2">
              <p className="text-primary-600 font-bold text-2xl">50+</p>
              <p className="text-gray-600 text-sm">Safety Parameters</p>
            </div>
            <div className="text-center p-2">
              <p className="text-primary-600 font-bold text-2xl">100k+</p>
              <p className="text-gray-600 text-sm">Happy Beachgoers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;