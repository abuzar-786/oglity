import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';
import { GridBackground } from './ui/GridBackground';
import { VSLVideo } from './ui/VSLVideo';

interface HeroSectionProps {
  onOpenAuditModal?: () => void;
  onExploreSystem?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAuditModal,
  onExploreSystem,
}) => {
  const handleScrollToCalendly = () => {
    if (onOpenAuditModal) {
      onOpenAuditModal();
    }
    const el = document.getElementById('qualification');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToAQBC = () => {
    const el = document.getElementById('system');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (onExploreSystem) {
      onExploreSystem();
    }
  };

  return (
    <section className="relative w-full bg-[#111315] border-b border-[#252A2E] overflow-hidden">
      <GridBackground theme="dark" showCoordinates={false} className="py-6 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#252A2E]/60 border border-[#252A2E] rounded-[4px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
              <span className="text-xs font-['Inter',sans-serif] font-bold tracking-[0.14em] text-[#C7F000] uppercase">
                FOR PREMIUM PPF &amp; CERAMIC COATING STUDIOS
              </span>
            </div>
          </div>

          {/* Main Hero Grid: Left (Headline, Copy, CTAs) & Right (VSL Video) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Column: Headline, Subheadline, CTAs, Microcopy */}
            <div className="lg:col-span-7">
              {/* Dominant H1 using Manrope */}
              <h1 className="font-['Manrope',sans-serif] font-extrabold tracking-[-0.03em] leading-[1.14] text-[#F1F0EC] text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px]">
                Stop Chasing Price Shoppers.{' '}
                <span className="text-[#C7F000]">Start Getting Qualified Showroom Visits.</span>
              </h1>

              {/* Subheadline: Refined copy */}
              <p className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-[#B8BEC4] max-w-2xl font-['Inter',sans-serif] leading-relaxed">
                We help established PPF and ceramic coating studios attract serious car owners, qualify enquiries, and turn them into showroom visits through targeted ads, structured follow-ups, and appointment coordination.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleScrollToCalendly}
                  icon={<ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#111315]" />}
                  className="!h-12 sm:!h-14 !px-6 sm:!px-8 text-xs sm:text-[14px] font-bold justify-center"
                >
                  SEE IF YOUR STUDIO QUALIFIES
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleScrollToAQBC}
                  icon={<ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F1F0EC]" />}
                  className="!h-12 sm:!h-14 !px-5 sm:!px-7 text-xs sm:text-[14px] justify-center"
                >
                  SEE HOW AQBC™ WORKS
                </Button>
              </div>

              {/* Microcopy beneath CTAs */}
              <p className="mt-2 sm:mt-2.5 text-xs text-[#B8BEC4] font-sans">
                Free 30-minute discovery call · No obligation
              </p>
            </div>

            {/* Right Column: VSL Video Section (Preserved) */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <VSLVideo initialVideoSrc="https://youtu.be/IQzREQoHUhM" />
            </div>
          </div>

          {/* Hero Credibility Metrics: Compact Two-Column Proof Strip on Both Mobile & Desktop */}
          <div className="mt-5 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 border-t border-[#252A2E]">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-5 w-full">
              {/* Metric 1 (Left) */}
              <div className="p-3 sm:p-5 bg-[#16191C] border border-[#252A2E] rounded-[6px] hover:border-[#B8BEC4]/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="font-['Space_Grotesk',sans-serif] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#C7F000] tracking-tight leading-none">
                    300+
                  </div>
                  <div className="mt-1 sm:mt-2 font-['Inter',sans-serif] font-bold text-[11px] sm:text-xs lg:text-sm text-[#F1F0EC] uppercase tracking-wider leading-snug">
                    Physical Showroom Visits
                  </div>
                </div>
                <p className="mt-1 text-[10px] sm:text-xs text-[#B8BEC4] font-sans">
                  In 3 months<span className="hidden sm:inline">, across clients</span>
                </p>
              </div>

              {/* Metric 2 (Right) */}
              <div className="p-3 sm:p-5 bg-[#16191C] border border-[#252A2E] rounded-[6px] hover:border-[#B8BEC4]/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="font-['Space_Grotesk',sans-serif] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F1F0EC] tracking-tight leading-none">
                    6
                  </div>
                  <div className="mt-1 sm:mt-2 font-['Inter',sans-serif] font-bold text-[11px] sm:text-xs lg:text-sm text-[#F1F0EC] uppercase tracking-wider leading-snug">
                    Detailing Businesses Served
                  </div>
                </div>
                <p className="mt-1 text-[10px] sm:text-xs text-[#B8BEC4] font-sans hidden sm:block">
                  Customer acquisition experience
                </p>
              </div>
            </div>

            {/* Accessible Qualification Disclaimer beneath metrics */}
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-[13px] text-[#B8BEC4] font-sans italic leading-relaxed">
              CRM-tracked and studio-confirmed visits. Not all visits were qualified. Historical results vary.
            </p>
          </div>
        </div>
      </GridBackground>
    </section>
  );
};
