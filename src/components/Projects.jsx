import React, { useState } from 'react';
import { motion } from 'framer-motion';

const clientProjects = [
    {
        name: "TaxUpchar",
        tagline: "Legal Solutions Website + Brand Identity",
        description: "Designed and developed a professional website for a legal solutions company, along with a clean, trustworthy logo system aligned with their domain.",
        highlights: [
            "Custom website design",
            "Brand‑aligned logo creation",
            "Clear service structuring",
            "Conversion‑focused layout"
        ],
        tech: ["Web", "UI", "Branding"]
    },
    {
        name: "Galaxy Enterprise",
        tagline: "Import–Export Business Website",
        description: "Built a modern, credibility‑driven website for an import–export company to showcase their services, global presence, and business operations.",
        highlights: [
            "Business‑focused website",
            "Structured service presentation",
            "Clean, corporate‑ready UI",
            "Optimized for trust and clarity"
        ],
        tech: ["Web", "UI", "Corporate Design"]
    }
];

const freelanceProjects = [
    {
        name: "ABHA Card Generation Website",
        description: "Digital flow for healthcare ID generation with clean UI and validation logic.",
        tech: ["React", "API Integration", "UI/UX"]
    },
    {
        name: "AI Avatar Video Generator",
        description: "Built an AI‑powered avatar video solution using HeyGen for automated content creation.",
        tech: ["AI", "HeyGen API", "Automation"]
    },
    {
        name: "All‑in‑One Business Dashboard",
        description: "Designed and developed an end‑to‑end internal system to manage finances, lead tracking, business statistics, and future opportunities.",
        tech: ["Dashboard", "Analytics", "Full-Stack"]
    },
    {
        name: "Hospitality Analytics Dashboard",
        description: "Created a centralized dashboard for a hotel business (including Skepsi Hotel) to track operations and performance metrics.",
        tech: ["Analytics", "Hospitality", "Data Viz"]
    }
];

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <section className="section" id="projects" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
                        Things We've Built
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Real products. Real use cases. Real impact.
                    </p>
                </motion.div>

                {/* Client Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '2rem',
                        color: 'var(--neon-cyan)',
                        fontWeight: 600
                    }}>
                        Client Projects
                    </h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                        marginBottom: '5rem'
                    }}
                >
                    {clientProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="project-card"
                            onMouseEnter={() => setHoveredIndex(`client-${index}`)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '320px'
                            }}
                        >
                            <div style={{ flex: 1 }}>
                                <h4 style={{
                                    fontSize: '1.6rem',
                                    marginBottom: '0.5rem',
                                    color: '#fff',
                                    fontWeight: 600
                                }}>
                                    {project.name}
                                </h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--neon-purple)',
                                    marginBottom: '1rem',
                                    fontWeight: 500
                                }}>
                                    {project.tagline}
                                </p>
                                <p style={{
                                    marginBottom: '1.5rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.6'
                                }}>
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--neon-cyan)',
                                        marginBottom: '0.5rem',
                                        fontWeight: 600
                                    }}>
                                        Highlights
                                    </p>
                                    <ul style={{
                                        paddingLeft: '1.2rem',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.8'
                                    }}>
                                        {project.highlights.map((highlight, i) => (
                                            <li key={i}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Tech Tags - Fade in on hover */}
                            <motion.div
                                initial={{ opacity: 0.6 }}
                                animate={{ opacity: hoveredIndex === `client-${index}` ? 1 : 0.6 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    display: 'flex',
                                    gap: '0.5rem',
                                    flexWrap: 'wrap',
                                    marginTop: 'auto'
                                }}
                            >
                                {project.tech.map((t, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.75rem',
                                        background: 'rgba(0, 243, 255, 0.1)',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '4px',
                                        color: 'var(--neon-cyan)',
                                        border: '1px solid rgba(0, 243, 255, 0.2)',
                                        fontWeight: 500
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Section Divider */}
                <div className="section-divider"></div>

                {/* Freelance & Independent Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        color: 'var(--neon-cyan)',
                        fontWeight: 600
                    }}>
                        Freelance & Independent Projects
                    </h3>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        lineHeight: '1.6'
                    }}>
                        A mix of client solutions, automation tools, and internal builds exploring AI, dashboards, and scalable systems.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '3rem'
                    }}
                >
                    {freelanceProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="project-card"
                            onMouseEnter={() => setHoveredIndex(`freelance-${index}`)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '200px'
                            }}
                        >
                            <div style={{ flex: 1 }}>
                                <h4 style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '0.8rem',
                                    color: '#fff',
                                    fontWeight: 600
                                }}>
                                    {project.name}
                                </h4>
                                <p style={{
                                    marginBottom: '1.5rem',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6'
                                }}>
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Tags - Fade in on hover */}
                            <motion.div
                                initial={{ opacity: 0.6 }}
                                animate={{ opacity: hoveredIndex === `freelance-${index}` ? 1 : 0.6 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    display: 'flex',
                                    gap: '0.5rem',
                                    flexWrap: 'wrap',
                                    marginTop: 'auto'
                                }}
                            >
                                {project.tech.map((t, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.75rem',
                                        background: 'rgba(188, 19, 254, 0.1)',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '4px',
                                        color: 'var(--neon-purple)',
                                        border: '1px solid rgba(188, 19, 254, 0.2)',
                                        fontWeight: 500
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Closing Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        textAlign: 'center',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        fontStyle: 'italic',
                        marginTop: '3rem'
                    }}
                >
                    From quick builds to complex systems — we ship usable products.
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
