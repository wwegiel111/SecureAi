import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { COMPARISON_DATA } from '../constants';
import { CloudOff, WifiOff, HardDrive } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-slate-900 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dlaczego <span className="text-cyber-glow">Local AI</span>?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Porównaj standardowe rozwiązania chmurowe z naszym podejściem On-Premise.
            Twoje dane są najcenniejszym zasobem - nie oddawaj ich w obce ręce.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart Side */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 h-[400px]">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">Analiza Korzyści i Bezpieczeństwa</h3>
            <ResponsiveContainer width="100%" height="100%" minHeight={300}>
              <BarChart
                data={COMPARISON_DATA}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={140} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    itemStyle={{ color: '#f8fafc' }}
                    cursor={{fill: 'transparent'}}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="Cloud" fill="#ef4444" name="Chmura (SaaS)" radius={[0, 4, 4, 0]} barSize={20} />
                <Bar dataKey="Local" fill="#10b981" name="SecureAI Local" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Text Comparison Side */}
          <div className="space-y-8">
            <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <CloudOff className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-bold text-red-400">Rozwiązania Chmurowe</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✕</span>
                  Ryzyko wycieku danych do dostawcy (USA).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✕</span>
                  Miesięczne opłaty subskrypcyjne (SaaS).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✕</span>
                  Dane są używane do trenowania publicznych modeli.
                </li>
              </ul>
            </div>

            <div className="bg-cyber-dark/50 border border-cyber-glow/30 p-6 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyber-glow/10 blur-xl rounded-full"></div>
              <div className="flex items-center gap-3 mb-4">
                <HardDrive className="w-6 h-6 text-cyber-glow" />
                <h3 className="text-xl font-bold text-cyber-glow">SecureAI Local</h3>
              </div>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-glow">✓</span>
                  Pełna kontrola danych (On-premise).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-glow">✓</span>
                  Jednorazowa inwestycja w sprzęt.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-glow">✓</span>
                  <div className="flex flex-col">
                      <span>Działa w 100% Offline.</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                          <WifiOff className="w-3 h-3" /> Brak internetu = brak ataku z zewnątrz.
                      </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;