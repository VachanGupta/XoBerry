import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Bingsu = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // Data for the bingsu carousel
  const bingsuVarieties = [
    {
      id: 1,
      title: 'Classic Bingsu',
      description: 'Traditional Korean shaved ice desserts with classic toppings.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Red Bean Bingsu', name: 'Red Bean Bingsu' },
        { id: 2, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Injeolmi Bingsu', name: 'Injeolmi Bingsu' },
        { id: 3, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Green Tea Bingsu', name: 'Green Tea Bingsu' },
        { id: 4, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Coffee Bingsu', name: 'Coffee Bingsu' },
      ],
    },
    {
      id: 2,
      title: 'Fruit Bingsu',
      description: 'Refreshing shaved ice topped with fresh seasonal fruits.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Strawberry Bingsu', name: 'Strawberry Bingsu' },
        { id: 2, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Mango Bingsu', name: 'Mango Bingsu' },
        { id: 3, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Mixed Berry Bingsu', name: 'Mixed Berry Bingsu' },
        { id: 4, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Watermelon Bingsu', name: 'Watermelon Bingsu' },
      ],
    },
    {
      id: 3,
      title: 'Premium Bingsu',
      description: 'Luxurious shaved ice creations with premium ingredients and toppings.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Chocolate Brownie Bingsu', name: 'Chocolate Brownie Bingsu' },
        { id: 2, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Cheesecake Bingsu', name: 'Cheesecake Bingsu' },
        { id: 3, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Tiramisu Bingsu', name: 'Tiramisu Bingsu' },
        { id: 4, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Black Sesame Bingsu', name: 'Black Sesame Bingsu' },
      ],
    },
    {
      id: 4,
      title: 'Specialty Bingsu',
      description: 'Unique shaved ice creations with innovative flavors and combinations.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Oreo Cookie Bingsu', name: 'Oreo Cookie Bingsu' },
        { id: 2, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Honey Toast Bingsu', name: 'Honey Toast Bingsu' },
        { id: 3, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Milk Tea Bingsu', name: 'Milk Tea Bingsu' },
        { id: 4, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Coconut Bingsu', name: 'Coconut Bingsu' },
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
      [carouselId]: (prev[carouselId] + 1) % bingsuVarieties.find(c => c.id === carouselId).images.length
    }));
  };

  // Function to navigate to previous slide
  const prevSlide = (carouselId) => {
    setActiveSlides(prev => ({
      ...prev,
      [carouselId]: (prev[carouselId] - 1 + bingsuVarieties.find(c => c.id === carouselId).images.length) % bingsuVarieties.find(c => c.id === carouselId).images.length
    }));
  };

  return (
    <section 
      id="bingsu" 
      ref={containerRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-50"
    >
      {/* Snowflake background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-4 h-4 bg-white rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-indigo-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Korean <span className="text-berry-bliss font-extrabold">Bingsu</span> Ice Cream
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-indigo-800 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience authentic Korean shaved ice desserts with our premium Bingsu selections, featuring delicate ice flakes topped with fresh fruits, sweet condensed milk, and traditional toppings.
          </motion.p>
        </div>

        {/* Hero Bingsu */}
        <motion.div 
          className="relative h-[60vh] mb-24 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Signature Bingsu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-16">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Signature Red Bean Bingsu</h3>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">Our most popular Bingsu featuring delicate shaved ice topped with sweet red beans, condensed milk, and mochi pieces.</p>
            <motion.button 
              className="bg-white text-indigo-900 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
          </div>
        </motion.div>

        {/* Bingsu varieties */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-8 text-center">Discover Our Bingsu Collection</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bingsuVarieties.map((variety) => (
              <motion.div 
                key={variety.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: variety.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={variety.images[0].src} 
                    alt={variety.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent flex items-end p-4">
                    <h4 className="text-xl font-bold text-white">{variety.title}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-indigo-800 mb-4">{variety.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {variety.images.map((image) => (
                      <span key={image.id} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                        {image.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center py-12 px-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">Experience the Authentic Taste of Korea</h3>
          <p className="text-lg text-indigo-800 max-w-2xl mx-auto mb-8">Visit our stores to enjoy freshly made Bingsu or order online for a special treat.</p>
          <motion.button 
            className="bg-berry-bliss text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Find Nearest Location
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Bingsu;