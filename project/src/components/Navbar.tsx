import React from 'react';
import { Menu, X, School } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <School className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-800">Brightwood Academy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500">About Us</a>
            <a href="#programs" className="text-gray-600 hover:text-blue-500">Programs</a>
            <a href="#events" className="text-gray-600 hover:text-blue-500">Events</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
            <button className="bg-red-400 text-white px-6 py-2 rounded-full hover:bg-red-500 transition duration-300">
              Donate Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-blue-500">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-500">About Us</a>
            <a href="#programs" className="block px-3 py-2 text-gray-600 hover:text-blue-500">Programs</a>
            <a href="#events" className="block px-3 py-2 text-gray-600 hover:text-blue-500">Events</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-500">Contact</a>
            <button className="w-full mt-2 bg-red-400 text-white px-6 py-2 rounded-full hover:bg-red-500 transition duration-300">
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;