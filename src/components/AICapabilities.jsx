import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const capabilities = [
    "LLM-powered apps (chat, search, summarization)",
    "AI-driven workflows & automation",
    "Smart dashboards & data features",
    "Custom AI logic for real use cases"
];

const AICapabilities = () => {
    return (
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>AI Capabilities</h2>
                    <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        fontStyle: 'italic'
                    }}>
                        AI where it actually helps.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', width: '100%' }}>
                    {capabilities.map((cap, index) => (
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
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                fontSize: '1.2rem',
                                padding: '1rem',
                                borderBottom: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <FiCheckCircle color="var(--neon-green)" size={24} />
                            <span style={{ textAlign: 'left' }}>{cap}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ marginTop: '2rem', fontSize: '1rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}
                >
                    Real AI. Not buzzwords.
                </motion.p>
            </div>
        </section>
    );
};

export default AICapabilities;
