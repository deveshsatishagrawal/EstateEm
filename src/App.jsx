import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Founder from './components/Founder';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Founder />
      <Footer />
    </div>
  );
}

export default App;
