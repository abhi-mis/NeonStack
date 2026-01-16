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
            background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ fontWeight: '700', fontSize: '1.2rem', letterSpacing: '-0.05em' }}>
                        NEON <span style={{ color: 'var(--neon-cyan)' }}>STACK</span>
                    </div>
                    <span style={{
                        fontSize: '0.7rem',
                        background: 'rgba(188, 19, 254, 0.2)',
                        color: 'var(--neon-purple)',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        border: '1px solid rgba(188, 19, 254, 0.3)',
                        fontWeight: '600'
                    }}>
                        AI-FIRST
                    </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div className="nav-links" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '500' }}>
                        <a href="#services" style={{ color: 'var(--text-secondary)' }}>Services</a>
                        <a href="#projects" style={{ color: 'var(--text-secondary)' }}>Work</a>
                    </div>

                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>

                    <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem', textDecoration: 'none', borderRadius: '4px' }}>
                        Start Project
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
