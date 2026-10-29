import React from 'react';
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
      <GridBackground theme="dark" showCoordinates={false} className="py-5 sm:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero Grid: Left Content (Desktop) & Right VSL (Zero overlap, shrinkable columns with min-w-0) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 items-center">
            {/* Left Column: Eyebrow, Headline, Short Body, Desktop CTAs */}
            <div className="lg:col-span-5 min-w-0 flex flex-col justify-center">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 bg-[#16191C] border border-[#252A2E] rounded-[4px] mb-2 sm:mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
                  FOR PREMIUM CAR DETAILING STUDIOS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-['Manrope',sans-serif] font-extrabold tracking-[-0.03em] leading-[1.14] text-[#F1F0EC] text-2xl sm:text-3xl md:text-4xl lg:text-[32px] xl:text-[36px]">
                Premium Studio.{' '}
                <span className="text-[#C7F000]">But Bookings Still Unpredictable?</span>
              </h1>

              {/* Short Body */}
              <div className="mt-2.5 sm:mt-3 space-y-2 text-xs sm:text-sm text-[#CAD0D6] font-sans leading-relaxed">
                <p>
                  Empty bays, unanswered quotations, and endless WhatsApp follow-ups?
                </p>

                <p>
                  Oglity's <strong className="text-[#F1F0EC] font-semibold">AQBC™ System — Attract, Qualify, Book, Close</strong> — helps turn serious car-owner enquiries into tracked showroom visits.
                </p>
              </div>

              {/* Desktop CTAs (Primary + Secondary on desktop) */}
              <div className="hidden lg:flex flex-col gap-2.5 mt-4 pt-1">
                <div>
                  <button
                    type="button"
                    onClick={handleScrollToCalendly}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-[8px] bg-[#C7F000] text-[#111315] font-['Space_Grotesk',sans-serif] font-extrabold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#D5FA10] active:scale-[0.99] transition-all cursor-pointer shadow-[0_0_20px_rgba(199,240,0,0.3)] hover:shadow-[0_0_30px_rgba(199,240,0,0.45)] text-center"
                  >
                    BOOK A FREE LEAKAGE ANALYSIS CALL →
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handleScrollToAQBC}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-[6px] bg-[#16191D] hover:bg-[#1E2328] border border-[#2E353B] hover:border-[#C7F000]/60 text-[#CAD0D6] hover:text-[#F1F0EC] font-['Space_Grotesk',sans-serif] font-bold text-xs tracking-wider uppercase transition-all cursor-pointer text-center"
                  >
                    SEE HOW OUR SYSTEM WORKS ↓
                  </button>
                </div>

                {/* Desktop Microcopy */}
                <p className="text-[11.5px] text-[#A6ADB5] font-sans leading-relaxed italic pt-0.5">
                  30-minute fit call. Personalized 3-3-3 analysis for eligible studios after review.
                </p>
              </div>
            </div>

            {/* Right Column: Video Label + Large Responsive 16:9 VSL */}
            <div className="lg:col-span-7 min-w-0 w-full flex flex-col">
              {/* Short Video Label (No long heading or repeated description) */}
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold text-[#C7F000] uppercase tracking-wider mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
                <span>WATCH HOW IT WORKS ↓</span>
              </div>

              {/* Large Responsive 16:9 Video Container */}
              <div className="w-full shadow-[0_20px_50px_rgba(0,0,0,0.7)] rounded-[10px] overflow-hidden border border-[#252A2E] hover:border-[#C7F000]/50 transition-colors">
                <VSLVideo initialVideoSrc="https://youtu.be/IQzREQoHUhM" />
              </div>

              {/* Mobile Reading Order: Primary CTA only right under video (no secondary CTA on mobile) */}
              <div className="block lg:hidden mt-4 space-y-2">
                <button
                  type="button"
                  onClick={handleScrollToCalendly}
                  className="w-full inline-flex items-center justify-center px-5 py-3.5 rounded-[8px] bg-[#C7F000] text-[#111315] font-['Space_Grotesk',sans-serif] font-extrabold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#D5FA10] active:scale-[0.99] transition-all cursor-pointer shadow-[0_0_20px_rgba(199,240,0,0.3)] text-center"
                >
                  BOOK A FREE LEAKAGE ANALYSIS CALL →
                </button>

                {/* Mobile Microcopy */}
                <p className="text-[11px] text-[#A6ADB5] font-sans text-center italic">
                  30-minute fit call. Personalized 3-3-3 analysis for eligible studios after review.
                </p>
              </div>
            </div>
          </div>

          {/* Compact Proof Metrics Strip (Horizontal two-column on mobile & desktop) */}
          <div className="mt-5 sm:mt-7 pt-4 sm:pt-5 border-t border-[#252A2E]">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 w-full">
              {/* Metric 1 */}
              <div className="p-3 sm:p-4 bg-[#16191C] border border-[#252A2E] rounded-[6px] hover:border-[#B8BEC4]/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="font-['Space_Grotesk',sans-serif] font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#C7F000] tracking-tight leading-none">
                    300+
                  </div>
                  <div className="mt-1 font-['Inter',sans-serif] font-bold text-[10px] sm:text-xs text-[#F1F0EC] uppercase tracking-wider leading-snug">
                    Physical Showroom Visits
                  </div>
                </div>
                <p className="mt-0.5 text-[9.5px] sm:text-[11px] text-[#B8BEC4] font-sans">
                  In 3 months
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-3 sm:p-4 bg-[#16191C] border border-[#252A2E] rounded-[6px] hover:border-[#B8BEC4]/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="font-['Space_Grotesk',sans-serif] font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#F1F0EC] tracking-tight leading-none">
                    6
                  </div>
                  <div className="mt-1 font-['Inter',sans-serif] font-bold text-[10px] sm:text-xs text-[#F1F0EC] uppercase tracking-wider leading-snug">
                    Detailing Businesses Served
                  </div>
                </div>
                <p className="mt-0.5 text-[9.5px] sm:text-[11px] text-[#B8BEC4] font-sans">
                  Specialist automotive experience
                </p>
              </div>
            </div>

            {/* Accurate Qualification Disclaimer (Readable, not hidden) */}
            <p className="mt-2 text-[10.5px] sm:text-[11.5px] text-[#8F97A0] font-sans italic leading-relaxed text-center sm:text-left">
              Historical results across client engagements, tracked through CRM and confirmed by studios. Not all visits were qualified. Individual results vary.
            </p>
          </div>
        </div>
      </GridBackground>
    </section>
  );
};
