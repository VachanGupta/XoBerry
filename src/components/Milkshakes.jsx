import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Milkshakes = () => {
  
  const milkshakes = [
    {
      id: 1,
      title: 'Classic Milkshakes',
      description: 'Our thick, creamy classic milkshakes made with premium ingredients.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Vanilla Milkshake', name: 'Vanilla Milkshake' },
        { id: 2, src: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Chocolate Milkshake', name: 'Chocolate Milkshake' },
        { id: 3, src: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Strawberry Milkshake', name: 'Strawberry Milkshake' },
        { id: 4, src: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Mango Milkshake', name: 'Mango Milkshake' },
      ],
    },
    {
      id: 2,
      title: 'Berry Milkshakes',
      description: 'Thick shakes featuring our signature berry flavors and fresh fruits.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1586917049352-8f5756000e25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Mixed Berry Milkshake', name: 'Mixed Berry Milkshake' },
        { id: 2, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Blueberry Milkshake', name: 'Blueberry Milkshake' },
        { id: 3, src: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Raspberry Milkshake', name: 'Raspberry Milkshake' },
        { id: 4, src: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Strawberry Milkshake', name: 'Strawberry Milkshake' },
      ],
    },
    {
      id: 3,
      title: 'Premium Milkshakes',
      description: 'Indulgent thick shakes with premium toppings and mix-ins.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Cookies & Cream Milkshake', name: 'Cookies & Cream Milkshake' },
        { id: 2, src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Caramel Milkshake', name: 'Caramel Milkshake' },
        { id: 3, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Mint Chocolate Milkshake', name: 'Mint Chocolate Milkshake' },
        { id: 4, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Peanut Butter Milkshake', name: 'Peanut Butter Milkshake' },
      ],
    },
    {
      id: 4,
      title: 'Seasonal Milkshakes',
      description: 'Limited edition thick shakes featuring seasonal flavors and ingredients.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Tropical Mango Milkshake', name: 'Tropical Mango Milkshake' },
        { id: 2, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Pumpkin Spice Milkshake', name: 'Pumpkin Spice Milkshake' },
        { id: 3, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Peppermint Milkshake', name: 'Peppermint Milkshake' },
        { id: 4, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Summer Peach Milkshake', name: 'Summer Peach Milkshake' },
      ],
    },
  ];

  // State to track current page and items per page
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  
  const allMilkshakes = milkshakes.flatMap(category => 
    category.images.map(shake => ({
      ...shake,
      categoryId: category.id,
      categoryTitle: category.title,
      categoryDescription: category.description
    }))
  );
  
  const totalPages = Math.ceil(allMilkshakes.length / itemsPerPage);
  
  const currentItems = allMilkshakes.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="milkshakes" className="py-16 md:py-24 bg-gradient-to-r from-pink-100 via-strawberry-milk to-pink-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-pink-200 opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-pink-300 opacity-40"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="text-center mb-12 relative z-10">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-chocolate-drizzle mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Thicc <span className="text-berry-bliss font-extrabold">Shakes</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-chocolate-drizzle max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Indulge in our creamy, delicious thick shakes made with premium ice cream and the freshest ingredients.
          </motion.p>
        </div>

        {/* Featured milkshake */}
        <motion.div 
          className="mb-16 relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-berry-bliss mb-4">Signature Milkshake</h3>
              <p className="text-chocolate-drizzle text-lg mb-6">Our most popular thick shake, blending premium vanilla ice cream with fresh strawberries and topped with whipped cream and berry drizzle.</p>
              <motion.button 
                className="bg-berry-bliss text-white px-6 py-3 rounded-full font-medium hover:bg-raspberry-whip transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Now
              </motion.button>
            </div>
            <div className="h-64 md:h-96 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Signature Milkshake" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Paginated grid section */}
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-chocolate-drizzle">Explore Our Varieties</h3>
            <div className="flex items-center space-x-2">
              <motion.button
                onClick={goToPrevPage}
                className="bg-white p-2 rounded-full shadow-md text-berry-bliss"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <span className="text-chocolate-drizzle font-medium">
                {currentPage + 1} / {totalPages}
              </span>
              <motion.button
                onClick={goToNextPage}
                className="bg-white p-2 rounded-full shadow-md text-berry-bliss"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <AnimatePresence mode="wait">
              {currentItems.map((shake) => (
                <motion.div
                  key={`${shake.categoryId}-${shake.id}`}
                  className="h-[400px] bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="h-3/5 overflow-hidden relative">
                    <img
                      src={shake.src}
                      alt={shake.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-berry-bliss text-white text-xs font-bold px-3 py-1 rounded-full">
                      {shake.categoryTitle}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-berry-bliss mb-2">{shake.name}</h4>
                    <p className="text-chocolate-drizzle text-sm mb-4">{shake.categoryDescription}</p>
                    <motion.button
                      className="w-full bg-strawberry-milk text-berry-bliss font-medium py-2 rounded-lg hover:bg-pink-200 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Order Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentPage === index ? 'bg-berry-bliss scale-125' : 'bg-pink-300'}`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milkshakes;