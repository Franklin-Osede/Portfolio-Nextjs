import React from 'react';
import { motion } from 'framer-motion';

const KnowMeSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById('knowledge');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="know-me"
      className="bg-[#0a1a2f] relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(270deg, rgba(10, 26, 47, 0.9), rgba(15, 42, 74, 0.9), rgba(10, 26, 47, 0.9))',
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-10">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                Get To Know Me
              </span>
            </h3>
            <div className="relative w-full max-w-4xl mx-auto aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg border border-turquoiseBlue/20"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 flex flex-col items-center"
            >
              <motion.button
                onClick={scrollToNext}
                initial={{ y: -10 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-white/80 group-hover:text-turquoiseBlue transition-colors duration-300"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14M5 12l7 7 7-7"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default KnowMeSection;