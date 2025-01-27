'use client';

const BlogSection = () => {
  return (
    <section id="blog" className="min-h-screen bg-darkBlue relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-darkBlue to-navyBlue opacity-50" />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-turquoiseBlue to-skyBlue bg-clip-text text-transparent">
            Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Sharing thoughts and experiences about technology, development, and innovation.
          </p>
          <div className="text-white">
            Coming soon...
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;