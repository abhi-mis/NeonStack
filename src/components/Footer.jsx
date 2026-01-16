import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <div className="container">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>Neon Stack</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Bright ideas. Intelligent builds.</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                    <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><FiMail /></a>
                    <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><FiGithub /></a>
                    <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><FiLinkedin /></a>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#555' }}>
                    &copy; 2026 Neon Stack. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
