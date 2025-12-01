import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    // Simulate form submission
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-24">
       {/* Glow Effect */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber-glow/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Zabezpiecz swoją firmę <br/>
              <span className="text-cyber-glow">już dziś.</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Umów się na bezpłatną konsultację. Pokażemy Ci, jak wdrożyć AI bez ryzyka, na Twoim sprzęcie.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyber-glow" />
                </div>
                <div>
                    <p className="text-xs text-slate-500 uppercase">Email</p>
                    <p className="font-medium">kontakt@secureai-local.pl</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyber-glow" />
                </div>
                <div>
                     <p className="text-xs text-slate-500 uppercase">Telefon</p>
                    <p className="font-medium">+48 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyber-glow" />
                </div>
                <div>
                    <p className="text-xs text-slate-500 uppercase">Biuro</p>
                    <p className="font-medium">Warszawa, ul. Cybernetyki 10</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-cyber-glow/20 text-cyber-glow rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Wiadomość wysłana!</h3>
                <p className="text-slate-400">Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-cyber-glow hover:text-white underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Imię i Nazwisko</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-glow focus:ring-1 focus:ring-cyber-glow transition-colors"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-400 mb-2">Firma</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-glow focus:ring-1 focus:ring-cyber-glow transition-colors"
                    placeholder="Twoja Firma Sp. z o.o."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email firmowy</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-glow focus:ring-1 focus:ring-cyber-glow transition-colors"
                    placeholder="jan@firma.pl"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Wiadomość</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-glow focus:ring-1 focus:ring-cyber-glow transition-colors"
                    placeholder="Opisz krótko swoje potrzeby..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyber-glow text-slate-900 font-bold py-4 rounded-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-cyber-glow/20"
                >
                  Zamów bezpłatny audyt
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;