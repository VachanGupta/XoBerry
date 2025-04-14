import React, { useEffect, useState } from 'react';

const BerryAnimation = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (animationStep < 4) {
          setAnimationStep(prev => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, 1500); // 1.5 seconds per step
    }
    
    return () => clearTimeout(timer);
  }, [animationStep, isPlaying]);
  
  const startAnimation = () => {
    setAnimationStep(0);
    setIsPlaying(true);
  };
  
  const resetAnimation = () => {
    setAnimationStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="w-full h-64 md:h-80 bg-sugar-dust rounded-lg overflow-hidden relative">
      {/* Animation container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          {/* Step 0: Fresh Berries */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${animationStep === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-48 h-48">
              {/* Strawberry */}
              <div className="absolute top-4 left-4 transform -rotate-12">
                <div className="w-16 h-20 bg-berry-bliss rounded-b-full relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-vanilla-cream rounded-full">
                    <div className="w-4 h-4 bg-blueberry-mist rounded-full absolute top-1 left-1"></div>
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-chocolate-drizzle rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-1 bg-sugar-dust rounded-full m-1"></div>
                    <div className="w-1 h-1 bg-sugar-dust rounded-full m-1"></div>
                    <div className="w-1 h-1 bg-sugar-dust rounded-full m-1"></div>
                  </div>
                </div>
              </div>
              
              {/* Raspberry */}
              <div className="absolute top-8 right-4 transform rotate-12">
                <div className="w-14 h-16 bg-raspberry-whip rounded-b-full relative">
                  <div className="absolute inset-0 flex flex-wrap content-center justify-center">
                    <div className="w-2 h-2 bg-strawberry-milk rounded-full m-0.5"></div>
                    <div className="w-2 h-2 bg-strawberry-milk rounded-full m-0.5"></div>
                    <div className="w-2 h-2 bg-strawberry-milk rounded-full m-0.5"></div>
                    <div className="w-2 h-2 bg-strawberry-milk rounded-full m-0.5"></div>
                    <div className="w-2 h-2 bg-strawberry-milk rounded-full m-0.5"></div>
                    <div className="w-2 h-2 bg-strawberry-milk rounded-full m-0.5"></div>
                  </div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-chocolate-drizzle rounded-full"></div>
                </div>
              </div>
              
              {/* Blueberry */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 bg-blueberry-mist rounded-full relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-chocolate-drizzle rounded-full"></div>
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-sugar-dust rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 1: Crushing Berries */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${animationStep === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-48 h-48">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-24 bg-berry-bliss rounded-md relative overflow-hidden">
                  {/* Crushed berry texture */}
                  <div className="absolute inset-0 flex flex-wrap content-center justify-center">
                    {Array(20).fill().map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-raspberry-whip rounded-full m-0.5 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                  
                  {/* Pestle */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-20 flex flex-col items-center animate-bounce" style={{ animationDuration: '0.5s' }}>
                    <div className="w-8 h-8 bg-vanilla-cream rounded-full"></div>
                    <div className="w-4 h-12 bg-vanilla-cream"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2: Mixing with Vanilla */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${animationStep === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-48 h-48">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-36 h-28 bg-vanilla-cream rounded-md relative overflow-hidden">
                  {/* Swirling mixture */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 bg-vanilla-cream opacity-70"></div>
                      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-berry-bliss rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                      <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-raspberry-whip rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
                    </div>
                  </div>
                  
                  {/* Mixing spoon */}
                  <div className="absolute -top-2 right-4 transform rotate-45 origin-bottom">
                    <div className="w-4 h-20 bg-chocolate-drizzle rounded-t-full animate-[wiggle_1s_ease-in-out_infinite]">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-chocolate-drizzle rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3: Freezing/Churning */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${animationStep === 3 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-48 h-48">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-40 h-32 bg-blueberry-mist rounded-md relative overflow-hidden">
                  {/* Ice cream machine */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-24 bg-sugar-dust rounded-md relative">
                      <div className="absolute inset-2 bg-strawberry-milk rounded">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full border-4 border-vanilla-cream border-t-berry-bliss animate-spin" style={{ animationDuration: '1s' }}></div>
                        </div>
                      </div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-chocolate-drizzle rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Cold effect */}
                  <div className="absolute -top-2 -left-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3V5M12 19V21M5 12H3M21 12H19M18.364 5.636L16.95 7.05M7.05 16.95L5.636 18.364M18.364 18.364L16.95 16.95M7.05 7.05L5.636 5.636" stroke="#BFD7EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3V5M12 19V21M5 12H3M21 12H19M18.364 5.636L16.95 7.05M7.05 16.95L5.636 18.364M18.364 18.364L16.95 16.95M7.05 7.05L5.636 5.636" stroke="#BFD7EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4: Final Ice Cream */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${animationStep === 4 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-48 h-48">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Ice cream cone */}
                <div className="relative">
                  {/* Cone */}
                  <div className="w-24 h-32 overflow-hidden relative mx-auto">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-vanilla-cream" style={{ clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)' }}></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-22 h-22 bg-chocolate-drizzle opacity-20" style={{ clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)' }}></div>
                  </div>
                  
                  {/* Ice cream scoops */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-20 bg-strawberry-milk rounded-full relative">
                      <div className="absolute -top-12 -left-2 w-18 h-18 bg-berry-bliss rounded-full"></div>
                      <div className="absolute -top-6 -right-2 w-16 h-16 bg-raspberry-whip rounded-full"></div>
                      
                      {/* Berry toppings */}
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                        <div className="w-6 h-6 bg-blueberry-mist rounded-full"></div>
                      </div>
                      <div className="absolute -top-10 right-0">
                        <div className="w-4 h-6 bg-berry-bliss rounded-b-full relative transform rotate-45">
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-chocolate-drizzle rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sparkle effects */}
              <div className="absolute top-1/4 left-1/4 animate-ping" style={{ animationDuration: '1.5s' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L13.5 9H19.5L14.5 12.5L16 18.5L12 15L8 18.5L9.5 12.5L4.5 9H10.5L12 3Z" fill="#FFD6DC" />
                </svg>
              </div>
              <div className="absolute bottom-1/4 right-1/4 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L13.5 9H19.5L14.5 12.5L16 18.5L12 15L8 18.5L9.5 12.5L4.5 9H10.5L12 3Z" fill="#FFD6DC" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
        <button 
          onClick={startAnimation}
          disabled={isPlaying}
          className={`px-4 py-2 rounded-full bg-berry-bliss text-sugar-dust font-medium flex items-center ${isPlaying ? 'opacity-50 cursor-not-allowed' : 'hover:bg-raspberry-whip transition-colors duration-300'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Play
        </button>
        <button 
          onClick={resetAnimation}
          className="px-4 py-2 rounded-full bg-chocolate-drizzle text-sugar-dust font-medium flex items-center hover:bg-opacity-80 transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset
        </button>
      </div>
      
      {/* Step indicator */}
      <div className="absolute top-4 left-0 right-0 flex justify-center">
        <div className="bg-vanilla-cream bg-opacity-70 px-4 py-1 rounded-full">
          <div className="flex space-x-2">
            {[0, 1, 2, 3, 4].map((step) => (
              <div 
                key={step}
                className={`w-2 h-2 rounded-full ${animationStep >= step ? 'bg-berry-bliss' : 'bg-chocolate-drizzle bg-opacity-20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BerryAnimation;