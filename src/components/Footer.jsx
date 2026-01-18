import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { icon: FiMail, href: 'mailto:contact@neonstack.dev', label: 'Email' },
        { icon: FiGithub, href: '#', label: 'GitHub' },
        { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
        { icon: FiTwitter, href: '#', label: 'Twitter' }
    ];

    return (
        <footer style={{
            padding: '4rem 0 2rem',
            borderTop: '1px solid rgba(0, 243, 255, 0.1)',
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 243, 255, 0.02) 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated background glow */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '50%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(0, 243, 255, 0.1) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    transform: 'translateX(-50%)',
                    pointerEvents: 'none'
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Logo Section */}
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Animated Logo Icon */}
                    <motion.div
                        style={{
                            width: '48px',
                            height: '48px',
                            margin: '0 auto 1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '4px'
                        }}
                        whileHover="hover"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                style={{
                                    height: '4px',
                                    borderRadius: '2px',
                                    background: i === 1
                                        ? 'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))'
                                        : 'var(--neon-cyan)',
                                    boxShadow: `0 0 15px ${i === 1 ? 'var(--neon-purple)' : 'var(--neon-cyan)'}`,
                                    width: i === 0 ? '100%' : i === 1 ? '80%' : '60%',
                                    marginLeft: i === 2 ? 'auto' : '0'
                                }}
                                variants={{
                                    hover: {
                                        width: '100%',
                                        boxShadow: `0 0 20px ${i === 1 ? 'var(--neon-purple)' : 'var(--neon-cyan)'}`,
                                        transition: { duration: 0.3 }
                                    }
                                }}
                                animate={{
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            />
                        ))}
                    </motion.div>

                    <h3 style={{
                        fontSize: '1.8rem',
                        marginBottom: '0.5rem',
                        fontWeight: '700',
                        letterSpacing: '-0.05em'
                    }}>
                        <span style={{
                            background: 'linear-gradient(135deg, #fff 0%, var(--neon-cyan) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>NEON</span>
                        <span style={{
                            background: 'linear-gradient(135deg, var(--neon-cyan) 0%, var(--neon-purple) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>STACK</span>
                    </h3>

                    <motion.p
                        style={{
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem',
                            fontSize: '1.1rem',
                            fontWeight: '500'
                        }}
                        animate={{
                            opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    >
                        Bright ideas. <span style={{ color: 'var(--neon-cyan)' }}>Intelligent builds.</span>
                    </motion.p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        marginBottom: '3rem',
                        flexWrap: 'wrap'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            aria-label={social.label}
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1.5rem',
                                padding: '0.75rem',
                                borderRadius: '12px',
                                background: 'var(--bg-card)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s'
                            }}
                            whileHover={{
                                scale: 1.1,
                                color: 'var(--neon-cyan)',
                                borderColor: 'var(--neon-cyan)',
                                boxShadow: '0 0 20px rgba(0, 243, 255, 0.3)',
                                y: -5
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <social.icon />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Divider */}
                <motion.div
                    style={{
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent 0%, var(--neon-cyan) 50%, transparent 100%)',
                        marginBottom: '2rem',
                        opacity: 0.3
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                />

                {/* Copyright */}
                <motion.div
                    style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        textAlign: 'center',
                        opacity: 0.7
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p style={{ marginBottom: '0.5rem' }}>
                        &copy; {new Date().getFullYear()} <span style={{ color: 'var(--neon-cyan)', fontWeight: '600' }}>Neon Stack</span>. All rights reserved.
                    </p>
                    <p style={{ fontSize: '0.8rem' }}>
                        Built with ⚡ and AI-first principles
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
