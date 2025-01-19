'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const KnowledgeBlocks = () => {
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

  const toggleBlock = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="knowledge"
      className="bg-navyBlue py-16 px-4 text-white text-center"
    >
      {/* Título principal */}
      <h2 className="text-4xl font-bold mb-6">
        &quot;Teaching is the best way to learn&quot;
      </h2>
      <p className="text-lg text-gray-400 mb-12">
        Explore and deepen your knowledge through these resources.
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        {data.map((block, index) => (
          <div
            key={block.title}
            className="bg-darkBlue rounded-lg shadow-md p-4"
          >
            <button
              onClick={() => toggleBlock(index)}
              className="w-full text-left text-2xl font-semibold text-turquoiseBlue flex justify-between items-center"
            >
              {block.title}
              <span className="text-lg">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>

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
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-left text-lg text-gray-300 hover:text-turquoiseBlue"
                    >
                      {link.label}
                    </a>

                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 top-0 w-64 h-36 bg-black border-2 border-turquoiseBlue rounded-md overflow-hidden shadow-lg hidden group-hover:block z-10"
                    >
                      <iframe
                        src={link.url}
                        title={link.label}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </motion.div>
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
