import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiShield, FiZap, FiLock } from 'react-icons/fi';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      {/* Animated Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <motion.div
        className="relative z-1"
        style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <span className="badge">
            <span className="badge-dot" />
            AI-Powered Cybersecurity
          </span>
        </motion.div>

        {/* Icon Ring */}
        <motion.div variants={fadeUp}>
          <div className="hero-icon-ring">
            <div className="hero-icon-inner">🛡️</div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 className="hero-title" variants={fadeUp}>
          Detect Phishing Emails{' '}
          <span className="gradient-text">Instantly with AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="hero-subtitle" variants={fadeUp}>
          Our Deep Learning model analyzes email content in real-time, identifying
          sophisticated phishing attempts with high accuracy — keeping you and your
          organization safe online.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '0.875rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => navigate('/analyze')}
          >
            Analyze Email
            <FiArrowRight size={18} />
          </button>
          <button
            className="btn-ghost"
            style={{ fontSize: '1rem', padding: '0.875rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => navigate('/features')}
          >
            <FiShield size={16} />
            Learn More
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginTop: '2.5rem',
          }}
        >
          {[
            { icon: <FiShield size={14} />, text: 'Deep Learning Model' },
            { icon: <FiZap size={14} />, text: 'Real-Time Detection' },
            { icon: <FiLock size={14} />, text: 'Secure & Private' },
          ].map((item) => (
            <div
              key={item.text}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
              }}
            >
              <span style={{ color: 'var(--cyan)' }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div className="hero-stats" variants={fadeUp}>
          {[
            { value: '99%',    label: 'Accuracy' },
            { value: '<1s',    label: 'Response Time' },
            { value: '10K+',   label: 'Emails Analyzed' },
            { value: 'LSTM',   label: 'DL Architecture' },
          ].map((s) => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
