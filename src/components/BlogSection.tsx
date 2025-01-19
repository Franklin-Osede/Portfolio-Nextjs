'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const BlogSection = ({ visible }: { visible: boolean }) => {
  const posts = [
    { title: 'Post 1', description: 'Description of Post 1' },
    { title: 'Post 2', description: 'Description of Post 2' },
  ];

  if (!visible) return null; // Evitar que BlogSection se renderice si no es visible.

  return (
    <section id="blog" className="py-20 bg-darkBlue text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-10">Blog</h2>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-navyBlue rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <p className="text-gray-400">{post.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(BlogSection), { ssr: false });
