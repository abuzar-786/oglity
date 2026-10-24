import React from 'react';
import { ShieldCheck, CalendarCheck, CheckCircle2, ArrowUpRight, Check, AlertCircle } from 'lucide-react';

interface OfferSectionProps {
  onApplyClick: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onApplyClick }) => {
  const criteria = [
    {
      title: 'Qualified',
      desc: 'Genuine PPF or ceramic-coating interest, aligned with your studio\'s packages.',
    },
    {
      title: 'Attributable',
      desc: 'Generated or re-engaged through Oglity\'s acquisition system.',
    },
    {
      title: 'Verified',
      desc: 'Physically attended, CRM-tracked and studio-confirmed.',
    },
  ];

  return (
    <section
      id="offer"
      className="relative w-full bg-[#0A0C0E] text-[#F1F0EC] py-20 sm:py-24 lg:py-28 border-b border-[#1E2226] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Headline */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16191C] border border-[#252A2E] rounded-[4px] mb-3">
            <ShieldCheck className="w-4 h-4 text-[#C7F000]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
              THE OGLITY SHOWROOM VISIT GUARANTEE
            </span>
          </div>

          <h2 className="font-['Manrope',sans-serif] font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.12] text-[#F1F0EC]">
            15 Qualified Showroom Visits.{' '}
            <span className="text-[#C7F000]">Not Just Booked Appointments.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg lg:text-[19px] text-[#F1F0EC] font-semibold max-w-2xl mx-auto font-sans leading-snug">
            Because appointments mean nothing if customers never show up.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-[#B8BEC4] max-w-xl mx-auto font-sans leading-relaxed">
            We commit to bringing <strong className="text-[#F1F0EC]">15 qualified car owners physically into your studio per month</strong>, following an initial 14-day testing phase and subject to agreed conditions.
          </p>
        </div>

        {/* =========================================================================
            RECOMMENDED PREMIUM DESIGN HERO GUARANTEE CARD (From User Mockup)
           ========================================================================= */}
        <div className="relative max-w-3xl mx-auto p-6 sm:p-8 lg:p-10 bg-[#0F1215] border border-[#252A2E] rounded-[18px] shadow-2xl">
          {/* Card Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-4 h-4 text-[#C7F000]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
              THE OGLITY COMMITMENT
            </span>
          </div>

          {/* Central Prominent Metric */}
          <div className="text-center my-6 sm:my-8">
            <div className="font-['Space_Grotesk',sans-serif] font-extrabold text-6xl sm:text-7xl text-[#C7F000] leading-none tracking-tight">
              15
            </div>
            <h3 className="font-['Manrope',sans-serif] font-bold text-2xl sm:text-3xl text-[#F1F0EC] tracking-tight mt-2.5">
              Qualified Showroom Visits
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A6ADB5] font-sans">
              Physically attended. CRM-tracked. Studio-confirmed.
            </p>
          </div>

          {/* Dual Condition Sub-Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 my-6 sm:my-8">
            {/* Left Card: 14-Day Testing */}
            <div className="p-5 bg-[#16191D] border border-[#262C32] rounded-[10px]">
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-[#C7F000]" />
              </div>
              <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-base text-[#F1F0EC] mt-3">
                14-Day Testing
              </h4>
              <p className="mt-1 text-xs text-[#A6ADB5] font-sans leading-relaxed">
                Before the monthly measurement period
              </p>
            </div>

            {/* Right Card: 15–30 Day Extension */}
            <div className="p-5 bg-[#16191D] border border-[#262C32] rounded-[10px]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C7F000]" />
              </div>
              <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-base text-[#F1F0EC] mt-3">
                15–30 Day Extension
              </h4>
              <p className="mt-1 text-xs text-[#A6ADB5] font-sans leading-relaxed">
                No extra agency fee if the target is missed, subject to terms
              </p>
            </div>
          </div>

          {/* Primary Action Button (Full Width Electric Lime) */}
          <button
            type="button"
            onClick={onApplyClick}
            className="w-full py-4 px-6 rounded-[10px] bg-[#C7F000] text-[#111315] font-['Space_Grotesk',sans-serif] font-extrabold text-sm sm:text-base tracking-wider hover:bg-[#D5FA10] active:scale-[0.99] transition-all cursor-pointer shadow-[0_0_30px_rgba(199,240,0,0.3)] flex items-center justify-center gap-2"
          >
            <span>SEE IF YOUR STUDIO QUALIFIES</span>
            <span className="text-lg leading-none">→</span>
          </button>

          {/* Bottom Footnote */}
          <p className="mt-4 text-center text-[11px] sm:text-xs text-[#8F969E] font-sans leading-relaxed">
            Conditional monthly commitment after testing. Client-funded advertising continues during any extension. No sales guarantee.
          </p>
        </div>

        {/* =========================================================================
            DETAILED GUARANTEE SPECIFICATION & BREAKDOWN
           ========================================================================= */}
        <div className="mt-14 sm:mt-18 max-w-3xl mx-auto space-y-8">
          {/* Criteria Breakdown */}
          <div className="p-6 sm:p-8 bg-[#16191C] border border-[#252A2E] rounded-[12px] space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#252A2E]">
              <span className="w-2 h-2 rounded-full bg-[#C7F000]" />
              <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-xs sm:text-sm tracking-wider uppercase text-[#F1F0EC]">
                HOW A VISIT IS COUNTED &amp; VERIFIED
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {criteria.map((c) => (
                <div key={c.title} className="p-4 bg-[#111315] border border-[#252A2E] rounded-[8px]">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#C7F000] uppercase mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C7F000]" />
                    <span>{c.title}</span>
                  </div>
                  <p className="text-xs text-[#B8BEC4] font-sans leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#8F969E] font-sans italic text-center pt-2">
              *Each unique qualified customer counts once per measurement period.
            </p>
          </div>

          {/* What If We Fall Short? */}
          <div className="p-6 sm:p-8 bg-[#16191C] border border-[#252A2E] rounded-[12px] space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#252A2E]">
              <span className="w-2 h-2 rounded-full bg-[#C7F000]" />
              <h4 className="font-['Manrope',sans-serif] font-bold text-lg sm:text-xl text-[#F1F0EC] tracking-tight">
                What If We Fall Short?
              </h4>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#B8BEC4] font-sans leading-relaxed">
              <p className="text-[#F1F0EC] font-medium">
                We'll extend your campaign for <strong className="text-[#C7F000]">15–30 additional days with no extra agency management fee</strong>, subject to agreed terms.
              </p>
              <p>
                The extension period is determined case by case. Client-funded advertising continues separately.
              </p>
              <p>
                The guarantee requires the agreed ad budget, appointment availability, timely studio responses and attendance confirmation.
              </p>
            </div>

            <div className="pt-3 border-t border-[#252A2E] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="font-['Space_Grotesk',sans-serif] font-bold text-sm sm:text-base text-[#F1F0EC]">
                Real Visits. Real Accountability.
              </div>
              <div className="text-[11px] text-[#8F969E] font-sans italic">
                *Guarantee subject to written terms. Showroom visits do not guarantee sales or revenue.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
