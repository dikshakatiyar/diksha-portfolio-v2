
import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import ThreeBackground from '../components/ThreeBackground';
import Navigation from '../components/Navigation';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showThreeBackground, setShowThreeBackground] = useState(true);

  useEffect(() => {
    // Fallback for Three.js loading issues
    const timer = setTimeout(() => {
      const canvas = document.querySelector('canvas');
      if (!canvas) {
        console.log('Three.js failed to load, showing fallback');
        setShowThreeBackground(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* 3D Background with fallback */}
      {showThreeBackground && <ThreeBackground />}
      
      {/* Fallback background */}
      {!showThreeBackground && (
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
      )}
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Tech Grid Overlay */}
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0" />
    </div>
  );
};

export default Index;
