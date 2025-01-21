'use client';

import { useState } from 'react';
import ClientOnly from '@/components/ClientOnly';
import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutMeSection';
import KnowledgeBlocks from '@/components/KnowledgeBlocks';
import BlogSection from '@/components/BlogSection';

export default function Home() {
  const [aboutVisible, setAboutVisible] = useState(false);
  const [knowledgeVisible, setKnowledgeVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);

  const handleHeroVisible = () => {
    setTimeout(() => {
      setAboutVisible(true);
      setTimeout(() => {
        setKnowledgeVisible(true);
        setTimeout(() => {
          setBlogVisible(true);
        }, 600);
      }, 800);
    }, 1000);
  };

  return (
    <main>
      <ClientOnly>
        {/* Hero Section */}
        <HeroSection onVisible={handleHeroVisible} />

        {/* About Me Section */}
        {aboutVisible && <AboutMeSection onVisible={() => {}} />}

        {/* Knowledge Blocks */}
        {knowledgeVisible && <KnowledgeBlocks />}

        {/* Blog Section */}
        {blogVisible && <BlogSection />}
      </ClientOnly>
    </main>
  );
}
