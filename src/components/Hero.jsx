import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringTitle, setIsHoveringTitle] = useState(false);
  const heroRef = useRef(null);

  // Smooth mouse tracking for cursor
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { damping: 50, stiffness: 400 });
  const smoothCursorY = useSpring(cursorY, { damping: 50, stiffness: 400 });

  // Parallax effects (separate from cursor)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  const parallaxX = useTransform(smoothMouseX, [-500, 500], [-20, 20]);
  const parallaxY = useTransform(smoothMouseY, [-500, 500], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update cursor position (absolute)
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Update parallax (relative to hero section)
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY, mouseX, mouseY]);

  // Character animation variants
  const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    })
  };

  const glitchVariants = {
    initial: { x: 0, textShadow: 'none' },
    glitch: {
      x: [0, -2, 2, -2, 2, 0],
      textShadow: [
        'none',
        '2px 2px 0 var(--neon-cyan), -2px -2px 0 var(--neon-purple)',
        '-2px 2px 0 var(--neon-cyan), 2px -2px 0 var(--neon-purple)',
        '2px -2px 0 var(--neon-cyan), -2px 2px 0 var(--neon-purple)',
        'none'
      ],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  const titleText = "We Build";
  const gradientText = "Intelligent Products";

  return (
    <section
      ref={heroRef}
      className="section animated-gradient-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Custom Cursor */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '2px solid var(--neon-cyan)',
          pointerEvents: 'none',
          zIndex: 9999,
          x: smoothCursorX,
          y: smoothCursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isHoveringTitle ? 2 : 1,
          backgroundColor: isHoveringTitle ? 'rgba(0, 243, 255, 0.2)' : 'transparent'
        }}
      />

      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--neon-cyan)',
          pointerEvents: 'none',
          zIndex: 9999,
          x: smoothCursorX,
          y: smoothCursorY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 10px var(--neon-cyan)'
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            background: 'var(--neon-cyan)',
            boxShadow: '0 0 10px var(--neon-cyan)',
            opacity: 0.3
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Animated Background Glows with Parallax */}
      <motion.div
        className="glow-effect"
        style={{
          top: '20%',
          left: '20%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, var(--neon-cyan) 0%, rgba(0,0,0,0) 70%)',
          opacity: 0.15,
          x: parallaxX,
          y: parallaxY
        }}
      />
      <motion.div
        className="glow-effect"
        style={{
          bottom: '10%',
          right: '10%',
          width: '30vw',
          height: '30vw',
          background: 'radial-gradient(circle, var(--neon-purple) 0%, rgba(0,0,0,0) 70%)',
          opacity: 0.15,
          x: useTransform(smoothMouseX, [-500, 500], [15, -15]),
          y: useTransform(smoothMouseY, [-500, 500], [15, -15])
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Real-time Status with Pulse Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
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
            color: 'var(--text-secondary)',
            cursor: 'pointer'
          }}
        >
          <motion.span
            style={{
              display: 'block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--neon-green)',
              boxShadow: '0 0 8px var(--neon-green)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          Accepting new projects for Q2
        </motion.div>

        {/* Animated Title with Character Reveal */}
        <h1
          style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            perspective: '1000px'
          }}
          onMouseEnter={() => setIsHoveringTitle(true)}
          onMouseLeave={() => setIsHoveringTitle(false)}
        >
          <div style={{ marginBottom: '0.2em' }}>
            {titleText.split('').map((char, i) => (
              <motion.span
                key={`title-${i}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={charVariants}
                whileHover={{
                  scale: 1.2,
                  color: 'var(--neon-cyan)',
                  textShadow: '0 0 20px var(--neon-cyan)',
                  transition: { duration: 0.2 }
                }}
                style={{
                  display: 'inline-block',
                  marginRight: char === ' ' ? '0.3em' : '0',
                  cursor: 'pointer'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          <motion.div
            variants={glitchVariants}
            initial="initial"
            animate={isHoveringTitle ? "glitch" : "initial"}
          >
            {gradientText.split('').map((char, i) => (
              <motion.span
                key={`gradient-${i}`}
                custom={i + titleText.length}
                initial="hidden"
                animate="visible"
                variants={charVariants}
                className="text-gradient"
                whileHover={{
                  scale: 1.2,
                  filter: 'brightness(1.5)',
                  transition: { duration: 0.2 }
                }}
                style={{
                  display: 'inline-block',
                  marginRight: char === ' ' ? '0.3em' : '0',
                  cursor: 'pointer',
                  background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple), var(--neon-cyan))',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradientShift 3s linear infinite'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        </h1>

        {/* Animated Description with Typing Effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{
            fontSize: '1.3rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '650px',
            margin: '0 auto 3rem'
          }}
        >
          From idea to scale. Full-stack engineering + AI integration for the next generation of startups.
        </motion.p>

        {/* Magnetic Buttons with Enhanced Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
        >
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 243, 255, 0.6)',
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <motion.span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                transform: 'translateX(-100%)'
              }}
              animate={{
                transform: ['translateX(-100%)', 'translateX(100%)']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
            Start a Project
          </motion.a>

          <motion.a
            href="#projects"
            className="btn btn-outline"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)',
              borderColor: 'var(--neon-purple)',
              color: 'var(--neon-purple)',
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Performance Signals with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            opacity: 0.7,
            flexWrap: 'wrap'
          }}
        >
          {['⚡ Fast. Lightweight.', '🔒 Secure by default.', '🤖 Native AI Integrations.'].map((text, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
              whileHover={{
                opacity: 1,
                scale: 1.1,
                color: 'var(--neon-cyan)',
                transition: { duration: 0.2 }
              }}
              style={{ cursor: 'pointer' }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Animated Grid Overlay */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.3
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Mouse Follower Glow */}
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 243, 255, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
    </section>
  );
};

export default Hero;
