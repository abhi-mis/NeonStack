import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '1rem 0',
            zIndex: 100,
            transition: 'all 0.3s',
            background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(0, 243, 255, 0.1)' : 'none',
            boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.div
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Animated Logo Icon */}
                    <motion.div
                        style={{
                            width: '32px',
                            height: '32px',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '3px'
                        }}
                        whileHover="hover"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                style={{
                                    height: '3px',
                                    borderRadius: '2px',
                                    background: i === 1
                                        ? 'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))'
                                        : 'var(--neon-cyan)',
                                    boxShadow: `0 0 10px ${i === 1 ? 'var(--neon-purple)' : 'var(--neon-cyan)'}`,
                                    width: i === 0 ? '100%' : i === 1 ? '80%' : '60%',
                                    marginLeft: i === 2 ? 'auto' : '0'
                                }}
                                variants={{
                                    hover: {
                                        width: '100%',
                                        boxShadow: `0 0 15px ${i === 1 ? 'var(--neon-purple)' : 'var(--neon-cyan)'}`,
                                        transition: { duration: 0.3 }
                                    }
                                }}
                            />
                        ))}
                    </motion.div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            fontWeight: '700',
                            fontSize: '1.3rem',
                            letterSpacing: '-0.05em',
                            background: 'linear-gradient(135deg, #fff 0%, var(--neon-cyan) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            NEON<span style={{
                                background: 'linear-gradient(135deg, var(--neon-cyan) 0%, var(--neon-purple) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>STACK</span>
                        </div>
                        <motion.span
                            style={{
                                fontSize: '0.65rem',
                                background: 'linear-gradient(135deg, rgba(188, 19, 254, 0.2), rgba(0, 243, 255, 0.2))',
                                color: 'var(--neon-purple)',
                                padding: '3px 10px',
                                borderRadius: '12px',
                                border: '1px solid rgba(188, 19, 254, 0.4)',
                                fontWeight: '700',
                                letterSpacing: '0.5px',
                                boxShadow: '0 0 10px rgba(188, 19, 254, 0.2)'
                            }}
                            whileHover={{
                                boxShadow: '0 0 20px rgba(188, 19, 254, 0.4)',
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                        >
                            AI-FIRST
                        </motion.span>
                    </div>
                </motion.div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div className="nav-links" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '500' }}>
                        <motion.a
                            href="#services"
                            style={{ color: 'var(--text-secondary)', position: 'relative' }}
                            whileHover={{ color: 'var(--neon-cyan)' }}
                        >
                            Services
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    bottom: '-4px',
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))',
                                    scaleX: 0,
                                    transformOrigin: 'left'
                                }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                        <motion.a
                            href="#projects"
                            style={{ color: 'var(--text-secondary)', position: 'relative' }}
                            whileHover={{ color: 'var(--neon-cyan)' }}
                        >
                            Work
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    bottom: '-4px',
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))',
                                    scaleX: 0,
                                    transformOrigin: 'left'
                                }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    </div>

                    <motion.button
                        onClick={toggleTheme}
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0.5rem',
                            borderRadius: '8px',
                            transition: 'all 0.3s'
                        }}
                        whileHover={{
                            borderColor: 'var(--neon-cyan)',
                            boxShadow: '0 0 15px rgba(0, 243, 255, 0.3)',
                            scale: 1.05
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                    </motion.button>

                    <motion.a
                        href="#contact"
                        className="btn btn-primary"
                        style={{
                            padding: '0.6rem 1.5rem',
                            fontSize: '0.85rem',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontWeight: '600',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 25px rgba(0, 243, 255, 0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
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
                        Start Project
                    </motion.a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
