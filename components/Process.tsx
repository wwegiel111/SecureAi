import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Jak wdrażamy Twój <span className="gradient-text">Firmowy Mózg</span>?
          </h2>
          <p className="text-slate-400">Prosty, 4-stopniowy proces transformacji cyfrowej.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Connecting Line (Desktop only) */}
           <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>

          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="group relative bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-cyber-glow/50 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyber-glow transition-colors duration-300 relative z-10 shadow-lg border border-slate-700">
                <step.icon className="w-6 h-6 text-cyber-glow group-hover:text-slate-900 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                <span className="text-cyber-glow mr-2">0{index + 1}.</span>
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
              
              {index < PROCESS_STEPS.length - 1 && (
                  <ArrowRight className="lg:hidden absolute bottom-4 right-4 text-slate-700 w-5 h-5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;