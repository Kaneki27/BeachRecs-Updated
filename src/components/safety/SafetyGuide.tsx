import React from 'react';
import { Shield, AlertTriangle, LifeBuoy, Sun, Waves, Wind, Thermometer, Clock } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const SafetyGuide = () => {
  const safetySections = [
    {
      icon: <Shield className="h-6 w-6 text-primary-500" />,
      title: 'Essential Safety Tips',
      items: [
        'Always swim in designated areas with lifeguards present',
        'Check weather and sea conditions before entering the water',
        'Never swim alone - use the buddy system',
        'Stay within your swimming capabilities',
        'Keep a close eye on children at all times',
        'Learn to identify rip currents and how to escape them',
        'Wear appropriate flotation devices if needed'
      ]
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-warning-500" />,
      title: 'Warning Signs to Watch For',
      items: [
        'Red flags indicate dangerous conditions',
        'Yellow flags mean exercise caution',
        'Green flags show safe swimming conditions',
        'Purple flags warn of dangerous marine life',
        'Sudden changes in weather patterns',
        'Strong currents or unusual wave patterns',
        'Jellyfish or other marine life warnings'
      ]
    },
    {
      icon: <LifeBuoy className="h-6 w-6 text-accent-500" />,
      title: 'Emergency Procedures',
      items: [
        'Know the location of the nearest lifeguard station',
        'Memorize emergency numbers (112 for India)',
        'Learn basic first aid and CPR',
        'Understand how to signal for help',
        'Know the location of emergency equipment',
        'Stay calm and follow lifeguard instructions',
        'Use the buddy system for immediate assistance'
      ]
    }
  ];

  const environmentalFactors = [
    {
      icon: <Sun className="h-6 w-6 text-warning-500" />,
      title: 'Sun Protection',
      description: 'Apply SPF 30+ sunscreen every 2 hours, wear protective clothing, and seek shade during peak hours (10 AM - 4 PM).'
    },
    {
      icon: <Waves className="h-6 w-6 text-primary-500" />,
      title: 'Water Conditions',
      description: 'Check tide schedules, wave heights, and water temperature before entering. Be aware of rip currents and undertows.'
    },
    {
      icon: <Wind className="h-6 w-6 text-gray-500" />,
      title: 'Weather Awareness',
      description: 'Monitor weather forecasts and be prepared for sudden changes. Leave the beach if you see lightning or hear thunder.'
    },
    {
      icon: <Thermometer className="h-6 w-6 text-danger-500" />,
      title: 'Heat Safety',
      description: 'Stay hydrated, take regular breaks in the shade, and watch for signs of heat exhaustion or heat stroke.'
    }
  ];

  const dosAndDonts = {
    dos: [
      'Do check weather and sea conditions before visiting',
      'Do swim in designated areas with lifeguards',
      'Do stay hydrated and protect yourself from the sun',
      'Do keep a close eye on children',
      'Do follow posted safety signs and flags',
      'Do learn basic water safety skills',
      'Do inform someone of your beach plans'
    ],
    donts: [
      'Don\'t swim alone or in unsupervised areas',
      'Don\'t ignore warning flags or signs',
      'Don\'t swim under the influence of alcohol',
      'Don\'t dive into unknown waters',
      'Don\'t leave children unattended',
      'Don\'t swim during storms or rough conditions',
      'Don\'t feed or approach marine wildlife'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-800/50 to-primary-900/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Beach Safety Guide
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Your comprehensive resource for staying safe and having fun at the beach. Learn essential safety tips, understand warning signs, and be prepared for any situation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="lg">
                Download Safety Guide
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
                Watch Safety Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Safety Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {safetySections.map((section, index) => (
            <Card key={index} className="h-full">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {section.icon}
                  <h3 className="ml-3 text-xl font-semibold text-gray-800">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Environmental Factors */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-8 text-center">
            Environmental Factors to Consider
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentalFactors.map((factor, index) => (
              <Card key={index} className="h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {factor.icon}
                    <h3 className="ml-3 text-lg font-semibold text-gray-800">{factor.title}</h3>
                  </div>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-8 text-center">
            Do's and Don'ts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-success-600 mb-4">Do's</h3>
                <ul className="space-y-3">
                  {dosAndDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-success-500 mr-2">✓</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-danger-600 mb-4">Don'ts</h3>
                <ul className="space-y-3">
                  {dosAndDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-danger-500 mr-2">✕</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-800 mb-4">
            Emergency Contacts
          </h2>
          <p className="text-gray-600 mb-6">
            Save these numbers in your phone for quick access during emergencies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Emergency Services</h3>
              <p className="text-primary-600 font-bold text-xl">112</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Coast Guard</h3>
              <p className="text-primary-600 font-bold text-xl">1554</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Police</h3>
              <p className="text-primary-600 font-bold text-xl">100</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SafetyGuide; 