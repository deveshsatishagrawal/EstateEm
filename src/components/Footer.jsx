import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Estate Eminence</h4>
          <p className="text-gray-400">Redefining luxury real estate experiences globally.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          {["Home", "Properties", "Services", "About Us"].map((link) => (
            <a key={link} href="#" className="block text-gray-300 hover:text-white mb-2">{link}</a>
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
            <input type="email" placeholder="Your email" className="p-2 w-full rounded-l-lg" />
            <button className="bg-blue-600 p-2 rounded-r-lg">
              <ArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">© 2024 Estate Eminence Ventures. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
