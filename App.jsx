import React, { useState, useEffect } from 'react';
import { 
  Home, Building2, Phone, Info, UserCircle2, ChevronLeft, ChevronRight, 
  MapPin, Trophy, Shield, Globe, Landmark, Star, Check, TrendingUp, 
  Search, Filter, ArrowRight 
} from 'lucide-react';

// Expanded Property Data
const properties = [
  {
    id: 1,
    name: "Manhattan Skyline Penthouse",
    image: "/api/placeholder/1200/800",
    price: "$4,500,000",
    location: "Financial District, New York",
    bedrooms: 4,
    bathrooms: 4,
    area: 4500,
    features: ["Panoramic Views", "Private Terrace", "Smart Home Technology"]
  },
  {
    id: 2,
    name: "Malibu Oceanfront Villa",
    image: "/api/placeholder/1200/800",
    price: "$12,500,000",
    location: "Malibu, California",
    bedrooms: 6,
    bathrooms: 5,
    area: 7200,
    features: ["Private Beach Access", "Infinity Pool", "Home Theater"]
  },
  {
    id: 3,
    name: "Miami Design District Loft",
    image: "/api/placeholder/1200/800",
    price: "$3,200,000",
    location: "Design District, Miami",
    bedrooms: 3,
    bathrooms: 3,
    area: 3800,
    features: ["Art Gallery Space", "Rooftop Garden", "Modern Architecture"]
  }
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Tech Entrepreneur",
    quote: "Estate Eminence transformed my property search. Their attention to detail is unparalleled.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Investment Banker",
    quote: "Exceptional service and a portfolio that truly understands luxury real estate.",
    rating: 5
  }
];

// Services Data
const services = [
  {
    icon: MapPin,
    title: "Premium Property Sourcing",
    description: "Curated selection of exclusive properties across global markets."
  },
  {
    icon: Shield,
    title: "Investment Protection",
    description: "Comprehensive advisory and risk management for real estate investments."
  },
  {
    icon: Globe,
    title: "International Reach",
    description: "Connecting investors with prime properties worldwide."
  }
];

const EstateEminenceVentures = () => {
  const [currentProperty, setCurrentProperty] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    const propertyInterval = setInterval(() => {
      setCurrentProperty((prev) => (prev + 1) % properties.length);
    }, 5000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      clearInterval(propertyInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-lg py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <Landmark className="text-blue-600 mr-3" size={40} />
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Estate Eminence Ventures
          </span>
        </div>
        <div className="flex space-x-6 items-center">
          {[
            { icon: Home, text: "Home" },
            { icon: Building2, text: "Properties" },
            { icon: Phone, text: "Contact" },
            { icon: Info, text: "About" },
            { icon: UserCircle2, text: "Sign In" }
          ].map((item) => (
            <a 
              key={item.text} 
              href="#" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition transform hover:scale-105"
            >
              <item.icon className="mr-2" /> {item.text}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Property Carousel */}
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

      {/* Services Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Our World-Class Services
          </h2>
          <p className="text-gray-600 mt-4">
            Delivering unparalleled real estate experiences across global markets
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4"
            >
              <service.icon className="mx-auto text-blue-600 mb-6" size={64} />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
          {testimonials.map((testimonial, index) => (
            index === currentTestimonial && (
              <div key={testimonial.id} className="max-w-2xl mx-auto">
                <p className="text-2xl italic mb-6">"{testimonial.quote}"</p>
                <div className="flex justify-center items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-semibold text-xl">{testimonial.name}</p>
                <p className="text-blue-200">{testimonial.role}</p>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Founder Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/api/placeholder/600/600" 
              alt="Devesh Agrawal" 
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Devesh Agrawal
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Founder & Visionary Leader
            </h3>
            <p className="text-gray-700 mb-6">
              With over two decades of global real estate expertise, Devesh Agrawal 
              has revolutionized property investment strategies. His vision combines 
              cutting-edge technology, deep market insights, and a passion for 
              connecting exceptional properties with discerning investors.
            </p>
            <div className="space-y-3">
              {[
                "Global Investment Strategy",
                "Tech-Driven Real Estate Solutions",
                "Luxury Property Curation"
              ].map((point) => (
                <div key={point} className="flex items-center">
                  <Check className="text-green-500 mr-3" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Estate Eminence</h4>
            <p className="text-gray-400">Redefining luxury real estate experiences globally.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            {["Home", "Properties", "Services", "About Us"].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="block text-gray-300 hover:text-white mb-2"
              >
                {link}
              </a>
            ))}
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="text-gray-300">+1 (555) 123-4567</p>
            <p className="text-gray-300">deveshsatishagrawal21@gmail.com</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-2 w-full rounded-l-lg"
              />
              <button className="bg-blue-600 p-2 rounded-r-lg">
                <ArrowRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          © 2024 Estate Eminence Ventures. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default EstateEminenceVentures;
