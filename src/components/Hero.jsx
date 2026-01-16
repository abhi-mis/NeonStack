import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section animated-gradient-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
      {/* Background Visual */}
      <div className="glow-effect" style={{ top: '20%', left: '20%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, var(--neon-cyan) 0%, rgba(0,0,0,0) 70%)', opacity: 0.15 }}></div>
      <div className="glow-effect" style={{ bottom: '10%', right: '10%', width: '30vw', height: '30vw', background: 'radial-gradient(circle, var(--neon-purple) 0%, rgba(0,0,0,0) 70%)', opacity: 0.15 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Real-time Status */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '20px',
            background: 'var(--bg-card)',
            border: 'var(--glass-border)',
            marginBottom: '2rem',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}
        >
          <span style={{ display: 'block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', boxShadow: '0 0 8px var(--neon-green)' }}></span>
          Accepting new projects for Q2
        </motion.div>

        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: '1.1' }}>
          {['We', 'Build'].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{ display: 'inline-block', marginRight: '0.3em' }}
            >
              {word}
            </motion.span>
          ))}
          {['Intelligent', 'Products'].map((word, i) => (
            <motion.span
              key={i}
              className="text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              style={{ display: 'inline-block', marginRight: i === 0 ? '0.3em' : '0' }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '650px', margin: '0 auto 3rem' }}
        >
          From idea to scale. Full-stack engineering + AI integration for the next generation of startups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
        >
          <a href="#contact" className="btn btn-primary magnetic-hover">Start a Project</a>
          <a href="#projects" className="btn btn-outline magnetic-hover">View Work</a>
        </motion.div>

        {/* Performance Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.7 }}
        >
          <span>⚡ Fast. Lightweight.</span>
          <span>🔒 Secure by default.</span>
          <span>🤖 Native AI Integrations.</span>
        </motion.div>
      </div>

      {/* Grid Overlay for texture */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.3
      }}></div>
    </section>
  );
};

export default Hero;
