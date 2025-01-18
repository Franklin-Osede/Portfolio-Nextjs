import ClientOnly from '@/components/ClientOnly';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import BlogSection from '../components/BlogSection';



export default function Home (){
  return (
    <main>
      <ClientOnly>
      <HeroSection />
      <AboutMeSection />
      <BlogSection />
      </ClientOnly>
    </main>
  );
};


