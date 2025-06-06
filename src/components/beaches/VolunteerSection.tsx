import React from 'react';
import { Calendar, Users, PenLine } from 'lucide-react';
import { VolunteerActivity } from '../../types';
import Button from '../ui/Button';

interface VolunteerSectionProps {
  activities: VolunteerActivity[];
  className?: string;
}

const VolunteerSection = ({ activities, className = '' }: VolunteerSectionProps) => {
  if (activities.length === 0) {
    return null;
  }
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Volunteer Opportunities
      </h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-medium text-gray-800 mb-2">{activity.name}</h4>
            <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2 text-primary-500" />
                <span>{new Date(activity.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Users className="h-4 w-4 mr-2 text-primary-500" />
                <span>Organized by: {activity.organizer}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <PenLine className="h-4 w-4 mr-2 text-primary-500" />
                <span>{activity.contactInfo}</span>
              </div>
            </div>
            
            <div className="mt-4 flex gap-3">
              <Button variant="outline" size="sm">
                Learn More
              </Button>
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-4">
          Want to organize your own beach cleanup or conservation event?
        </p>
        <Button variant="accent" size="md">
          Submit Volunteer Event
        </Button>
      </div>
    </div>
  );
};

export default VolunteerSection;