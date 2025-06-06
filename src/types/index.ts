// Beach Types
export interface Beach {
  id: string;
  name: string;
  state: string;
  city: string;
  description: string;
  images: string[];
  mainImage: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  safetyRating: number; // 1-5
  cleanlinessRating: number; // 1-5
  activities: Activity[];
  amenities: Amenity[];
  weather: WeatherInfo;
  seaConditions: SeaConditions;
  volunteerActivities: VolunteerActivity[];
}

export type Activity = 
  | 'swimming'
  | 'surfing'
  | 'snorkeling'
  | 'fishing'
  | 'boating'
  | 'sunbathing'
  | 'volleyball'
  | 'paragliding'
  | 'jetski';

export type Amenity = 
  | 'parking'
  | 'restrooms'
  | 'showers'
  | 'foodStalls'
  | 'rentals'
  | 'lifeguards'
  | 'firstAid'
  | 'camping';

export interface WeatherInfo {
  temperature: number; // in Celsius
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
  windSpeed: number; // in km/h
  humidity: number; // percentage
  uvIndex: number; // 1-11+
}

export interface SeaConditions {
  waveHeight: number; // in meters
  temperature: number; // in Celsius
  tideStatus: 'high' | 'low' | 'rising' | 'falling';
  warningFlags: 'green' | 'yellow' | 'red' | 'none';
  currentStrength: 'mild' | 'moderate' | 'strong';
}

export interface VolunteerActivity {
  id: string;
  name: string;
  description: string;
  date: string;
  organizer: string;
  contactInfo: string;
}

// Filter Types
export interface BeachFilters {
  state: string;
  activities: Activity[];
  minSafetyRating: number;
  minCleanlinessRating: number;
  amenities: Amenity[];
}