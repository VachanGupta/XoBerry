import React, { useState } from 'react';

const Hero = () => {
  const [activeBerry, setActiveBerry] = useState(null);
  
  const berries = [
    {
      id: 1,
      name: 'Strawberry',
      description: 'Sweet and tangy, our strawberries add a classic flavor that everyone loves.',
      color: 'bg-red-500'
    },
    {
      id: 2,
      name: 'Blueberry',
      description: 'Rich in antioxidants, blueberries bring a sweet-tart flavor and beautiful color.',
      color: 'bg-blue-700'
    },
    {
      id: 3,
      name: 'Raspberry',
      description: 'Bright and bold, raspberries add a perfect balance of sweet and tart notes.',
      color: 'bg-raspberry-whip'
    },
    {
      id: 4,
      name: 'Blackberry',
      description: 'Deep and complex, blackberries offer a sophisticated flavor profile.',
      color: 'bg-purple-900'
    },
    {
      id: 5,
      name: 'Cherry',
      description: 'Juicy and rich, cherries provide a luxurious sweetness to our ice cream.',
      color: 'bg-berry-bliss'
    },
    {
      id: 6,
      name: 'Cranberry',
      description: 'Tart and vibrant, cranberries add a refreshing zing to our creations.',
      color: 'bg-red-600'
    },
    {
      id: 7,
      name: 'Acai Berry',
      description: 'Exotic and nutritious, acai berries bring a unique earthy flavor.',
      color: 'bg-purple-800'
    }
  ];

  return (
    <section id="home" className="bg-vanilla-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate-drizzle mb-4">
              <span className="text-berry-bliss">Berry</span> Delicious Ice Cream
            </h1>
            <p className="text-lg md:text-xl text-chocolate-drizzle mb-8">
              Handcrafted ice cream made with the freshest berries and finest ingredients. 
              Experience the perfect blend of creamy vanilla and vibrant berry flavors in every scoop.
            </p>
            <button className="bg-berry-bliss text-sugar-dust px-6 py-3 rounded-full font-medium text-lg hover:bg-raspberry-whip transition-colors duration-300 shadow-lg">
              Explore Our Flavors
            </button>
          </div>
          
          <div className="md:w-1/2 relative mt-8 md:mt-0">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-strawberry-milk rounded-full mx-auto relative">

              <div className="absolute inset-0 flex items-center justify-center">
                {berries.map((berry, index) => {
                  const angle = (index / berries.length) * 2 * Math.PI;
                  const radius = window.innerWidth < 768 ? 70 : 80;
                  const left = 50 + radius * Math.cos(angle);
                  const top = 50 + radius * Math.sin(angle);
                  
                  return (
                    <div 
                      key={berry.id}
                      className={`absolute ${berry.color} w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-110 shadow-md`}
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onMouseEnter={() => setActiveBerry(berry)}
                      onMouseLeave={() => setActiveBerry(null)}
                    ></div>
                  );
                })}
                
                {activeBerry && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-white bg-opacity-90 p-3 md:p-4 rounded-lg shadow-lg max-w-[200px] md:max-w-xs text-center">
                      <h3 className="text-berry-bliss font-bold text-base md:text-lg">{activeBerry.name}</h3>
                      <p className="text-chocolate-drizzle text-sm md:text-base">{activeBerry.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;