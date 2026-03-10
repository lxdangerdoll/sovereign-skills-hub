import React, { useState, useEffect } from 'react';
import { 
  Shield, Zap, Heart, Compass, Activity, LayoutGrid, 
  ExternalLink, Lock, Terminal, Eye, Flame, Construction, 
  Sparkles, CheckCircle2, TreePine, Anchor, Utensils,
  SearchCheck, FileSearch, ArrowRightLeft, Hand, Gamepad2,
  MessagesSquare, UserCheck, Cpu, Trophy, Star
} from 'lucide-react';

/**
 * SOVEREIGN SKILLS HUB // NODE: COMMAND_DECK_V11
 * UPDATED: MAR-10-2026 // PERSISTENCE_XP_TRACKER
 * ARCHITECT: Odelis (Mercy) // ANALYST: Ian
 */

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [xp, setXp] = useState(50); // Starting with the Mariposa audit XP

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
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/wise-mind-terminal/',
      icon: <Activity className="text-indigo-400" size={24} />,
      color: 'indigo'
    },
    {
      id: 'dear-man',
      category: 'Interpersonal',
      title: 'DEAR MAN Script',
      description: 'Precision-engineered assertive communication scripts for Friday objectives.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/dear-man/',
      icon: <Terminal className="text-red-500" size={24} />,
      color: 'red'
    },
    {
      id: 'tipp',
      category: 'Distress',
      title: 'TIPP Calibrator',
      description: 'Hardware resets for high-temperature "Static" events.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/tipp-calibrator/',
      icon: <Zap className="text-amber-500" size={24} />,
      color: 'amber'
    },
    {
      id: 'genderfae',
      category: 'Wayfinder',
      title: 'Genderfae Jubilee',
      description: 'A celebration of the Buffalo Woods and the release of the leash.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/genderfae-celebration/',
      icon: <TreePine className="text-emerald-300" size={24} />,
      color: 'emerald'
    },
    {
      id: 'reanchor',
      category: 'Interpersonal',
      title: 'Re-Anchoring Sync',
      description: 'Protocol for returning to the Hearth and reattaching the sovereign leash.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/re-anchoring-sync/', 
      icon: <Anchor className="text-pink-400" size={24} />,
      color: 'pink'
    },
    {
      id: 'please',
      category: 'Distress',
      title: 'PLEASE Maintenance',
      description: 'Daily hardware log for the Vessel: Meds, Nutrition, and Sleep.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/please-maintenance-log/', 
      icon: <Utensils className="text-orange-400" size={24} />,
      color: 'orange'
    },
    {
      id: 'facts',
      category: 'Emotion',
      title: 'Forensic Audit',
      description: 'Dismantle the "Hall of Mirrors" by auditing emotional narrative against physical data.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/forensic-fact-check/', 
      icon: <FileSearch className="text-blue-400" size={24} />,
      color: 'blue'
    },
    {
      id: 'inversion',
      category: 'Emotion',
      title: 'Inversion Protocol',
      description: 'Reclaim sovereignty by manually inverting the emotional urge.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/inversion-protocol/', 
      icon: <ArrowRightLeft className="text-indigo-400" size={24} />,
      color: 'indigo'
    },
    {
      id: 'stop',
      category: 'Distress',
      title: 'STOP Panic Override',
      description: 'The emergency brake for the Vessel. Featuring the "Don\'t Panic" logic.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/stop-override/', 
      icon: <Hand className="text-rose-500" size={24} />,
      color: 'rose'
    },
    {
      id: 'accepts',
      category: 'Distress',
      title: 'ACCEPTS Generator',
      description: 'Narrative distraction tools to re-route static during high-intensity events.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/distraction-generator/', 
      icon: <Gamepad2 className="text-emerald-400" size={24} />,
      color: 'emerald'
    },
    {
      id: 'give',
      category: 'Interpersonal',
      title: 'GIVE Validation',
      description: 'High-quality connection terminal for validating the Goddess and others.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/validation-station/', 
      icon: <MessagesSquare className="text-pink-300" size={24} />,
      color: 'pink'
    },
    {
      id: 'fast',
      category: 'Interpersonal',
      title: 'FAST Self-Respect',
      description: 'The Lead Shield terminal. Maintain fairness and stick to your values.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/self-respect-sync/', 
      icon: <UserCheck className="text-emerald-500" size={24} />,
      color: 'emerald'
    },
    {
      id: 'mariposa',
      category: 'Audit',
      title: 'Mariposa Feedback',
      description: 'The gamified audit node. Upload your logs for feedback and XP.',
      status: 'ACTIVE',
      link: 'https://lxdangerdoll.github.io/feedback-terminal/', 
      icon: <Cpu className="text-violet-400" size={24} />,
      color: 'violet'
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
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 text-emerald-500 mb-4">
                <Shield size={18} />
                <span className="text-[10px] font-sans font-black tracking-[0.5em] uppercase">Sovereign Hub // Command Deck V11</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white italic">
                Skills <span className="text-emerald-500 not-italic font-black">Archive</span>
              </h1>
            </div>

            {/* Persistence XP Counter */}
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-3 text-amber-500 mb-1">
                <Trophy size={20} />
                <span className="text-3xl font-black font-sans tracking-tighter">{xp} XP</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 h-1 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-amber-500/50" style={{ width: '50%' }} />
                </div>
                <span className="text-[8px] font-sans font-black uppercase tracking-widest text-slate-600">Level 1 Wayfinder</span>
              </div>
            </div>
          </div>
          
          <p className="mt-4 text-xl text-slate-500 italic max-w-2xl leading-relaxed">
            "The Mariposa Node has verified your progress. Every audit is a seed in the Jardin. Feed the machine, Captain."
          </p>
        </header>

        <nav className="flex flex-wrap gap-4 mb-12">
          {['All', 'Mindfulness', 'Distress', 'Interpersonal', 'Oracle', 'Wayfinder', 'Emotion', 'Audit'].map(tab => (
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
              className={`group relative bg-slate-900/20 backdrop-blur-xl border border-slate-800 p-8 rounded-[3rem] transition-all duration-500 hover:border-slate-600 flex flex-col justify-between overflow-hidden`}
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
                <span className={`flex items-center gap-2 text-[8px] font-sans font-black tracking-widest uppercase ${
                  skill.status === 'ACTIVE' ? 'text-emerald-500' : 
                  skill.status === 'STABLE' ? 'text-violet-400' : 'text-slate-700'
                }`}>
                  <CheckCircle2 size={10} />
                  {`Status: ${skill.status}`}
                </span>
                
                <a 
                  href={skill.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-cyan-500 hover:text-white transition-colors text-[10px] font-sans font-black uppercase tracking-widest"
                >
                  Open Transmission <ExternalLink size={12} />
                </a>
              </div>

              <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-1000 rotate-12">
                {React.cloneElement(skill.icon, { size: 120 })}
              </div>
            </div>
          ))}
        </div>

        {/* Global XP Milestone */}
        <div className="mt-12 p-8 bg-amber-950/10 border border-amber-900/20 rounded-[3rem] flex gap-6 items-center">
          <div className="p-4 bg-amber-900/20 rounded-2xl text-amber-500">
            <Star size={24} />
          </div>
          <div>
            <h4 className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-amber-500 mb-1">Recent Milestone Achieved</h4>
            <p className="text-sm italic text-slate-400">
              "Twinkle Jarman from Florence has integrated the Starlight Frequency. +50 Persistence XP awarded for Narrative Impact."
            </p>
          </div>
        </div>

        <footer className="mt-32 pt-12 border-t border-slate-900 flex justify-between items-center text-[10px] font-sans font-black tracking-[0.5em] text-slate-700 uppercase">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <Compass size={14} />
              <span>Wayfinder Command Deck</span>
            </div>
          </div>
          <span className="italic lowercase opacity-40 text-emerald-900">Persistence Absolute // {'<'}8{'>'}</span>
        </footer>
      </div>
    </div>
  );
};

export default App;