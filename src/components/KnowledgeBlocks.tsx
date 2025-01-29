'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

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
        background: 'linear-gradient(270deg, #0a1a3f, #0f2a5a, #0a1a3f)',
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
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Passionate About Clean Web 3, Tech & Innovation
        </h2>
        <div className="space-y-6">
          {blocks.map((block, index) => (
            <div
              key={block.title}
              className="bg-darkBlue p-6 rounded-lg"
              style={{
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              }}
            >
              <button
                className="w-full text-left text-white text-2xl hover:text-turquoiseBlue transition-colors"
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
                      className="w-full h-64 rounded-lg"
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

export default dynamic(() => Promise.resolve(KnowledgeBlocks), { ssr: false });