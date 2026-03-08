import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search, Activity, Zap, CheckCircle2, ChevronRight, BarChart3, Target, Compass, Sparkles, Box, Tag, Award, History, FileText, ShieldCheck, Send, Settings, Bell, User, ArrowUpRight, Eye, Bot, PlayCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-between px-2 py-2 rounded-full bg-[#E5E5E5]/90 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden cursor-pointer relative"
        initial={{ width: '160px' }}
        animate={{ width: isHovered ? '600px' : '160px' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_3s_infinite] skew-x-12 pointer-events-none"></div>

        <div className="flex items-center gap-2 px-4 shrink-0">
          <div className="w-6 h-6 rounded-full bg-amber flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-navy"></div>
          </div>
          <span className="font-serif text-lg font-bold tracking-tight text-navy">Lumen</span>
        </div>

        <div className="flex items-center justify-end flex-1 overflow-hidden pr-2">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center gap-8 text-sm font-medium text-navy/70 mr-8 whitespace-nowrap"
              >
                <a href="#features" className="hover:text-navy transition-colors">Features</a>
                <a href="#philosophy" className="hover:text-navy transition-colors">Philosophy</a>
                <a href="#protocol" className="hover:text-navy transition-colors">Protocol</a>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isHovered && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-navy text-white px-6 py-2.5 rounded-full text-sm font-medium shrink-0 whitespace-nowrap"
              >
                Check my brand
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
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
    <section ref={containerRef} className="relative min-h-[100dvh] flex flex-col justify-start px-6 pt-32 lg:pt-40 pb-20 overflow-hidden bg-warm">
      {/* Subtle background texture/gradient for warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,168,56,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-4 xl:gap-8">
        <div className="flex-1 w-full max-w-2xl lg:max-w-none" ref={textRef}>
          <div className="hero-elem inline-flex items-center gap-2 px-3 py-1 rounded-full border border-navy/10 bg-white/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
            <span className="text-xs font-mono text-navy/70 uppercase tracking-wider">AI Visibility Intelligence</span>
          </div>
          
          <h1 className="hero-elem text-5xl md:text-6xl xl:text-7xl leading-[1.1] text-navy mb-6">
            <span className="font-sans font-medium tracking-tight block text-4xl md:text-5xl xl:text-6xl mb-2 opacity-90">Measure your brand.</span>
            <span className="font-serif italic text-amber">See where AI sees you.</span>
          </h1>
          
          <p className="hero-elem text-lg md:text-xl text-navy/70 max-w-xl mb-10 font-light leading-[1.8]">
            Track, diagnose, and improve your brand's performance across AI search engines and agentic commerce through key dimensions like{' '}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-navy/10 shadow-sm text-sm font-medium text-navy mx-1 align-middle transition-transform hover:-translate-y-0.5 hover:shadow-md cursor-default">
              <Eye className="w-4 h-4 text-navy/40" /> AI Visibility
            </span>
            ,{' '}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-navy/10 shadow-sm text-sm font-medium text-navy mx-1 align-middle transition-transform hover:-translate-y-0.5 hover:shadow-md cursor-default">
              <Bot className="w-4 h-4 text-navy/40" /> Agentic Readiness
            </span>
            , and{' '}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-navy/10 shadow-sm text-sm font-medium text-navy mx-1 align-middle transition-transform hover:-translate-y-0.5 hover:shadow-md cursor-default">
              <PlayCircle className="w-4 h-4 text-navy/40" /> Deploy-Ready Actions
            </span>
            .
          </p>
          
          <div className="hero-elem flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
            <div className="relative w-full flex-1">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-navy/40" />
              </div>
              <input 
                type="text" 
                placeholder="Enter brand name or URL" 
                className="w-full bg-white border border-navy/10 rounded-full py-4 pl-12 pr-6 text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all shadow-sm text-lg"
              />
            </div>
            <button className="btn-magnetic w-full sm:w-auto bg-amber text-navy px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 shadow-md whitespace-nowrap text-lg">
              <span>Scan Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <p className="hero-elem text-xs font-mono text-navy/50 mt-4 ml-4">No account required. Value before signup.</p>
        </div>
        
        {/* Animated Flow Visual - Scaled to fit */}
        <div className="hero-elem flex-1 w-full relative h-[350px] sm:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden lg:overflow-visible flex items-center justify-center lg:justify-start">
           <div className="w-[900px] origin-center lg:origin-left scale-[0.45] sm:scale-[0.65] lg:scale-[0.6] xl:scale-[0.8] absolute lg:translate-x-[-5%] xl:translate-x-[-10%]">
             <HeroVisual />
           </div>
        </div>
      </div>
    </section>
  );
};

// --- New Sections ---

const ScanPreview = () => {
  return (
    <section className="py-32 px-6 bg-navy relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <span className="font-mono text-xs text-amber uppercase tracking-widest mb-12">Holistic Dashboard View</span>
        
        {/* Dashboard Container */}
        <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/10" style={{ height: '800px' }}>
          
          {/* Sidebar */}
          <div className="w-64 bg-[#F8F9FA] border-r border-gray-200 flex flex-col hidden md:flex">
            <div className="p-6 flex items-center gap-3 border-b border-gray-200">
              <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-amber"></div>
              </div>
              <span className="font-serif text-xl font-bold text-navy">Lumen</span>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
              <div className="px-4 mb-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">AI Perception</span>
              </div>
              <nav className="space-y-1 px-3 mb-6">
                <a href="#" className="flex items-center gap-3 px-3 py-2 bg-white rounded-lg text-navy font-medium shadow-sm border border-gray-100">
                  <BarChart3 className="w-4 h-4 text-amber" />
                  <span className="text-sm">Overview</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Box className="w-4 h-4" />
                  <span className="text-sm">Products</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Tag className="w-4 h-4" />
                  <span className="text-sm">Category</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Brand</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <History className="w-4 h-4" />
                  <span className="text-sm">Audit History</span>
                </a>
              </nav>

              <div className="px-4 mb-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Action Center</span>
              </div>
              <nav className="space-y-1 px-3">
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">Content Optimization</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-sm">Trust & Proof</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">Authority Engine</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Send className="w-4 h-4" />
                  <span className="text-sm">Outreach</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">Technical Readiness</span>
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col bg-white overflow-hidden">
            {/* Topbar */}
            <div className="h-16 border-b border-gray-200 flex items-center justify-between px-8">
              <div className="flex items-center bg-gray-100 rounded-md px-3 py-1.5 w-64">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-full" />
                <span className="text-xs text-gray-400 border border-gray-300 rounded px-1">⌘K</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-gray-600"><Bell className="w-5 h-5" /></button>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600"><User className="w-4 h-4" /></div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-navy mb-2">AI Commerce Sales Multiplier</h1>
                  <p className="text-gray-500 text-sm">Make your brand AI-ready — get discovered, recommended, and bought by AI assistants.</p>
                </div>

                <div className="flex items-center gap-2 mb-8">
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">7d</button>
                  <button className="px-3 py-1 text-sm font-medium bg-navy text-white rounded-md shadow-sm">30d</button>
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">90d</button>
                  <div className="w-px h-4 bg-gray-300 mx-2"></div>
                  <button className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-600 rounded-md flex items-center gap-1">
                    <Activity className="w-3 h-3" /> All
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column (Multiplier & Score) */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Multiplier Card */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-amber" />
                          <h3 className="font-semibold text-navy">A.I. Commerce Multiplier</h3>
                        </div>
                        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">This month</span>
                      </div>
                      
                      <div className="flex items-end gap-4 mb-8">
                        <span className="text-6xl font-bold text-navy tracking-tight">2.3x</span>
                        <span className="flex items-center text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md mb-2">
                          <ArrowUpRight className="w-3 h-3 mr-1" /> +0.4x
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-6">
                        <div>
                          <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">AI-Attributed Revenue</p>
                          <p className="text-2xl font-bold text-navy">$45.2K</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Baseline (without AI)</p>
                          <p className="text-2xl font-bold text-gray-400">$19.7K</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-6">Your products generate 2.3x more revenue when recommended by AI assistants.</p>
                    </div>

                    {/* Score Breakdown Card */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Audit Score Breakdown</h3>
                        <span className="text-xs text-gray-500">0/4 levels good</span>
                      </div>
                      
                      <div className="flex items-center gap-12">
                        {/* Donut Chart Placeholder */}
                        <div className="relative w-32 h-32 flex-shrink-0">
                          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f3f4f6" strokeWidth="12" />
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ef4444" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="200.96" className="transition-all duration-1000" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-bold text-navy">80</span>
                            <span className="text-xs text-gray-400 font-medium">of 400</span>
                          </div>
                        </div>

                        <div className="flex-1 space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <span className="text-sm text-gray-600">Product Presence</span>
                            </div>
                            <span className="text-sm font-bold text-red-500">0</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <span className="text-sm text-gray-600">Product Relevance</span>
                            </div>
                            <span className="text-sm font-bold text-red-500">10</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <span className="text-sm text-gray-600">Brand Authority</span>
                            </div>
                            <span className="text-sm font-bold text-red-500">45</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <span className="text-sm text-gray-600">Purchase Readiness</span>
                            </div>
                            <span className="text-sm font-bold text-red-500">25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Activity & Insights) */}
                  <div className="space-y-6">
                    {/* AI Assistant Activity */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-navy text-xs uppercase tracking-wider">Execute</h3>
                        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">Last 7 days</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <Activity className="w-4 h-4 text-blue-600" />
                        <h4 className="font-medium text-navy">AI Assistant Activity</h4>
                      </div>
                      
                      <div className="flex items-center gap-6 mb-6">
                        <div className="relative w-20 h-20">
                          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f3f4f6" strokeWidth="16" />
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset="100" />
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset="200" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold text-navy">630</span>
                          </div>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xl font-bold text-navy">211</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Citations</p>
                            <p className="text-xs text-green-500 mt-1">+23%</p>
                          </div>
                          <div>
                            <p className="text-xl font-bold text-navy">25</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Purchases</p>
                            <p className="text-xs text-green-500 mt-1">+45%</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Simulation Insights */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-navy text-xs uppercase tracking-wider">Simulate</h3>
                        <span className="text-xs text-gray-400">Updated 5m ago</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-4 h-4 text-amber" />
                        <h4 className="font-medium text-navy">Simulation Insights</h4>
                      </div>

                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1"><Zap className="w-3 h-3"/> Top Opportunity</span>
                          <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">High confidence</span>
                        </div>
                        <h5 className="font-bold text-navy mb-3">Index 28 Missing Products</h5>
                        
                        <div className="bg-white rounded border border-blue-100 p-3 flex items-center justify-between mb-3">
                          <div>
                            <p className="text-[10px] text-gray-500 uppercase">Current</p>
                            <p className="font-semibold text-navy text-sm">23% AI visibility</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-[10px] text-gray-500 uppercase">Projected</p>
                            <p className="font-semibold text-blue-600 text-sm">45% AI visibility</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-navy flex items-center gap-1">
                            <ArrowUpRight className="w-4 h-4 text-blue-600" /> +$4.5K/mo <span className="text-xs font-normal text-gray-500">projected impact</span>
                          </span>
                          <button className="bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded hover:bg-blue-800 transition-colors">Start</button>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Other Opportunities</p>
                        <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <span className="text-sm font-medium text-navy">Optimize Product Titles</span>
                          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">+18% clicks</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        <p className="text-warm/60 text-center max-w-md font-light mt-8">
          Every scan shows you exactly where you stand and what to fix first.
        </p>
      </div>
    </section>
  );
};

const TheProblem = () => {
  return (
    <section className="py-32 px-6 bg-warm relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <span className="font-mono text-xs text-amber uppercase tracking-widest mb-6 self-start md:self-center">The Problem</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy text-left md:text-center leading-[1.1] mb-16 max-w-2xl self-start md:self-center">
          This is happening right now, thousands of times a day.
        </h2>
        
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-navy/5 overflow-hidden mb-16">
          {/* Browser Header */}
          <div className="bg-navy/5 px-4 py-3 flex items-center justify-center relative border-b border-navy/5">
            <div className="absolute left-4 flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-navy/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-navy/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-navy/20"></div>
            </div>
            <span className="font-mono text-xs text-navy/40">chatgpt.com</span>
          </div>
          
          {/* Chat Content */}
          <div className="p-6 md:p-10 flex flex-col gap-8">
            {/* User Message */}
            <div className="self-end bg-navy/5 rounded-2xl rounded-tr-sm px-6 py-4 max-w-[80%]">
              <p className="text-navy font-sans text-sm md:text-base">What are the best sustainable fashion brands?</p>
            </div>
            
            {/* AI Message */}
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-xs font-mono">AI</span>
              </div>
              <div className="text-navy/80 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>Here are some of the most recognized sustainable fashion brands:</p>
                <ol className="list-decimal pl-4 space-y-2">
                  <li><span className="font-bold text-navy">Patagonia:</span> A pioneer in environmental responsibility, known for outerwear and transparent supply chains.</li>
                  <li><span className="font-bold text-navy">Stella McCartney:</span> Luxury fashion committed to cruelty-free practices.</li>
                  <li><span className="font-bold text-navy">Eileen Fisher:</span> Focuses on circular design and organic materials.</li>
                  <li><span className="font-bold text-navy">Reformation:</span> Tracks the environmental footprint of every item.</li>
                  <li><span className="font-bold text-navy">Veja:</span> Transparently made sneakers using wild rubber and organic cotton.</li>
                </ol>
                <div className="pl-4 border-l-2 border-navy/10 mt-4">
                  <p className="italic text-navy/40">6. Your brand?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-navy/80 text-center text-lg max-w-xl">
          AI recommends brands based on what it knows. <span className="font-bold text-navy">Lumen makes sure it knows yours.</span>
        </p>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-32 px-6 bg-warm relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy text-center mb-24">
          How it works
        </h2>
        
        <div className="space-y-16 relative">
          {/* Connecting Line */}
          <div className="absolute left-[19px] top-10 bottom-10 w-px bg-navy/10"></div>
          
          {/* Step 1 */}
          <div className="flex gap-8 relative z-10">
            <div className="w-10 h-10 rounded-full bg-navy text-warm flex items-center justify-center shrink-0 font-serif text-xl">1</div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-3">Enter your brand</h3>
              <p className="text-navy/70 leading-relaxed mb-4">
                Type your brand name or website URL. No account needed, no setup, no analytics access required.
              </p>
              <span className="font-mono text-xs text-amber uppercase tracking-wider">5 seconds</span>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex gap-8 relative z-10">
            <div className="w-10 h-10 rounded-full bg-navy text-warm flex items-center justify-center shrink-0 font-serif text-xl">2</div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-3">We query four AI search engines</h3>
              <p className="text-navy/70 leading-relaxed mb-4">
                Our engine runs structured queries across ChatGPT, Claude, Gemini, and Perplexity in your category. We measure mentions, rankings, sentiment, and citations.
              </p>
              <span className="font-mono text-xs text-amber uppercase tracking-wider">About 60 seconds</span>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex gap-8 relative z-10">
            <div className="w-10 h-10 rounded-full bg-navy text-warm flex items-center justify-center shrink-0 font-serif text-xl">3</div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-3">See your score and what to fix</h3>
              <p className="text-navy/70 leading-relaxed mb-4">
                Get your AI Visibility Score with a platform-by-platform breakdown, a diagnosis of why you score the way you do, and prioritized recommendations ranked by impact.
              </p>
              <span className="font-mono text-xs text-amber uppercase tracking-wider">Your first insight in under 2 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="py-32 px-6 bg-navy relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <p className="font-sans text-2xl md:text-3xl text-warm/90 leading-relaxed font-light mb-8 max-w-3xl">
          "We spent a decade optimizing for Google, but when we asked AI for recommendations in our category, we simply did not exist. Lumen showed us exactly which models were ignoring us and gave us a step-by-step plan to fix it. Within two months, our visibility score doubled."
        </p>
        <span className="font-mono text-sm text-amber mb-24">Marketing Lead, Mid-size Fashion Brand</span>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full">
          <div className="flex flex-col items-center">
            <span className="font-serif text-5xl text-warm mb-3">4</span>
            <span className="font-mono text-xs text-warm/50 uppercase tracking-widest">AI Engines</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-warm/10"></div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-5xl text-warm mb-3">20</span>
            <span className="font-mono text-xs text-warm/50 uppercase tracking-widest">Queries per scan</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-warm/10"></div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-5xl text-warm mb-3">7</span>
            <span className="font-mono text-xs text-warm/50 uppercase tracking-widest">Diagnostic factors</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const PreFooterCTA = () => {
  return (
    <section className="py-32 px-6 bg-warm relative z-10">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-serif text-5xl md:text-6xl text-navy leading-[1.1] mb-4">
          Your brand has an AI reputation.
        </h2>
        <p className="text-xl text-navy/70 mb-12">
          Do you know what it is?
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl mb-6">
          <div className="relative w-full flex-1">
            <input 
              type="text" 
              placeholder="Your brand name or website URL" 
              className="w-full bg-white border border-navy/10 rounded-xl py-4 px-6 text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all shadow-sm text-base"
            />
          </div>
          <button className="btn-magnetic w-full sm:w-auto bg-amber text-navy px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 shadow-md whitespace-nowrap text-base">
            <span>Check my brand</span>
          </button>
        </div>
        <p className="text-xs font-mono text-navy/50 mb-20">Takes 60 seconds. No account required.</p>

        {/* Coming Soon Callout */}
        <div className="w-full max-w-xl bg-white/50 border border-navy/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/10 text-amber text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" />
              Coming Soon
            </div>
            <h3 className="text-xl font-serif text-navy mb-2">UCP + ACP Connectivity</h3>
            <p className="text-navy/60 text-sm leading-relaxed max-w-md">
              Don't just be visible—be purchasable. Soon, you'll be able to connect your catalog directly to AI agents, turning recommendations into instant transactions.
            </p>
          </div>
        </div>
      </div>
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
        <ScanPreview />
        <TheProblem />
        <HowItWorks />
        <Testimonial />
        <PreFooterCTA />
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
