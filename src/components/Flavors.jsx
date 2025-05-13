import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Flavors = () => {
  // State for the flavor mixer
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedMix, setSelectedMix] = useState(null);
  const [showMixResult, setShowMixResult] = useState(false);
  
  // Individual berry flavors
  const baseFlavors = [
    {
      id: 1,
      name: 'Strawberry',
      color: 'bg-red-400',
      textColor: 'text-red-600',
      borderColor: 'border-red-300',
      description: 'Sweet and tangy classic strawberry flavor',
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Blueberry',
      color: 'bg-indigo-400',
      textColor: 'text-indigo-600',
      borderColor: 'border-indigo-300',
      description: 'Rich and sweet blueberry goodness',
      image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Raspberry',
      color: 'bg-pink-400',
      textColor: 'text-pink-600',
      borderColor: 'border-pink-300',
      description: 'Tart and vibrant raspberry flavor',
      image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Mango',
      color: 'bg-yellow-400',
      textColor: 'text-yellow-600',
      borderColor: 'border-yellow-300',
      description: 'Tropical and sweet mango delight',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'Kiwi',
      color: 'bg-green-400',
      textColor: 'text-green-600',
      borderColor: 'border-green-300',
      description: 'Refreshing and tangy kiwi flavor',
      image: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'Dragon Fruit',
      color: 'bg-fuchsia-400',
      textColor: 'text-fuchsia-600',
      borderColor: 'border-fuchsia-300',
      description: 'Exotic and subtly sweet dragon fruit',
      image: 'https://images.unsplash.com/photo-1527325678964-54921661f888?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      name: 'Blackberry',
      color: 'bg-purple-400',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-300',
      description: 'Deep and rich blackberry flavor',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ];

  // Flavor combinations
  const flavorCombinations = [
    { base: 1, mix: 2, name: 'Berry Fusion', description: 'Strawberry and blueberry swirled together for a perfect berry blend' },
    { base: 1, mix: 4, name: 'Tropical Strawberry', description: 'Sweet strawberry meets tropical mango for a summer delight' },
    { base: 2, mix: 3, name: 'Berry Medley', description: 'Blueberry and raspberry create a perfect berry medley' },
    { base: 2, mix: 7, name: 'Double Berry', description: 'Blueberry and blackberry combine for an intense berry experience' },
    { base: 3, mix: 5, name: 'Tangy Twist', description: 'Tart raspberry with refreshing kiwi creates a tangy sensation' },
    { base: 4, mix: 5, name: 'Tropical Green', description: 'Sweet mango and tangy kiwi for a tropical paradise' },
    { base: 4, mix: 6, name: 'Exotic Blend', description: 'Mango and dragon fruit create an exotic tropical fusion' },
    { base: 6, mix: 2, name: 'Dragon Berry', description: 'Exotic dragon fruit with sweet blueberry for a unique flavor' },
    { base: 6, mix: 7, name: 'Purple Paradise', description: 'Dragon fruit and blackberry create a vibrant purple delight' },
    { base: 7, mix: 3, name: 'Berry Explosion', description: 'Blackberry and raspberry for an intense berry explosion' },
  ];

  const handleBaseSelect = (flavor) => {
    setSelectedBase(flavor);
    if (selectedMix && selectedMix.id === flavor.id) {
      setSelectedMix(null);
    }
    setShowMixResult(false);
  };

  const handleMixSelect = (flavor) => {
    setSelectedMix(flavor);
    if (selectedBase && selectedMix) {
      setShowMixResult(true);
    }
  };

  const getMixResult = () => {
    if (!selectedBase || !selectedMix) return null;
    
    // Find if this combination exists
    const combination = flavorCombinations.find(
      combo => (combo.base === selectedBase.id && combo.mix === selectedMix.id) ||
              (combo.base === selectedMix.id && combo.mix === selectedBase.id)
    );
    
    if (combination) {
      return {
        name: combination.name,
        description: combination.description,
        // Create a gradient using both flavor colors
        gradient: `bg-gradient-to-r from-${selectedBase.color.split('-')[1]}-400 to-${selectedMix.color.split('-')[1]}-400`
      };
    } else {
      // If no predefined combination, create a custom one
      return {
        name: `${selectedBase.name} & ${selectedMix.name}`,
        description: `A custom blend of ${selectedBase.name.toLowerCase()} and ${selectedMix.name.toLowerCase()} flavors`,
        gradient: `bg-gradient-to-r from-${selectedBase.color.split('-')[1]}-400 to-${selectedMix.color.split('-')[1]}-400`
      };
    }
  };

  const mixResult = selectedBase && selectedMix ? getMixResult() : null;

  return (
    <section id="flavors" className="py-16 md:py-24 bg-gradient-to-r from-pink-50 via-vanilla-cream to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-berry-bliss/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)'
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, Math.random() * 0.3 + 0.9, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-chocolate-drizzle mb-4">
            Mix & Match <span className="text-berry-bliss font-extrabold">Berry</span> Flavors
          </h2>
          <p className="text-lg text-chocolate-drizzle max-w-3xl mx-auto">
            Choose from our 7 signature berry flavors and create your own custom combinations for a unique ice cream experience.
          </p>
        </motion.div>

        {/* Individual Flavors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-berry-bliss mb-6 text-center">Our Signature Flavors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {baseFlavors.map((flavor) => (
              <motion.div
                key={flavor.id}
                className={`rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all ${selectedBase?.id === flavor.id ? 'ring-4 ring-berry-bliss scale-105' : ''} ${selectedMix?.id === flavor.id ? 'ring-4 ring-chocolate-drizzle scale-105' : ''}`}
                whileHover={{ y: -5, scale: 1.03 }}
                onClick={() => selectedBase?.id === flavor.id ? setSelectedBase(null) : (selectedMix?.id === flavor.id ? setSelectedMix(null) : (!selectedBase ? handleBaseSelect(flavor) : handleMixSelect(flavor)))}
              >
                <div className="relative h-32 overflow-hidden">
                  <img src={flavor.image} alt={flavor.name} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 ${flavor.color} opacity-40`}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-bold">{flavor.name}</p>
                  </div>
                </div>
                <div className={`p-3 ${flavor.color} bg-opacity-20`}>
                  <p className={`text-xs ${flavor.textColor}`}>{flavor.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className={`text-xs font-medium ${selectedBase?.id === flavor.id ? 'text-berry-bliss' : (selectedMix?.id === flavor.id ? 'text-chocolate-drizzle' : flavor.textColor)}`}>
                      {selectedBase?.id === flavor.id ? 'Base Flavor' : (selectedMix?.id === flavor.id ? 'Mix Flavor' : 'Select')}
                    </span>
                    <motion.div 
                      className={`w-4 h-4 rounded-full ${selectedBase?.id === flavor.id ? 'bg-berry-bliss' : (selectedMix?.id === flavor.id ? 'bg-chocolate-drizzle' : flavor.color)}`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        
        {/* Popular Combinations */}
        <div>
          <h3 className="text-2xl font-bold text-berry-bliss mb-6 text-center">Popular Combinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flavorCombinations.slice(0, 6).map((combo, index) => {
              const baseFlavor = baseFlavors.find(f => f.id === combo.base);
              const mixFlavor = baseFlavors.find(f => f.id === combo.mix);
              const gradient = `bg-gradient-to-r from-${baseFlavor.color.split('-')[1]}-400 to-${mixFlavor.color.split('-')[1]}-400`;
              
              return (
                <motion.div 
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-40 relative overflow-hidden">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 h-full overflow-hidden">
                        <img src={baseFlavor.image} alt={baseFlavor.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-1/2 h-full overflow-hidden">
                        <img src={mixFlavor.image} alt={mixFlavor.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className={`absolute inset-0 ${gradient} opacity-40`}></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white font-bold text-lg">{combo.name}</p>
                      <div className="flex items-center">
                        <span className="text-white/80 text-xs">{baseFlavor.name}</span>
                        <span className="mx-2 text-white/80">+</span>
                        <span className="text-white/80 text-xs">{mixFlavor.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-chocolate-drizzle text-sm">{combo.description}</p>
                    <button className="mt-3 text-sm text-berry-bliss font-medium hover:text-raspberry-whip transition-colors duration-300 flex items-center">
                      Try this combination
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flavors;