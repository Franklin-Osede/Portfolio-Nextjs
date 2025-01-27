'use client';

import { useState } from 'react';
import ClientOnly from '@/components/ClientOnly';
import HeroSection from '@/components/HeroSection';
import KnowMeSection from '@/components/KnowMeSection';
import KnowledgeBlocks from '@/components/KnowledgeBlocks';
import AboutMeSection from '@/components/AboutMeSection';
import BlogSection from '@/components/BlogSection';

export default function Home() {
  const [knowMeVisible, setKnowMeVisible] = useState(false);
  const [knowledgeVisible, setKnowledgeVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);

  const handleHeroVisible = () => {
    // Mostrar Know Me Section después de 1 segundo
    setTimeout(() => {
      setKnowMeVisible(true);

      // Mostrar Knowledge Blocks después de otros 800 ms
      setTimeout(() => {
        setKnowledgeVisible(true);

        // Mostrar About Me Section después de otros 800 ms
        setTimeout(() => {
          setAboutVisible(true);

          // Mostrar Blog Section después de otros 600 ms
          setTimeout(() => {
            setBlogVisible(true);
          }, 600);
        }, 800);
      }, 800);
    }, 1000);
  };

  return (
    <main>
      <ClientOnly>
        {/* Hero Section */}
        <HeroSection onVisible={handleHeroVisible} />

        {/* Know Me Section */}
        {knowMeVisible && <KnowMeSection />}

        {/* Knowledge Blocks */}
        {knowledgeVisible && <KnowledgeBlocks />}

        {/* About Me Section */}
        {aboutVisible && <AboutMeSection />}

        {/* Blog Section */}
        {blogVisible && <BlogSection />}
      </ClientOnly>
    </main>
  );
}
