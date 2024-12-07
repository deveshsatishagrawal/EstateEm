import React, { useState, useEffect } from 'react';
import { testimonials } from '../data';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(testimonialInterval);
  }, []);

  return (
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
  );
};

export default Testimonials;
