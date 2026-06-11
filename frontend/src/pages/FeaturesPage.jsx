import React from 'react';
import { motion } from 'framer-motion';
import Features from '../components/Features';

const comparisons = [
  { label: 'Traditional Spam Filter', accuracy: '70-80%', speed: 'Fast', aiPowered: false, contextAware: false },
  { label: 'Rule-Based Detector',     accuracy: '75-85%', speed: 'Fast', aiPowered: false, contextAware: false },
  { label: 'PhishGuard AI (Ours)',     accuracy: '99%+',   speed: '<1s',  aiPowered: true,  contextAware: true  },
];

export default function FeaturesPage() {
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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(6,182,212,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <span className="badge"><span className="badge-dot" />Platform Features</span>
        <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
          Built for <span className="gradient-text">Real Security</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          PhishGuard AI combines state-of-the-art deep learning with a clean, intuitive interface
          to deliver enterprise-grade phishing protection.
        </p>
      </div>

      {/* Features Grid */}
      <Features />

      {/* Comparison Table */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <h2 className="section-title">How We <span className="gradient-text">Compare</span></h2>
          <p className="section-subtitle">See how PhishGuard AI stacks up against traditional phishing detection methods.</p>
        </div>

        <motion.div
          className="glass-card"
          style={{ overflow: 'hidden' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(6,182,212,0.12)' }}>
                {['Solution', 'Accuracy', 'Speed', 'AI-Powered', 'Context-Aware'].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '1rem 1.25rem',
                      textAlign: 'left',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr
                  key={row.label}
                  style={{
                    borderBottom: i < comparisons.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    background: row.aiPowered ? 'rgba(6,182,212,0.04)' : 'transparent',
                  }}
                >
                  <td style={{ padding: '1rem 1.25rem', fontWeight: row.aiPowered ? 700 : 400, color: row.aiPowered ? 'var(--cyan)' : 'var(--text-primary)' }}>
                    {row.aiPowered && <span style={{ marginRight: '0.4rem' }}>⭐</span>}
                    {row.label}
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: row.aiPowered ? '#22c55e' : 'var(--text-muted)', fontWeight: row.aiPowered ? 700 : 400 }}>{row.accuracy}</td>
                  <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>{row.speed}</td>
                  <td style={{ padding: '1rem 1.25rem' }}>{row.aiPowered  ? '✅' : '❌'}</td>
                  <td style={{ padding: '1rem 1.25rem' }}>{row.contextAware ? '✅' : '❌'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>
    </motion.div>
  );
}
