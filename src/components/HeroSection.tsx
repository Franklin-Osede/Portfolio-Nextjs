'use client'

import { Parallax } from 'react-parallax';

const HeroSection = () => (
  <Parallax bgImage="/images/bg.jpg" strength={300}>
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-white">I’m Franklin</h1>
      <p className="text-xl text-gray-300">Software & DevOps Engineer</p>
    </div>
  </Parallax>
);

export default HeroSection;
