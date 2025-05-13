import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const BobaTea = () => {
  const [activeFlavorIndex, setActiveFlavorIndex] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [draggedIngredient, setDraggedIngredient] = useState(null);
  const [droppedIngredients, setDroppedIngredients] = useState([]);
  const [customizationMode, setCustomizationMode] = useState(false);
  const containerRef = useRef(null);
  const cupRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // Boba tea flavors with enhanced visual properties and ingredients
  const bobaTeaFlavors = [
    {
      id: 1,
      name: 'Raspberry Rush',
      description: 'Vibrant raspberry tea with sweet tapioca pearls for a refreshing burst of flavor.',
      ingredients: ['Raspberry Tea', 'Tapioca Pearls', 'Cane Sugar', 'Ice'],
      liquidHex: '#F87171',
      pearlHex: '#7F1D1D',
      buttonColor: 'bg-pink-500 hover:bg-pink-600',
      particleColors: ['#F87171', '#FB7185', '#E11D48'],
      glassGradient: 'linear-gradient(to bottom, rgba(248, 113, 113, 0.8) 0%, rgba(248, 113, 113, 0.4) 100%)'
    },
    {
      id: 2,
      name: 'Matcha Madness',
      description: 'Premium Japanese matcha blended with creamy milk and chewy boba pearls.',
      ingredients: ['Matcha Powder', 'Milk', 'Tapioca Pearls', 'Honey'],
      liquidHex: '#4ADE80',
      pearlHex: '#166534',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      particleColors: ['#4ADE80', '#34D399', '#10B981'],
      glassGradient: 'linear-gradient(to bottom, rgba(74, 222, 128, 0.8) 0%, rgba(74, 222, 128, 0.4) 100%)'
    },
    {
      id: 3,
      name: 'Taro Temptation',
      description: 'Smooth and creamy taro-flavored milk tea with perfectly cooked tapioca pearls.',
      ingredients: ['Taro Powder', 'Milk', 'Tapioca Pearls', 'Condensed Milk'],
      liquidHex: '#C084FC',
      pearlHex: '#581C87',
      buttonColor: 'bg-purple-500 hover:bg-purple-600',
      particleColors: ['#C084FC', '#A855F7', '#8B5CF6'],
      glassGradient: 'linear-gradient(to bottom, rgba(192, 132, 252, 0.8) 0%, rgba(192, 132, 252, 0.4) 100%)'
    },
    {
      id: 4,
      name: 'Mango Bliss',
      description: 'Tropical mango tea with popping boba pearls for a taste of paradise.',
      ingredients: ['Mango Puree', 'Green Tea', 'Popping Boba', 'Coconut Jelly'],
      liquidHex: '#FBBF24',
      pearlHex: '#92400E',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
      particleColors: ['#FBBF24', '#F59E0B', '#D97706'],
      glassGradient: 'linear-gradient(to bottom, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0.4) 100%)'
    },
    {
      id: 5,
      name: 'Blackberry Burst',
      description: 'Rich blackberry tea with bursting boba pearls for an explosion of flavor.',
      ingredients: ['Blackberry Puree', 'Black Tea', 'Bursting Boba', 'Brown Sugar'],
      liquidHex: '#8B5CF6',
      pearlHex: '#4338CA',
      buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
      particleColors: ['#8B5CF6', '#6366F1', '#4F46E5'],
      glassGradient: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.8) 0%, rgba(139, 92, 246, 0.4) 100%)'
    },
    {
      id: 6,
      name: 'Strawberry Dream',
      description: 'Sweet strawberry milk tea with chewy tapioca pearls for a dreamy experience.',
      ingredients: ['Strawberry Puree', 'Milk', 'Tapioca Pearls', 'Vanilla'],
      liquidHex: '#FDA4AF',
      pearlHex: '#BE123C',
      buttonColor: 'bg-red-500 hover:bg-red-600',
      particleColors: ['#FDA4AF', '#FB7185', '#E11D48'],
      glassGradient: 'linear-gradient(to bottom, rgba(253, 164, 175, 0.8) 0%, rgba(253, 164, 175, 0.4) 100%)'
    },
  ];
  
  // Additional ingredients for custom creation
  const additionalIngredients = [
    { id: 'pearl', name: 'Tapioca Pearls', color: '#000000', icon: '●' },
    { id: 'jelly', name: 'Coconut Jelly', color: '#FFFFFF', icon: '◆' },
    { id: 'popping', name: 'Popping Boba', color: '#F59E0B', icon: '○' },
    { id: 'pudding', name: 'Egg Pudding', color: '#FCD34D', icon: '▮' },
    { id: 'grass', name: 'Grass Jelly', color: '#1F2937', icon: '▬' },
    { id: 'aloe', name: 'Aloe Vera', color: '#D1FAE5', icon: '◇' },
  ];
  
  const selectedFlavor = bobaTeaFlavors[activeFlavorIndex];
  
  // Handle flavor change
  const changeFlavor = (index) => {
    if (index !== activeFlavorIndex) {
      setIsExploding(true);
      setTimeout(() => {
        setActiveFlavorIndex(index);
        setIsExploding(false);
      }, 500);
    }
  };
  
  // Toggle customization mode
  const toggleCustomizationMode = () => {
    setCustomizationMode(!customizationMode);
    setShowIngredients(!showIngredients);
    setDroppedIngredients([]);
  };
  
  // Handle ingredient drag
  const handleDragStart = (ingredient) => {
    setDraggedIngredient(ingredient);
  };
  
  // Handle ingredient drop
  const handleDrop = () => {
    if (draggedIngredient && droppedIngredients.length < 4) {
      setDroppedIngredients([...droppedIngredients, draggedIngredient]);
      setDraggedIngredient(null);
      
      // Create splash effect
      const cup = cupRef.current;
      if (cup) {
        const splash = document.createElement('div');
        splash.className = 'absolute w-full h-8 bottom-[40%] left-0 right-0';
        splash.style.background = `radial-gradient(circle, ${draggedIngredient.color}88 0%, transparent 70%)`;
        splash.style.animation = 'splash 0.5s ease-out forwards';
        cup.appendChild(splash);
        
        setTimeout(() => {
          cup.removeChild(splash);
        }, 500);
      }
    }
  };
  
  // Reset dragged ingredient if drag ends outside drop zone
  const handleDragEnd = () => {
    setDraggedIngredient(null);
  };

  return (
    <section 
      id="bobatea" 
      ref={containerRef}
      className="py-16 md:py-32 bg-gradient-to-br from-pink-100 via-berry-bliss to-pink-300 overflow-hidden relative"
    >
      {/* Animated background elements - Berry Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full backdrop-blur-sm"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              background: i % 3 === 0 ? 'rgba(249, 168, 212, 0.2)' : (i % 3 === 1 ? 'rgba(244, 114, 182, 0.2)' : 'rgba(236, 72, 153, 0.2)')
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                -100 - Math.random() * 100
              ],
              x: [
                Math.random() * window.innerWidth,
                (Math.random() - 0.5) * 200 + Math.random() * window.innerWidth
              ],
              scale: [0, Math.random() + 0.5, 0],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-chocolate-drizzle mb-6">
              Berry <span className="text-berry-bliss font-extrabold">Boba</span> Delights
            </h2>
            <p className="text-lg md:text-xl text-chocolate-drizzle max-w-3xl mx-auto">
              Explore our fruity boba tea creations or craft your own perfect berry-infused blend.
            </p>
          </motion.div>
        </div>

        {/* Main Interactive Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Side - Boba Tea Visualization */}
          <motion.div 
            className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl relative h-[600px] border border-pink-200/30"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Boba Cup Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Boba Cup Container */}
              <div className="relative w-64 h-96">
                {/* Decorative Stand */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-4 bg-pink-300 rounded-lg z-10" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-20 bg-pink-400 rounded-b-lg" />
                
                {/* Boba Cup */}
                <div 
                  ref={cupRef}
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 w-40 h-64 rounded-t-3xl rounded-b-xl overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.5)'
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  {/* Liquid */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                      height: customizationMode ? `${20 + droppedIngredients.length * 15}%` : '80%',
                      background: customizationMode 
                        ? (droppedIngredients.length > 0 
                          ? `linear-gradient(to bottom, ${droppedIngredients.map(i => i.color).join(', ')})`
                          : 'rgba(255, 255, 255, 0.1)')
                        : selectedFlavor.glassGradient,
                      transition: 'all 0.5s ease-in-out',
                    }}
                    animate={{
                      height: isExploding ? ['80%', '95%', '80%'] : '80%'
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Bubbles inside liquid */}
                    {!customizationMode && [...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          width: `${4 + Math.random() * 8}px`,
                          height: `${4 + Math.random() * 8}px`,
                          background: selectedFlavor.pearlHex,
                          left: `${Math.random() * 100}%`,
                          bottom: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20 - Math.random() * 40],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 3,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                    
                    {/* Dropped Ingredients */}
                    {customizationMode && droppedIngredients.map((ingredient, idx) => (
                      <motion.div 
                        key={idx}
                        className="absolute text-2xl font-bold"
                        style={{
                          color: ingredient.color,
                          left: `${20 + Math.random() * 60}%`,
                          bottom: `${10 + Math.random() * 60}%`,
                        }}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {ingredient.icon}
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Glass Reflections */}
                  <div className="absolute left-0 top-0 w-[30%] h-full bg-gradient-to-r from-white/30 to-transparent" />
                  <div className="absolute right-0 top-[30%] w-[15%] h-[40%] bg-gradient-to-l from-white/20 to-transparent" />
                </div>
                
                {/* Cup Measurements */}
                <div className="absolute bottom-20 left-[calc(50%-20px-2rem)] h-64 w-4 flex flex-col justify-between items-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-3 h-0.5 bg-pink-500/70" />
                      <span className="text-xs text-pink-700 font-medium ml-1">{100 - i * 20}ml</span>
                    </div>
                  ))}
                </div>
                
                {/* Boba Straw */}
                {!customizationMode && (
                  <div 
                    className="absolute top-0 left-1/2 w-6 h-[400px] -translate-x-1/2 -rotate-6 rounded-full"
                    style={{ 
                      background: 'linear-gradient(to right, rgba(249,168,212,0.9), rgba(249,168,212,0.6))',
                      zIndex: 20,
                    }}
                  />
                )}
                
                {/* Explosion Particles */}
                <AnimatePresence>
                  {isExploding && (
                    <>
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            width: `${3 + Math.random() * 8}px`,
                            height: `${3 + Math.random() * 8}px`,
                            background: selectedFlavor.particleColors[Math.floor(Math.random() * selectedFlavor.particleColors.length)],
                            top: '40%',
                            left: '50%',
                          }}
                          initial={{ x: 0, y: 0 }}
                          animate={{
                            x: (Math.random() - 0.5) * 200,
                            y: (Math.random() - 0.5) * 200,
                            opacity: [1, 0],
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Flavor Name Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-berry-bliss/70 to-transparent">
              <h3 className="text-3xl font-bold text-white mb-2">
                {customizationMode ? 'Your Berry Creation' : selectedFlavor.name}
              </h3>
              <p className="text-white/90 mb-4">
                {customizationMode 
                  ? droppedIngredients.length > 0 
                    ? `A unique berry blend with ${droppedIngredients.map(i => i.name).join(', ')}` 
                    : 'Drag ingredients into the cup to create your custom berry boba'
                  : selectedFlavor.description}
              </p>
            </div>
          </motion.div>
          
          {/* Right Side - Controls & Information */}
          <motion.div
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Mode Toggle */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-pink-200/30">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-chocolate-drizzle">Boba Creation Mode</h3>
                <motion.button
                  className={`relative w-16 h-8 rounded-full ${customizationMode ? 'bg-berry-bliss' : 'bg-pink-400'} transition-colors duration-300`}
                  onClick={toggleCustomizationMode}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="absolute w-6 h-6 bg-white rounded-full top-1"
                    animate={{ x: customizationMode ? 8 : 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                  <span className="sr-only">Toggle Mode</span>
                </motion.button>
              </div>
              <p className="text-chocolate-drizzle">
                {customizationMode 
                  ? 'Create your own unique berry boba by adding ingredients' 
                  : 'Explore our signature berry boba creations'}
              </p>
            </div>
            
            {/* Flavor Selection or Ingredients */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl flex-grow">
              <h3 className="text-xl font-bold text-white mb-4">
                {customizationMode ? 'Available Ingredients' : 'Signature Flavors'}
              </h3>
              
              {customizationMode ? (
                <div className="grid grid-cols-2 gap-3">
                  {additionalIngredients.map((ingredient) => (
                    <motion.div
                      key={ingredient.id}
                      className="bg-white/20 rounded-xl p-3 cursor-grab flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      draggable
                      onDragStart={() => handleDragStart(ingredient)}
                      onDragEnd={handleDragEnd}
                    >
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xl"
                        style={{ background: ingredient.color, color: ingredient.color === '#000000' ? 'white' : 'black' }}
                      >
                        {ingredient.icon}
                      </div>
                      <span className="text-white">{ingredient.name}</span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {bobaTeaFlavors.map((flavor, index) => (
                    <motion.div
                      key={flavor.id}
                      className={`p-3 rounded-xl cursor-pointer transition-all ${index === activeFlavorIndex ? 'bg-pink-200/40' : 'bg-white/20'} border border-pink-200/30`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => changeFlavor(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-10 h-10 rounded-full"
                          style={{ background: flavor.liquidHex }}
                        />
                        <div>
                          <h4 className="font-bold text-chocolate-drizzle">{flavor.name}</h4>
                          <div className="flex flex-wrap mt-1">
                            {flavor.ingredients.map((ingredient, idx) => (
                              <span 
                                key={idx} 
                                className="text-xs bg-pink-100 text-berry-bliss px-2 py-0.5 rounded-full mr-1 mb-1"
                              >
                                {ingredient}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {customizationMode && (
                <div className="mt-4">
                  <p className="text-indigo-200 text-sm mb-2">
                    {droppedIngredients.length}/4 ingredients added
                  </p>
                  <div className="flex justify-between">
                    <motion.button
                      className="bg-white/20 text-white px-4 py-2 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setDroppedIngredients([])}
                    >
                      Reset
                    </motion.button>
                    <motion.button
                      className={`${droppedIngredients.length > 0 ? 'bg-pink-500' : 'bg-pink-500/50'} text-white px-4 py-2 rounded-lg`}
                      whileHover={{ scale: droppedIngredients.length > 0 ? 1.05 : 1 }}
                      whileTap={{ scale: droppedIngredients.length > 0 ? 0.95 : 1 }}
                      disabled={droppedIngredients.length === 0}
                    >
                      Save Creation
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Order Button */}
            <motion.button 
              className={`${customizationMode ? 'bg-gradient-to-r from-pink-500 to-purple-600' : selectedFlavor.buttonColor} text-white py-4 rounded-xl font-bold text-lg shadow-xl`}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              {customizationMode ? 'Order Your Custom Creation' : `Order ${selectedFlavor.name}`}
            </motion.button>
          </motion.div>
        </div>
        
        {/* Additional Information */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">The Science of Boba</h3>
          <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
            Our boba teas are crafted using molecular gastronomy techniques to create the perfect balance of flavors, textures, and visual appeal.
          </p>
          <motion.button 
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Our Process
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes splash {
          0% { transform: scale(0); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default BobaTea;