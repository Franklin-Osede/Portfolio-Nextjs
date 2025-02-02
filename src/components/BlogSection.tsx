'use client';
import { motion } from 'framer-motion';

const BlogSection = () => {
  const posts = [
    {
      title: "From Server Rooms to the Cloud: The Evolution of Application Deployment",
      description: "A journey through the transformation of software deployment, from physical servers to modern container orchestration",
      url: "https://medium.com/@franksoftwaredevelop/from-server-rooms-to-the-cloud-the-evolution-of-application-deployment-6ba096cf7478"
    },
    {
      title: "Code Kata Challenges: Are We Really Becoming Better Developers?",
      description: "An analysis of whether code kata challenges truly improve developers' skills or just reinforce patterns.",
      url: "https://medium.com/@franksoftwaredevelop/code-kata-challenges-are-we-really-becoming-better-developers-95bf86f4ae03"
    }
  ];

  const handlePostClick = (clickedIndex: number) => {
    window.open(posts[clickedIndex].url, '_blank');
  };

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
                onClick={() => handlePostClick(index)}
                className="p-6 rounded-lg border-2 border-turquoiseBlue/30 hover:border-turquoiseBlue/60 transition-all cursor-pointer"
                style={{
                  background: 'linear-gradient(270deg, rgba(10, 26, 47, 0.7), rgba(15, 42, 74, 0.8), rgba(10, 26, 47, 0.7))'
                }}
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-300">{post.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;