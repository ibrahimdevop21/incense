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
    <section className="relative min-h-screen flex flex-col md:items-center md:justify-center overflow-hidden">
      {/* Video Background - Only visible on desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <div className="absolute inset-0 -top-[25%] -bottom-[25%]">
          <video
            className="w-full h-full object-cover scale-105 transition-transform duration-700"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Overlay layers for depth and atmosphere - desktop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
      </div>
      
      {/* Mobile layout */}
      <div className="md:hidden flex flex-col items-center">
        {/* Content first on mobile */}
        <div className="relative z-20 text-center px-4 pt-24 pb-8">
          <motion.h1
            className="text-4xl font-bold text-white mb-6 whitespace-nowrap overflow-x-hidden"
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
            className="text-lg text-white/90 mb-8"
            variants={subheadingVariants}
            initial="hidden"
            animate="visible"
          >
            Experience the perfect blend of premium coffee, exotic shisha flavors, and modern ambiance
          </motion.p>

          <div className="flex flex-col gap-4 w-full">
            <motion.a
              href="/menu"
              className="btn-primary text-lg py-3"
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
              className="btn-secondary text-lg py-3"
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

        {/* Video as separate element on mobile */}
        <div className="relative w-full h-[300px] overflow-hidden rounded-t-[2.5rem]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          Experience the perfect blend of premium coffee, exotic shisha flavors, and modern ambiance
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="/menu"
            className="btn-primary text-lg px-8 py-3"
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
            className="btn-secondary text-lg px-8 py-3"
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
