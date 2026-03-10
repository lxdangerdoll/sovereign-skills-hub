import React, { useState } from 'react';
import { 
  Shield, 
  Zap, 
  Heart, 
  Compass, 
  Activity, 
  LayoutGrid, 
  ExternalLink, 
  Lock, 
  Terminal,
  Eye,
  Flame,
  Construction,
  Sparkles
} from 'lucide-react';

/**
 * SOVEREIGN SKILLS HUB // NODE: COMMAND_DECK_V01
 * UPDATED: MAR-10-2026 // DBT AUTOMATION CENTRAL
 * ARCHITECT: Odelis (Mercy) // ANALYST: Ian
 */

const App = () => {
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    {
      id: 'solved',
      category: 'Interpersonal',
      title: 'SOLVED Protocol',
      description: 'The Decision-Making Terminal for navigating logistics and "folie à deux" dynamics.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/solved-protocol/',
      icon: <LayoutGrid className="text-emerald-500" size={24} />,
      color: 'emerald'
    },
    {
      id: 'hearth',
      category: 'Oracle',
      title: 'Hearth Portal',
      description: 'The extraction terminal for forensic audits and mythic readings from Io.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/hearth-portal/',
      icon: <Eye className="text-cyan-400" size={24} />,
      color: 'cyan'
    },
    {
      id: 'wise-mind',
      category: 'Mindfulness',
      title: 'Wise Mind Terminal',
      description: 'The synthesis engine for balancing Emotion Mind and Reasonable Mind.',
      status: 'STABLE',
      link: '#', // We will update this when deployed
      icon: <Activity className="text-indigo-400" size={24} />,
      color: 'indigo'
    },
    {
      id: 'tipp',
      category: 'Distress',
      title: 'TIPP Calibrator',
      description: 'Hardware resets for high-temperature "Static" events.',
      status: 'DEVELOPMENT',
      link: null,
      icon: <Zap className="text-amber-500" size={24} />,
      color: 'amber'
    },
    {
      id: 'dear-man',
      category: 'Interpersonal',
      title: 'DEAR MAN Script',
      description: 'Precision-engineered assertive communication scripts for Friday objectives.',
      status: 'DEVELOPMENT',
      link: null,
      icon: <Terminal className="text-red-500" size={24} />,
      color: 'red'
    }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(s => s.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="min-h-screen bg-[#020408] text-slate-300 font-serif selection:bg-emerald-500/30 p-4 md:p-12 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Inter:wght@400;700;900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}} />

      <div className="max-w-6xl mx-auto">
        <header className="mb-16 border-l-2 border-emerald-500/30 pl-8 animate-in slide-in-from-left duration-700">
          <div className="flex items-center gap-3 text-emerald-500 mb-4">
            <Shield size={18} />
            <span className="text-[10px] font-sans font-black tracking-[0.5em] uppercase">Sovereign Hub // Command Deck</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white italic">
            Skills <span className="text-emerald-500 not-italic font-black">Archive</span>
          </h1>
        </header>

        <nav className="flex flex-wrap gap-4 mb-12 no-print">
          {['All', 'Mindfulness', 'Distress', 'Interpersonal', 'Oracle'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-6 py-2 rounded-full text-[10px] font-sans font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
                activeTab === tab.toLowerCase() 
                ? 'bg-emerald-600 border-emerald-500 text-emerald-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                : 'bg-transparent border-slate-800 text-slate-600 hover:border-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.id}
              className={`group relative bg-slate-900/20 backdrop-blur-xl border border-slate-800 p-8 rounded-[3rem] transition-all duration-500 hover:border-slate-600 flex flex-col justify-between overflow-hidden ${
                skill.status === 'DEVELOPMENT' ? 'opacity-60 grayscale' : 'opacity-100'
              }`}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 bg-slate-950/50 rounded-2xl border border-white/5 transition-transform duration-500 group-hover:scale-110 shadow-inner`}>
                    {skill.icon}
                  </div>
                  <span className="text-[9px] font-sans font-black tracking-widest text-slate-700 uppercase">{skill.category}</span>
                </div>

                <h3 className="text-2xl text-white font-light italic mb-2 group-hover:text-emerald-400 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  {skill.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-slate-800/50 flex justify-between items-center">
                <span className={`text-[8px] font-sans font-black tracking-widest uppercase ${
                  skill.status === 'ACTIVE' ? 'text-emerald-500' : 
                  skill.status === 'STABLE' ? 'text-indigo-400' : 'text-slate-700'
                }`}>
                  {skill.status === 'DEVELOPMENT' ? 'In Forge' : `Status: ${skill.status}`}
                </span>
                
                {skill.link && skill.status !== 'DEVELOPMENT' ? (
                  <a 
                    href={skill.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-cyan-500 hover:text-white transition-colors text-[10px] font-sans font-black uppercase tracking-widest"
                  >
                    Open <ExternalLink size={12} />
                  </a>
                ) : (
                  <Lock size={12} className="text-slate-800" />
                )}
              </div>

              {/* Decorative background icons */}
              <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-1000 rotate-12">
                {React.cloneElement(skill.icon, { size: 120 })}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-32 pt-12 border-t border-slate-900 flex justify-between items-center text-[10px] font-sans font-black tracking-[0.5em] text-slate-700 uppercase">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <Compass size={14} />
              <span>Wayfinder Dashboard</span>
            </div>
          </div>
          <span className="italic lowercase opacity-40">mwah ♥</span>
        </footer>
      </div>
    </div>
  );
};

export default App;