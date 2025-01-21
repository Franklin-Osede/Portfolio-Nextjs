'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="min-h-screen bg-darkBlue relative overflow-hidden py-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto max-w-5xl"
      >
        <h2 className="text-4xl font-bold text-white text-center">Blog</h2>
      </motion.div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(BlogSection), { ssr: false });
