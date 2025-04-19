import React from 'react';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: 'Select Fresh Berries',
      description: 'We carefully select the ripest, most flavorful berries from local farms.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-berry-bliss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      animation: 'fade-right'
    },
    {
      id: 2,
      title: 'Crush & Extract',
      description: 'The berries are gently crushed to release their natural juices and flavors.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-berry-bliss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      animation: 'fade-left'
    },
    {
      id: 3,
      title: 'Blend with Vanilla',
      description: 'The berry extract is carefully blended with our premium vanilla ice cream base.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-berry-bliss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      animation: 'fade-right'
    },
    {
      id: 4,
      title: 'Freeze & Churn',
      description: 'The mixture is frozen while being churned to create a smooth, creamy texture.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-berry-bliss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      animation: 'fade-left'
    },
    {
      id: 5,
      title: 'Serve & Enjoy',
      description: 'The finished ice cream is scooped and served with fresh berry toppings.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-berry-bliss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      animation: 'fade-up'
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-blueberry-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate-drizzle mb-4">
            How We Make Our <span className="text-berry-bliss">Berry</span> Ice Cream
          </h2>
          <p className="text-lg text-chocolate-drizzle max-w-3xl mx-auto">
            From farm to cone, discover our artisanal process for creating the perfect berry ice cream.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-raspberry-whip transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-berry-bliss border-4 border-vanilla-cream z-10"></div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className="mr-4 md:order-2">{step.icon}</div>
                        <h3 className="text-xl font-bold text-berry-bliss md:order-1">{step.title}</h3>
                      </div>
                      <p className="text-chocolate-drizzle">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-vanilla-cream rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-berry-bliss mb-4">Watch The Magic Happen</h3>
              <p className="text-chocolate-drizzle mb-6">
                Our process combines traditional ice cream making techniques with innovative berry infusion methods to create a uniquely delicious treat.
              </p>
              <div className="flex space-x-4">
                <div className="w-16 h-16 rounded-full bg-strawberry-milk flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-berry-bliss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-berry-bliss">See our process in action</p>
                  <p className="text-sm text-chocolate-drizzle">Watch our artisans craft the perfect scoop</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-full h-64 md:h-80 bg-sugar-dust rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex justify-center space-x-4 mb-4">
                        <div className="w-8 h-8 rounded-full bg-berry-bliss animate-bounce"></div>
                        <div className="w-8 h-8 rounded-full bg-raspberry-whip animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-8 h-8 rounded-full bg-berry-bliss animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <p className="text-chocolate-drizzle font-medium">Berry to Ice Cream Animation</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;