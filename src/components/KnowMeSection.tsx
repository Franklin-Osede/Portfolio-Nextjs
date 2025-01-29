import React from 'react';
import { motion } from 'framer-motion';

const KnowMeSection = () => {
  return (
    <motion.section
      id="know-me"
      className="bg-darkBlue relative overflow-hidden"
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
          <h3 className="text-3xl font-bold text-white mb-6">
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
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default KnowMeSection;