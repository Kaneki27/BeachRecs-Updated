import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Wave pattern in the background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,149.3C672,160,768,192,864,181.3C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Find Your Perfect Beach Day?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of beachgoers who use BeachRecs to discover safe and beautiful beaches across India. Get personalized recommendations, real-time safety alerts, and detailed beach information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              size="lg"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              Explore Beaches Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-primary-600"
            >
              Download Mobile App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;