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
    <section id="knowledge" className="min-h-screen bg-navyBlue relative overflow-hidden py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Knowledge Blocks</h2>
        <div className="space-y-6">
          {blocks.map((block, index) => (
            <div key={block.title} className="bg-darkBlue p-6 rounded-lg">
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