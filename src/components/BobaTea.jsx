import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BobaTea = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [animating, setAnimating] = useState(false);
  
  // Data for the boba tea carousel
  const bobaTeaVarieties = [
    {
      id: 1,
      title: 'Classic Boba Tea',
      description: 'Traditional milk teas with chewy tapioca pearls.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1558857563-c0c3aa058908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Classic Milk Tea', name: 'Classic Milk Tea' },
        { id: 2, src: 'https://images.unsplash.com/photo-1541696490-8744a5dc0228?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Brown Sugar Milk Tea', name: 'Brown Sugar Milk Tea' },
        { id: 3, src: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Taro Milk Tea', name: 'Taro Milk Tea' },
        { id: 4, src: 'https://images.unsplash.com/photo-1627998792088-f8016b438988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Thai Milk Tea', name: 'Thai Milk Tea' },
      ],
    },
    {
      id: 2,
      title: 'Fruit Boba Tea',
      description: 'Refreshing fruit-based teas with popping boba pearls.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1546549095-8d9cb7bcb87e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Strawberry Fruit Tea', name: 'Strawberry Fruit Tea' },
        { id: 2, src: 'https://images.unsplash.com/photo-1556679343-c1917b0a2a2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Mango Fruit Tea', name: 'Mango Fruit Tea' },
        { id: 3, src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Passion Fruit Tea', name: 'Passion Fruit Tea' },
        { id: 4, src: 'https://images.unsplash.com/photo-1556679343-c1917b0a2a2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Lychee Fruit Tea', name: 'Lychee Fruit Tea' },
      ],
    },
    {
      id: 3,
      title: 'Specialty Boba Tea',
      description: 'Unique boba tea creations with premium ingredients and toppings.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1558857563-c0c3aa058908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Matcha Boba Tea', name: 'Matcha Boba Tea' },
        { id: 2, src: 'https://images.unsplash.com/photo-1627998792088-f8016b438988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Oreo Boba Tea', name: 'Oreo Boba Tea' },
        { id: 3, src: 'https://images.unsplash.com/photo-1558857563-c0c3aa058908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Tiramisu Boba Tea', name: 'Tiramisu Boba Tea' },
        { id: 4, src: 'https://images.unsplash.com/photo-1627998792088-f8016b438988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Caramel Boba Tea', name: 'Caramel Boba Tea' },
      ],
    },
    {
      id: 4,
      title: 'Seasonal Boba Tea',
      description: 'Limited edition boba teas featuring seasonal flavors and ingredients.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1558857563-c0c3aa058908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Pumpkin Spice Boba Tea', name: 'Pumpkin Spice Boba Tea' },
        { id: 2, src: 'https://images.unsplash.com/photo-1627998792088-f8016b438988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Cherry Blossom Boba Tea', name: 'Cherry Blossom Boba Tea' },
        { id: 3, src: 'https://images.unsplash.com/photo-1558857563-c0c3aa058908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Winter Melon Boba Tea', name: 'Winter Melon Boba Tea' },
        { id: 4, src: 'https://images.unsplash.com/photo-1627998792088-f8016b438988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Summer Berry Boba Tea', name: 'Summer Berry Boba Tea' },
      ],
    },
  ];

  // State to track active slide for each carousel
  const [activeSlides, setActiveSlides] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  // Function to navigate to next slide
  const nextSlide = (carouselId) => {
    setActiveSlides(prev => ({
      ...prev,
      [carouselId]: (prev[carouselId] + 1) % bobaTeaVarieties.find(c => c.id === carouselId).images.length
    }));
  };

  // Function to navigate to previous slide
  const prevSlide = (carouselId) => {
    setActiveSlides(prev => ({
      ...prev,
      [carouselId]: (prev[carouselId] - 1 + bobaTeaVarieties.find(c => c.id === carouselId).images.length) % bobaTeaVarieties.find(c => c.id === carouselId).images.length
    }));
  };

  const handleCategoryChange = (id) => {
    if (id === selectedCategory || animating) return;
    setAnimating(true);
    setSelectedCategory(id);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section id="bobatea" className="py-16 md:py-32 bg-gradient-to-br from-teal-50 via-blueberry-mist to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <motion.div 
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-teal-200 opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-200 opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -10, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-teal-900 mb-6">
              Bubble <span className="text-berry-bliss font-extrabold">Boba</span> Tea
            </h2>
            <p className="text-lg md:text-xl text-teal-800 max-w-3xl mx-auto">
              Enjoy our refreshing boba tea selections featuring premium tea bases, chewy tapioca pearls, and a variety of flavors from traditional classics to innovative creations.
            </p>
          </motion.div>
        </div>

        {/* Category tabs */}
        <div className="mb-12">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {bobaTeaVarieties.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === category.id ? 'bg-teal-600 text-white shadow-lg' : 'bg-white/70 text-teal-800 hover:bg-white'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Featured boba tea display */}
        <div className="relative min-h-[500px] mb-16">
          <AnimatePresence mode="wait">
            {bobaTeaVarieties.map((category) => {
              if (category.id !== selectedCategory) return null;
              
              return (
                <motion.div
                  key={category.id}
                  className="grid md:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="order-2 md:order-1">
                    <h3 className="text-3xl font-bold text-teal-900 mb-6">{category.title}</h3>
                    <p className="text-teal-800 text-lg mb-8">{category.description}</p>
                    
                    <div className="space-y-6">
                      {category.images.map((item) => (
                        <motion.div 
                          key={item.id}
                          className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm"
                          whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                        >
                          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-teal-200">
                            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="font-bold text-teal-900">{item.name}</h4>
                            <motion.button 
                              className="text-sm text-berry-bliss font-medium mt-1 flex items-center gap-1"
                              whileHover={{ x: 5 }}
                            >
                              Order now
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                    <img 
                      src={category.images[0].src} 
                      alt={category.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex flex-col justify-end p-8">
                      <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                        <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-white/90">{category.description}</p>
                      </div>
                    </div>
                    
                    {/* Floating boba pearls */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 rounded-full bg-chocolate-drizzle"
                        style={{
                          top: `${Math.random() * 80 + 10}%`,
                          left: `${Math.random() * 80 + 10}%`,
                          opacity: 0.8
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center py-12 px-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">Create Your Perfect Boba Experience</h3>
          <p className="text-lg text-teal-800 max-w-2xl mx-auto mb-8">Customize your boba tea with your choice of tea base, sweetness level, and toppings.</p>
          <motion.button 
            className="bg-berry-bliss text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Customize Your Boba
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BobaTea;