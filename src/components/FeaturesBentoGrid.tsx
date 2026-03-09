"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  BarChart2,
  Activity,
  Target,
  ListTodo,
  Download,
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
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
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
            <span className="text-[8px] font-mono text-[#415A77] uppercase tracking-tighter">
              Lumen Score
            </span>
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

const ExportReportMockup = () => (
  <div className="relative w-full max-w-xs flex justify-center items-center py-12">
    <motion.div
      animate={{ rotate: [-8, -6, -8] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="bg-white w-52 h-72 rounded-xl shadow-2xl border border-[#F0EDE6] flex flex-col p-5 relative z-10 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#E8A838]/10 rounded-bl-full" />
      <div className="w-10 h-10 rounded-xl bg-[#0D1B2A] flex items-center justify-center mb-8">
        <div className="w-3 h-3 rounded-full bg-[#E8A838]" />
      </div>
      <div className="space-y-3 mb-8">
        <div className="h-2 w-full bg-[#F8F6F1] rounded" />
        <div className="h-2 w-5/6 bg-[#F8F6F1] rounded" />
        <div className="h-2 w-4/6 bg-[#F8F6F1] rounded" />
      </div>
      <div className="mt-auto pt-4 border-t border-[#F0EDE6]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[8px] font-mono text-[#415A77] uppercase">
              Final Audit
            </div>
            <div className="text-xl font-serif text-[#0D1B2A]">Lumen_Q4</div>
          </div>
          <CheckCircle2 className="w-5 h-5 text-[#2D6A4F]" />
        </div>
      </div>
    </motion.div>
    <div className="absolute -bottom-2 right-4 bg-[#0D1B2A] text-white text-[10px] font-mono px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 z-20">
      <Download className="w-3 h-3" /> EXPORT_READY.PDF
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
      title: "Export and share your results",
      description:
        "Download a PDF report with your full analysis — scores, diagnostics, and recommendations.",
      mockup: <ExportReportMockup />,
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
              delay={index * 0.1}
              className={`h-full ${feature.colSpan}`}
            >
              <div className="bg-white border border-[#F0EDE6] rounded-[24px] p-8 md:p-10 hover:shadow-xl hover:shadow-[#0D1B2A]/5 transition-all duration-500 flex flex-col h-full group overflow-hidden">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#0D1B2A] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#415A77] text-sm leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-auto flex-1 bg-[#F8F6F1]/50 rounded-2xl border border-[#F0EDE6]/50 p-6 relative overflow-hidden flex items-center justify-center min-h-[280px]">
                  {/* Subtle noise overlay for the mockup container */}
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
                    }}
                  ></div>

                  <div className="relative z-10 w-full flex justify-center transition-all duration-700 group-hover:scale-[1.05] group-hover:translate-y-[-4px]">
                    {feature.mockup}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
