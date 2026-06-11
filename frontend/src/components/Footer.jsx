import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiShield, FiGithub, FiLinkedin, FiMail, FiExternalLink,
} from 'react-icons/fi';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div className="footer-logo">
            <div className="nav-logo-icon">
              <FiShield color="white" size={16} />
            </div>
            PhishGuard <span className="gradient-text" style={{ marginLeft: '0.1rem' }}>AI</span>
          </div>
          <p className="footer-tagline">
            An AI-powered phishing email detection system built with Deep Learning (LSTM)
            to protect users from sophisticated phishing attacks in real-time.
          </p>

          {/* Tech badges */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
            {['React', 'Flask', 'TensorFlow', 'LSTM'].map((tech) => (
              <span
                key={tech}
                style={{
                  background: 'rgba(6,182,212,0.08)',
                  border: '1px solid rgba(6,182,212,0.15)',
                  borderRadius: '6px',
                  color: 'var(--text-muted)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '0.2rem 0.6rem',
                  letterSpacing: '0.04em',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="footer-heading">Navigation</p>
          <ul className="footer-links">
            {[
              { to: '/',         label: 'Home' },
              { to: '/analyze',  label: 'Analyze Email' },
              { to: '/features', label: 'Features' },
              { to: '/about',    label: 'About' },
            ].map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="footer-link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Developer */}
        <div>
          <p className="footer-heading">Developer</p>
          <ul className="footer-links">
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">
                <FiGithub size={14} />
                GitHub
                <FiExternalLink size={11} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">
                <FiLinkedin size={14} />
                LinkedIn
                <FiExternalLink size={11} />
              </a>
            </li>
            <li>
              <a href="mailto:developer@example.com" className="footer-link">
                <FiMail size={14} />
                Contact
              </a>
            </li>
          </ul>
          <div
            style={{
              marginTop: '1.25rem',
              padding: '0.75rem 1rem',
              background: 'rgba(6,182,212,0.06)',
              border: '1px solid rgba(6,182,212,0.12)',
              borderRadius: '0.625rem',
            }}
          >
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              🎓 Final Year Project<br />
              <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>B.Tech Computer Science</span><br />
              Deep Learning Specialization
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} PhishGuard AI. Built with ❤️ for Cybersecurity.
        </p>
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn" title="GitHub">
            <FiGithub size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">
            <FiLinkedin size={16} />
          </a>
          <a href="mailto:developer@example.com" className="social-btn" title="Email">
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
