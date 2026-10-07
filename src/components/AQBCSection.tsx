import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { AQBCStep } from './ui/AQBCStep';

interface AQBCSectionProps {
  onQualifyClick?: () => void;
}

export const AQBCSection: React.FC<AQBCSectionProps> = ({ onQualifyClick }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      number: '01',
      title: 'ATTRACT',
      tagline: 'Get the right car owners to raise their hand.',
      mechanism: 'AI video creatives + Meta Ads.',
    },
    {
      number: '02',
      title: 'QUALIFY',
      tagline: 'Filter out curiosity and price shoppers.',
      mechanism: 'Vehicle + service + budget + timeline.',
    },
    {
      number: '03',
      title: 'BOOK',
      tagline: 'Turn serious prospects into inspection appointments.',
      mechanism: 'WhatsApp + call + CRM follow-up.',
    },
    {
      number: '04',
      title: 'CLOSE',
      tagline: 'Your team turns the inspection into a sale.',
      mechanism: 'PPF / ceramic consultation + package presentation.',
    },
  ];

  const oglityResponsibilities = [
    'Ads',
    'Creatives',
    'Qualification',
    'Follow-up system',
    'Appointment booking',
  ];

  const studioResponsibilities = [
    'Inspection',
    'Recommendation',
    'Package presentation',
    'Objection handling',
    'Sale',
  ];

  return (
    <section
      id="system"
      className="relative w-full bg-[#0A0C0E] text-[#F1F0EC] py-20 sm:py-24 lg:py-28 border-b border-[#1E2226] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#252A2E]/60 border border-[#252A2E] rounded-[2px]">
            <span className="w-1.5 h-1.5 bg-[#C7F000]" />
            <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#C7F000] font-bold">
              THE OGLITY AQBC™ SYSTEM
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.12] text-[#F1F0EC]">
            From ad
            <br />
            to showroom.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8BEC4] max-w-xl mx-auto font-sans leading-relaxed">
            We build the system that turns premium car owners into qualified inspection opportunities.
          </p>

          {/* Simple Visual Journey Indicator: AD → QUALIFIED PROSPECT → INSPECTION → SALE */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#B8BEC4]">
            <span className="px-2.5 py-1 bg-[#181B1F] border border-[#252A2E] rounded-[4px] text-[#F1F0EC] font-semibold">
              AD
            </span>
            <span className="text-[#C7F000]">→</span>
            <span className="px-2.5 py-1 bg-[#181B1F] border border-[#252A2E] rounded-[4px] text-[#F1F0EC] font-semibold">
              QUALIFIED PROSPECT
            </span>
            <span className="text-[#C7F000]">→</span>
            <span className="px-2.5 py-1 bg-[#181B1F] border border-[#252A2E] rounded-[4px] text-[#F1F0EC] font-semibold">
              INSPECTION
            </span>
            <span className="text-[#C7F000]">→</span>
            <span className="px-2.5 py-1 bg-[#181B1F] border border-[#252A2E] rounded-[4px] text-[#F1F0EC] font-semibold">
              SALE
            </span>
          </div>
        </div>

        {/* THE 4-STEP SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <AQBCStep
                number={step.number}
                title={step.title}
                tagline={step.tagline}
                mechanism={step.mechanism}
                isLast={idx === steps.length - 1}
              />
            </motion.div>
          ))}
        </div>

        {/* IMPORTANT RESPONSIBILITY SPLIT */}
        <div className="mt-14 sm:mt-20 pt-12 border-t border-[#252A2E]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* LEFT — OGLITY BUILDS */}
            <div className="p-6 sm:p-7 bg-[#16191C] border border-[#252A2E] rounded-[6px]">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#252A2E]">
                <span className="w-2 h-2 bg-[#C7F000]" />
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm sm:text-base tracking-wider text-[#F1F0EC]">
                  Oglity builds
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-sm sm:text-[15px] text-[#F1F0EC]">
                {oglityResponsibilities.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#C7F000] shrink-0 stroke-[2.5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — YOUR STUDIO CLOSES */}
            <div className="p-6 sm:p-7 bg-[#16191C] border border-[#252A2E] rounded-[6px]">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#252A2E]">
                <span className="w-2 h-2 bg-[#B8BEC4]" />
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm sm:text-base tracking-wider text-[#F1F0EC]">
                  Your studio closes
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-sm sm:text-[15px] text-[#F1F0EC]">
                {studioResponsibilities.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#B8BEC4] shrink-0 stroke-[2.5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core statement under responsibility split */}
          <div className="mt-6 text-center">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-xs sm:text-sm tracking-wider text-[#F1F0EC]">
              We build the pipeline. Your team closes the opportunity.
            </p>
          </div>
        </div>

        {/* DEFINE THE OUTCOME */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-10 bg-[#16191C] border border-[#252A2E] rounded-[6px] max-w-4xl mx-auto text-center">
          <div className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#B8BEC4] font-semibold mb-2">
            The output:
          </div>
          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[#C7F000]">
            Qualified Inspection Opportunities
          </h3>

          <div className="mt-6 space-y-1.5 text-xs sm:text-sm font-sans text-[#B8BEC4] max-w-lg mx-auto">
            <p className="line-through decoration-[#B8BEC4]/50">Not random leads.</p>
            <p className="line-through decoration-[#B8BEC4]/50">Not empty enquiries.</p>
            <p className="line-through decoration-[#B8BEC4]/50">Not promises of guaranteed sales.</p>
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#F1F0EC] font-sans max-w-xl mx-auto leading-relaxed">
            Qualified prospects who meet the agreed criteria and book an inspection with your studio.
          </p>

          <div className="mt-3 text-xs font-['Plus_Jakarta_Sans',sans-serif] text-[#B8BEC4]/70">
            Typically aiming for <span className="text-[#F1F0EC] font-semibold">15 qualified inspection opportunities / month</span> based on studio territory and bay capacity.
          </div>
        </div>

        {/* COMPACT MID-PAGE CTA BLOCK */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-[#16191C] border border-[#252A2E] rounded-[6px] max-w-3xl mx-auto text-center">
          <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-xl sm:text-2xl text-[#F1F0EC] tracking-tight">
            Think your studio is a fit?
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-[#B8BEC4] font-sans max-w-xl mx-auto leading-relaxed">
            We'll look at your current lead flow, average package value, follow-up process and appointment capacity.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-2">
            <Button
              variant="primary"
              size="lg"
              onClick={onQualifyClick}
              icon={<ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#111315] shrink-0" />}
              className="w-full sm:w-auto font-extrabold px-5 sm:px-8 py-3.5 sm:py-4 !h-auto min-h-[48px] sm:min-h-[54px] text-xs sm:text-sm tracking-wide whitespace-normal sm:whitespace-nowrap text-center justify-center shadow-md active:scale-[0.99] transition-all"
            >
              SEE IF YOUR STUDIO QUALIFIES
            </Button>
            <span className="text-xs font-sans text-[#B8BEC4]/80">
              15-minute qualification call.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
