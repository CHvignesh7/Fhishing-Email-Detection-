import React from 'react';
import { motion } from 'framer-motion';
import EmailAnalyzer from '../components/EmailAnalyzer';

export default function AnalyzePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Page Header */}
      <div
        style={{
          position: 'relative',
          borderBottom: '1px solid rgba(6,182,212,0.1)',
          padding: '3.5rem 1.5rem 3rem',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <span className="badge">
          <span className="badge-dot" />
          AI-Powered Analysis
        </span>

        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            marginBottom: '0.75rem',
            lineHeight: 1.2,
          }}
        >
          Email <span className="gradient-text">Threat Analyzer</span>
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          Paste any email below and our deep learning model will classify it as a
          phishing attempt or a legitimate email within milliseconds.
        </p>
      </div>

      {/* Analyzer */}
      <section className="section" style={{ paddingTop: '3rem' }}>
        <EmailAnalyzer />
      </section>

      {/* Disclaimer */}
      <div
        style={{
          maxWidth: 860,
          margin: '0 auto',
          padding: '0 1.5rem 4rem',
        }}
      >
        <div
          style={{
            background: 'rgba(59,130,246,0.06)',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '0.75rem',
            padding: '1rem 1.25rem',
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'flex-start',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            lineHeight: 1.65,
          }}
        >
          <span style={{ fontSize: '1rem', flexShrink: 0 }}>ℹ️</span>
          <span>
            <strong style={{ color: 'var(--text-primary)' }}>Disclaimer:</strong>{' '}
            This tool is designed as an educational and assistive system. No AI model achieves 100% accuracy.
            Always use your judgment and consult your IT security team for critical decisions.
            Email content is NOT stored or transmitted to any third party.
          </span>
        </div>
      </div>
    </motion.div>
  );
}
