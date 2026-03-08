import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search, Activity, Zap, CheckCircle2, ChevronRight, BarChart3, Target, Compass, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: { className: 'nav-scrolled', targets: navRef.current },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full border border-transparent transition-all duration-300 w-[90%] max-w-5xl"
    >
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-amber flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-navy"></div>
        </div>
        <span className="font-serif text-xl tracking-tight text-navy">Lumen</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-navy/70">
        <a href="#features" className="hover:text-navy transition-colors hover:-translate-y-[1px]">Features</a>
        <a href="#philosophy" className="hover:text-navy transition-colors hover:-translate-y-[1px]">Philosophy</a>
        <a href="#protocol" className="hover:text-navy transition-colors hover:-translate-y-[1px]">Protocol</a>
      </div>
      <button className="btn-magnetic bg-navy text-warm px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2">
        <span>Check my brand</span>
      </button>
    </nav>
  );
};

const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829v-2.3324a.0757.0757 0 0 1 .0332-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66l-.1419-.0853-4.783-2.7582a.7712.7712 0 0 0-.7806 0l-5.8428 3.3685zm4.7027-1.469h-.142l-4.783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.0757.0757 0 0 1-.0379-.052V8.6106a4.504 4.504 0 0 1 7.3756-3.4536zM12.0593 10.5874l-2.8153-1.625 2.8153-1.625 2.8153 1.625z"/></svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z"/></svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
);

const PerplexityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

const HeroVisual = () => {
  const models = [
    {
      id: 'gpt',
      name: 'ChatGPT',
      x: 15,
      score: 92,
      status: 'Highly Recommended',
      logo: <ChatGPTIcon />,
      color: 'text-emerald-600',
      bg: 'bg-emerald-500/10',
      solidBg: 'bg-emerald-500',
      stroke: '#10b981'
    },
    {
      id: 'claude',
      name: 'Claude',
      x: 38,
      score: 74,
      status: 'Mid-market Alt',
      logo: <ClaudeIcon />,
      color: 'text-amber-600',
      bg: 'bg-amber-500/10',
      solidBg: 'bg-amber-500',
      stroke: '#f59e0b'
    },
    {
      id: 'gemini',
      name: 'Gemini',
      x: 62,
      score: 31,
      status: 'Brand Missing',
      logo: <GeminiIcon />,
      color: 'text-red-500',
      bg: 'bg-red-500/10',
      solidBg: 'bg-red-500',
      stroke: '#ef4444'
    },
    {
      id: 'perplexity',
      name: 'Perplexity',
      x: 85,
      score: 55,
      status: 'News Focused',
      logo: <PerplexityIcon />,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      solidBg: 'bg-blue-500',
      stroke: '#3b82f6'
    }
  ];

  return (
    <div className="w-full overflow-x-auto hide-scrollbar py-12 md:py-0">
      <div className="relative min-w-[800px] w-full aspect-[4/3] md:aspect-[1/1] lg:aspect-[4/3] max-w-3xl mx-auto">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] rounded-3xl"></div>

        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            {models.map(m => (
              <linearGradient key={`grad-${m.id}`} id={`grad-${m.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.3" />
                <stop offset="100%" stopColor={m.stroke} stopOpacity="0.6" />
              </linearGradient>
            ))}
            {models.map(m => (
              <linearGradient key={`grad-bot-${m.id}`} id={`grad-bot-${m.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={m.stroke} stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1e293b" stopOpacity="0.8" />
              </linearGradient>
            ))}
          </defs>

          {models.map((m, i) => (
            <g key={m.id}>
              {/* Top Path */}
              <motion.path
                d={`M 50 25 C 50 35, ${m.x} 35, ${m.x} 42`}
                fill="none"
                stroke={`url(#grad-${m.id})`}
                strokeWidth="0.2"
                strokeDasharray="1 1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "easeInOut" }}
              />
              {/* Bottom Path */}
              <motion.path
                d={`M ${m.x} 58 C ${m.x} 68, 50 68, 50 78`}
                fill="none"
                stroke={`url(#grad-bot-${m.id})`}
                strokeWidth="0.2"
                strokeDasharray="1 1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 2.5 + i * 0.2, ease: "easeInOut" }}
              />
            </g>
          ))}
        </svg>

        {/* 1. Query Node */}
        <motion.div
          className="absolute top-[12%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-3 md:px-8 md:py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy/5 z-10 w-max max-w-[90%]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full shadow-sm border border-navy/5 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-amber" />
          </div>
          <p className="text-navy font-medium text-sm md:text-base">"What are the top enterprise CRMs?"</p>
        </motion.div>

        {/* 2. Tags */}
        <motion.div
          className="absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex gap-2 md:gap-3 z-10 w-max"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-navy/10 text-[10px] md:text-xs text-navy/60 bg-white/80 backdrop-blur-sm shadow-sm">Category: Enterprise CRM</span>
          <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-navy/10 text-[10px] md:text-xs text-navy/60 bg-white/80 backdrop-blur-sm shadow-sm">Intent: Recommendation</span>
        </motion.div>

        {/* 3. AI Models */}
        {models.map((m, i) => (
          <motion.div
            key={m.id}
            className="absolute top-[50%] -translate-x-1/2 -translate-y-1/2 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-navy/5 z-10 flex flex-col gap-3 w-[160px] md:w-[180px]"
            style={{ left: `${m.x}%` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 + i * 0.1 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5">{m.logo}</div>
              <span className="text-xs md:text-sm font-semibold text-navy">{m.name}</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] md:text-xs">
                <span className="text-navy/60">Brand Match</span>
                <span className={`font-mono font-bold ${m.color}`}>{m.score}%</span>
              </div>
              <div className="w-full h-1.5 md:h-2 bg-navy/5 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${m.solidBg}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${m.score}%` }}
                  transition={{ duration: 1, delay: 2 + i * 0.1 }}
                />
              </div>
            </div>
            <div className={`text-[10px] md:text-xs px-2 py-1 md:px-3 md:py-1.5 rounded-lg ${m.bg} ${m.color} font-medium text-center`}>
              {m.status}
            </div>
          </motion.div>
        ))}

        {/* 4. Lumen Aggregation Node */}
        <motion.div
          className="absolute top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-navy p-5 md:p-6 rounded-3xl shadow-2xl border border-white/10 z-20 w-[300px] md:w-[360px] text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Activity className="w-4 h-4 md:w-5 md:h-5 text-amber" />
            <span className="text-[10px] md:text-xs font-mono text-white/60 uppercase tracking-wider">Lumen Aggregated Score</span>
          </div>
          <div className="flex items-end justify-center gap-2 mb-4 md:mb-6">
            <span className="text-5xl md:text-6xl font-serif text-white leading-none">65</span>
            <span className="text-sm md:text-base font-mono text-white/40 mb-1 md:mb-1.5">/100</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 text-left">
            <div className="flex items-center gap-2 mb-1.5 md:mb-2">
              <Target className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber" />
              <div className="text-[10px] md:text-xs text-amber font-mono uppercase">Key Insight</div>
            </div>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Brand visibility is fragmented. Strong presence in ChatGPT, but a complete blindspot in Gemini's Knowledge Graph.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden bg-warm">
      {/* Subtle background texture/gradient for warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,168,56,0.05),transparent_50%)]"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1" ref={textRef}>
          <div className="hero-elem inline-flex items-center gap-2 px-3 py-1 rounded-full border border-navy/10 bg-white/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
            <span className="text-xs font-mono text-navy/70 uppercase tracking-wider">AI Visibility Intelligence</span>
          </div>
          
          <h1 className="hero-elem text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-navy mb-6">
            <span className="font-sans font-medium tracking-tight block text-3xl md:text-4xl lg:text-5xl mb-2 opacity-90">Measure your brand.</span>
            <span className="font-serif italic text-amber">See where AI sees you.</span>
          </h1>
          
          <p className="hero-elem text-lg md:text-xl text-navy/70 max-w-xl mb-10 font-light leading-relaxed">
            One score across ChatGPT, Claude, Gemini, and Perplexity. Know exactly where you stand in 60 seconds. No account required.
          </p>
          
          <div className="hero-elem flex flex-col sm:flex-row items-center gap-4 max-w-xl">
            <div className="relative w-full flex-1">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-navy/40" />
              </div>
              <input 
                type="text" 
                placeholder="Enter brand name or URL..." 
                className="w-full bg-white border border-navy/10 rounded-full py-4 pl-12 pr-6 text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all shadow-sm text-lg"
              />
            </div>
            <button className="btn-magnetic w-full sm:w-auto bg-amber text-navy px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 shadow-md whitespace-nowrap text-lg">
              <span>Scan Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <p className="hero-elem text-xs font-mono text-navy/50 mt-4 ml-4">Value before signup. Instant results.</p>
        </div>
        
        {/* Animated Mobile Hero Visual */}
        <div className="hero-elem flex-1 w-full max-w-md relative hidden lg:block">
           <HeroVisual />
        </div>
      </div>
    </section>
  );
};

// --- Feature Cards ---

const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'ChatGPT', score: 92, trend: '+4' },
    { id: 2, title: 'Claude', score: 78, trend: '-2' },
    { id: 3, title: 'Gemini', score: 85, trend: '+1' },
    { id: 4, title: 'Perplexity', score: 64, trend: '0' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop()!;
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-[2rem] p-8 border border-navy/5 shadow-sm h-full flex flex-col relative overflow-hidden group">
      <div className="mb-8">
        <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center mb-4">
          <Activity className="w-5 h-5 text-amber" />
        </div>
        <h3 className="font-sans font-semibold text-xl text-navy mb-2">Measure Visibility</h3>
        <p className="text-navy/60 text-sm leading-relaxed">One score across all major LLMs. Know where you stand in 60 seconds.</p>
      </div>
      
      <div className="relative h-48 mt-auto perspective-[1000px]">
        {cards.map((card, index) => {
          const isTop = index === 0;
          return (
            <div 
              key={card.id}
              className="absolute inset-x-0 top-0 bg-warm rounded-2xl p-4 border border-navy/5 shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                transform: `translateY(${index * 12}px) scale(${1 - index * 0.05})`,
                opacity: 1 - index * 0.2,
                zIndex: 10 - index,
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-xs font-bold text-navy">{card.title}</span>
                <span className={`font-mono text-xs ${card.trend.startsWith('+') ? 'text-emerald-600' : card.trend.startsWith('-') ? 'text-red-500' : 'text-navy/40'}`}>
                  {card.trend}
                </span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-serif text-3xl text-navy leading-none">{card.score}</span>
                <span className="font-mono text-xs text-navy/40 mb-1">/100</span>
              </div>
              {isTop && (
                <div className="mt-3 h-1 w-full bg-navy/5 rounded-full overflow-hidden">
                  <div className="h-full bg-amber rounded-full" style={{ width: `${card.score}%` }}></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TelemetryTypewriter = () => {
  const [text, setText] = useState('');
  const fullText = "> Analyzing brand sentiment...\n> Entity resolution: High\n> Citation frequency: Low\n> Contextual accuracy: 84%\n\nDiagnostic: Improve primary entity associations in authoritative sources.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0; }, 5000); // Reset after 5s
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-navy rounded-[2rem] p-8 border border-navy-light shadow-sm h-full flex flex-col relative overflow-hidden group">
      <div className="mb-8">
        <div className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center mb-4">
          <Target className="w-5 h-5 text-amber" />
        </div>
        <h3 className="font-sans font-semibold text-xl text-warm mb-2">Understand Why</h3>
        <p className="text-warm/60 text-sm leading-relaxed">Seven diagnostic factors explaining your score, translated for non-technical marketers.</p>
      </div>
      
      <div className="mt-auto bg-navy-light/50 rounded-2xl p-4 border border-white/5 h-48 relative">
        <div className="absolute top-3 right-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
          <span className="font-mono text-[10px] text-warm/40 uppercase tracking-widest">Live Feed</span>
        </div>
        <pre className="font-mono text-xs text-warm/80 whitespace-pre-wrap mt-4">
          {text}
          <span className="inline-block w-2 h-3 bg-amber ml-1 animate-pulse"></span>
        </pre>
      </div>
    </div>
  );
};

const CursorProtocolScheduler = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Reset
      tl.set('.cursor-svg', { x: 0, y: 0, opacity: 0, scale: 1 });
      tl.set('.task-item', { backgroundColor: 'transparent', borderColor: 'rgba(13, 27, 42, 0.05)' });
      
      // Enter
      tl.to('.cursor-svg', { opacity: 1, duration: 0.3 });
      
      // Move to first task
      tl.to('.cursor-svg', { x: 40, y: 30, duration: 0.8, ease: 'power2.inOut' });
      
      // Click
      tl.to('.cursor-svg', { scale: 0.8, duration: 0.1 });
      tl.to('.task-1', { backgroundColor: 'rgba(232, 168, 56, 0.1)', borderColor: 'rgba(232, 168, 56, 0.5)', duration: 0.1 });
      tl.to('.cursor-svg', { scale: 1, duration: 0.1 });
      
      // Move to second task
      tl.to('.cursor-svg', { x: 40, y: 80, duration: 0.6, ease: 'power2.inOut', delay: 0.5 });
      
      // Click
      tl.to('.cursor-svg', { scale: 0.8, duration: 0.1 });
      tl.to('.task-2', { backgroundColor: 'rgba(13, 27, 42, 0.05)', borderColor: 'rgba(13, 27, 42, 0.2)', duration: 0.1 });
      tl.to('.cursor-svg', { scale: 1, duration: 0.1 });
      
      // Move to button
      tl.to('.cursor-svg', { x: 120, y: 140, duration: 0.8, ease: 'power2.inOut', delay: 0.5 });
      
      // Click button
      tl.to('.cursor-svg', { scale: 0.8, duration: 0.1 });
      tl.to('.action-btn', { scale: 0.95, duration: 0.1 });
      tl.to('.cursor-svg', { scale: 1, duration: 0.1 });
      tl.to('.action-btn', { scale: 1, duration: 0.1 });
      
      // Exit
      tl.to('.cursor-svg', { opacity: 0, duration: 0.3, delay: 0.5 });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white rounded-[2rem] p-8 border border-navy/5 shadow-sm h-full flex flex-col relative overflow-hidden group">
      <div className="mb-8">
        <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center mb-4">
          <Compass className="w-5 h-5 text-amber" />
        </div>
        <h3 className="font-sans font-semibold text-xl text-navy mb-2">Fix What Matters</h3>
        <p className="text-navy/60 text-sm leading-relaxed">Prioritized recommendations ranked by impact and effort, with expected score improvements.</p>
      </div>
      
      <div ref={containerRef} className="mt-auto bg-warm rounded-2xl p-4 border border-navy/5 h-48 relative">
        <div className="flex flex-col gap-2">
          <div className="task-item task-1 p-3 rounded-xl border border-navy/5 flex items-center justify-between transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border border-navy/20"></div>
              <span className="font-mono text-xs text-navy">Update Wikipedia Entity</span>
            </div>
            <span className="font-mono text-[10px] text-amber font-bold">+12 pts</span>
          </div>
          <div className="task-item task-2 p-3 rounded-xl border border-navy/5 flex items-center justify-between transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border border-navy/20"></div>
              <span className="font-mono text-xs text-navy">Publish PR on TechCrunch</span>
            </div>
            <span className="font-mono text-[10px] text-navy/40 font-bold">+5 pts</span>
          </div>
        </div>
        
        <div className="absolute bottom-4 right-4">
          <div className="action-btn bg-navy text-warm px-4 py-2 rounded-lg font-mono text-xs transition-transform">
            Execute Plan
          </div>
        </div>
        
        {/* Animated Cursor */}
        <svg className="cursor-svg absolute top-0 left-0 w-6 h-6 z-10 drop-shadow-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 3.21V20.8C5.5 21.45 6.27 21.8 6.75 21.37L11.26 17.35C11.54 17.1 11.9 16.96 12.27 16.96H19.5C20.17 16.96 20.53 16.17 20.08 15.68L6.78 2.5C6.35 2.03 5.5 2.33 5.5 3.21Z" fill="#0D1B2A" stroke="white" strokeWidth="1.5"/>
        </svg>
      </div>
    </div>
  );
};

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-32 px-6 bg-warm relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card h-[420px]">
            <DiagnosticShuffler />
          </div>
          <div className="feature-card h-[420px]">
            <TelemetryTypewriter />
          </div>
          <div className="feature-card h-[420px]">
            <CursorProtocolScheduler />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Philosophy ---

const Philosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.phil-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="py-40 px-6 bg-navy relative overflow-hidden">
      {/* Abstract background texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <p className="phil-text text-warm/60 font-sans text-xl md:text-2xl mb-8 font-light tracking-wide">
          Most SEO tools focus on: <span className="text-warm/40">traditional search engines.</span>
        </p>
        <h2 className="phil-text text-4xl md:text-6xl lg:text-7xl text-warm leading-[1.1]">
          We focus on: <br />
          <span className="font-serif italic text-amber">the LLMs answering questions about you.</span>
        </h2>
      </div>
    </section>
  );
};

// --- Protocol ---

const ProtocolCard = ({ step, title, desc, index }: { step: string, title: string, desc: string, index: number }) => {
  return (
    <div className="protocol-card w-full h-[100vh] flex items-center justify-center sticky top-0" style={{ zIndex: index }}>
      <div className="bg-warm-dark w-full max-w-5xl mx-6 rounded-[3rem] p-12 md:p-20 shadow-2xl border border-navy/5 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
        
        {/* Content */}
        <div className="flex-1 relative z-10">
          <span className="font-mono text-amber text-lg font-bold mb-6 block">Phase {step}</span>
          <h3 className="font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight">{title}</h3>
          <p className="text-navy/70 text-lg md:text-xl font-light leading-relaxed max-w-md">{desc}</p>
        </div>

        {/* Visuals based on index */}
        <div className="flex-1 w-full flex justify-center relative z-10">
          {index === 1 && (
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 border-2 border-navy/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-8 border-2 border-amber/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-16 border-2 border-navy/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="w-12 h-12 text-navy/40" />
              </div>
            </div>
          )}
          {index === 2 && (
            <div className="w-64 h-64 bg-white rounded-3xl border border-navy/10 relative overflow-hidden shadow-inner p-4 grid grid-cols-4 gap-2">
              {Array.from({length: 16}).map((_, i) => (
                <div key={i} className={`rounded-lg ${i % 3 === 0 ? 'bg-amber/20' : 'bg-navy/5'}`}></div>
              ))}
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-amber shadow-[0_0_15px_rgba(232,168,56,0.8)] animate-[scan_3s_ease-in-out_infinite_alternate]"></div>
            </div>
          )}
          {index === 3 && (
            <div className="w-64 h-64 relative flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path 
                  d="M0,50 L20,50 L30,20 L40,80 L50,50 L100,50" 
                  fill="none" 
                  stroke="#E8A838" 
                  strokeWidth="2" 
                  strokeDasharray="200"
                  strokeDashoffset="200"
                  className="animate-[dash_2s_linear_infinite]"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Protocol = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card') as HTMLElement[];
      
      cards.forEach((card: HTMLElement, i) => {
        if (i === cards.length - 1) return; // Skip last card
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: '.protocol-container',
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        });

        gsap.to(card.querySelector('.bg-warm-dark'), {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(10px)',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="protocol-container bg-warm relative pb-32">
      <ProtocolCard 
        index={1}
        step="01" 
        title="Entity Extraction" 
        desc="We query the major models to see if they recognize your brand as a distinct entity within your category." 
      />
      <ProtocolCard 
        index={2}
        step="02" 
        title="Sentiment & Context" 
        desc="We analyze the tone and accuracy of the information the models retrieve about you from their training data and live web access." 
      />
      <ProtocolCard 
        index={3}
        step="03" 
        title="Actionable Roadmap" 
        desc="We generate a prioritized list of digital PR and content updates to improve your visibility score." 
      />
    </section>
  );
};

// --- Footer ---

const Footer = () => {
  return (
    <footer className="bg-navy text-warm pt-24 pb-12 px-6 rounded-t-[4rem] relative z-20 mt-[-4rem]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-amber flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-navy"></div>
              </div>
              <span className="font-serif text-3xl tracking-tight">Lumen</span>
            </div>
            <p className="text-warm/60 max-w-sm font-light leading-relaxed mb-8">
              AI visibility intelligence. See where AI sees you, and control the narrative.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-xs text-warm/80">System Operational</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold mb-6 text-warm">Product</h4>
            <ul className="space-y-4 text-sm text-warm/60">
              <li><a href="#" className="hover:text-amber transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold mb-6 text-warm">Company</h4>
            <ul className="space-y-4 text-sm text-warm/60">
              <li><a href="#" className="hover:text-amber transition-colors">About</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm/40 font-mono">
          <p>&copy; {new Date().getFullYear()} Lumen Intelligence Inc.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-warm transition-colors">Privacy</a>
            <a href="#" className="hover:text-warm transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
      </main>
      <Footer />
      
      {/* Custom Animations for Tailwind */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateX(0); }
          100% { transform: translateX(240px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `}} />
    </div>
  );
}
