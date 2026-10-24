import React from 'react';
import {
  Target,
  ClipboardCheck,
  CalendarCheck,
  Handshake,
  ChevronDown,
} from 'lucide-react';

interface AQBCSectionProps {
  onQualifyClick?: () => void;
}

export const AQBCSection: React.FC<AQBCSectionProps> = () => {
  const steps = [
    {
      number: '01',
      title: 'ATTRACT',
      headline: 'Reach Serious Car Owners.',
      desc: 'Targeted Meta Ads attract people interested in premium PPF and ceramic coating services.',
      icon: Target,
    },
    {
      number: '02',
      title: 'QUALIFY',
      headline: 'Filter Out Price Shoppers.',
      desc: 'We screen enquiries by vehicle, service interest, budget and buying intent.',
      icon: ClipboardCheck,
    },
    {
      number: '03',
      title: 'BOOK',
      headline: 'Turn Interest Into Showroom Visits.',
      desc: 'We manage initial follow-ups, booking coordination and reminders, while tracking appointments and attendance.',
      icon: CalendarCheck,
    },
    {
      number: '04',
      title: 'CLOSE',
      headline: 'Your Team Closes the Sale.',
      desc: 'Your studio handles technical questions, pricing, consultations and final sales.',
      icon: Handshake,
    },
  ];

  return (
    <section
      id="system"
      className="relative w-full bg-[#0A0C0E] text-[#F1F0EC] py-12 sm:py-16 lg:py-20 border-b border-[#1E2226] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16191C] border border-[#252A2E] rounded-[4px] mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
              THE AQBC™ CUSTOMER ACQUISITION SYSTEM
            </span>
          </div>

          <h2 className="font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-[1.14] text-[#F1F0EC]">
            From First Enquiry to{' '}
            <span className="text-[#C7F000]">Showroom Visit.</span>
          </h2>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-[#B8BEC4] max-w-xl mx-auto font-sans leading-relaxed">
            More leads won't fix an inconsistent booking pipeline. AQBC™ connects every step between a customer enquiry and an actual showroom visit.
          </p>
        </div>

        {/* 4 Connected Cards: Single Column on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-3.5 sm:p-5 bg-[#111315] border border-[#252A2E] rounded-[10px] hover:border-[#C7F000]/50 transition-colors flex flex-col justify-start"
              >
                <div>
                  {/* Step Header: Number, Step Title, Icon */}
                  <div className="flex items-center justify-between pb-2 mb-2 sm:pb-2.5 sm:mb-2.5 border-b border-[#252A2E]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#C7F000]">
                        {step.number}
                      </span>
                      <span className="text-[#252A2E]">/</span>
                      <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-wider text-[#F1F0EC] uppercase">
                        {step.title}
                      </span>
                    </div>
                    <Icon className="w-4 h-4 text-[#C7F000]" />
                  </div>

                  {/* Headline */}
                  <h3 className="font-['Manrope',sans-serif] font-bold text-sm sm:text-[15px] text-[#F1F0EC] tracking-tight leading-snug">
                    {step.headline}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 sm:mt-1.5 text-xs text-[#B8BEC4] font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow Connector between cards on desktop */}
                {idx < steps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-[#16191D] border border-[#252A2E] items-center justify-center text-[#C7F000] text-[10px] font-bold"
                    aria-hidden="true"
                  >
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Statement Panel: Single Concise Line */}
        <div className="mt-5 sm:mt-8 p-3.5 sm:p-4 bg-[#16191C] border border-[#252A2E] rounded-[8px] text-center max-w-xl mx-auto shadow-sm">
          <p className="font-['Manrope',sans-serif] font-bold text-xs sm:text-sm text-[#F1F0EC]">
            We build the acquisition pipeline. Your team delivers the expertise.
          </p>
        </div>

        {/* Transition Down Arrow to Guarantee Section (#offer) */}
        <div className="mt-3.5 sm:mt-5 flex justify-center">
          <a
            href="#offer"
            aria-label="Scroll to Guarantee"
            className="w-7 h-7 rounded-full bg-[#16191D] border border-[#252A2E] text-[#B8BEC4] hover:text-[#C7F000] hover:border-[#C7F000] flex items-center justify-center transition-colors shadow-xs"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
