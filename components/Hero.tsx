import React from 'react';
import { Lock, ServerOff } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyber-glow/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-slate-300 mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-cyber-glow animate-pulse"></span>
          Nowa era prywatności w biznesie
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Sztuczna Inteligencja <br className="hidden md:block" />
          <span className="gradient-text">na Twoich zasadach.</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          Wdrażamy lokalne modele językowe (Local LLM), które działają wyłącznie na Twoich serwerach. 
          Zyskaj automatyzację bez ryzyka wycieku danych. <span className="text-white font-semibold">100% Prywatności. 0% Chmury.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-cyber-glow text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] transform hover:scale-105"
          >
            Zamów audyt bezpieczeństwa
          </a>
          <a
            href="#process"
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
          >
            Zobacz jak to działa
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex justify-center gap-8 md:gap-16 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-cyber-glow" />
                <span>RODO Compliant</span>
            </div>
            <div className="flex items-center gap-2">
                <ServerOff className="w-5 h-5 text-cyber-glow" />
                <span>Offline First</span>
            </div>
             <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-cyber-glow" />
                <span>No Data Leaks</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;