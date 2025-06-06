import React from 'react';
import { ChevronRight } from 'lucide-react';
import { beaches } from '../../utils/mockData';
import BeachCard from '../ui/BeachCard';
import Button from '../ui/Button';

const FeaturedBeaches = () => {
  // Get only the first 4 beaches for the featured section
  const featuredBeaches = beaches.slice(0, 4);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-2">
              Featured <span className="text-primary-500">Beaches</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our hand-picked selection of stunning beaches across India, each offering unique experiences and beautiful landscapes.
            </p>
          </div>
          <Button
            variant="outline"
            size="md"
            className="mt-4 md:mt-0"
            icon={<ChevronRight className="h-4 w-4" />}
            iconPosition="right"
          >
            View All Beaches
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBeaches.map((beach) => (
            <BeachCard key={beach.id} beach={beach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBeaches;