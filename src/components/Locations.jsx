import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);
  
  // Google Maps configuration
  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 40.7580, // Default center (can be adjusted)
    lng: -73.9855
  };
  
  const options = {
    disableDefaultUI: false,
    zoomControl: true,
  };
  
  // Load the Google Maps API
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "" // You would add your API key here in a production environment
  });
  
  // Map reference callback
  const onMapLoad = useCallback((map) => {
    setMap(map);
  }, []);
  
  // Handle marker click
  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };
  // Sample location data
  const locations = [
    {
      id: 1,
      name: 'Berry Delight Downtown',
      address: '123 Main Street, Downtown',
      hours: 'Mon-Sun: 11am - 10pm',
      phone: '(555) 123-4567',
      coordinates: { lat: 40.7128, lng: -74.0060 } // New York coordinates as placeholder
    },
    {
      id: 2,
      name: 'Berry Delight Uptown',
      address: '456 Park Avenue, Uptown',
      hours: 'Mon-Sun: 11am - 11pm',
      phone: '(555) 987-6543',
      coordinates: { lat: 40.7831, lng: -73.9712 }
    },
    {
      id: 3,
      name: 'Berry Delight Westside',
      address: '789 West Boulevard, Westside',
      hours: 'Mon-Sun: 12pm - 10pm',
      phone: '(555) 456-7890',
      coordinates: { lat: 40.7736, lng: -73.9566 }
    },
    {
      id: 4,
      name: 'Berry Delight Eastside',
      address: '321 East Avenue, Eastside',
      hours: 'Mon-Sun: 11am - 9pm',
      phone: '(555) 234-5678',
      coordinates: { lat: 40.7580, lng: -73.9855 }
    }
  ];

  return (
    <section id="locations" className="py-16 md:py-24 bg-vanilla-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate-drizzle mb-4">
            Find Us <span className="text-berry-bliss">Near You</span>
          </h2>
          <p className="text-lg text-chocolate-drizzle max-w-3xl mx-auto">
            Visit one of our locations to experience the delicious taste of our berry ice cream creations.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Locations list */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-berry-bliss mb-4">Our Locations</h3>
              
              <div className="space-y-6">
                {locations.map(location => (
                  <div key={location.id} className="border-b border-strawberry-milk pb-4 last:border-0 last:pb-0">
                    <h4 className="font-bold text-chocolate-drizzle">{location.name}</h4>
                    <p className="text-chocolate-drizzle">{location.address}</p>
                    <p className="text-chocolate-drizzle">{location.hours}</p>
                    <p className="text-chocolate-drizzle">{location.phone}</p>
                    <button className="mt-2 text-berry-bliss hover:text-raspberry-whip transition-colors duration-300 text-sm font-medium flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Get Directions
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Google Maps */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[500px]">
              {loadError && (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-berry-bliss">Error loading maps</p>
                </div>
              )}
              
              {!isLoaded && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-berry-bliss"></div>
                </div>
              )}
              
              {isLoaded && (
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={12}
                  options={options}
                  onLoad={onMapLoad}
                >
                  {locations.map(location => (
                    <Marker
                      key={location.id}
                      position={location.coordinates}
                      onClick={() => handleMarkerClick(location)}
                      icon={{
                        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36'%3E%3Cpath fill='%23D14D72' d='M12 0C7.802 0 4 3.403 4 7.602C4 11.8 12 24 12 24S20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z'/%3E%3C/svg%3E",
                        scaledSize: new window.google.maps.Size(36, 36),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(18, 36)
                      }}
                    />
                  ))}
                  
                  {selectedLocation && (
                    <InfoWindow
                      position={selectedLocation.coordinates}
                      onCloseClick={() => setSelectedLocation(null)}
                    >
                      <div className="p-2 max-w-xs">
                        <h3 className="font-bold text-berry-bliss text-lg">{selectedLocation.name}</h3>
                        <p className="text-chocolate-drizzle">{selectedLocation.address}</p>
                        <p className="text-chocolate-drizzle">{selectedLocation.hours}</p>
                        <p className="text-chocolate-drizzle">{selectedLocation.phone}</p>
                      </div>
                    </InfoWindow>
                  )}
                </GoogleMap>
              )}
            </div>
            
            <div className="mt-4 bg-strawberry-milk rounded-lg p-4 shadow">
              <p className="text-chocolate-drizzle text-sm">
                <span className="font-bold">Note:</span> In a production environment, you would need to add your Google Maps API key to the configuration. For security reasons, the map is currently running in development mode with restrictions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;