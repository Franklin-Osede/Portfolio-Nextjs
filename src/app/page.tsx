'use client';

import { useState } from 'react';
import ClientOnly from '@/components/ClientOnly';
import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutMeSection';
import KnowledgeBlocks from '@/components/KnowledgeBlocks'; // Ensure the path is correct
import BlogSection from '@/components/BlogSection'; // Ensure the path is correct

export default function Home() {
  // State variables to manage visibility
  const [aboutVisible, setAboutVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);

  return (
    <main>
      <ClientOnly>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutMeSection
          onVisible={() => {
            setAboutVisible(true);
            setTimeout(() => setBlogVisible(true), 300); // Ensure proper sequence
          }}
        />

        {/* Knowledge Blocks */}
        {aboutVisible && <KnowledgeBlocks visible={true} />}

        {/* Blog Section */}
        {blogVisible && <BlogSection visible={blogVisible} />}
      </ClientOnly>
    </main>
  );
}
