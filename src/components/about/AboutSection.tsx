import React from 'react';
import { Waves, Map, Shield, Users, Cloud, Heart } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const AboutSection = () => {
  const features = [
    {
      icon: <Waves className="h-6 w-6 text-primary-500" />,
      title: 'AI-Powered Beach Discovery',
      description: 'Our advanced AI algorithms analyze real-time data to recommend the perfect beaches based on your preferences, weather conditions, and safety parameters.'
    },
    {
      icon: <Map className="h-6 w-6 text-accent-500" />,
      title: 'Comprehensive Beach Information',
      description: 'Access detailed information about beaches across India, including amenities, accessibility, water conditions, and local attractions.'
    },
    {
      icon: <Shield className="h-6 w-6 text-success-500" />,
      title: 'Real-time Safety Alerts',
      description: 'Stay informed with up-to-date safety information, including tide warnings, water quality reports, and lifeguard statuses.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary-500" />,
      title: 'Community-Driven Insights',
      description: 'Benefit from real visitor reviews, tips, and photos shared by our growing community of beach enthusiasts.'
    },
    {
      icon: <Cloud className="h-6 w-6 text-accent-500" />,
      title: 'Weather Intelligence',
      description: 'Get accurate weather forecasts and sea condition predictions tailored specifically for beach activities.'
    },
    {
      icon: <Heart className="h-6 w-6 text-danger-500" />,
      title: 'Beach Conservation',
      description: 'Support our mission to protect and preserve beaches through awareness programs and community initiatives.'
    }
  ];

  const stats = [
    { value: '500+', label: 'Beaches Analyzed' },
    { value: '24/7', label: 'Real-time Updates' },
    { value: '50+', label: 'Safety Parameters' },
    { value: '100k+', label: 'Happy Beachgoers' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-800/50 to-primary-900/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-accent-500">BeachRecs</span>
            </h1>
            <p className="text-lg text-white/90 mb-8">
              BeachRecs is India's premier AI-powered beach information platform, dedicated to making beach visits safer, more enjoyable, and more accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Mission Statement */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform how people experience beaches in India. By combining cutting-edge technology with comprehensive beach data, we're creating a safer, more informed beach-going experience for everyone.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="ml-3 text-xl font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Safety First</h3>
                <p className="text-gray-600">
                  We prioritize the safety of beach visitors by providing real-time information and alerts about beach conditions and potential hazards.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-accent-600 mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  We believe everyone should have access to accurate beach information, making beach visits more inclusive and enjoyable for all.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-success-600 mb-4">Conservation</h3>
                <p className="text-gray-600">
                  We're committed to promoting beach conservation and responsible tourism practices to preserve our beautiful coastal areas.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-800 mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Be part of our mission to make beach visits safer and more enjoyable for everyone. Share your experiences, contribute to our beach database, and help others discover the perfect beach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSection; 