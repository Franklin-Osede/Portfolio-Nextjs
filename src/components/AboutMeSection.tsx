'use client';

import { motion } from 'framer-motion';
import { Code, Cloud, Lock, Server } from 'lucide-react';

const AboutMeSection = ({ onVisible }: { onVisible?: () => void }) => {
  const features = [
    { icon: Code, title: 'Software Development', description: 'Full-stack development.' },
    { icon: Cloud, title: 'Cloud Architecture', description: 'Scalable infrastructure.' },
    { icon: Lock, title: 'Blockchain', description: 'Web3 integration.' },
    { icon: Server, title: 'DevOps', description: 'CI/CD pipelines.' },
  ];

  return (
    <section id="about-me" className="min-h-screen bg-darkBlue relative overflow-hidden">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        onViewportEnter={onVisible}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-darkBlue to-navyBlue opacity-50"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-4 py-20"
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-turquoiseBlue to-skyBlue bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Passionate about building scalable solutions and transforming ideas into reality.
              With expertise in modern technologies and a focus on quality.
            </p>
          </motion.div>
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
            <div className="space-y-4 text-gray-300 text-left mx-auto max-w-4xl">
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
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 bg-navyBlue rounded-lg border border-turquoiseBlue/20 text-center"
            >
              <feature.icon className="w-8 h-8 mb-4 text-turquoiseBlue mx-auto" />
              <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;
