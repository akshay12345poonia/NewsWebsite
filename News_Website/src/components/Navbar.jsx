import React from 'react';
import { CATEGORIES } from '../utils/constants';
import { useNews } from '../contexts/NewsContext';

const Navbar = () => {
  const { getHeadlines } = useNews();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              NewsHub
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-4">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => getHeadlines('us', category)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 capitalize"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;