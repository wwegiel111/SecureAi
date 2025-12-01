import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import TechStack from './components/TechStack';
import Process from './components/Process';
import UseCases from './components/UseCases';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyber-glow selection:text-slate-900 font-sans">
      <Navigation />
      <main>
        <Hero />
        <TechStack />
        <Comparison />
        <Process />
        <UseCases />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;