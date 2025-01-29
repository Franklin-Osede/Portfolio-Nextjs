'use client';

import dynamic from 'next/dynamic';

const KnowMeSection = () => {
  return (
    <section id="know-me" className=" bg-darkBlue relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-darkBlue to-navyBlue opacity-50" />
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold text-turquoiseBlue mb-6">Get To Know Me</h3>
            <div className="relative w-full max-w-4xl mx-auto aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg border border-turquoiseBlue/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(KnowMeSection), { ssr: false });