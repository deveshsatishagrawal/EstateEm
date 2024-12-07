import React from 'react';

const Founder = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/api/placeholder/600/600" alt="Devesh Agrawal" className="rounded-xl shadow-2xl" />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Devesh Agrawal
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Founder & Visionary Leader</h3>
          <p className="text-gray-700 mb-6">
            With over two decades of global real estate expertise, Devesh Agrawal has revolutionized property investment strategies...
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
  );
};

export default Founder;
