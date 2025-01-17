const AboutMeSection = () => {
  return (
    <section className="py-20 bg-darkBlue text-center text-white">
      <h2 className="text-4xl font-bold mb-6">Get to Know Me More</h2>
      <iframe
        width="80%"
        height="400"
        src="https://www.youtube.com/embed/example"
        title="About Me"
        className="rounded-lg mx-auto"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default AboutMeSection;
