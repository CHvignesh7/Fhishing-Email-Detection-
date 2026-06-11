import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiZap, FiLock, FiSmile, FiTarget, FiDatabase } from 'react-icons/fi';

const cards = [
  {
    icon: <FiCpu size={22} />,
    iconClass: 'feature-icon feature-icon-purple',
    title: 'Deep Learning Powered',
    desc: 'Built on an LSTM neural network trained on thousands of real phishing and legitimate emails for maximum accuracy.',
  },
  {
    icon: <FiZap size={22} />,
    iconClass: 'feature-icon feature-icon-cyan',
    title: 'Real-Time Detection',
    desc: 'Get instant results in under a second. No batch processing — results are streamed directly from the inference engine.',
  },
  {
    icon: <FiLock size={22} />,
    iconClass: 'feature-icon feature-icon-blue',
    title: 'Secure Processing',
    desc: 'Email content is processed locally on your server. No data is stored, logged, or shared with third parties.',
  },
  {
    icon: <FiSmile size={22} />,
    iconClass: 'feature-icon feature-icon-green',
    title: 'User Friendly',
    desc: 'Simple paste-and-click interface. No setup, no configuration — just paste your email and get the verdict.',
  },
  {
    icon: <FiTarget size={22} />,
    iconClass: 'feature-icon feature-icon-purple',
    title: 'High Accuracy',
    desc: 'Our model achieves 99%+ accuracy on benchmark datasets, outperforming traditional rule-based spam filters.',
  },
  {
    icon: <FiDatabase size={22} />,
    iconClass: 'feature-icon feature-icon-cyan',
    title: 'Trained on Big Data',
    desc: 'Model trained on 50,000+ email samples including advanced spear-phishing, business email compromise, and impersonation attacks.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section className="section" id="features">
      {/* Header */}
      <div className="section-header">
        <span className="badge" style={{ marginBottom: '1rem' }}>
          <span className="badge-dot" />
          Why PhishGuard AI
        </span>
        <h2 className="section-title">
          Enterprise-Grade <span className="gradient-text">Security Features</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to protect your inbox with the power of artificial intelligence
          and deep learning technology.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className="glass-card feature-card"
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className={card.iconClass}>{card.icon}</div>
            <h3 className="feature-title">{card.title}</h3>
            <p className="feature-desc">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
