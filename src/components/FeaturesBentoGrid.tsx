"use client";

import React, { useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "motion/react";
import Logo from "./Logo";
import {
  Search,
  BarChart2,
  Activity,
  Target,
  ListTodo,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from "lucide-react";

// --- Scroll Reveal Wrapper ---
const ScrollReveal = ({
  children,
  delay = 0,
  className = "",
  staggerChildren = 0,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  staggerChildren?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            delay,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: staggerChildren,
            delayChildren: delay,
          },
        },
      }}
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- Mockup Components ---

const PlatformScanMockup = () => (
  <div className="w-full max-w-sm flex flex-col gap-3 transform rotate-[-1deg] group-hover:rotate-0 transition-transform duration-700">
    <div className="bg-white rounded-xl border border-[#F0EDE6] shadow-sm overflow-hidden">
      <div className="bg-[#F8F6F1] px-3 py-2 border-b border-[#F0EDE6] flex items-center justify-between">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0D1B2A]/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#0D1B2A]/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#0D1B2A]/10" />
        </div>
        <div className="text-[8px] font-mono text-[#415A77] uppercase tracking-widest">
          Live Scan
        </div>
      </div>
      <div className="p-3 space-y-3">
        {[
          {
            name: "ChatGPT",
            score: 82,
            color: "bg-[#2D6A4F]",
            status: "Optimal",
          },
          { name: "Claude", score: 65, color: "bg-[#E8A838]", status: "Review" },
          { name: "Gemini", score: 45, color: "bg-[#E8A838]", status: "Review" },
          {
            name: "Perplexity",
            score: 91,
            color: "bg-[#2D6A4F]",
            status: "Optimal",
          },
        ].map((platform, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${platform.color}`} />
              <span className="text-xs font-medium text-[#0D1B2A]">
                {platform.name}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-20 h-1 bg-[#F8F6F1] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${platform.score}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className={`h-full ${platform.color}`}
                />
              </div>
              <span className="font-mono text-[10px] text-[#415A77] w-4 text-right">
                {platform.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Scanning bar overlay */}
    <motion.div
      animate={{ y: [0, 160, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8A838]/40 to-transparent z-20 pointer-events-none"
    />
  </div>
);

const VisibilityScoreMockup = () => (
  <div className="relative w-full max-w-[280px] group-hover:translate-y-[-8px] transition-transform duration-700">
    <div className="bg-white p-6 rounded-2xl border border-[#F0EDE6] shadow-xl relative z-10">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-28 h-28">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full transform -rotate-90"
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="transparent"
              stroke="#F8F6F1"
              strokeWidth="6"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              fill="transparent"
              stroke="#E8A838"
              strokeWidth="6"
              strokeDasharray="263.89"
              initial={{ strokeDashoffset: 263.89 }}
              whileInView={{ strokeDashoffset: 263.89 - 263.89 * 0.34 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-serif text-3xl font-bold text-[#0D1B2A]">
              34
            </span>
            <Logo size="text-[8px]" dotColor="bg-[#415A77]" textColor="text-[#415A77]" className="uppercase tracking-tighter" />
          </div>
        </div>
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#415A77] font-medium">
              Sentiment
            </span>
            <span className="text-[10px] text-[#2D6A4F] font-bold uppercase">
              Positive
            </span>
          </div>
          <div className="w-full h-1 bg-[#F8F6F1] rounded-full overflow-hidden">
            <div className="h-full bg-[#2D6A4F]" style={{ width: "88%" }} />
          </div>
        </div>
      </div>
    </div>
    {/* Background decorative element */}
    <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#E8A838]/5 rounded-2xl -z-10 transform rotate-3" />
  </div>
);

const DiagnosticFactorsMockup = () => (
  <div className="w-full max-w-sm flex flex-col gap-4 transform rotate-[1deg] group-hover:rotate-0 transition-transform duration-700">
    <div className="bg-white rounded-xl border border-[#F0EDE6] shadow-sm overflow-hidden">
      <div className="p-4 space-y-4">
        {[
          { label: "Content Quality", score: 72, trend: "up" },
          { label: "Third-party Mentions", score: 31, trend: "down" },
          { label: "Structured Data", score: 45, trend: "flat" },
        ].map((factor, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-[#0D1B2A]">
                {factor.label}
              </span>
              <span className="font-mono text-[10px] text-[#415A77]">
                {factor.score}%
              </span>
            </div>
            <div className="w-full h-1 bg-[#F8F6F1] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${factor.score}%` }}
                transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                className={`h-full ${
                  factor.trend === "up" ? "bg-[#2D6A4F]" : "bg-[#E8A838]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-[#0D1B2A] text-white p-3 rounded-xl shadow-lg flex items-center gap-3 transform translate-x-6">
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
        <Activity className="w-4 h-4 text-[#E8A838]" />
      </div>
      <div>
        <div className="text-[8px] font-mono text-white/50 uppercase">
          Optimization
        </div>
        <div className="text-[10px] font-medium">Critical Gap Detected</div>
      </div>
    </div>
  </div>
);

const CompetitorTrackMockup = () => (
  <div className="w-full max-w-sm bg-white rounded-2xl border border-[#F0EDE6] shadow-xl overflow-hidden transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-700">
    <div className="p-5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider">
          Market Share
        </h4>
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full border-2 border-white bg-[#F8F6F1] flex items-center justify-center text-[8px] font-bold text-[#415A77]"
            >
              {String.fromCharCode(64 + i)}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {[
          { name: "Acme Corp", score: 78, isUser: false },
          { name: "Your Brand", score: 66, isUser: true },
          { name: "Globex", score: 54, isUser: false },
        ].map((brand, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span
                  className={`text-[10px] ${
                    brand.isUser ? "font-bold text-[#0D1B2A]" : "text-[#415A77]"
                  }`}
                >
                  {brand.name}
                </span>
                <span className="font-mono text-[10px]">{brand.score}</span>
              </div>
              <div className="w-full h-1 bg-[#F8F6F1] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${brand.score}%` }}
                  transition={{ duration: 1, delay: 1 + i * 0.1 }}
                  className={`h-full ${
                    brand.isUser ? "bg-[#E8A838]" : "bg-[#415A77]"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ActionPlanMockup = () => (
  <div className="w-full max-w-sm flex flex-col gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
    <div className="bg-white rounded-2xl p-5 border border-[#F0EDE6] shadow-xl relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E8A838]" />
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-[8px] font-mono text-[#E8A838] uppercase tracking-widest mb-1">
            Priority 01
          </div>
          <h4 className="text-sm font-bold text-[#0D1B2A]">
            Publish comparison pages
          </h4>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#E8A838]/10 flex items-center justify-center">
          <Target className="w-4 h-4 text-[#E8A838]" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1 bg-[#F8F6F1] rounded-full overflow-hidden">
          <div className="h-full bg-[#E8A838]" style={{ width: "65%" }} />
        </div>
        <span className="text-[10px] font-mono text-[#415A77]">65%</span>
      </div>
    </div>
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[#F0EDE6] shadow-md opacity-60 scale-95 transform translate-x-8">
      <h4 className="text-xs font-medium text-[#0D1B2A]">
        Update structured data
      </h4>
    </div>
  </div>
);

const WeeklyProgressMockup = () => (
  <div className="w-full max-w-xs flex flex-col gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
    <div className="bg-white rounded-2xl border border-[#F0EDE6] shadow-xl overflow-hidden">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#E8A838]/10 flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5 text-[#E8A838]" />
            </div>
            <span className="text-[10px] font-bold text-[#0D1B2A] uppercase tracking-wider">
              Visibility Trend
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#415A77]">6 weeks</span>
        </div>

        {/* Sparkline Chart */}
        <div className="relative mb-5">
          <div className="flex items-end justify-between mb-1.5">
            <span className="font-mono text-[10px] text-[#415A77]">28</span>
            <span className="font-mono text-sm font-bold text-[#0D1B2A]">52</span>
          </div>
          <div className="relative h-16">
            <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
              {/* Fill area */}
              <motion.path
                d="M0,52 C20,50 40,46 70,38 C100,30 130,22 160,16 C175,12 190,8 200,6 L200,60 L0,60 Z"
                fill="rgba(232, 168, 56, 0.08)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              {/* Line */}
              <motion.path
                d="M0,52 C20,50 40,46 70,38 C100,30 130,22 160,16 C175,12 190,8 200,6"
                fill="none"
                stroke="#E8A838"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              />
              {/* End dot */}
              <motion.circle
                cx="200"
                cy="6"
                r="4"
                fill="#E8A838"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
              />
            </svg>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#415A77] font-medium">This week</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#0D1B2A]">52</span>
              <div className="flex items-center gap-0.5 text-[#2D6A4F]">
                <ArrowUpRight className="w-3 h-3" />
                <span className="text-[10px] font-bold">+4 pts</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#415A77] font-medium">Actions completed</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-[#415A77]">3 of 8</span>
              <div className="w-12 h-1 bg-[#F8F6F1] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "37.5%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-full bg-[#E8A838] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom pill - matches "Critical Gap Detected" style from diagnostics card */}
    <div className="bg-[#0D1B2A] text-white p-3 rounded-xl shadow-lg flex items-center gap-3 transform translate-x-4">
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
        <Activity className="w-4 h-4 text-[#E8A838]" />
      </div>
      <div>
        <div className="text-[8px] font-mono text-white/50 uppercase tracking-wider">
          Weekly Scan
        </div>
        <div className="text-[10px] font-medium">Next scan in 3 days</div>
      </div>
    </div>
  </div>
);

// --- Main Component ---

export default function FeaturesBentoGrid() {
  const features = [
    {
      title: "Scan across four AI search engines",
      description:
        "See how ChatGPT, Claude, Gemini, and Perplexity describe and recommend your brand — all from one scan.",
      mockup: <PlatformScanMockup />,
      colSpan: "md:col-span-8",
    },
    {
      title: "Understand your visibility score",
      description:
        "One number that tells you where you stand. Broken down by platform and sentiment.",
      mockup: <VisibilityScoreMockup />,
      colSpan: "md:col-span-4",
    },
    {
      title: "Track your competitors",
      description:
        "Add the brands that matter in your market. See how they score across the same AI search engines.",
      mockup: <CompetitorTrackMockup />,
      colSpan: "md:col-span-4",
    },
    {
      title: "See why you score the way you do",
      description:
        "Seven diagnostic factors — from content quality to third-party mentions — show you what is helping and what is holding you back.",
      mockup: <DiagnosticFactorsMockup />,
      colSpan: "md:col-span-8",
    },
    {
      title: "Get a prioritized action plan",
      description:
        "Every scan produces ranked recommendations — what to fix first, how long it takes, and how many points you can gain.",
      mockup: <ActionPlanMockup />,
      colSpan: "md:col-span-7",
    },
    {
      title: "Watch your score climb",
      description:
        "Lumen tracks your visibility week over week. See what improved, what shifted, and what to do next. Every scan builds on the last.",
      mockup: <WeeklyProgressMockup />,
      colSpan: "md:col-span-5",
    },
  ];

  return (
    <section id="features" className="py-32 px-6 bg-[#F8F6F1] relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-20">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-[#E8A838]/10 text-[#E8A838] font-mono text-xs uppercase tracking-wider mb-6">
                Key features
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#0D1B2A] leading-tight max-w-xl">
                Everything you need to show up in AI search.
              </h2>
            </div>
            <div className="hidden md:block w-px h-32 bg-[#F0EDE6] mt-4"></div>
            <div className="flex-1 md:pt-16">
              <p className="text-[#415A77] text-lg leading-relaxed max-w-lg">
                Lumen measures your brand across four AI search engines,
                diagnoses what is driving your score, and tells you exactly what
                to do next.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              delay={0.1 + (index % 3) * 0.1}
              staggerChildren={0.1}
              className={`h-full ${feature.colSpan}`}
            >
              <motion.div 
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(13,27,42,0.08)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white border border-[#F0EDE6] rounded-[32px] p-8 md:p-10 hover:border-[#E8A838]/30 transition-colors duration-500 flex flex-col h-full group overflow-hidden relative"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#E8A838]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <motion.div variants={itemVariants} className="mb-8 relative z-10">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0D1B2A] mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#415A77] text-sm md:text-base leading-relaxed max-w-md font-light">
                    {feature.description}
                  </p>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="mt-auto flex-1 bg-[#F8F6F1]/50 rounded-2xl border border-[#F0EDE6]/50 p-6 relative overflow-hidden flex items-center justify-center min-h-[300px]"
                >
                  {/* Subtle noise overlay for the mockup container */}
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
                    }}
                  ></div>

                  <div className="relative z-10 w-full flex justify-center transition-all duration-700 group-hover:scale-[1.03] group-hover:translate-y-[-4px]">
                    {feature.mockup}
                  </div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
