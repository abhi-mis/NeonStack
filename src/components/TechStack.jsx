import React from 'react';
import { motion } from 'framer-motion';

const techGroups = [
    {
        category: "Frontend Ecosystem",
        items: ["React", "Next.js", "Angular", "Vue", "React Native", "Flutter"]
    },
    {
        category: "Backend & Cloud",
        items: ["Node.js", "Python", "Go", "Firebase", "AWS Lambda", "Supabase"]
    },
    {
        category: "AI & Intelligence",
        items: ["OpenAI API", "Anthropic", "LangChain", "Pinecone", "Hugging Face"]
    }
];

const TechStack = () => {
    return (
        <section className="section" id="tech">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Build Anything Stack</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
                        We’re stack‑agnostic. We choose what scales.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {techGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ borderLeft: `3px solid ${index === 0 ? 'var(--neon-cyan)' : index === 1 ? 'var(--neon-purple)' : 'var(--neon-green)'}` }}
                        >
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>
                                {group.category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {group.items.map((item, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-primary)',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
