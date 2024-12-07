import React, { useState, useEffect } from 'react';
import { properties } from '../data';

const Hero = () => {
  const [currentProperty, setCurrentProperty] = useState(0);

  useEffect(() => {
    const propertyInterval = setInterval(() => {
      setCurrentProperty((prev) => (prev + 1) % properties.length);
    }, 5000);

    return () => {
      clearInterval(propertyInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-in-out flex"
        style={{ transform: `translateX(-${currentProperty * 100}%)` }}
      >
        {properties.map((property) => (
          <div key={property.id} className="w-full flex-shrink-0 relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img 
              src={property.image} 
              alt={property.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-4 text-shadow">{property.name}</h2>
                <div className="grid grid-cols-3 gap-4 bg-white/20 backdrop-blur-sm p-6 rounded-lg">
                  <div>
                    <p className="text-2xl font-semibold text-yellow-300">{property.price}</p>
                    <p className="text-sm">Market Price</p>
                  </div>
                  <div>
                    <p className="text-xl">{property.location}</p>
                    <p className="text-sm">Prime Location</p>
                  </div>
                  <div>
                    <p className="text-xl">{property.bedrooms} Beds | {property.bathrooms} Baths</p>
                    <p className="text-sm">{property.area} sq ft</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl mb-2">Key Features:</h3>
                  <div className="flex space-x-4">
                    {property.features.map((feature) => (
                      <span 
                        key={feature} 
                        className="bg-blue-600/70 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
