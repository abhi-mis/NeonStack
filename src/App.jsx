import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeBuild from './components/WhatWeBuild';
import AICapabilities from './components/AICapabilities';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.border = '1px solid var(--neon-cyan)';
    cursor.style.borderRadius = '50%';
    cursor.style.position = 'fixed';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.transition = 'transform 0.1s ease';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.display = 'none'; // Hidden on touch devices by default logic usually, but here simple

    // Only show custom cursor on non-touch if desired, but user asked for "Cursor hover micro-interactions"
    // For simplicity in React, often best to just use CSS or a specialized library, but a simple follower works:
    const width = window.innerWidth;
    if (width > 768) {
      document.body.appendChild(cursor);
      cursor.style.display = 'block';

      const moveCursor = (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      };

      const hoverStart = () => cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
      const hoverEnd = () => cursor.style.transform = 'translate(-50%, -50%) scale(1)';

      window.addEventListener('mousemove', moveCursor);

      // Attach to all links and buttons
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', hoverStart);
        el.addEventListener('mouseleave', hoverEnd);
      });

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        document.querySelectorAll('a, button').forEach(el => {
          el.removeEventListener('mouseenter', hoverStart);
          el.removeEventListener('mouseleave', hoverEnd);
        });
        document.body.removeChild(cursor);
      };
    }
  }, [theme]); // Re-run if theme changes just in case, though not strictly needed

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <WhatWeBuild />
      <div style={{ height: '100px' }}></div> {/* Spacer */}
      <TechStack />
      <AICapabilities />
      <Projects />
      <Philosophy />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
