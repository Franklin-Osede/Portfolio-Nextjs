'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const KnowledgeBlocks = ({ visible }: { visible: boolean }) => {
  const data = [
    {
      title: 'JavaScript',
      links: [
        { url: 'https://www.youtube.com/embed/W6NZfCO5SIk', label: 'Introduction to JavaScript' },
        { url: 'https://www.youtube.com/embed/hdI2bqOjy3c', label: 'Advanced JavaScript Concepts' },
      ],
    },
    {
      title: 'React',
      links: [
        { url: 'https://www.youtube.com/embed/Ke90Tje7VS0', label: 'React Basics' },
        { url: 'https://www.youtube.com/embed/N3AkSS5hXMA', label: 'React Hooks Overview' },
      ],
    },
    {
      title: 'Node.js',
      links: [
        { url: 'https://www.youtube.com/embed/TlB_eWDSMt4', label: 'Node.js Crash Course' },
        { url: 'https://www.youtube.com/embed/Oe421EPjeBE', label: 'Building APIs with Node.js' },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const toggleBlock = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    setHoveredVideo(null); // Reset video on topic toggle
  };

  if (!visible) {
    return null;
  }

  return (
    <section
      id="knowledge"
      className="bg-navyBlue py-16 px-4 text-white text-center"
    >
      {/* Main Title */}
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        &quot;Teaching is the best way to learn&quot;
      </motion.h2>
      <p className="text-lg text-gray-400 mb-12">
        Explore and deepen your knowledge through these resources.
      </p>

      {/* Knowledge Blocks */}
      <div className="max-w-4xl mx-auto space-y-6">
        {data.map((block, index) => (
          <div
            key={block.title}
            className="bg-darkBlue rounded-lg shadow-md p-4"
          >
            {/* Topic Title */}
            <button
              onClick={() => toggleBlock(index)}
              className="w-full text-left text-2xl font-semibold text-turquoiseBlue flex justify-between items-center"
            >
              {block.title}
              <span className="text-lg">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>

            {/* Links */}
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-4"
              >
                {block.links.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredVideo(link.url)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <span className="block text-left text-lg text-gray-300 hover:text-turquoiseBlue">
                      {link.label}
                    </span>

                    {/* Embedded Video */}
                    {hoveredVideo === link.url && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-12 left-0 w-full max-w-lg mx-auto bg-black border border-turquoiseBlue rounded-md shadow-lg overflow-hidden z-10"
                      >
                        <iframe
                          src={link.url}
                          title={link.label}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-64 rounded-md"
                        />
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeBlocks;
