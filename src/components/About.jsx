import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
            <div className="container">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.4' }}
                >
                    Neon Stack is a two-person AI-first engineering studio building modern digital products.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    style={{ marginTop: '1.5rem', color: 'var(--neon-cyan)', fontSize: '1.1rem', letterSpacing: '0.5px' }}
                >
                    SMALL TEAM. SERIOUS OUTPUT.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        marginTop: '1rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        fontStyle: 'italic'
                    }}
                >
                    Built for real businesses.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
