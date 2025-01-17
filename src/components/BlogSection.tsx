const BlogSection = () => {
  const posts = [
    { title: 'Post 1', description: 'Description of Post 1' },
    { title: 'Post 2', description: 'Description of Post 2' },
  ];

  return (
    <section className="py-20 bg-darkBlue text-center text-white">
      <h2 className="text-4xl font-bold mb-10">Blog</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {posts.map((post, index) => (
          <div key={index} className="blog-card p-6">
            <h3 className="text-2xl font-bold">{post.title}</h3>
            <p className="text-gray-300">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
