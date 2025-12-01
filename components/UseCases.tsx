import React from 'react';
import { USE_CASES } from '../constants';

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-slate-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dla kogo budujemy <span className="text-cyber-glow">SecureAI</span>?
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Nasze rozwiązania sprawdzają się tam, gdzie prywatność jest priorytetem, a ilość dokumentów przytłacza człowieka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {USE_CASES.map((useCase, index) => (
            <div key={index} className="bg-slate-800/30 border border-slate-700 hover:border-cyber-glow/40 p-8 rounded-2xl transition-all hover:bg-slate-800/50 group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-cyber-glow/30">
                  <useCase.icon className="w-8 h-8 text-white group-hover:text-cyber-glow transition-colors" />
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-cyber-dark/50 text-cyber-glow border border-cyber-dark rounded-full">
                  {useCase.benefit}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-glow transition-colors">
                {useCase.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;