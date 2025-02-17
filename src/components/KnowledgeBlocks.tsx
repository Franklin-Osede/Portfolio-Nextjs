import React, { useState } from 'react';
import { motion } from 'framer-motion';

const KnowledgeBlocks = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

    // Define which blocks should be visible
    const visibleBlocks = [
      'Coding Katas',
      'JavaScript',
      'DevOps',

    
    ];

  const blocks = [
    {
      title: 'Coding Katas',
      topics: [
        { 
          label: 'String Manipulation', 
          url: 'https://youtube.com/embed/yAZ57WN_jUA'
        },
        { 
          label: 'Dynamic Programming', 
          url: 'https://youtube.com/embed/DwSii91VxQQ'
        },
        { 
          label: 'Circular Array Loop', 
          url: 'https://www.youtube.com/embed/liBfm5z8KFc'
        },
      ],
    },
    {
      title: 'DevOps',
      topics: [
        { 
          label: 'Understanding Kubernetes',
          url: 'https://youtube.com/embed/BUAqMrxmnk0'
        },
      ],
    },
    {
      title: 'Test Driven Development',
      topics: [
        { 
          label: 'Basic Katas', 
          url: 'https://www.youtube.com/embed/example1?autoplay=0'
        },
        { 
          label: 'Intermediate Katas', 
          url: 'https://www.youtube.com/embed/example2?autoplay=0'
        },
        { 
          label: 'Advanced Katas', 
          url: 'https://www.youtube.com/embed/example3?autoplay=0'
        },
      ],
    },
    {
      title: 'Solidity',
      topics: [
        { 
          label: 'Smart Contract Basics', 
          url: 'https://www.youtube.com/embed/example7?autoplay=0'
        },
        { 
          label: 'Deploying Contracts', 
          url: 'https://www.youtube.com/embed/example8?autoplay=0'
        },
        { 
          label: 'Advanced Solidity', 
          url: 'https://www.youtube.com/embed/example9?autoplay=0'
        },
      ],
    },
    {
      title: 'Rust',
      topics: [
        { 
          label: 'Getting Started with Rust', 
          url: 'https://www.youtube.com/embed/example10?autoplay=0'
        },
        { 
          label: 'Ownership & Borrowing', 
          url: 'https://www.youtube.com/embed/example11?autoplay=0'
        },
        { 
          label: 'Concurrency in Rust', 
          url: 'https://www.youtube.com/embed/example12?autoplay=0'
        },
      ],
    },
    {
      title: 'Smart Contract Hacking',
      topics: [
        { 
          label: 'Introduction to Smart Contract Security', 
          url: 'https://www.youtube.com/embed/example13?autoplay=0'
        },
        { 
          label: 'Common Vulnerabilities', 
          url: 'https://www.youtube.com/embed/example14?autoplay=0'
        },
        { 
          label: 'Exploiting Smart Contracts', 
          url: 'https://www.youtube.com/embed/example15?autoplay=0'
        },
      ],
    },
    {
      title: 'Back-End Development',
      topics: [
        { 
          label: 'Node.js Basics', 
          url: 'https://www.youtube.com/embed/example19?autoplay=0'
        },
        { 
          label: 'REST APIs', 
          url: 'https://www.youtube.com/embed/example20?autoplay=0'
        },
        { 
          label: 'Database Integration', 
          url: 'https://www.youtube.com/embed/example21?autoplay=0'
        },
      ],
    },
    {
      title: 'AWS',
      topics: [
        { 
          label: 'EC2 & S3 Basics', 
          url: 'https://www.youtube.com/embed/example16?autoplay=0'
        },
        { 
          label: 'Lambda & API Gateway', 
          url: 'https://www.youtube.com/embed/example17?autoplay=0'
        },
        { 
          label: 'CloudFormation & IAM', 
          url: 'https://www.youtube.com/embed/example18?autoplay=0'
        },
      ],
    },
    {
      title: 'Google Cloud',
      topics: [
        { 
          label: 'EC2 & S3 Basics', 
          url: 'https://www.youtube.com/embed/example16?autoplay=0'
        },
        { 
          label: 'Lambda & API Gateway', 
          url: 'https://www.youtube.com/embed/example17?autoplay=0'
        },
        { 
          label: 'CloudFormation & IAM', 
          url: 'https://www.youtube.com/embed/example18?autoplay=0'
        },
      ],
    },
    {
      title: 'Azure',
      topics: [
        { 
          label: 'EC2 & S3 Basics', 
          url: 'https://www.youtube.com/embed/example16?autoplay=0'
        },
        { 
          label: 'Lambda & API Gateway', 
          url: 'https://www.youtube.com/embed/example17?autoplay=0'
        },
        { 
          label: 'CloudFormation & IAM', 
          url: 'https://www.youtube.com/embed/example18?autoplay=0'
        },
      ],
    },
    {
      title: 'TypeScript',
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
      ],
    },
    {
      title: 'JavaScript',
      topics: [
        { 
          label: 'History and Hoisting', 
          url: 'https://youtube.com/embed/B6pb0oaBSng'
        },
        { 
          label: 'Functional Programming', 
          url: 'https://youtube.com/embed/EX9zCzJXo5s'
        },
      ],
    },
    {
      title: 'Design Architecture',
      topics: [
        { 
          label: 'Microservices vs Monolith', 
          url: 'https://www.youtube.com/embed/example22?autoplay=0'
        },
        { 
          label: 'Event-Driven Architecture', 
          url: 'https://www.youtube.com/embed/example23?autoplay=0'
        },
        { 
          label: 'Scalability Patterns', 
          url: 'https://www.youtube.com/embed/example24?autoplay=0'
        },
      ],
    },
    {
      title: 'Data Structures & Algorithms',
      topics: [
        { 
          label: 'Microservices vs Monolith', 
          url: 'https://www.youtube.com/embed/example22?autoplay=0'
        },
        { 
          label: 'Event-Driven Architecture', 
          url: 'https://www.youtube.com/embed/example23?autoplay=0'
        },
        { 
          label: 'Scalability Patterns', 
          url: 'https://www.youtube.com/embed/example24?autoplay=0'
        },
      ],
    },
  ];

  const handleTopicClick = (idx: number) => {
    setSelectedVideo(selectedVideo === idx ? null : idx);
  };

  // Filtrar los bloques basados en visibleBlocks
  const filteredBlocks = blocks.filter(block => visibleBlocks.includes(block.title));

  return (
    <section
      id="knowledge"
      className="relative overflow-hidden py-10 px-4"
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

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
      <div className="container mx-auto max-w-5xl pt-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            Tech Explained <span className="inline-block animate-bounce">↓</span>
          </span>
        </h2>
        <div className="space-y-6">
          {filteredBlocks.map((block, index) => (
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
                    {block.title}
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