import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const phishingFacts = [
  { emoji: '📧', stat: '3.4B',     desc: 'Phishing emails sent daily worldwide' },
  { emoji: '💸', stat: '$17,700',  desc: 'Lost every minute due to phishing attacks' },
  { emoji: '🏢', stat: '83%',      desc: 'Of organizations experienced phishing in 2023' },
  { emoji: '⏱️',  stat: '82%',      desc: 'Of breaches involve human elements' },
];

const techStack = [
  { layer: 'Input Layer',      detail: 'Tokenized email text sequences (max length 150)' },
  { layer: 'Embedding Layer',  detail: '128-dim word embeddings trained on corpus' },
  { layer: 'LSTM Layer 1',     detail: '128 units with dropout regularization (0.3)' },
  { layer: 'LSTM Layer 2',     detail: '64 units for deeper feature extraction' },
  { layer: 'Dense Layer',      detail: '32 units with ReLU activation' },
  { layer: 'Output Layer',     detail: 'Sigmoid activation → binary classification' },
];

const cardAnim = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Page Header */}
      <div
        style={{
          borderBottom: '1px solid rgba(6,182,212,0.1)',
          padding: '3.5rem 1.5rem 3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(139,92,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <span className="badge"><span className="badge-dot" />Project Information</span>
        <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
          About <span className="gradient-text">PhishGuard AI</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
          A final-year deep learning project combining NLP and neural networks to tackle
          one of cybersecurity's most pervasive threats.
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Phishing Facts */}
        <section style={{ padding: '4rem 0 2rem' }}>
          <div className="section-header">
            <h2 className="section-title">The <span className="gradient-text">Phishing Threat</span></h2>
            <p className="section-subtitle">Phishing is the #1 cybersecurity threat facing individuals and organizations globally.</p>
          </div>

          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '1.25rem' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {phishingFacts.map((f) => (
              <motion.div key={f.stat} className="glass-card stat-card" variants={cardAnim}>
                <span style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'block' }}>{f.emoji}</span>
                <span className="stat-value">{f.stat}</span>
                <p className="stat-sublabel" style={{ marginTop: '0.35rem' }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* What is Phishing */}
        <section style={{ padding: '2rem 0' }}>
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge" style={{ marginBottom: '1rem' }}><span className="badge-dot" />Understanding the Threat</span>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.25 }}>
                What is a <span className="gradient-text">Phishing Email?</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                Phishing is a social engineering attack where cybercriminals impersonate trusted
                entities (banks, companies, government agencies) to steal sensitive information such
                as passwords, credit card numbers, and personal data.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                Modern phishing attacks are highly sophisticated, often bypassing traditional
                spam filters. They use urgency, fear, and authority to manipulate victims into
                taking harmful actions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ul className="about-list">
                {[
                  { emoji: '🎣', title: 'Spear Phishing',         desc: 'Targeted attacks using personalized information about the victim.' },
                  { emoji: '🏦', title: 'Brand Impersonation',    desc: 'Emails mimicking trusted brands like banks, PayPal, or Amazon.' },
                  { emoji: '⚡', title: 'Urgency Manipulation',   desc: 'Fake deadlines and threats to force immediate action.' },
                  { emoji: '🔗', title: 'Malicious Links',        desc: 'Disguised URLs leading to credential-harvesting sites.' },
                ].map((item) => (
                  <li key={item.title} className="about-list-item">
                    <div className="about-list-icon">{item.emoji}</div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: 1.55 }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <div className="divider" style={{ margin: '1rem 0' }} />

        {/* How AI Detects */}
        <section style={{ padding: '3rem 0' }}>
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ul className="about-list">
                {[
                  { emoji: '📝', title: 'Text Preprocessing', desc: 'URLs, punctuation removed; lowercased and normalized for the model.' },
                  { emoji: '🔢', title: 'Tokenization', desc: 'Email text converted into numerical sequences using a trained tokenizer.' },
                  { emoji: '🧠', title: 'LSTM Processing', desc: 'Sequences passed through LSTM layers that capture semantic patterns.' },
                  { emoji: '📊', title: 'Classification', desc: 'Sigmoid output yields a probability → Phishing if > 0.5, Safe otherwise.' },
                ].map((item) => (
                  <li key={item.title} className="about-list-item">
                    <div className="about-list-icon">{item.emoji}</div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: 1.55 }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge" style={{ marginBottom: '1rem' }}><span className="badge-dot" />AI Technology</span>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.25 }}>
                How AI Detects <span className="gradient-text">Phishing</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                Unlike rule-based systems, our LSTM model learns contextual patterns from email
                text — the same way humans read and understand language. It identifies subtle
                phishing indicators that keyword filters miss.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                The model was trained on a balanced dataset of 50,000+ emails, achieving
                over 99% accuracy on held-out test data.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="divider" style={{ margin: '1rem 0' }} />

        {/* Model Architecture */}
        <section style={{ padding: '3rem 0' }}>
          <div className="section-header">
            <h2 className="section-title">Model <span className="gradient-text">Architecture</span></h2>
            <p className="section-subtitle">LSTM-based deep neural network with 3 recurrent layers.</p>
          </div>

          <motion.div
            className="glass-card"
            style={{ overflow: 'hidden' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {techStack.map((layer, i) => (
              <div
                key={layer.layer}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.5rem',
                  borderBottom: i < techStack.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  transition: 'background 0.2s',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: `hsl(${190 + i * 20}, 80%, 50%, 0.12)`,
                    border: `1px solid hsl(${190 + i * 20}, 80%, 50%, 0.25)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: `hsl(${190 + i * 20}, 80%, 60%)`,
                    flexShrink: 0,
                  }}
                >
                  L{i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{layer.layer}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.825rem', marginLeft: '0.75rem' }}>{layer.detail}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section style={{ padding: '2rem 0 5rem' }}>
          <motion.div
            className="glass-card"
            style={{ padding: '2.5rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(6,182,212,0.06), rgba(139,92,246,0.06))' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Want to <span className="gradient-text">Test It?</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Head to the Analyzer page and try our sample phishing and safe email presets.
            </p>
            <button
              className="btn-primary"
              onClick={() => navigate('/analyze')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Open Analyzer <FiArrowRight size={16} />
            </button>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}
