import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { Metric } from './ui/Metric';
import { GridBackground } from './ui/GridBackground';
import { VSLVideo } from './ui/VSLVideo';

interface HeroSectionProps {
  onOpenAuditModal: () => void;
  onExploreSystem: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAuditModal,
  onExploreSystem,
}) => {
  const metricsData = [
    {
      id: 'clients',
      value: '6',
      label: 'STUDIO CLIENTS',
      sublabel: 'Specialized detailing & PPF facilities',
      isLime: false,
    },
    {
      id: 'leads',
      value: '90+',
      label: 'QUALIFIED LEADS GENERATED',
      sublabel: 'Verified high-intent car owners',
      isLime: true,
    },
    {
      id: 'package',
      value: '₹50K+',
      label: 'HIGH-TICKET PACKAGE VALUE',
      sublabel: 'Full-body PPF & multi-year ceramic',
      isLime: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#111315] border-b border-[#252A2E] overflow-hidden">
      <GridBackground theme="dark" showCoordinates={false} className="py-12 sm:py-18 lg:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow tag */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#252A2E]/60 border border-[#252A2E] rounded-[4px]">
              <span className="w-1.5 h-1.5 bg-[#C7F000]" />
              <span className="text-xs font-['Inter',sans-serif] font-bold tracking-[0.14em] text-[#C7F000] uppercase">
                FOR PREMIUM PPF &amp; CERAMIC STUDIOS
              </span>
            </div>
          </div>

          {/* Main Hero Grid: Left (Headline & Content) & Right (VSL Video) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Column: Headline, Subheadline, CTAs, Clarifications */}
            <div className="lg:col-span-7">
              {/* Dominant H1 using Manrope */}
              <h1 className="font-['Manrope',sans-serif] font-bold tracking-[-0.025em] leading-[1.12] text-[#F1F0EC] text-3xl sm:text-5xl lg:text-[46px] xl:text-[52px]">
                Get <span className="text-[#C7F000]">15</span> More Qualified
                <br />
                Inspection Opportunities
                <br />
                Every Month.
              </h1>

              {/* Subheadline: Concise */}
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#B8BEC4] max-w-2xl font-['Inter',sans-serif] leading-relaxed">
                Oglity helps ₹50K+ PPF and ceramic coating studios attract, qualify and book serious car owners using our AQBC™ customer-acquisition system.
              </p>

              {/* CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onOpenAuditModal}
                  icon={<ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#111315]" />}
                  className="!h-12 sm:!h-14 !px-6 sm:!px-8 text-xs sm:text-[14px] font-bold"
                >
                  SEE IF YOUR STUDIO QUALIFIES →
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={onExploreSystem}
                  icon={<ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F1F0EC]" />}
                  className="!h-12 sm:!h-14 !px-5 sm:!px-7 text-xs sm:text-[14px]"
                >
                  SEE HOW IT WORKS
                </Button>
              </div>

              {/* Under CTA details */}
              <div className="mt-5 pt-3.5 border-t border-[#252A2E] space-y-2">
                {/* Clarification Box */}
                <div className="p-3 bg-[#16191C] border border-[#252A2E] rounded-[4px] text-xs font-['Inter',sans-serif] text-[#B8BEC4] space-y-0.5">
                  <div className="font-bold text-[#F1F0EC] tracking-wider text-[11px] uppercase">
                    WHAT COUNTS AS A QUALIFIED OPPORTUNITY?
                  </div>
                  <p className="text-[#B8BEC4]/90 text-[12px] leading-relaxed">
                    A prospect who meets the agreed criteria and books an inspection with your studio.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: VSL Video Section */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <VSLVideo />
            </div>
          </div>

          {/* Hero Trust Strip: Compact Proof Strip */}
          <div className="mt-10 sm:mt-14 lg:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
              {metricsData.map((m) => (
                <Metric
                  key={m.id}
                  value={m.value}
                  label={m.label}
                  sublabel={m.sublabel}
                  isLime={m.isLime}
                />
              ))}
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
};
