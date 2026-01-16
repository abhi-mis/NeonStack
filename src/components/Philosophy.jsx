import React from 'react';
import { motion } from 'framer-motion';

const principles = [
    { title: "Ship > Perfect", desc: "Real users define perfection." },
    { title: "AI Where It Matters", desc: "No buzzword stuffing." },
    { title: "Clean Code Scales", desc: "Future-proof by default." },
    { title: "Speed With Intent", desc: "Fast, but never broken." }
];

const Philosophy = () => {
    return (
        <section className="section" style={{ padding: '4rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--neon-cyan)',
                        marginBottom: '0.5rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em'
                    }}>
                        Clean systems &gt; flashy demos.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                    {principles.map((p, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            style={{ padding: '1.5rem', borderLeft: '2px solid var(--neon-cyan)' }}
                        >
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
