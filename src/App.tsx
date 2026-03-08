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
  <svg viewBox="0 0 24 24" fill="#10a37f" className="w-full h-full"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829v-2.3324a.0757.0757 0 0 1 .0332-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66l-.1419-.0853-4.783-2.7582a.7712.7712 0 0 0-.7806 0l-5.8428 3.3685zm4.7027-1.469h-.142l-4.783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.0757.0757 0 0 1-.0379-.052V8.6106a4.504 4.504 0 0 1 7.3756-3.4536zM12.0593 10.5874l-2.8153-1.625 2.8153-1.625 2.8153 1.625z"/></svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#D97757" className="w-full h-full"><path d="M12.1 2.5c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5c3.5 0 6.6-1.9 8.3-4.8l-2.2-1.3c-1.2 2-3.4 3.4-5.9 3.4-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9c2.6 0 4.8 1.4 5.9 3.4l2.2-1.3C18.7 4.4 15.6 2.5 12.1 2.5z"/></svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <defs>
      <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="50%" stopColor="#EA4335" />
        <stop offset="100%" stopColor="#FABB05" />
      </linearGradient>
    </defs>
    <path fill="url(#gemini-grad)" d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"/>
  </svg>
);

const PerplexityIcon = () => (
  <svg viewBox="0 0 24 24" fill="#22B8CD" className="w-full h-full">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const AI_MODELS = [
  { id: 'gpt', name: 'ChatGPT', x: 15, logo: <ChatGPTIcon /> },
  { id: 'claude', name: 'Claude', x: 38, logo: <ClaudeIcon /> },
  { id: 'gemini', name: 'Gemini', x: 62, logo: <GeminiIcon /> },
  { id: 'perplexity', name: 'Perplexity', x: 85, logo: <PerplexityIcon /> }
];

const SCENARIOS = [
  {
    id: 'crm',
    query: '"What are the top enterprise CRMs?"',
    category: 'Enterprise CRM',
    intent: 'Recommendation',
    models: [
      { id: 'gpt', score: 92, status: 'Highly Recommended', color: 'text-emerald-600', bg: 'bg-emerald-500/10', solidBg: 'bg-emerald-500', stroke: '#10b981' },
      { id: 'claude', score: 74, status: 'Mid-market Alt', color: 'text-amber-600', bg: 'bg-amber-500/10', solidBg: 'bg-amber-500', stroke: '#f59e0b' },
      { id: 'gemini', score: 31, status: 'Brand Missing', color: 'text-red-500', bg: 'bg-red-500/10', solidBg: 'bg-red-500', stroke: '#ef4444' },
      { id: 'perplexity', score: 55, status: 'News Focused', color: 'text-blue-500', bg: 'bg-blue-500/10', solidBg: 'bg-blue-500', stroke: '#3b82f6' }
    ],
    finalScore: 65,
    benchmark: 58,
    insight: "Brand visibility is fragmented. Strong presence in ChatGPT, but a complete blindspot in Gemini's Knowledge Graph.",
    recommendation: "Publish technical whitepapers optimized for Gemini's training corpus."
  },
  {
    id: 'cloud',
    query: '"Best secure cloud storage for healthcare?"',
    category: 'Cloud Storage',
    intent: 'Evaluation',
    models: [
      { id: 'gpt', score: 85, status: 'Top Tier', color: 'text-emerald-600', bg: 'bg-emerald-500/10', solidBg: 'bg-emerald-500', stroke: '#10b981' },
      { id: 'claude', score: 95, status: 'Highly Recommended', color: 'text-emerald-600', bg: 'bg-emerald-500/10', solidBg: 'bg-emerald-500', stroke: '#10b981' },
      { id: 'gemini', score: 60, status: 'Mentioned', color: 'text-amber-600', bg: 'bg-amber-500/10', solidBg: 'bg-amber-500', stroke: '#f59e0b' },
      { id: 'perplexity', score: 88, status: 'Top Tier', color: 'text-emerald-600', bg: 'bg-emerald-500/10', solidBg: 'bg-emerald-500', stroke: '#10b981' }
    ],
    finalScore: 82,
    benchmark: 71,
    insight: "Excellent overall visibility. Claude strongly prefers your security features over competitors.",
    recommendation: "Maintain current strategy while expanding Perplexity citations."
  },
  {
    id: 'marketing',
    query: '"How to automate marketing workflows?"',
    category: 'Marketing Auto',
    intent: 'Educational',
    models: [
      { id: 'gpt', score: 45, status: 'Rarely Mentioned', color: 'text-red-500', bg: 'bg-red-500/10', solidBg: 'bg-red-500', stroke: '#ef4444' },
      { id: 'claude', score: 50, status: 'Alternative', color: 'text-amber-600', bg: 'bg-amber-500/10', solidBg: 'bg-amber-500', stroke: '#f59e0b' },
      { id: 'gemini', score: 40, status: 'Rarely Mentioned', color: 'text-red-500', bg: 'bg-red-500/10', solidBg: 'bg-red-500', stroke: '#ef4444' },
      { id: 'perplexity', score: 70, status: 'Strong Context', color: 'text-emerald-600', bg: 'bg-emerald-500/10', solidBg: 'bg-emerald-500', stroke: '#10b981' }
    ],
    finalScore: 51,
    benchmark: 64,
    insight: "Poor educational presence. Perplexity finds your docs, but LLMs aren't trained on your workflows.",
    recommendation: "Restructure developer docs and create workflow-specific tutorials."
  }
];

const ScenarioView = ({ scenario }: { scenario: typeof SCENARIOS[0] }) => {
  return (
    <motion.div 
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {scenario.models.map(m => (
            <linearGradient key={`grad-${m.id}`} id={`grad-${m.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.3" />
              <stop offset="100%" stopColor={m.stroke} stopOpacity="0.6" />
            </linearGradient>
          ))}
          {scenario.models.map(m => (
            <linearGradient key={`grad-bot-${m.id}`} id={`grad-bot-${m.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={m.stroke} stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.8" />
            </linearGradient>
          ))}
        </defs>

        {scenario.models.map((m, i) => {
          const baseModel = AI_MODELS.find(ai => ai.id === m.id)!;
          return (
            <g key={m.id}>
              {/* Top Path */}
              <motion.path
                d={`M 50 20 C 50 28, ${baseModel.x} 28, ${baseModel.x} 35`}
                fill="none"
                stroke={`url(#grad-${m.id})`}
                strokeWidth="0.3"
                strokeDasharray="1 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "circOut" }}
              />
              {/* Bottom Path */}
              <motion.path
                d={`M ${baseModel.x} 55 C ${baseModel.x} 62, 50 62, 50 67`}
                fill="none"
                stroke={`url(#grad-bot-${m.id})`}
                strokeWidth="0.3"
                strokeDasharray="1 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 2.5 + i * 0.1, ease: "circOut" }}
              />
            </g>
          );
        })}
      </svg>

      {/* 1. Query Node */}
      <motion.div
        className="absolute top-[8%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-3 md:px-8 md:py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy/5 z-10 w-max max-w-[90%]"
        initial={{ opacity: 0, scale: 0.8, y: -40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
      >
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full shadow-sm border border-navy/5 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-amber" />
        </div>
        <p className="text-navy font-medium text-sm md:text-base">{scenario.query}</p>
      </motion.div>

      {/* 2. Tags */}
      <motion.div
        className="absolute top-[18%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex gap-2 md:gap-3 z-10 w-max"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-navy/10 text-[10px] md:text-xs text-navy/60 bg-white/80 backdrop-blur-sm shadow-sm">Category: {scenario.category}</span>
        <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-navy/10 text-[10px] md:text-xs text-navy/60 bg-white/80 backdrop-blur-sm shadow-sm">Intent: {scenario.intent}</span>
      </motion.div>

      {/* 3. AI Models */}
      {scenario.models.map((m, i) => {
        const baseModel = AI_MODELS.find(ai => ai.id === m.id)!;
        return (
          <motion.div
            key={m.id}
            className="absolute top-[45%] -translate-x-1/2 -translate-y-1/2 z-10 w-[160px] md:w-[180px]"
            style={{ left: `${baseModel.x}%`, perspective: 1000 }}
            initial={{ opacity: 0, y: 50, rotateX: 45, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 12, delay: 1.5 + i * 0.1 }}
          >
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut", delay: 2 }}
              className="bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-navy/5 flex flex-col gap-3 overflow-hidden relative"
            >
              {/* Processing Overlay */}
              <motion.div 
                className="absolute inset-0 bg-white/80 backdrop-blur-md z-20 flex flex-col items-center justify-center gap-3 border-2 border-amber/30 rounded-2xl"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, pointerEvents: 'none' }}
                transition={{ delay: 2.2 + i * 0.2, duration: 0.4 }}
              >
                <motion.div 
                  className="w-6 h-6 rounded-full border-2 border-amber border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
                <span className="text-[10px] font-mono text-amber uppercase tracking-widest font-bold">Analyzing</span>
              </motion.div>

              <div className="flex items-center gap-2">
                <div className="w-5 h-5">{baseModel.logo}</div>
                <span className="text-xs md:text-sm font-semibold text-navy">{baseModel.name}</span>
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
                    transition={{ duration: 1, delay: 2.5 + i * 0.1 }}
                  />
                </div>
              </div>
              <div className={`text-[10px] md:text-xs px-2 py-1 md:px-3 md:py-1.5 rounded-lg ${m.bg} ${m.color} font-medium text-center`}>
                {m.status}
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* 4. Lumen Aggregation Node */}
      <motion.div
        className="absolute top-[82%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 w-[320px] md:w-[400px]"
        style={{ perspective: 1000 }}
        initial={{ opacity: 0, y: 80, rotateX: -30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 3.8 }}
      >
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 4 }}
          className="bg-navy p-5 md:p-6 rounded-3xl shadow-2xl border border-white/10 text-center relative overflow-hidden"
        >
          {/* Subtle glow effect inside the card */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,168,56,0.15),transparent_70%)] pointer-events-none"></div>

          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4 relative z-10">
            <Activity className="w-4 h-4 md:w-5 md:h-5 text-amber" />
            <span className="text-[10px] md:text-xs font-mono text-white/60 uppercase tracking-wider">Lumen Aggregated Score</span>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-4 md:mb-6 relative z-10">
            <div className="text-center">
              <motion.span 
                className="text-5xl md:text-6xl font-serif text-white leading-none block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.6, duration: 0.8, delay: 4.2 }}
              >
                {scenario.finalScore}
              </motion.span>
              <span className="text-[10px] md:text-xs font-mono text-amber mt-1 block">Your Score</span>
            </div>
            
            <div className="w-px h-12 bg-white/20"></div>

            <div className="text-center">
              <motion.span 
                className="text-3xl md:text-4xl font-serif text-white/50 leading-none block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 4.4 }}
              >
                {scenario.benchmark}
              </motion.span>
              <span className="text-[10px] md:text-xs font-mono text-white/40 mt-1 block">Industry Avg</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 relative z-10">
            <motion.div 
              className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4.5 }}
            >
              <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                <Target className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber" />
                <div className="text-[10px] md:text-xs text-amber font-mono uppercase">Key Insight</div>
              </div>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                {scenario.insight}
              </p>
            </motion.div>

            <motion.div 
              className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 md:p-4 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4.7 }}
            >
              <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400" />
                <div className="text-[10px] md:text-xs text-emerald-400 font-mono uppercase">Action Plan</div>
              </div>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                {scenario.recommendation}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const HeroVisual = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SCENARIOS.length);
    }, 9000); // 9 seconds per scenario
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="relative w-full h-[650px] sm:h-[750px] mx-auto">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] rounded-3xl"></div>

        <AnimatePresence mode="wait">
          <ScenarioView key={currentIndex} scenario={SCENARIOS[currentIndex]} />
        </AnimatePresence>
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
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
        <div className="flex-1 w-full max-w-2xl lg:max-w-none" ref={textRef}>
          <div className="hero-elem inline-flex items-center gap-2 px-3 py-1 rounded-full border border-navy/10 bg-white/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
            <span className="text-xs font-mono text-navy/70 uppercase tracking-wider">AI Visibility Intelligence</span>
          </div>
          
          <h1 className="hero-elem text-5xl md:text-6xl xl:text-7xl leading-[1.1] text-navy mb-6">
            <span className="font-sans font-medium tracking-tight block text-3xl md:text-4xl xl:text-5xl mb-2 opacity-90">Measure your brand.</span>
            <span className="font-serif italic text-amber">See where AI sees you.</span>
          </h1>
          
          <p className="hero-elem text-lg md:text-xl text-navy/70 max-w-xl mb-10 font-light leading-relaxed">
            One score across ChatGPT, Claude, Gemini, and Perplexity. Know exactly where you stand in 60 seconds. No account required.
          </p>
          
          <div className="hero-elem flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
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
        
        {/* Animated Flow Visual - Scaled to fit */}
        <div className="hero-elem flex-1 w-full relative h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden lg:overflow-visible flex items-center justify-center lg:justify-end">
           <div className="w-[900px] origin-center lg:origin-right scale-[0.45] sm:scale-[0.65] lg:scale-[0.6] xl:scale-[0.8] absolute">
             <HeroVisual />
           </div>
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
