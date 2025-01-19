'use client'

import ClientOnly from '@/components/ClientOnly';
import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutMeSection';// Ruta correcta según la configuración
import BlogSection from '@/components/BlogSection';
import { useState } from 'react';

export default function Home() {
  const [blogVisible, setBlogVisible] = useState(false);

  return (
    <main>
      <ClientOnly>
        <HeroSection />
        <AboutMeSection
          onVisible={() => setBlogVisible(true)}
        />
        <BlogSection visible={blogVisible} />
      </ClientOnly>
    </main>
  );
}
