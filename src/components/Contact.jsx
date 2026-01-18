import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            await addDoc(collection(db, "contacts"), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                projectType: selection,
                createdAt: serverTimestamp()
            });

            setStatus('sent');

            // Reset form after 3 seconds
            setTimeout(() => {
                setStep(1);
                setStatus('');
                setSelection('');
                setFormData({ name: '', email: '', message: '' });
            }, 3000);

        } catch (error) {
            console.error("Error submitting form: ", error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again or email us directly.');
        }
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
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--neon-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 0 20px var(--neon-green)' }}
                                    >
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </motion.div>
                                    <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem', marginBottom: '1rem' }}>Received!</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>We'll be in touch shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                        value={formData.name}
                                        style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'inherit', fontSize: '1rem' }}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        disabled={status === 'sending'}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={formData.email}
                                        style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'inherit', fontSize: '1rem' }}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        disabled={status === 'sending'}
                                    />
                                    <textarea
                                        placeholder="Tell us a bit more about your project..."
                                        rows="4"
                                        value={formData.message}
                                        style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'inherit', resize: 'vertical', fontSize: '1rem', fontFamily: 'inherit' }}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        disabled={status === 'sending'}
                                    ></textarea>

                                    {status === 'error' && (
                                        <p style={{ color: '#ff4d4d', fontSize: '0.9rem', textAlign: 'center' }}>
                                            {errorMessage}
                                        </p>
                                    )}

                                    <motion.button
                                        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)' }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn btn-primary"
                                        disabled={status === 'sending'}
                                        style={{ opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
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
