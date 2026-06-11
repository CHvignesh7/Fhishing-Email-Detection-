import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AnalyzePage from './pages/AnalyzePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Grid background */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Page Content */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"         element={<LandingPage />} />
            <Route path="/analyze"  element={<AnalyzePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about"    element={<AboutPage />} />
            {/* 404 fallback */}
            <Route
              path="*"
              element={
                <div style={{ textAlign: 'center', padding: '8rem 1.5rem' }}>
                  <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🔍</div>
                  <h1 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 800 }}>404</h1>
                  <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                    Page not found. <a href="/" style={{ color: 'var(--cyan)' }}>Go home →</a>
                  </p>
                </div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
