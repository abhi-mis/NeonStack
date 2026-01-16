import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const choices = [
        { label: "Web App", desc: "SaaS, Dashboard, Portal" },
        { label: "Mobile App", desc: "iOS, Android, Cross-platform" },
        { label: "AI Feature", desc: "Chatbot, Automation, LLM" },
        { label: "MVP", desc: "Quick Launch, Prototype" }
    ];

    const handleChoice = (choice) => {
        setSelection(choice);
        setStep(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            // Simulate submission
            setTimeout(() => {
                setStep(1);
                setStatus('');
                setSelection('');
                setFormData({ name: '', email: '', message: '' });
            }, 3000);
        }, 1500);
    };

    return (
        <section className="section" id="contact" style={{ minHeight: '600px', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ maxWidth: '800px', width: '100%' }}>
                <AnimatePresence mode='wait'>
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{ textAlign: 'center' }}
                        >
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>What are you building?</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                {choices.map((c, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ scale: 1.03, borderColor: 'var(--neon-cyan)', backgroundColor: 'var(--bg-card-hover)' }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleChoice(c.label)}
                                        style={{
                                            background: 'var(--bg-card)',
                                            border: 'var(--glass-border)',
                                            padding: '2rem',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            color: 'var(--text-primary)'
                                        }}
                                    >
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{c.label}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{c.desc}</p>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '16px', border: 'var(--glass-border)' }}
                        >
                            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <h3 style={{ fontSize: '1.5rem' }}>
                                    Let's build your <span className="text-gradient">{selection}</span>
                                </h3>
                                <button onClick={() => setStep(1)} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.9rem' }}>
                                    ← Change
                                </button>
                            </div>

                            {status === 'sent' ? (
                                <div style={{ textAlign: 'center', padding: '2rem' }}>
                                    <h3 style={{ color: 'var(--neon-green)', fontSize: '1.5rem', marginBottom: '1rem' }}>Received!</h3>
                                    <p>We'll be in touch shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                        style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'inherit' }}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'inherit' }}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    <textarea
                                        placeholder="Tell us a bit more..."
                                        rows="3"
                                        style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'inherit', resize: 'vertical' }}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn btn-primary"
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? 'Sending...' : 'Start Project'}
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Contact;
