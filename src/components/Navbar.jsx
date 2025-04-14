import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-vanilla-cream sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-berry-bliss font-bold text-2xl">XoBerry</span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-chocolate-drizzle hover:text-berry-bliss px-3 py-2 rounded-md font-medium transition-colors duration-300">Home</a>
            <a href="#flavors" className="text-chocolate-drizzle hover:text-berry-bliss px-3 py-2 rounded-md font-medium transition-colors duration-300">Our Flavors</a>
            <a href="#process" className="text-chocolate-drizzle hover:text-berry-bliss px-3 py-2 rounded-md font-medium transition-colors duration-300">How We Make It</a>
            <a href="#locations" className="text-chocolate-drizzle hover:text-berry-bliss px-3 py-2 rounded-md font-medium transition-colors duration-300">Locations</a>
            <button className="bg-berry-bliss text-sugar-dust px-4 py-2 rounded-full font-medium hover:bg-raspberry-whip transition-colors duration-300">Order Now</button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-chocolate-drizzle hover:text-berry-bliss focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-vanilla-cream">
            <a href="#home" className="text-chocolate-drizzle hover:text-berry-bliss block px-3 py-2 rounded-md font-medium">Home</a>
            <a href="#flavors" className="text-chocolate-drizzle hover:text-berry-bliss block px-3 py-2 rounded-md font-medium">Our Flavors</a>
            <a href="#process" className="text-chocolate-drizzle hover:text-berry-bliss block px-3 py-2 rounded-md font-medium">How We Make It</a>
            <a href="#locations" className="text-chocolate-drizzle hover:text-berry-bliss block px-3 py-2 rounded-md font-medium">Locations</a>
            <button className="w-full text-center bg-berry-bliss text-sugar-dust px-4 py-2 rounded-full font-medium hover:bg-raspberry-whip mt-2">Order Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;