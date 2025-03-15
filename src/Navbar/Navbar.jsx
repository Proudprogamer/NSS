import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [activePage, setActivePage] = useState('home');
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'teams', label: 'Teams' }
  ];
  
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
  };
  
  return (
    <nav className="bg-white bg-opacity-90 shadow-md w-full px-6 py-4 fixed z-10">
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <div className="h-12 w-60 flex">
            <img src="/Logo_WHite_1.png" alt="Logo" className="h-12 w-auto mr-2" />
            National Service Scheme
            <br></br>
            Kurukshetra
          </div>
        </div>
        
        {/* Navigation in the center */}
        <div className="flex-grow flex justify-center ml-[-140px]">
          <div className="relative flex space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  className={`px-3 py-2 text-sm font-medium ${
                    activePage === item.id ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  } transition-colors duration-300`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
                
                {/* Animated indicator bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: activePage === item.id ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Empty div to balance the layout */}
        <div className="flex-shrink-0 w-32" />
      </div>
    </nav>
  );
};

export default Navbar;
