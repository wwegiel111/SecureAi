import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white tracking-tight">SecureAI <span className="text-cyber-glow">Local</span></span>
        </div>
        
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} SecureAI Local Polska. Wszelkie prawa zastrzeżone.
        </div>

        <div className="flex gap-6">
           <a href="#" className="text-slate-500 hover:text-cyber-glow transition-colors">LinkedIn</a>
           <a href="#" className="text-slate-500 hover:text-cyber-glow transition-colors">Polityka Prywatności</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;