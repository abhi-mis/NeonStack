import React from 'react';

const reasons = [
    "AI + full-stack in one team",
    "Fast iteration, clean delivery",
    "Founder-led execution",
    "No agency overhead"
];

const WhyNeon = () => {
    return (
        <section className="section">
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Why Neon Stack</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', width: '100%', gap: '1.5rem', maxWidth: '800px' }}>
                    {reasons.map((r, index) => (
                        <div key={index} className="card" style={{ textAlign: 'center', padding: '1.5rem', borderColor: 'var(--neon-cyan)' }}>
                            <span style={{ fontWeight: '600' }}>{r}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyNeon;
