'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const HeroSection = ({ onVisible }: { onVisible: () => void }) => {
  // Notificar al padre que HeroSection es visible
  useEffect(() => {
    onVisible();
  }, [onVisible]);

   // Función para hacer scroll suave
   const scrollToKnowMe = () => {
    const element = document.getElementById('know-me');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Parallax
      bgImage="/images/bg.jpg"
      strength={300}
      blur={0}
      bgImageStyle={{ objectFit: 'cover', opacity: 0.7 }}
    >
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center px-4 pb-10 pt-32"
      >
        {/* Título principal */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          I&apos;m Franklin
        </motion.h1>

        {/* Animación de typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 font-bold mt-4"
        >
          <TypeAnimation
            sequence={[
              'Software Developer',
              2000,
              'Blockchain Engineer',
              2000,
              'DevOps & Cloud Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block font-bold"
          />
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-2 flex-wrap mt-6"
        >
          {['DevOps', 'AWS', 'Blockchain', 'Security'].map((tech) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="px-4 py-1 bg-navyBlue rounded-full text-sm font-medium text-turquoiseBlue border border-turquoiseBlue/30"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Links sociales */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center space-x-6 pt-6"
        >
          {[
            { icon: Github, href: 'https://github.com/yourusername' },
            { icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
            { icon: Mail, href: 'mailto:your@email.com' },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-turquoiseBlue transition-colors duration-300"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>

        {/* Botón y flecha */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="pt-6 flex flex-col items-center"
        >
          <button
            onClick={scrollToKnowMe}
            className="inline-flex items-center gap-2 px-8 py-3 bg-button-gradient rounded-full text-white font-semibold hover:shadow-glow transition-all duration-300"
          >
            View My Work
          </button>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="mt-8 cursor-pointer"
          >
            <button onClick={scrollToKnowMe}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-8 h-8 hover:opacity-80 transition-opacity"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12.75L12 20.25L4.5 12.75"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </Parallax>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
