import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Brightwood Academy</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Empowering minds, inspiring futures. Join us in shaping the next generation of leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-400 text-white px-8 py-3 rounded-full hover:bg-red-500 transition duration-300 flex items-center justify-center">
              Donate Now <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-blue-400 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;