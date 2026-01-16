import React from 'react';
import { FiCpu, FiLayers, FiDatabase, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <FiCpu size={32} color="var(--neon-purple)" />,
        title: "AI Applications",
        desc: "Chatbots, copilots, automation, intelligent features"
    },
    {
        icon: <FiLayers size={32} color="var(--neon-cyan)" />,
        title: "Full-Stack Products",
        desc: "Web apps, dashboards, internal tools"
    },
    {
        icon: <FiDatabase size={32} color="var(--neon-green)" />,
        title: "Backend Systems",
        desc: "APIs, auth, scalable architectures"
    },
    {
        icon: <FiZap size={32} color="#ffde00" />, // Zap usually yellow or custom neon
        title: "Startup MVPs",
        desc: "Fast builds, real users, real feedback"
    }
];

const WhatWeBuild = () => {
    return (
        <section className="section" id="services">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>What We Build</h2>
                    <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem',
                        fontStyle: 'italic'
                    }}>
                        Design that supports function.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>{item.icon}</div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeBuild;
