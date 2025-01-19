'use client';

import { motion } from 'framer-motion';
import { Code, Cloud, Lock, Server } from 'lucide-react';
import dynamic from 'next/dynamic';

const AboutSection = ({ onVisible }: { onVisible: () => void }) => {
  const features = [
    { icon: Code, title: 'Software Development', description: 'Full-stack development.' },
    { icon: Cloud, title: 'Cloud Architecture', description: 'Scalable infrastructure.' },
    { icon: Lock, title: 'Blockchain', description: 'Web3 integration.' },
    { icon: Server, title: 'DevOps', description: 'CI/CD pipelines.' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-darkBlue relative overflow-hidden"
    >
      {/* Fondo con animación */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        onViewportEnter={onVisible} // Notifica al padre cuando AboutSection es visible
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-darkBlue to-navyBlue opacity-50"
      />

      {/* Contenido del AboutSection */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-4 py-20"
      >
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-turquoiseBlue to-skyBlue bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about building scalable solutions and transforming ideas into reality.
              With expertise in modern technologies and a focus on quality.
            </p>
          </motion.div>

          {/* Contenido Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Columna Izquierda */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-turquoiseBlue">
                Software & DevOps Engineer
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Specializing in building robust cloud infrastructure and implementing
                  efficient CI/CD pipelines. Experienced in both frontend and backend
                  development with a strong focus on security and scalability.
                </p>
                <p>
                  Currently working on blockchain solutions and cloud-native
                  applications, always eager to learn and adapt to new technologies.
                </p>
              </div>

              {/* Habilidades */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  'Cloud Architecture',
                  'DevOps Practices',
                  'Backend Development',
                  'Frontend Development',
                  'Blockchain',
                  'Security',
                  'CI/CD',
                  'Microservices',
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-turquoiseBlue rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Columna Derecha */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-navyBlue/30 backdrop-blur-sm rounded-lg border border-turquoiseBlue/20 hover:border-turquoiseBlue/40 transition-colors"
                >
                  <feature.icon className="w-10 h-10 text-turquoiseBlue mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(AboutSection), { ssr: false });
