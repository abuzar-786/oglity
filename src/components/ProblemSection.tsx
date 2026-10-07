import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { TechnicalCard } from './ui/TechnicalCard';
import { GridBackground } from './ui/GridBackground';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      number: '01',
      title: 'Not enough qualified leads',
      explanation:
        'Word-of-mouth and sporadic social posts leave bay schedules empty and unpredictable.',
    },
    {
      number: '02',
      title: 'Low-quality enquiries',
      explanation:
        'Generic lead forms attract bargain hunters instead of serious ₹50K+ PPF clients.',
    },
    {
      number: '03',
      title: 'Price shoppers & ghosting',
      explanation:
        'Prospects ask "what\'s your price?" and disappear before value is established.',
    },
    {
      number: '04',
      title: 'Inconsistent bay bookings',
      explanation:
        'Alternating between overbooked weeks and empty bays hurts cash flow and team retention.',
    },
    {
      number: '05',
      title: 'Unpredictable ad performance',
      explanation:
        'Erratic Meta algorithms generate vanity clicks and fake numbers with zero showroom visits.',
    },
  ];

  return (
    <section id="problem" className="relative w-full bg-[#FFFFFF] text-[#111315] py-20 sm:py-28 border-b border-[#B8BEC4]/60">
      <GridBackground theme="white" showCoordinates={false} className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <SectionHeader
              theme="light"
              align="center"
              eyebrow="The real problem"
              title="More leads aren't the answer."
              subtitle={
                <p className="text-sm sm:text-base lg:text-[17px] text-[#252A2E]/80 leading-relaxed font-sans">
                  You don't need another spreadsheet of low-intent names. You need qualified car owners actively booking showroom inspections.
                </p>
              }
            />
          </div>

          {/* Problem Cards: Clean 5-card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {problems.slice(0, 3).map((problem) => (
              <TechnicalCard
                key={problem.number}
                theme="light"
                number={problem.number}
                title={problem.title}
                description={problem.explanation}
              />
            ))}

            {/* Row 2: 2 cards centered */}
            <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:w-2/3 lg:mx-auto">
              {problems.slice(3).map((problem) => (
                <TechnicalCard
                  key={problem.number}
                  theme="light"
                  number={problem.number}
                  title={problem.title}
                  description={problem.explanation}
                />
              ))}
            </div>
          </div>

          {/* Clean Outcome Transition Block */}
          <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-[#B8BEC4]/50 text-center max-w-4xl mx-auto">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-2xl sm:text-4xl tracking-tight leading-snug text-[#111315]">
              The problem isn't just lead volume.
              <br />
              <span className="text-[#252A2E]/70">
                It's what happens between the ad and the showroom.
              </span>
            </h3>

            {/* Simple Visual Journey with Diagnostic Schematic */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
              <div className="p-5 bg-[#F1F0EC] border border-[#B8BEC4]/50 rounded-[6px] relative overflow-hidden">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#111315]">01 / Ad Click</span>
                  <span className="text-[10px] font-mono text-[#252A2E]/60 uppercase">Input</span>
                </div>
                <p className="text-xs text-[#252A2E]/80 font-sans leading-relaxed">
                  Car owner sees an ad and submits their name.
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#B8BEC4]/40 flex items-center gap-1.5 text-[10px] font-mono text-[#252A2E]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111315]" />
                  <span>Meta Ad Impression</span>
                </div>
              </div>

              <div className="p-5 bg-[#111315] text-[#F1F0EC] border border-[#111315] rounded-[6px] relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#C7F000]">02 / The Gap</span>
                  <span className="w-1.5 h-1.5 bg-[#C7F000] animate-ping" />
                </div>
                <p className="text-xs text-[#B8BEC4] font-sans leading-relaxed">
                  Where deals die: Unscreened enquiries, delayed calls, and zero qualification.
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#252A2E] flex items-center justify-between text-[10px] font-mono text-[#C7F000]">
                  <span>AQBC™ SEALS THIS GAP</span>
                  <span>⚡ INSTANT</span>
                </div>
              </div>

              <div className="p-5 bg-[#F1F0EC] border border-[#B8BEC4]/50 rounded-[6px] relative overflow-hidden">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#111315]">03 / Showroom</span>
                  <span className="text-[10px] font-mono text-[#252A2E]/60 uppercase">Target</span>
                </div>
                <p className="text-xs text-[#252A2E]/80 font-sans leading-relaxed">
                  Vehicle arrives physically inside the bay for inspection and package closure.
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#B8BEC4]/40 flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 font-bold">
                  <span>✓ 15+ Confirmed / Mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
};
