import React from 'react';

const TechStack: React.FC = () => {
  const techs = ["Llama 3", "Mistral AI", "Ollama", "NVIDIA CUDA", "LangChain", "PrivateGPT"];

  return (
    <section className="py-12 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-slate-500 font-semibold tracking-widest uppercase mb-8">
          Zaufane technologie Open-Source
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {techs.map((tech) => (
            <span key={tech} className="text-xl md:text-2xl font-bold text-slate-300 hover:text-cyber-glow transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-8 text-xs text-slate-600">
            * Brak opłat za tokeny. Płacisz tylko za sprzęt i prąd.
        </p>
      </div>
    </section>
  );
};

export default TechStack;