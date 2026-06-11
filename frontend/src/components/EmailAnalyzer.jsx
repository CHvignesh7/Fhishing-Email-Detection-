import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiSend, FiTrash2, FiClipboard, FiAlertCircle,
} from 'react-icons/fi';
import useEmailAnalysis from '../hooks/useEmailAnalysis';
import ResultCard from './ResultCard';
import Loader from './Loader';

const MAX_CHARS = 5000;

const SAMPLE_PHISHING = `Dear Valued Customer,

Your account has been temporarily suspended due to suspicious activity. To restore access, please verify your account immediately.

CLICK HERE TO VERIFY: http://secure-bank-login.fake-domain.com/verify

You must complete this within 24 hours or your account will be permanently closed.

Provide the following:
- Full Name
- Date of Birth
- Account Number
- PIN / Password
- Social Security Number

Failure to respond will result in immediate account termination.

Best Regards,
Security Team
Bank of America Security Department`;

const SAMPLE_SAFE = `Hi John,

I hope this message finds you well! I'm reaching out to confirm our team meeting scheduled for Thursday, June 15th at 2:00 PM EST.

The agenda will cover:
1. Q2 performance review
2. Upcoming product roadmap
3. Team goals for the next quarter

Please let me know if you'd like to add any items to the agenda. The meeting link will be shared via our usual calendar invite.

Looking forward to seeing everyone!

Best regards,
Sarah
Product Manager`;

export default function EmailAnalyzer() {
  const [email, setEmail]         = useState('');
  const [copied, setCopied]       = useState(false);
  const textareaRef               = useRef(null);
  const { result, loading, error, analyze, reset } = useEmailAnalysis();

  const charCount  = email.length;
  const isOverLimit = charCount > MAX_CHARS;

  const handleAnalyze = () => {
    if (!email.trim() || isOverLimit) return;
    analyze(email);
  };

  const handleClear = () => {
    setEmail('');
    reset();
    textareaRef.current?.focus();
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setEmail(text);
      reset();
    } catch {
      alert('Clipboard access denied. Please paste manually.');
    }
  };

  const handleCopy = async () => {
    if (!email) return;
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadSample = (text) => {
    setEmail(text);
    reset();
    textareaRef.current?.focus();
  };

  const counterClass =
    charCount > MAX_CHARS  ? 'char-counter over' :
    charCount > MAX_CHARS * 0.85 ? 'char-counter warn' :
    'char-counter';

  return (
    <div className="analyzer-wrapper">
      {/* Header */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <span className="badge">
          <span className="badge-dot" />
          Email Analyzer
        </span>
        <h2 className="section-title" style={{ marginBottom: '0.6rem' }}>
          Paste Your <span className="gradient-text">Email Content</span>
        </h2>
        <p className="section-subtitle" style={{ fontSize: '0.95rem' }}>
          Paste the full email body below and our deep learning model will
          classify it as safe or phishing in real-time.
        </p>
      </div>

      {/* Sample Buttons */}
      <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '1.25rem' }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
          Quick Test Samples
        </p>
        <div className="sample-grid">
          <button
            className="sample-btn sample-btn-phishing"
            onClick={() => loadSample(SAMPLE_PHISHING)}
          >
            🎣 Load Phishing Sample
          </button>
          <button
            className="sample-btn sample-btn-safe"
            onClick={() => loadSample(SAMPLE_SAFE)}
          >
            ✅ Load Safe Email Sample
          </button>
        </div>
      </div>

      {/* Textarea Card */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            📧 Email Content
          </span>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button className="btn-ghost" onClick={handlePaste} style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <FiClipboard size={13} /> Paste
            </button>
            <button className="btn-ghost" onClick={handleCopy} disabled={!email} style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              {copied ? '✔ Copied!' : <><FiClipboard size={13} /> Copy</>}
            </button>
            <button className="btn-ghost" onClick={handleClear} disabled={!email} style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fca5a5' }}>
              <FiTrash2 size={13} /> Clear
            </button>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          className="email-textarea"
          placeholder="Paste the full email content here...&#10;&#10;Example: Subject, body, headers — the more content the better."
          value={email}
          onChange={(e) => { setEmail(e.target.value); reset(); }}
        />

        {/* Char Counter */}
        <div className={counterClass}>
          {charCount.toLocaleString()} / {MAX_CHARS.toLocaleString()} characters
          {isOverLimit && ' — Email too long! Please trim it.'}
        </div>
      </div>

      {/* Analyze Button */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button
          className="btn-primary"
          onClick={handleAnalyze}
          disabled={loading || !email.trim() || isOverLimit}
          style={{
            flex: 1,
            minWidth: 180,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '1rem',
            padding: '0.9rem 1.5rem',
          }}
        >
          {loading ? (
            <>
              <div style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.7s linear infinite', flexShrink: 0 }} />
              Analyzing…
            </>
          ) : (
            <>
              <FiSend size={18} />
              Analyze Email
            </>
          )}
        </button>

        {(result || error) && (
          <button
            className="btn-ghost"
            onClick={handleClear}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.25rem' }}
          >
            🔄 Reset
          </button>
        )}
      </div>

      {/* Results Area */}
      <div style={{ marginTop: '1.5rem' }}>
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loader"
              className="glass-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <Loader />
            </motion.div>
          )}

          {error && !loading && (
            <motion.div
              key="error"
              className="error-toast"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <FiAlertCircle size={18} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
              <span>{error}</span>
            </motion.div>
          )}

          {result && !loading && !error && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <ResultCard result={result} onReset={handleClear} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
