import React from 'react';
import { Landmark, Home, Building2, Phone, Info, UserCircle2 } from 'lucide-react';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
