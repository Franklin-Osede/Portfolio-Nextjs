'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const posts = [
    {
      title: "Building Secure Smart Contracts",
      description: "A deep dive into security best practices for Web3 development",
      embedUrl: "https://medium.com/embed/@yourprofile/article1"  // URL para embeber
    },
    {
      title: "Cloud-Native Architecture",
      description: "Modern patterns for scalable cloud infrastructure",
      embedUrl: "https://medium.com/embed/@yourprofile/article2"  // URL para embeber
    }
  ];

  return (
    <section id="blog" className="min-h-screen bg-[#0a1a2f] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(270deg, rgba(10, 26, 47, 0.9), rgba(15, 42, 74, 0.9), rgba(10, 26, 47, 0.9))'
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-turquoiseBlue to-skyBlue bg-clip-text text-transparent">
            Recent Articles
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 mt-12">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedPost(selectedPost === post.embedUrl ? null : post.embedUrl)}
                className="p-6 rounded-lg border-2 border-turquoiseBlue/30 hover:border-turquoiseBlue/60 transition-all cursor-pointer"
                style={{
                  background: 'linear-gradient(270deg, rgba(10, 26, 47, 0.7), rgba(15, 42, 74, 0.8), rgba(10, 26, 47, 0.7))'
                }}
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-300">{post.description}</p>
                
                {selectedPost === post.embedUrl && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <iframe
                      src={post.embedUrl}
                      className="w-full h-[400px] rounded-lg border border-turquoiseBlue/30"
                      frameBorder="0"
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;