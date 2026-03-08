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
  <div className="w-full max-w-sm flex flex-col gap-3">
    {[
      { name: "ChatGPT", score: 82, color: "bg-[#2D6A4F]", status: "Optimal" },
      { name: "Claude", score: 65, color: "bg-[#E8A838]", status: "Review" },
      { name: "Gemini", score: 45, color: "bg-[#E8A838]", status: "Review" },
      {
        name: "Perplexity",
        score: 91,
        color: "bg-[#2D6A4F]",
        status: "Optimal",
      },
    ].map((platform, i) => (
      <div
        key={i}
        className="bg-white rounded-lg p-3 border border-[#F0EDE6] flex items-center justify-between shadow-sm"
      >
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${platform.color}`} />
          <span className="text-sm font-medium text-[#0D1B2A]">
            {platform.name}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 h-1.5 bg-[#F8F6F1] rounded-full overflow-hidden">
            <div
              className={`h-full ${platform.color}`}
              style={{ width: `${platform.score}%` }}
            />
          </div>
          <span className="font-mono text-xs text-[#415A77] w-6 text-right">
            {platform.score}
          </span>
        </div>
      </div>
    ))}
  </div>
);

const VisibilityScoreMockup = () => (
  <div className="flex items-center gap-8 w-full max-w-sm bg-white p-6 rounded-xl border border-[#F0EDE6] shadow-sm">
    <div className="relative w-24 h-24 flex-shrink-0">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke="#F8F6F1"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke="#E8A838"
          strokeWidth="8"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - 251.2 * 0.34}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-2xl font-semibold text-[#0D1B2A]">
          34
        </span>
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-3">
      <span className="inline-block px-2 py-1 bg-[#E8A838]/10 text-[#E8A838] text-[10px] font-mono uppercase tracking-wider rounded w-fit">
        Below category avg
      </span>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#415A77]">Category</span>
          <span className="font-mono text-[#0D1B2A]">42</span>
        </div>
        <div className="w-full h-1 bg-[#F8F6F1] rounded-full overflow-hidden">
          <div className="h-full bg-[#415A77]" style={{ width: "42%" }} />
        </div>
        <div className="flex items-center justify-between text-xs pt-1">
          <span className="text-[#415A77]">Sentiment</span>
          <span className="font-mono text-[#2D6A4F]">Positive</span>
        </div>
      </div>
    </div>
  </div>
);

const DiagnosticFactorsMockup = () => (
  <div className="w-full max-w-sm bg-white rounded-xl border border-[#F0EDE6] shadow-sm overflow-hidden">
    <div className="px-4 py-3 border-b border-[#F0EDE6] bg-[#F8F6F1]/50">
      <span className="text-xs font-mono uppercase text-[#778DA9] tracking-wider">
        Diagnostic Factors
      </span>
    </div>
    <div className="p-2">
      {[
        {
          label: "Content Quality",
          score: 72,
          trend: "up",
          color: "text-[#2D6A4F]",
        },
        {
          label: "Third-party Mentions",
          score: 31,
          trend: "down",
          color: "text-[#E8A838]",
        },
        {
          label: "Structured Data",
          score: 45,
          trend: "flat",
          color: "text-[#415A77]",
        },
        {
          label: "Brand Authority",
          score: 88,
          trend: "up",
          color: "text-[#2D6A4F]",
        },
      ].map((factor, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-2 hover:bg-[#F8F6F1] rounded-md transition-colors"
        >
          <span className="text-sm text-[#0D1B2A] font-medium">
            {factor.label}
          </span>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#415A77]">
              {factor.score}
            </span>
            {factor.trend === "up" && (
              <ArrowUpRight className={`w-4 h-4 ${factor.color}`} />
            )}
            {factor.trend === "down" && (
              <ArrowDownRight className={`w-4 h-4 ${factor.color}`} />
            )}
            {factor.trend === "flat" && (
              <Minus className={`w-4 h-4 ${factor.color}`} />
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CompetitorTrackMockup = () => (
  <div className="w-full max-w-sm bg-white rounded-xl border border-[#F0EDE6] shadow-sm overflow-hidden">
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-[#F0EDE6] bg-[#F8F6F1]/50">
          <th className="text-left py-3 px-4 font-mono text-xs uppercase text-[#778DA9] font-medium">
            Brand
          </th>
          <th className="text-right py-3 px-4 font-mono text-xs uppercase text-[#778DA9] font-medium">
            Score
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-[#F0EDE6]">
          <td className="py-3 px-4 font-medium text-[#0D1B2A] flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#457B9D]/20 flex items-center justify-center text-[8px] font-bold text-[#457B9D]">
              A
            </div>
            Acme Corp
          </td>
          <td className="py-3 px-4 text-right font-mono text-[#0D1B2A]">78</td>
        </tr>
        <tr className="border-b border-[#F0EDE6] bg-[#E8A838]/5 relative">
          <td className="py-3 px-4 font-semibold text-[#0D1B2A] flex items-center gap-2">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E8A838]" />
            <div className="w-4 h-4 rounded bg-[#E8A838]/20 flex items-center justify-center text-[8px] font-bold text-[#E8A838]">
              Y
            </div>
            Your Brand
          </td>
          <td className="py-3 px-4 text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="font-mono text-[#0D1B2A]">66</span>
              <span className="text-[10px] font-mono text-[#E8A838] bg-[#E8A838]/10 px-1.5 py-0.5 rounded">
                -12 pts
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="py-3 px-4 font-medium text-[#0D1B2A] flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#457B9D]/20 flex items-center justify-center text-[8px] font-bold text-[#457B9D]">
              G
            </div>
            Globex
          </td>
          <td className="py-3 px-4 text-right font-mono text-[#0D1B2A]">54</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const ActionPlanMockup = () => (
  <div className="w-full max-w-sm flex flex-col gap-3">
    <div className="bg-white rounded-xl p-4 border border-[#F0EDE6] shadow-sm relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E8A838]" />
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-sm font-semibold text-[#0D1B2A]">
          Publish comparison pages
        </h4>
        <AlertCircle className="w-4 h-4 text-[#E8A838]" />
      </div>
      <div className="flex items-center gap-2 mt-3">
        <span className="inline-flex items-center px-2 py-1 rounded bg-[#F8F6F1] text-[#415A77] text-[10px] font-mono uppercase">
          ~2 hours
        </span>
        <span className="inline-flex items-center px-2 py-1 rounded bg-[#2D6A4F]/10 text-[#2D6A4F] text-[10px] font-mono uppercase">
          +8 to 12 pts
        </span>
      </div>
    </div>

    <div className="bg-white rounded-xl p-4 border border-[#F0EDE6] shadow-sm">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-sm font-medium text-[#0D1B2A]">
          Update structured data
        </h4>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <span className="inline-flex items-center px-2 py-1 rounded bg-[#F8F6F1] text-[#415A77] text-[10px] font-mono uppercase">
          ~30 mins
        </span>
        <span className="inline-flex items-center px-2 py-1 rounded bg-[#2D6A4F]/10 text-[#2D6A4F] text-[10px] font-mono uppercase">
          +3 to 5 pts
        </span>
      </div>
    </div>
  </div>
);

const ExportReportMockup = () => (
  <div className="relative w-full max-w-xs flex justify-center items-center py-8">
    <div className="absolute inset-0 bg-gradient-to-tr from-[#F8F6F1] to-transparent opacity-50" />
    <div className="bg-white w-48 h-64 rounded-lg shadow-xl border border-[#F0EDE6] transform rotate-[-6deg] transition-transform hover:rotate-[-2deg] duration-500 flex flex-col p-4 relative z-10">
      <div className="w-8 h-8 rounded-full bg-[#0D1B2A] flex items-center justify-center mb-6">
        <div className="w-2 h-2 rounded-full bg-[#E8A838]" />
      </div>
      <div className="space-y-2 mb-6">
        <div className="h-2 w-3/4 bg-[#F0EDE6] rounded" />
        <div className="h-2 w-1/2 bg-[#F0EDE6] rounded" />
      </div>
      <div className="mt-auto">
        <div className="flex items-end justify-between border-t border-[#F0EDE6] pt-3">
          <div>
            <div className="text-[8px] font-mono text-[#778DA9] uppercase mb-1">
              Overall Score
            </div>
            <div className="text-2xl font-serif text-[#0D1B2A]">66</div>
          </div>
          <div className="w-6 h-6 rounded bg-[#F8F6F1] flex items-center justify-center">
            <Download className="w-3 h-3 text-[#415A77]" />
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-4 right-4 bg-[#0D1B2A] text-white text-xs font-medium px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-20">
      <Download className="w-3 h-3" /> Download PDF
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
    },
    {
      title: "Understand your visibility score",
      description:
        "One number that tells you where you stand. Broken down by platform, category, and sentiment so you know exactly what is driving it.",
      mockup: <VisibilityScoreMockup />,
    },
    {
      title: "See why you score the way you do",
      description:
        "Seven diagnostic factors — from content quality to third-party mentions — show you what is helping and what is holding you back.",
      mockup: <DiagnosticFactorsMockup />,
    },
    {
      title: "Track your competitors",
      description:
        "Add the brands that matter in your market. See how they score across the same AI search engines and where the gaps are.",
      mockup: <CompetitorTrackMockup />,
    },
    {
      title: "Get a prioritized action plan",
      description:
        "Every scan produces ranked recommendations — what to fix first, how long it takes, and how many points you can gain.",
      mockup: <ActionPlanMockup />,
    },
    {
      title: "Export and share your results",
      description:
        "Download a PDF report with your full analysis — scores, diagnostics, and recommendations — ready for your team or stakeholders.",
      mockup: <ExportReportMockup />,
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#F8F6F1] relative z-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className="h-full">
              <div className="bg-white border border-[#F0EDE6] rounded-[16px] p-8 md:p-10 hover:shadow-xl hover:shadow-[#0D1B2A]/5 transition-all duration-300 flex flex-col h-full group">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#0D1B2A] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#415A77] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-auto flex-1 bg-[#F8F6F1]/50 rounded-xl border border-[#F0EDE6]/50 p-6 relative overflow-hidden flex items-center justify-center min-h-[240px]">
                  {/* Subtle noise overlay for the mockup container */}
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
                    }}
                  ></div>

                  <div className="relative z-10 w-full flex justify-center transition-transform duration-500 group-hover:scale-[1.02]">
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
