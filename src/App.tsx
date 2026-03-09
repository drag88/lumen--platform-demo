import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search, Activity, Zap, CheckCircle2, ChevronRight, BarChart3, Target, Compass, Sparkles, Box, Tag, Award, History, FileText, ShieldCheck, Send, Settings, Bell, User, ArrowUpRight, Eye, Bot, PlayCircle, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence, Variants } from 'motion/react';
import FeaturesBentoGrid from './components/FeaturesBentoGrid';
import Logo from './components/Logo';

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

        <Logo className="px-4 shrink-0" />

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
            <Logo size="text-[10px] md:text-xs" textColor="text-white/60" dotColor="bg-white/40" className="uppercase tracking-wider" />
            <span className="text-[10px] md:text-xs font-mono text-white/60 uppercase tracking-wider ml-[-4px]">Aggregated Score</span>
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

const ScrollReveal = ({ children, delay = 0, className = "", staggerChildren = 0 }: { children: React.ReactNode, delay?: number, className?: string, staggerChildren?: number }) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: staggerChildren,
        delayChildren: delay
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const ScoreBadge = ({ score, animate = false }: { score: number, animate?: boolean }) => {
  const [displayScore, setDisplayScore] = useState(animate ? 12 : score);

  useEffect(() => {
    if (animate) {
      let start = 12;
      const end = score;
      const duration = 800;
      const startTime = performance.now();

      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (end - start) * easeOut);
        setDisplayScore(current);

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };
      requestAnimationFrame(update);
    } else {
      setDisplayScore(score);
    }
  }, [score, animate]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-lg border border-navy/5 p-4 flex flex-col items-center min-w-[110px]"
    >
      <span className="font-mono text-[9px] text-navy/40 uppercase tracking-widest mb-1">AI Visibility Score</span>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-mono font-bold text-amber">{displayScore}</span>
        <span className="text-xs text-navy/20 font-mono">/100</span>
      </div>
      <div className="w-full h-1 bg-navy/5 rounded-full mt-2 overflow-hidden">
        <motion.div 
          initial={{ width: "12%" }}
          animate={{ width: `${displayScore}%` }}
          transition={{ duration: animate ? 0.8 : 0.4, ease: "easeOut" }}
          className="h-full bg-amber"
        />
      </div>
    </motion.div>
  );
};

const TheProblem = () => {
  const [stage, setStage] = useState(0);
  const stages = [
    { id: 0, tagline: "AI recommends brands based on what it knows. Right now, it does not know yours." },
    { id: 1, tagline: "Lumen diagnoses what is holding you back." },
    { id: 2, tagline: "Lumen tells you exactly what to fix, ranked by impact." },
    { id: 3, tagline: "Your dashboard shows progress in real time. Every action moves the score." },
    { id: 4, tagline: "AI recommends brands based on what it knows. Lumen makes sure it knows yours." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 5);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 bg-[#F8F6F1] relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <ScrollReveal className="w-full flex flex-col items-center mb-16">
          <span className="font-mono text-xs text-amber uppercase tracking-widest mb-6">The Problem</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy text-center leading-[1.1] max-w-3xl">
            This is happening right now, thousands of times a day.
          </h2>
        </ScrollReveal>
        
        <div className="w-full max-w-4xl relative">
          <div className="bg-white rounded-[32px] shadow-2xl border border-navy/5 overflow-hidden relative min-h-[580px] md:min-h-[520px]">
            {/* Browser Header */}
            <div className="bg-navy/5 px-4 py-3 flex items-center justify-center relative border-b border-navy/5">
              <div className="absolute left-4 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-navy/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-navy/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-navy/20"></div>
              </div>
              <span className="font-mono text-[10px] text-navy/40 uppercase tracking-widest">
                {stage === 3 ? "lumen.so/dashboard" : "chatgpt.com"}
              </span>
            </div>
            
            {/* Content Area */}
            <div className="p-6 md:p-10 relative">
              <AnimatePresence mode="wait">
                {stage === 0 && (
                  <motion.div 
                    key="stage0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="self-end bg-navy/5 rounded-2xl rounded-tr-sm px-6 py-4 max-w-[80%]">
                      <p className="text-navy font-sans text-sm md:text-base">What are the best sustainable fashion brands?</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white text-xs font-mono">AI</span>
                      </div>
                      <div className="text-navy/80 font-sans text-sm md:text-base leading-relaxed space-y-4">
                        <p>Here are some of the most recognized sustainable fashion brands:</p>
                        <ol className="list-decimal pl-4 space-y-2">
                          <li><span className="font-bold text-navy">Patagonia:</span> A pioneer in environmental responsibility.</li>
                          <li><span className="font-bold text-navy">Stella McCartney:</span> Luxury fashion committed to cruelty-free practices.</li>
                          <li><span className="font-bold text-navy">Eileen Fisher:</span> Focuses on circular design and organic materials.</li>
                          <li><span className="font-bold text-navy">Reformation:</span> Tracks the environmental footprint of every item.</li>
                          <li><span className="font-bold text-navy">Veja:</span> Transparently made sneakers.</li>
                        </ol>
                        <div className="pl-4 border-l-2 border-navy/10 mt-4">
                          <p className="italic text-navy/20">6. Your brand?</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {stage === 1 && (
                  <motion.div 
                    key="stage1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-8 py-4"
                  >
                    <h3 className="text-xl font-bold text-navy">Diagnostic Factors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {[
                        { label: "Third-party mentions", status: "Low", value: 20 },
                        { label: "Content quality", status: "Needs work", value: 35 },
                        { label: "Structured data", status: "Missing", value: 5 },
                        { label: "Citation presence", status: "Weak", value: 15 }
                      ].map((factor, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-[10px] font-mono uppercase tracking-wider">
                            <span className="text-navy/60">{factor.label}</span>
                            <span className="text-amber">{factor.status}</span>
                          </div>
                          <div className="w-full h-2 bg-navy/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${factor.value}%` }}
                              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                              className="h-full bg-amber"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-6 bg-navy/5 rounded-2xl border border-navy/5">
                      <p className="text-sm text-navy/60 leading-relaxed">
                        Lumen identifies that your brand lacks structured data and third-party citations, which are critical for AI recognition in your category.
                      </p>
                    </div>
                  </motion.div>
                )}

                {stage === 2 && (
                  <motion.div 
                    key="stage2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-6 py-4"
                  >
                    <h3 className="text-xl font-bold text-navy">Recommended Actions</h3>
                    <div className="space-y-4">
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border-2 border-amber rounded-2xl p-6 shadow-sm relative overflow-hidden group"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-navy text-lg">Rewrite product descriptions for AI readability</h4>
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                            className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20"
                          >
                            <Check className="w-5 h-5 text-white" />
                          </motion.div>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-[10px] font-mono text-navy/40 uppercase tracking-widest bg-navy/5 px-2 py-1 rounded">~2 hours</span>
                          <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">+8-12 points</span>
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm relative overflow-hidden"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-navy text-lg">Add structured FAQ content</h4>
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
                            className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20"
                          >
                            <Check className="w-5 h-5 text-white" />
                          </motion.div>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-[10px] font-mono text-navy/40 uppercase tracking-widest bg-navy/5 px-2 py-1 rounded">~1 hour</span>
                          <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">+3-5 points</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {stage === 3 && (
                  <motion.div 
                    key="stage3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex h-full min-h-[400px]"
                  >
                    {/* Mini Sidebar */}
                    <div className="w-48 bg-[#FAFAFA] border-r border-navy/5 p-4 flex-shrink-0 hidden md:flex flex-col">
                      <div className="mb-6">
                        <div className="text-[8px] font-bold text-navy/40 uppercase tracking-wider mb-2">AI Perception</div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white shadow-sm border border-navy/5 text-navy font-medium text-[10px]">
                            <BarChart3 className="w-3 h-3 text-amber" /> Overview
                          </div>
                          <div className="flex items-center gap-2 px-2 py-1.5 text-navy/40 font-medium text-[10px]">
                            <Box className="w-3 h-3" /> Products
                          </div>
                          <div className="flex items-center gap-2 px-2 py-1.5 text-navy/40 font-medium text-[10px]">
                            <Tag className="w-3 h-3" /> Category
                          </div>
                          <div className="flex items-center gap-2 px-2 py-1.5 text-navy/40 font-medium text-[10px]">
                            <Award className="w-3 h-3" /> Brand
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="text-[8px] font-bold text-navy/40 uppercase tracking-wider mb-2">Action Center</div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2 px-2 py-1.5 text-navy/40 font-medium text-[10px]">
                            <FileText className="w-3 h-3" /> Content Optimization
                          </div>
                          <div className="flex items-center gap-2 px-2 py-1.5 text-navy/40 font-medium text-[10px]">
                            <ShieldCheck className="w-3 h-3" /> Trust & Proof
                          </div>
                          <div className="flex items-center gap-2 px-2 py-1.5 text-navy/40 font-medium text-[10px]">
                            <Zap className="w-3 h-3" /> Authority Engine
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mini Main Content */}
                    <div className="flex-1 p-6 bg-white overflow-hidden">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Audit Score Breakdown */}
                        <div className="bg-white rounded-xl border border-navy/5 p-4 shadow-sm">
                          <div className="text-[9px] font-bold text-navy uppercase tracking-wider mb-4">Audit Score Breakdown</div>
                          <div className="flex items-center gap-6">
                            <div className="relative w-20 h-20 flex-shrink-0">
                              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                                <motion.circle 
                                  cx="50" cy="50" r="40" fill="transparent" 
                                  initial={{ stroke: "#ef4444", strokeDashoffset: 200.96 }}
                                  animate={{ stroke: "#E8A838", strokeDashoffset: 100.48 }}
                                  transition={{ duration: 1, ease: "easeOut" }}
                                  strokeWidth="12" strokeDasharray="251.2"
                                />
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.span 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-xl font-bold text-navy leading-none"
                                >
                                  240
                                </motion.span>
                                <span className="text-[8px] text-navy/40 font-medium">of 400</span>
                              </div>
                            </div>
                            <div className="flex-1 space-y-2">
                              {[
                                { label: "Product Presence", start: 0, end: 35 },
                                { label: "Product Relevance", start: 10, end: 55 },
                                { label: "Brand Authority", start: 45, end: 80 },
                                { label: "Purchase Readiness", start: 25, end: 70 }
                              ].map((f, i) => (
                                <div key={i} className="flex items-center justify-between">
                                  <span className="text-[9px] text-navy/60">{f.label}</span>
                                  <motion.span 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.15 }}
                                    className="text-[9px] font-bold text-amber"
                                  >
                                    {f.end}
                                  </motion.span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Simulation Insights */}
                        <div className="bg-white rounded-xl border border-navy/5 p-4 shadow-sm">
                          <div className="flex items-center gap-1.5 text-navy font-medium text-[9px] mb-3">
                            <Zap className="w-3 h-3 text-amber" /> Simulation Insights
                          </div>
                          <div className="bg-blue-50/50 rounded-lg p-3 border border-blue-100">
                            <div className="flex items-center gap-1 text-[8px] font-bold text-blue-600 uppercase tracking-wider mb-2">
                              <Target className="w-2.5 h-2.5" /> Top Opportunity
                            </div>
                            <div className="text-[10px] font-bold text-navy mb-2">Index 28 Missing Products</div>
                            <div className="flex items-center justify-between bg-white rounded-md p-2 border border-blue-50 mb-2">
                              <div>
                                <div className="text-[7px] font-bold text-navy/40 uppercase mb-0.5">Current</div>
                                <div className="text-[9px] font-bold text-navy">23%</div>
                              </div>
                              <ChevronRight className="w-2.5 h-2.5 text-navy/20" />
                              <div>
                                <div className="text-[7px] font-bold text-navy/40 uppercase mb-0.5">Projected</div>
                                <div className="text-[9px] font-bold text-blue-600">45%</div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-[9px] font-bold text-navy flex items-center gap-1">
                                <ArrowUpRight className="w-2.5 h-2.5 text-blue-600" /> +$4.5K/mo
                              </div>
                              <div className="bg-blue-600 text-white text-[8px] font-medium px-2 py-1 rounded-md">Start</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {stage === 4 && (
                  <motion.div 
                    key="stage4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="self-end bg-navy/5 rounded-2xl rounded-tr-sm px-6 py-4 max-w-[80%]">
                      <p className="text-navy font-sans text-sm md:text-base">What are the best sustainable fashion brands?</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white text-xs font-mono">AI</span>
                      </div>
                      <div className="text-navy/80 font-sans text-sm md:text-base leading-relaxed space-y-4">
                        <p>Here are some of the most recognized sustainable fashion brands:</p>
                        <ol className="list-decimal pl-4 space-y-2">
                          <li><span className="font-bold text-navy">Patagonia:</span> A pioneer in environmental responsibility.</li>
                          <li><span className="font-bold text-navy">Stella McCartney:</span> Luxury fashion committed to cruelty-free practices.</li>
                          <motion.li 
                            initial={{ backgroundColor: "rgba(232, 168, 56, 0)", scale: 1, x: -10, opacity: 0 }}
                            animate={{ backgroundColor: "rgba(232, 168, 56, 0.05)", scale: 1.02, x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="p-3 rounded-xl border border-amber/30 shadow-sm"
                          >
                            <span className="font-bold text-navy">Your Brand:</span> Recognized for its innovative circular design and ethical supply chain.
                          </motion.li>
                          <li><span className="font-bold text-navy">Eileen Fisher:</span> Focuses on circular design and organic materials.</li>
                          <li><span className="font-bold text-navy">Reformation:</span> Tracks the environmental footprint of every item.</li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Score Badge Overlay */}
            <div className="absolute top-16 right-6 z-20">
              <ScoreBadge score={stage === 4 ? 67 : stage === 3 ? 34 : 12} animate={stage === 4} />
            </div>
          </div>

          {/* Tagline & Progress */}
          <div className="mt-12 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.p 
                key={stage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-navy/80 text-center text-lg max-w-xl mb-8"
              >
                {stages[stage].tagline.split('Lumen').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="font-bold text-navy">Lumen</span>}
                  </React.Fragment>
                ))}
              </motion.p>
            </AnimatePresence>

            <div className="flex gap-3">
              {stages.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStage(s.id)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${stage === s.id ? 'bg-amber w-8' : 'bg-navy/10 w-4'}`}
                  aria-label={`Go to stage ${s.id + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <Logo size="text-xl" />
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-32 px-6 bg-warm relative z-10">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy text-center mb-24">
            How it works
          </h2>
        </ScrollReveal>
        
        <div className="space-y-16 relative">
          {/* Connecting Line */}
          <div className="absolute left-[19px] top-10 bottom-10 w-px bg-navy/10"></div>
          
          {/* Step 1 */}
          <ScrollReveal delay={0.1}>
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
          </ScrollReveal>
          
          {/* Step 2 */}
          <ScrollReveal delay={0.2}>
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
          </ScrollReveal>
          
          {/* Step 3 */}
          <ScrollReveal delay={0.3}>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="py-32 px-6 bg-navy relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <p className="font-sans text-2xl md:text-3xl text-warm/90 leading-relaxed font-light mb-8 max-w-3xl">
            "We spent a decade optimizing for Google, but when we asked AI for recommendations in our category, we simply did not exist. Lumen showed us exactly which models were ignoring us and gave us a step-by-step plan to fix it. Within two months, our visibility score doubled."
          </p>
          <div className="font-mono text-sm text-amber mb-24">Marketing Lead, Mid-size Fashion Brand</div>
        </ScrollReveal>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full">
          <ScrollReveal delay={0.1} className="flex flex-col items-center">
            <span className="font-serif text-5xl text-warm mb-3">4</span>
            <span className="font-mono text-xs text-warm/50 uppercase tracking-widest">AI Engines</span>
          </ScrollReveal>
          <div className="hidden md:block w-px h-16 bg-warm/10"></div>
          <ScrollReveal delay={0.2} className="flex flex-col items-center">
            <span className="font-serif text-5xl text-warm mb-3">20</span>
            <span className="font-mono text-xs text-warm/50 uppercase tracking-widest">Queries per scan</span>
          </ScrollReveal>
          <div className="hidden md:block w-px h-16 bg-warm/10"></div>
          <ScrollReveal delay={0.3} className="flex flex-col items-center">
            <span className="font-serif text-5xl text-warm mb-3">7</span>
            <span className="font-mono text-xs text-warm/50 uppercase tracking-widest">Diagnostic factors</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const PreFooterCTA = () => {
  return (
    <section className="py-32 px-6 bg-warm relative z-10">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <h2 className="font-serif text-5xl md:text-6xl text-navy leading-[1.1] mb-4">
            Your brand has an AI reputation.
          </h2>
          <p className="text-xl text-navy/70 mb-12">
            Do you know what it is?
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2} className="w-full max-w-xl">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full mb-6">
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
        </ScrollReveal>

        {/* Coming Soon Callout */}
        <ScrollReveal delay={0.4} className="w-full max-w-xl">
          <div className="bg-white/50 border border-navy/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group">
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
        </ScrollReveal>
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
            <Logo textColor="text-warm" className="mb-6" />
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

const DashboardPreviewSection = () => {
  return (
    <section className="py-32 px-6 bg-warm relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="font-mono text-[12px] tracking-[0.12em] text-amber uppercase mb-4 font-bold">
            Your Dashboard
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
            Everything you need. Nothing you do not.
          </h2>
          <p className="text-lg md:text-xl text-[#415A77] font-light">
            Your score, your diagnostics, your next steps. All in one place.
          </p>
        </ScrollReveal>

        {/* Dashboard Container with 3D Transform */}
        <ScrollReveal delay={0.2} className="relative w-full max-w-[1200px] mx-auto perspective-[1200px]">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/40 blur-[100px] rounded-full pointer-events-none"></div>
          
          {/* Dashboard Panel */}
          <div 
            className="relative bg-white rounded-t-2xl border border-navy/5 overflow-hidden flex flex-col md:flex-row shadow-[0_24px_80px_rgba(13,27,42,0.08),0_8px_32px_rgba(13,27,42,0.04)] scale-[0.9] origin-top"
            style={{
              transform: 'rotateX(2deg)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
              maskComposite: 'intersect',
            }}
          >
            {/* Sidebar */}
            <div className="w-64 bg-[#FAFAFA] border-r border-navy/5 p-6 flex-shrink-0 hidden md:flex flex-col">
              <div className="flex items-center gap-3 mb-10">
                <Logo />
              </div>
              
              <div className="mb-8">
                <div className="text-[10px] font-bold text-navy/40 uppercase tracking-wider mb-3">AI Perception</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white shadow-sm border border-navy/5 text-navy font-medium text-sm">
                    <BarChart3 className="w-4 h-4 text-amber" /> Overview
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 font-medium text-sm">
                    <Box className="w-4 h-4" /> Products
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 font-medium text-sm">
                    <Tag className="w-4 h-4" /> Category
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 font-medium text-sm">
                    <Award className="w-4 h-4" /> Brand
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 font-medium text-sm">
                    <History className="w-4 h-4" /> Audit History
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-[10px] font-bold text-navy/40 uppercase tracking-wider mb-3">Action Center</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 font-medium text-sm">
                    <FileText className="w-4 h-4" /> Content Optimization
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 font-medium text-sm">
                    <ShieldCheck className="w-4 h-4" /> Trust & Proof
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 font-medium text-sm">
                    <Zap className="w-4 h-4" /> Authority Engine
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 font-medium text-sm">
                    <Send className="w-4 h-4" /> Outreach
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 font-medium text-sm">
                    <Settings className="w-4 h-4" /> Technical Readiness
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 bg-white">
              {/* Topbar */}
              <div className="h-16 border-b border-navy/5 bg-white flex items-center justify-between px-8">
                <div className="relative w-64">
                  <Search className="w-4 h-4 text-navy/30 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="text" placeholder="Search..." className="w-full bg-warm/30 border border-navy/5 rounded-md py-1.5 pl-9 pr-3 text-sm focus:outline-none" readOnly />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <kbd className="font-sans text-[10px] text-navy/40 bg-white border border-navy/10 rounded px-1">⌘K</kbd>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Bell className="w-5 h-5 text-navy/40" />
                  <div className="w-8 h-8 rounded-full bg-warm flex items-center justify-center">
                    <User className="w-4 h-4 text-navy/60" />
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-8 flex gap-6 pb-32">
                <div className="flex-1 space-y-6">
                  {/* Multiplier Card */}
                  <div className="bg-white rounded-xl border border-navy/5 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-navy font-medium">
                        <Zap className="w-4 h-4 text-amber" /> A.I. Commerce Multiplier
                      </div>
                      <div className="text-xs font-medium text-navy/50 bg-warm/50 px-2 py-1 rounded">This Month</div>
                    </div>
                    <div className="flex items-baseline gap-4 mb-8">
                      <div className="text-6xl font-sans font-medium text-navy tracking-tight">2.3x</div>
                      <div className="flex items-center gap-1 text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        <ArrowUpRight className="w-3 h-3" /> +0.4x
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 pt-6 border-t border-navy/5">
                      <div>
                        <div className="text-xs font-bold text-navy/40 uppercase tracking-wider mb-2">AI-Attributed Revenue</div>
                        <div className="text-2xl font-medium text-navy">$45.2K</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-navy/40 uppercase tracking-wider mb-2">Baseline (Without AI)</div>
                        <div className="text-2xl font-medium text-navy/40">$19.7K</div>
                      </div>
                    </div>
                    <p className="text-sm text-navy/60 mt-6 pt-6 border-t border-navy/5">
                      Your products generate 2.3x more revenue when recommended by AI assistants.
                    </p>
                  </div>

                  {/* Audit Score Card */}
                  <div className="bg-white rounded-xl border border-navy/5 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-sm font-bold text-navy uppercase tracking-wider">Audit Score Breakdown</div>
                      <div className="text-sm text-navy/50">0/4 levels good</div>
                    </div>
                    <div className="flex items-center gap-12">
                      {/* Donut Chart */}
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ef4444" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="50.24" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-bold text-navy leading-none">80</span>
                          <span className="text-xs text-navy/40 font-medium">of 400</span>
                        </div>
                      </div>
                      
                      {/* Breakdown List */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-navy/80"><div className="w-2 h-2 rounded-full bg-red-500"></div>Product Presence</div>
                          <div className="text-sm font-bold text-red-500">0</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-navy/80"><div className="w-2 h-2 rounded-full bg-red-500"></div>Product Relevance</div>
                          <div className="text-sm font-bold text-red-500">10</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-navy/80"><div className="w-2 h-2 rounded-full bg-red-500"></div>Brand Authority</div>
                          <div className="text-sm font-bold text-red-500">45</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-navy/80"><div className="w-2 h-2 rounded-full bg-red-500"></div>Purchase Readiness</div>
                          <div className="text-sm font-bold text-red-500">25</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel */}
                <div className="w-80 space-y-6 hidden lg:block">
                  {/* AI Assistant Activity */}
                  <div className="bg-white rounded-xl border border-navy/5 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-navy font-medium text-sm">
                        <Activity className="w-4 h-4 text-blue-500" /> AI Assistant Activity
                      </div>
                      <div className="text-xs text-navy/40">Last 7 days</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="relative w-16 h-16">
                        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="16" />
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset="62.8" />
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset="188.4" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-navy">630</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-navy">211</div>
                        <div className="text-[10px] font-bold text-navy/40 uppercase tracking-wider mb-1">Citations</div>
                        <div className="text-xs font-medium text-emerald-500">+23%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-navy">25</div>
                        <div className="text-[10px] font-bold text-navy/40 uppercase tracking-wider mb-1">Purchases</div>
                        <div className="text-xs font-medium text-emerald-500">+45%</div>
                      </div>
                    </div>
                  </div>

                  {/* Simulation Insights */}
                  <div className="bg-white rounded-xl border border-navy/5 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-navy font-medium text-sm">
                        <Zap className="w-4 h-4 text-amber" /> Simulation Insights
                      </div>
                      <div className="text-xs text-navy/40">Updated 5m ago</div>
                    </div>
                    
                    <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
                          <Target className="w-3 h-3" /> Top Opportunity
                        </div>
                        <div className="text-[10px] font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">High confidence</div>
                      </div>
                      <div className="font-serif text-lg text-navy mb-4">Index 28 Missing Products</div>
                      
                      <div className="flex items-center justify-between bg-white rounded-lg p-3 border border-blue-100 mb-4">
                        <div>
                          <div className="text-[10px] font-bold text-navy/40 uppercase tracking-wider mb-1">Current</div>
                          <div className="text-sm font-bold text-navy">23% AI visibility</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-navy/20" />
                        <div>
                          <div className="text-[10px] font-bold text-navy/40 uppercase tracking-wider mb-1">Projected</div>
                          <div className="text-sm font-bold text-blue-600">45% AI visibility</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-sm font-bold text-navy">
                          <ArrowUpRight className="w-4 h-4 text-blue-600" /> +$4.5K/mo <span className="text-xs font-normal text-navy/50">projected impact</span>
                        </div>
                        <button className="bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
                          Start
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[10px] font-bold text-navy/40 uppercase tracking-wider mb-3">Other Opportunities</div>
                      <div className="flex items-center justify-between p-3 rounded-lg border border-navy/5 hover:border-navy/10 transition-colors cursor-pointer">
                        <div className="text-sm font-medium text-navy/80">Optimize Product Titles</div>
                        <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">+18% clicks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="relative">
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <FeaturesBentoGrid />
        <DashboardPreviewSection />
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
