import React from 'react';
import { services } from '../data';

const Services = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Our World-Class Services</h2>
        <p className="text-gray-600 mt-4">Delivering unparalleled real estate experiences across global markets</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4">
            <div className="text-blue-600 mb-6">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
