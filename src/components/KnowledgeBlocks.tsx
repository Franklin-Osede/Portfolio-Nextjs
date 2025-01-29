import React, { useState } from 'react';
import { motion } from 'framer-motion';

const KnowledgeBlocks = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const blocks = [
    {
      title: 'JavaScript',
      resources: [
        { label: 'Intro to JavaScript', url: 'https://www.youtube.com/embed/W6NZfCO5SIk' },
      ],
    },
  ];

  return (
    <section
      id="knowledge"
      className="min-h-screen relative overflow-hidden py-20 px-4"
      style={{
        background: 'linear-gradient(270deg, rgba(10, 26, 47, 0.9), rgba(15, 42, 74, 0.9), rgba(10, 26, 47, 0.9))',
        backgroundSize: '600% 600%',
        animation: 'gradientAnimation 10s ease infinite',
      }}
    >
      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            Passionate About Clean Web 3, Tech & Innovation
          </span>
        </h2>
        <div className="space-y-6">
          {blocks.map((block, index) => (
            <div
              key={block.title}
              className="bg-darkBlue bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-turquoiseBlue/20"
              style={{
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              }}
            >
              <button
                className="w-full text-left text-white text-xl hover:text-turquoiseBlue transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {block.title}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 overflow-hidden"
                >
                  {block.resources.map((resource, idx) => (
                    <iframe
                      key={idx}
                      src={resource.url}
                      title={resource.label}
                      className="w-full h-64 rounded-lg border border-turquoiseBlue/20"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBlocks;