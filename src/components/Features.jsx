import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '☕',
    title: 'Premium Coffee',
    description: 'Expertly crafted coffee using the finest beans and traditional brewing methods'
  },
  {
    icon: '💨',
    title: 'Exotic Shisha',
    description: 'Wide variety of premium shisha flavors for an unforgettable experience'
  },
  {
    icon: '🌟',
    title: 'Modern Ambiance',
    description: 'Contemporary setting with comfortable seating and ambient lighting'
  },
  {
    icon: '🎲',
    title: 'Board Games',
    description: 'Extensive collection of board games for endless entertainment'
  },
  {
    icon: '👑',
    title: 'VIP Rooms',
    description: 'Private rooms for a more intimate and exclusive experience'
  },
  {
    icon: '🎵',
    title: 'Live Music',
    description: 'Regular live music events featuring local artists'
  }
];

const Features = () => {
  return (
    <div className="py-12">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What We Offer
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="glass backdrop-blur-md p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-white/80">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
