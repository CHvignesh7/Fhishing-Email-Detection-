import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiShield, FiMail, FiInfo, FiMenu, FiX, FiZap,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { to: '/',        label: 'Home',     icon: <FiZap size={14} /> },
  { to: '/analyze', label: 'Analyze',  icon: <FiMail size={14} /> },
  { to: '/features',label: 'Features', icon: <FiShield size={14} /> },
  { to: '/about',   label: 'About',    icon: <FiInfo size={14} /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <div className="nav-logo-icon">
            <FiShield color="white" size={18} />
          </div>
          <span>PhishGuard <span className="gradient-text">AI</span></span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/analyze">
              <button className="btn-primary" style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}>
                Try It Free
              </button>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/analyze" onClick={() => setOpen(false)}>
              <button
                className="btn-primary w-full mt-4"
                style={{ borderRadius: '0.625rem', justifyContent: 'center' }}
              >
                Try It Free
              </button>
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
