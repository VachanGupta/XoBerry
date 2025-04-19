import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-chocolate-drizzle text-sugar-dust py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content with 4 sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: Logo and social links */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-berry-bliss font-bold text-2xl">XoBerry</span>
            </div>
            <p className="text-sm mb-4">
              Handcrafted ice cream made with fresh berries and quality ingredients.
            </p>
            <div className="flex space-x-4">
              {/* Simple social media links */}
              <a href="#" className="text-sugar-dust hover:text-berry-bliss">
                <span>Facebook</span>
              </a>
              <a href="#" className="text-sugar-dust hover:text-berry-bliss">
                <span>Instagram</span>
              </a>
              <a href="#" className="text-sugar-dust hover:text-berry-bliss">
                <span>Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Section 2: Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-berry-bliss">Home</a></li>
              <li><a href="#flavors" className="hover:text-berry-bliss">Our Flavors</a></li>
              <li><a href="#process" className="hover:text-berry-bliss">How We Make It</a></li>
              <li><a href="#locations" className="hover:text-berry-bliss">Locations</a></li>
            </ul>
          </div>
          
          {/* Section 3: Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: myselfsaurabhgupta@gmail.com</li>
              <li>Phone: 987156XXXX</li>
              <li>Address: XoBerry, Spectrum Mall, Sector-74</li>
            </ul>
          </div>
          
          {/* Section 4: Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for new flavors and deals.</p>
            <form className="space-y-2">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-3 py-2 rounded-md bg-chocolate-drizzle border border-sugar-dust/30 focus:outline-none focus:border-berry-bliss text-sugar-dust"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-berry-bliss text-sugar-dust px-4 py-2 rounded-md hover:bg-raspberry-whip"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-sugar-dust/20 mt-12 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Berry Delight Ice Cream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;