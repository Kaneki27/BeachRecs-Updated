import { Beach } from '../types';

// Mock data for beaches
export const beaches: Beach[] = [
  {
    id: '1',
    name: 'Radhanagar Beach',
    state: 'Andaman & Nicobar',
    city: 'Havelock Island',
    description: 'Radhanagar Beach is famous for its white sand and turquoise waters, often ranked among Asia\'s best beaches. The sunset views are spectacular, and the clean shoreline makes it perfect for long walks.',
    images: [
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg'
    ],
    mainImage: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
    coordinates: {
      lat: 11.9810,
      lng: 92.9510
    },
    safetyRating: 5,
    cleanlinessRating: 5,
    activities: ['swimming', 'snorkeling', 'sunbathing'],
    amenities: ['restrooms', 'showers', 'foodStalls', 'lifeguards'],
    weather: {
      temperature: 29,
      condition: 'sunny',
      windSpeed: 10,
      humidity: 75,
      uvIndex: 8
    },
    seaConditions: {
      waveHeight: 0.5,
      temperature: 27,
      tideStatus: 'rising',
      warningFlags: 'green',
      currentStrength: 'mild'
    },
    volunteerActivities: [
      {
        id: 'v1',
        name: 'Beach Cleanup Drive',
        description: 'Join us in keeping Radhanagar Beach pristine by participating in our monthly cleanup drive.',
        date: '2025-05-15',
        organizer: 'Clean Andaman Initiative',
        contactInfo: 'contact@cleanandaman.org'
      }
    ]
  },
  {
    id: '2',
    name: 'Palolem Beach',
    state: 'Goa',
    city: 'Canacona',
    description: 'Palolem is a crescent-shaped beach lined with palm trees, offering a relaxed vibe with beach huts, restaurants, and water sports opportunities.',
    images: [
      'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg',
      'https://images.pexels.com/photos/635359/pexels-photo-635359.jpeg'
    ],
    mainImage: 'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg',
    coordinates: {
      lat: 15.0101,
      lng: 74.0239
    },
    safetyRating: 4,
    cleanlinessRating: 4,
    activities: ['swimming', 'surfing', 'kayaking', 'fishing'],
    amenities: ['parking', 'restrooms', 'showers', 'foodStalls', 'rentals'],
    weather: {
      temperature: 31,
      condition: 'sunny',
      windSpeed: 12,
      humidity: 80,
      uvIndex: 9
    },
    seaConditions: {
      waveHeight: 0.8,
      temperature: 28,
      tideStatus: 'high',
      warningFlags: 'green',
      currentStrength: 'mild'
    },
    volunteerActivities: [
      {
        id: 'v2',
        name: 'Marine Conservation Workshop',
        description: 'Learn about local marine ecosystems and conservation efforts.',
        date: '2025-06-10',
        organizer: 'Goa Marine Conservation',
        contactInfo: 'info@goamarineconservation.org'
      }
    ]
  },
  {
    id: '3',
    name: 'Varkala Beach',
    state: 'Kerala',
    city: 'Varkala',
    description: 'Varkala Beach is unique with its cliffs adjacent to the Arabian Sea. The views are breathtaking, and the beach is known for its natural mineral springs.',
    images: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
      'https://images.pexels.com/photos/1486148/pexels-photo-1486148.jpeg'
    ],
    mainImage: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
    coordinates: {
      lat: 8.7367,
      lng: 76.7067
    },
    safetyRating: 3,
    cleanlinessRating: 4,
    activities: ['swimming', 'paragliding', 'sunbathing'],
    amenities: ['parking', 'restrooms', 'foodStalls', 'firstAid'],
    weather: {
      temperature: 28,
      condition: 'cloudy',
      windSpeed: 15,
      humidity: 85,
      uvIndex: 6
    },
    seaConditions: {
      waveHeight: 1.2,
      temperature: 26,
      tideStatus: 'falling',
      warningFlags: 'yellow',
      currentStrength: 'moderate'
    },
    volunteerActivities: [
      {
        id: 'v3',
        name: 'Cliff Conservation Project',
        description: 'Help prevent erosion by planting native vegetation along the cliffs.',
        date: '2025-07-22',
        organizer: 'Kerala Natural Heritage',
        contactInfo: 'volunteer@keralaheritagetrust.org'
      }
    ]
  },
  {
    id: '4',
    name: 'Marina Beach',
    state: 'Tamil Nadu',
    city: 'Chennai',
    description: 'Marina Beach is one of the longest urban beaches in the world. It\'s a popular gathering place for locals and tourists alike.',
    images: [
      'https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg',
      'https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg'
    ],
    mainImage: 'https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg',
    coordinates: {
      lat: 13.0500,
      lng: 80.2824
    },
    safetyRating: 3,
    cleanlinessRating: 3,
    activities: ['sunbathing', 'volleyball', 'fishing'],
    amenities: ['parking', 'restrooms', 'foodStalls', 'firstAid'],
    weather: {
      temperature: 33,
      condition: 'sunny',
      windSpeed: 18,
      humidity: 70,
      uvIndex: 10
    },
    seaConditions: {
      waveHeight: 1.5,
      temperature: 29,
      tideStatus: 'high',
      warningFlags: 'yellow',
      currentStrength: 'strong'
    },
    volunteerActivities: [
      {
        id: 'v4',
        name: 'Urban Beach Cleanup',
        description: 'Weekly cleanup initiative to maintain one of India\'s most visited beaches.',
        date: '2025-05-01',
        organizer: 'Chennai Beach Volunteers',
        contactInfo: 'info@chennaibeachvolunteers.org'
      }
    ]
  },
  {
    id: '5',
    name: 'Kovalam Beach',
    state: 'Kerala',
    city: 'Thiruvananthapuram',
    description: 'Kovalam consists of three adjacent crescent beaches, with the lighthouse beach being the most popular. It\'s known for its clean water and Ayurvedic treatments.',
    images: [
      'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg',
      'https://images.pexels.com/photos/635359/pexels-photo-635359.jpeg'
    ],
    mainImage: 'https://images.pexels.com/photos/635359/pexels-photo-635359.jpeg',
    coordinates: {
      lat: 8.3987,
      lng: 76.9812
    },
    safetyRating: 4,
    cleanlinessRating: 4,
    activities: ['swimming', 'surfing', 'sunbathing'],
    amenities: ['parking', 'restrooms', 'showers', 'foodStalls', 'lifeguards'],
    weather: {
      temperature: 29,
      condition: 'sunny',
      windSpeed: 14,
      humidity: 82,
      uvIndex: 8
    },
    seaConditions: {
      waveHeight: 0.9,
      temperature: 27,
      tideStatus: 'falling',
      warningFlags: 'green',
      currentStrength: 'mild'
    },
    volunteerActivities: [
      {
        id: 'v5',
        name: 'Turtle Conservation',
        description: 'Protect nesting sites and monitor hatching of endangered sea turtles.',
        date: '2025-06-15',
        organizer: 'Kerala Turtle Alliance',
        contactInfo: 'volunteer@keralaturtles.org'
      }
    ]
  }
];

// Get a specific beach by ID
export const getBeachById = (id: string): Beach | undefined => {
  return beaches.find(beach => beach.id === id);
};

// Filter beaches based on criteria
export const filterBeaches = (
  query: string = '',
  state: string = '',
  activities: string[] = [],
  minSafety: number = 0,
  minCleanliness: number = 0
): Beach[] => {
  return beaches.filter(beach => {
    // Search query match
    const queryMatch = query === '' || 
      beach.name.toLowerCase().includes(query.toLowerCase()) ||
      beach.city.toLowerCase().includes(query.toLowerCase()) ||
      beach.description.toLowerCase().includes(query.toLowerCase());
    
    // State match
    const stateMatch = state === '' || beach.state === state;
    
    // Activities match
    const activitiesMatch = activities.length === 0 || 
      activities.some(activity => beach.activities.includes(activity as any));
    
    // Ratings match
    const safetyMatch = beach.safetyRating >= minSafety;
    const cleanlinessMatch = beach.cleanlinessRating >= minCleanliness;
    
    return queryMatch && stateMatch && activitiesMatch && safetyMatch && cleanlinessMatch;
  });
};

// List of unique states
export const getUniqueStates = (): string[] => {
  return [...new Set(beaches.map(beach => beach.state))].sort();
};

// List of all activities
export const getAllActivities = (): string[] => {
  const allActivities = new Set<string>();
  beaches.forEach(beach => {
    beach.activities.forEach(activity => {
      allActivities.add(activity);
    });
  });
  return [...allActivities].sort();
};