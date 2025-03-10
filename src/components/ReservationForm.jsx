import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={inputVariants}>
          <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="glass w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
          />
        </motion.div>

        <motion.div variants={inputVariants}>
          <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="glass w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
          />
        </motion.div>

        <motion.div variants={inputVariants}>
          <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="glass w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
          />
        </motion.div>

        <motion.div variants={inputVariants}>
          <label htmlFor="guests" className="block text-sm font-medium text-white/90 mb-2">
            Number of Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="glass w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num} className="bg-gray-800">
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div variants={inputVariants}>
          <label htmlFor="date" className="block text-sm font-medium text-white/90 mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="glass w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
          />
        </motion.div>

        <motion.div variants={inputVariants}>
          <label htmlFor="time" className="block text-sm font-medium text-white/90 mb-2">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="glass w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
          />
        </motion.div>
      </div>

      <motion.div variants={inputVariants}>
        <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
          Special Requests
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="glass w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
        />
      </motion.div>

      <motion.div
        className="flex justify-center"
        variants={inputVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          type="submit"
          className="btn-primary px-8 py-3 rounded-lg text-lg font-medium"
        >
          Book Table
        </button>
      </motion.div>
    </motion.form>
  );
};

export default ReservationForm;
