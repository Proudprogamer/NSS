import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const professors = [
    {
      name: "Dr. Sarah Johnson",
      designation: "Professor of Quantum Physics",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Marcus Chen",
      designation: "Associate Professor of Molecular Biology",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Amara Patel",
      designation: "Distinguished Professor of Computer Science",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Robert Williams",
      designation: "Assistant Professor of Psychology",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Elena Rodriguez",
      designation: "Professor of Mechanical Engineering",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. David Kim",
      designation: "Associate Professor of Economics",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Olivia Nkosi",
      designation: "Professor of International Relations",
      image: "/api/placeholder/300/300"
    }
  ];

  // Duplicate the professors array for infinite scroll effect
  const duplicatedProfessors = [...professors, ...professors, ...professors];
  
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => prev + 1);
      
      // Reset position when we've scrolled through the first set
      if (scrollPosition > professors.length * 300) {
        setScrollPosition(0);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [scrollPosition, professors.length]);

  return (
    <div className="w-full bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 py-16 mt-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Our Distinguished Faculty</h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-yellow-400 rounded"></div>
          </div>
          <p className="text-lg text-indigo-100 mt-4">Meet the brilliant minds shaping tomorrow's leaders</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-linear" 
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              width: `${duplicatedProfessors.length * 300}px`
            }}
          >
            {duplicatedProfessors.map((professor, index) => (
              <div 
                key={`${professor.name}-${index}`} 
                className="w-64 flex-shrink-0 mx-6"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <img 
                    src={professor.image} 
                    alt={professor.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 bg-gradient-to-b from-white to-indigo-50">
                    <h3 className="text-xl font-bold text-gray-800">{professor.name}</h3>
                    <p className="text-indigo-600 mt-1">{professor.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Shadow overlays for smooth edge fading */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-indigo-900 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-indigo-900 to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;