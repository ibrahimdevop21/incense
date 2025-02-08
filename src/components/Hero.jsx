import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(null);

  // Animation variants for the heading text
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Animation variants for the subheading
  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 1, // Start after heading animation
      },
    },
  };

  // Animation variants for the buttons
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 1.2 + custom * 0.1, // Stagger button animations
      },
    }),
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const headingText = "Incense Ambiance";

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
        <img
          src="/images/hero-bg.webp"
          alt="Incense Ambiance"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-white mb-6"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          {headingText.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          Experience the perfect blend of premium coffee, exotic shisha flavors, and modern ambiance
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="/menu"
            className="btn-primary"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            custom={0}
            onMouseEnter={() => setIsHovered('menu')}
            onMouseLeave={() => setIsHovered(null)}
          >
            View Menu
          </motion.a>
          <motion.a
            href="/reservation"
            className="btn-secondary"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            custom={1}
            onMouseEnter={() => setIsHovered('reservation')}
            onMouseLeave={() => setIsHovered(null)}
          >
            Book a Table
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
