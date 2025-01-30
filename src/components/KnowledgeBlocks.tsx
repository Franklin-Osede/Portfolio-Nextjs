import React, { useState } from 'react';
import { motion } from 'framer-motion';

const KnowledgeBlocks = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const blocks = [
    {
      title: 'JavaScript',
      topics: [
        { 
          label: 'Variables & Data Types', 
          url: 'https://www.youtube.com/embed/9WtkVYKLEGI?autoplay=0'
        },
        { 
          label: 'Functions & Scope', 
          url: 'https://www.youtube.com/embed/SHINoHxvTso?autoplay=0'
        },
        { 
          label: 'Arrays & Objects', 
          url: 'https://www.youtube.com/embed/1S8SBDhA7HA?autoplay=0'
        },
        { 
          label: 'DOM Manipulation', 
          url: 'https://www.youtube.com/embed/5fb2aPlgoys?autoplay=0'
        },
      ],
    },
  ];

  const handleTopicClick = (idx: number) => {
    setSelectedVideo(selectedVideo === idx ? null : idx);
  };

  return (
    <section
      id="knowledge"
      className="min-h-screen relative overflow-hidden py-10 px-4"
      style={{
        background: 'linear-gradient(270deg, rgba(10, 26, 47, 0.98), rgba(15, 42, 74, 0.92), rgba(10, 26, 47, 0.98))',
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
        
        @keyframes pulseAnimation {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
      <div className="container mx-auto max-w-5xl pt-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            JavaScript
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
                className={`w-full text-left group relative ${openIndex === null ? 'animate-[pulseAnimation_2s_ease-in-out_infinite]' : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white text-xl group-hover:text-turquoiseBlue transition-colors">
                    Videos Javascipt
                  </span>
                  {openIndex === null && (
                    <span className="text-white text-sm opacity-80">
                      Click to explore →
                    </span>
                  )}
                </div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="space-y-4">
                    {block.topics.map((topic, idx) => (
                      <div key={idx}>
                        <div 
                          className="text-white hover:text-turquoiseBlue transition-colors p-2 cursor-pointer flex items-center justify-between"
                          onClick={() => handleTopicClick(idx)}
                        >
                          <span>{topic.label}</span>
                          <span className="text-sm text-white">
                            {selectedVideo === idx ? 'Click to close' : 'Click to watch'}
                          </span>
                        </div>
                        {selectedVideo === idx && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <iframe
                              src={topic.url}
                              title={topic.label}
                              className="w-full h-64 rounded-lg border border-turquoiseBlue/20 mt-2"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
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