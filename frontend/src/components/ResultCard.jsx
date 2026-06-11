import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiShield, FiX } from 'react-icons/fi';

export default function ResultCard({ result, onReset }) {
  const isPhishing = result === 'Phishing Email';

  const config = {
    phishing: {
      cardClass:  'result-card result-card-phishing',
      iconClass:  'result-icon result-icon-phishing',
      pulseClass: 'result-pulse result-pulse-phishing',
      icon:       <FiAlertTriangle size={28} color="#ef4444" />,
      titleColor: '#ef4444',
      title:      '⚠️ Phishing Detected',
      headline:   'This email is a phishing attempt!',
      message:
        'Our AI model has identified this email as a phishing attempt with high confidence. Do NOT click any links, download attachments, or share sensitive information. Report this email to your IT security team immediately.',
      tips: [
        'Do not click any links in this email',
        'Do not download any attachments',
        'Do not share personal or financial information',
        'Report to your security team immediately',
      ],
      tipColor: 'rgba(239,68,68,0.15)',
      tipBorder: 'rgba(239,68,68,0.25)',
    },
    safe: {
      cardClass:  'result-card result-card-safe',
      iconClass:  'result-icon result-icon-safe',
      pulseClass: 'result-pulse result-pulse-safe',
      icon:       <FiShield size={28} color="#22c55e" />,
      titleColor: '#22c55e',
      title:      '✅ Email is Safe',
      headline:   'This email appears to be legitimate.',
      message:
        'Our AI model has analyzed this email and found no signs of phishing activity. The content appears to be from a legitimate source. Always remain vigilant — no system is 100% perfect.',
      tips: [
        'Always verify the sender\'s email address',
        'Be cautious with unexpected links or attachments',
        'When in doubt, contact the sender through another channel',
        'Keep your security software updated',
      ],
      tipColor: 'rgba(34,197,94,0.1)',
      tipBorder: 'rgba(34,197,94,0.2)',
    },
  };

  const c = isPhishing ? config.phishing : config.safe;

  return (
    <motion.div
      className={c.cardClass}
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Pulse overlay */}
      <div className={c.pulseClass} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className={c.iconClass}>{c.icon}</div>
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: c.titleColor, marginBottom: '0.2rem' }}>
              {c.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{c.headline}</p>
          </div>
        </div>
        <button
          onClick={onReset}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.5rem',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            flexShrink: 0,
          }}
          title="Clear result"
        >
          <FiX size={16} />
        </button>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: isPhishing ? 'rgba(239,68,68,0.15)' : 'rgba(34,197,94,0.15)', margin: '1.25rem 0' }} />

      {/* Main message */}
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        {c.message}
      </p>

      {/* Tips */}
      <div
        style={{
          background: c.tipColor,
          border: `1px solid ${c.tipBorder}`,
          borderRadius: '0.75rem',
          padding: '1rem 1.25rem',
        }}
      >
        <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.75rem' }}>
          Security Recommendations
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {c.tips.map((tip, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.855rem', color: 'var(--text-muted)' }}>
              <span style={{ color: isPhishing ? '#ef4444' : '#22c55e', marginTop: '0.05rem', flexShrink: 0 }}>
                {isPhishing ? '🚨' : '✔'}
              </span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '1.5rem' }}>
        <button
          onClick={onReset}
          className="btn-ghost w-full"
          style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          🔄 Analyze Another Email
        </button>
      </div>
    </motion.div>
  );
}
