import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PlaceholderImage = () => (
  <svg
    className="w-24 h-24 text-gray-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
  </svg>
);

const Menu = ({ menuData }) => {
  const categories = Object.entries(menuData.categories);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(([key, items], index) => (
          <motion.button
            key={key}
            onClick={() => setActiveCategory(index)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
              activeCategory === index
                ? 'bg-primary text-black shadow-lg shadow-primary/20'
                : 'text-white/80 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </motion.button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories[activeCategory][1].map((item, index) => (
          <div
            key={index}
            className="glass backdrop-blur-md p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{item.name_en}</h3>
            {item.ingredients && (
              <p className="text-white/80 mb-4">
                {item.ingredients.join(', ')}
              </p>
            )}
            <p className="text-highlight font-medium">{item.price} EGP</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
