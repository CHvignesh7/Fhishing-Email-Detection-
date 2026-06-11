import React from 'react';
import { motion } from 'framer-motion';

export default function Loader({ message = 'Analyzing Email...' }) {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Spinner */}
      <div style={{ position: 'relative', width: 72, height: 72 }}>
        <div className="spinner" />
        <div
          style={{
            position: 'absolute',
            inset: 12,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
          }}
        >
          🔍
        </div>
      </div>

      {/* Message */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '0.35rem' }}>
          {message}
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>
          Running deep learning inference…
        </p>
      </div>

      {/* Dots */}
      <div className="loader-dots">
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
      </div>
    </motion.div>
  );
}
