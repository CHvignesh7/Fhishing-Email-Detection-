import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { FiArrowRight } from 'react-icons/fi';

const stats = [
  { value: '99%',   label: 'Accuracy',       sub: 'On benchmark dataset' },
  { value: 'LSTM',  label: 'AI Architecture', sub: 'Deep Learning model' },
  { value: '<1s',   label: 'Response Time',   sub: 'Real-time inference' },
  { value: '50K+',  label: 'Training Emails', sub: 'Balanced dataset' },
];

const steps = [
  { num: '01', title: 'Paste Email',      desc: 'Copy and paste the suspicious email body into our secure analyzer.' },
  { num: '02', title: 'AI Processing',   desc: 'Our LSTM model tokenizes and processes the text through 3 neural network layers.' },
  { num: '03', title: 'Get Verdict',     desc: 'Receive an instant classification — Phishing or Safe — with security advice.' },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <Hero />

      <div className="divider" />

      {/* Stats */}
      <section className="section" id="stats">
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="glass-card stat-card">
              <span className="stat-value">{s.value}</span>
              <p className="stat-label">{s.label}</p>
              <p className="stat-sublabel">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <div className="divider" />

      {/* How it Works */}
      <section className="section" id="how-it-works">
        <div className="section-header">
          <span className="badge">
            <span className="badge-dot" />
            How It Works
          </span>
          <h2 className="section-title">
            Three Steps to <span className="gradient-text">Email Safety</span>
          </h2>
          <p className="section-subtitle">
            Our streamlined workflow makes it effortless to check any email for phishing in seconds.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="glass-card step-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="step-number">{step.num}</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Features Preview */}
      <Features />

      <div className="divider" />

      {/* CTA Banner */}
      <section className="section" id="cta">
        <motion.div
          className="glass-card"
          style={{
            padding: '3.5rem 2.5rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(139,92,246,0.08))',
            border: '1px solid rgba(139,92,246,0.2)',
          }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Ready to <span className="gradient-text">Protect Yourself?</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Paste any suspicious email into our analyzer and get an instant AI verdict.
            It's free, fast, and completely private.
          </p>
          <button
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '0.9rem 2.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
            onClick={() => navigate('/analyze')}
          >
            Start Analyzing Emails
            <FiArrowRight size={18} />
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
}
