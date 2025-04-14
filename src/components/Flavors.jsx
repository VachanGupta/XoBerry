import React, { useState } from 'react';

const Flavors = () => {

  const carousels = [
    {
      id: 1,
      title: 'Berry Classics',
      description: 'Our timeless berry favorites that never go out of style.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Strawberry Delight', name: 'Strawberry Delight' },
        { id: 2, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Blueberry Swirl', name: 'Blueberry Swirl' },
        { id: 3, src: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Raspberry Ripple', name: 'Raspberry Ripple' },
        { id: 4, src: 'https://images.unsplash.com/photo-1587563974553-d6c4912e8ae1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Mixed Berry', name: 'Mixed Berry' },
      ],
    },
    {
      id: 2,
      title: 'Seasonal Specials',
      description: 'Limited edition flavors featuring the freshest seasonal berries.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Summer Berry Blast', name: 'Summer Berry Blast' },
        { id: 2, src: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Autumn Cranberry', name: 'Autumn Cranberry' },
        { id: 3, src: 'https://images.unsplash.com/photo-1516043827470-d52c543c438f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Winter Berry Frost', name: 'Winter Berry Frost' },
        { id: 4, src: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Spring Berry Bloom', name: 'Spring Berry Bloom' },
      ],
    },
    {
      id: 3,
      title: 'Berry Parfaits',
      description: 'Layered ice cream treats with fresh berries and toppings.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Strawberry Parfait', name: 'Strawberry Parfait' },
        { id: 2, src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Blueberry Parfait', name: 'Blueberry Parfait' },
        { id: 3, src: 'https://images.unsplash.com/photo-1514849302-984523450cf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Mixed Berry Parfait', name: 'Mixed Berry Parfait' },
        { id: 4, src: 'https://images.unsplash.com/photo-1541599188778-cdc73298e8fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Berry Yogurt Parfait', name: 'Berry Yogurt Parfait' },
      ],
    },
    {
      id: 4,
      title: 'Berry Sundaes',
      description: 'Decadent sundaes topped with fresh berries and sauces.',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Triple Berry Sundae', name: 'Triple Berry Sundae' },
        { id: 2, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Strawberry Cheesecake Sundae', name: 'Strawberry Cheesecake Sundae' },
        { id: 3, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Blueberry Cobbler Sundae', name: 'Blueberry Cobbler Sundae' },
        { id: 4, src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Raspberry Chocolate Sundae', name: 'Raspberry Chocolate Sundae' },
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
      [carouselId]: (prev[carouselId] + 1) % carousels.find(c => c.id === carouselId).images.length
    }));
  };

  // Function to navigate to previous slide
  const prevSlide = (carouselId) => {
    setActiveSlides(prev => ({
      ...prev,
      [carouselId]: (prev[carouselId] - 1 + carousels.find(c => c.id === carouselId).images.length) % carousels.find(c => c.id === carouselId).images.length
    }));
  };

  return (
    <section id="flavors" className="py-16 md:py-24 bg-vanilla-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate-drizzle mb-4">
            Our <span className="text-berry-bliss">Berry</span> Flavors
          </h2>
          <p className="text-lg text-chocolate-drizzle max-w-3xl mx-auto">
            Explore our delicious selection of handcrafted berry ice creams, made with the freshest ingredients and bursting with flavor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {carousels.map((carousel) => (
            <div key={carousel.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-sugar-dust">
                <h3 className="text-xl font-bold text-berry-bliss mb-2">{carousel.title}</h3>
                <p className="text-chocolate-drizzle">{carousel.description}</p>
              </div>
              
              <div className="relative h-64 md:h-80">
                {/* Carousel images */}
                {carousel.images.map((image, index) => (
                  <div 
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === activeSlides[carousel.id] ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-sugar-dust font-medium text-lg">{image.name}</p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation arrows */}
                <button 
                  onClick={() => prevSlide(carousel.id)} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-colors duration-300"
                  aria-label="Previous slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sugar-dust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => nextSlide(carousel.id)} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-colors duration-300"
                  aria-label="Next slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sugar-dust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {carousel.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlides(prev => ({ ...prev, [carousel.id]: index }))}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === activeSlides[carousel.id] ? 'bg-berry-bliss' : 'bg-white/50'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;