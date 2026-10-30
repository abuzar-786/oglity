import React, { useState } from 'react';
import { Check, X, CheckCircle2, XCircle, FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface OfferSectionProps {
  onApplyClick: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onApplyClick }) => {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false);

  const goodFitPoints = [
    'Established premium car detailing studio',
    'Preferably ₹5L+ monthly revenue',
    'Capacity for more premium customers',
    'Ready to invest consistently in growth',
  ];

  const notFitPoints = [
    'Just starting without established operations',
    'Looking only for cheap leads or quick fixes',
    'No capacity to serve additional customers',
    'Expecting guaranteed sales or overnight results',
  ];

  const guaranteeTerms = [
    {
      title: 'Studio-Specific Criteria',
      text: 'Prospects must meet agreed vehicle tier, package value and genuine PPF or ceramic coating interest.',
    },
    {
      title: 'Attribution to Oglity',
      text: "Every counted visit is generated, screened or re-engaged directly through Oglity's acquisition pipeline.",
    },
    {
      title: 'Physical In-Bay Verification',
      text: 'Must be physically attended, tracked inside CRM and confirmed by your studio advisors.',
    },
    {
      title: 'Unique Prospect Measurement',
      text: 'Each unique customer counts once per monthly measurement period; repeat visits are not double-counted.',
    },
    {
      title: '14-Day Testing Phase',
      text: 'An initial 14-day launch period to dial in local creative resonance and lead qualification before the monthly measurement period begins.',
    },
    {
      title: '15–30 Day Remedy Extension',
      text: 'If the 20-visit target is not achieved, campaigns extend for 15–30 days with no extra agency management fees. Duration is determined case by case and documented in writing.',
    },
    {
      title: 'Advertising Continuity',
      text: 'Client-funded advertising continues separately during any extension phase.',
    },
    {
      title: 'Required Studio Cooperation',
      text: 'Commitment requires maintaining agreed ad spend, providing open appointment bay availability, prompt responses to inquiries and timely attendance verification.',
    },
    {
      title: 'No Guaranteed Sales or Revenue',
      text: 'Oglity guarantees verified showroom footfall opportunities; final sales conversion, in-bay upselling, and craftsmanship remain the studio’s responsibility.',
    },
  ];

  return (
    <section
      id="offer"
      className="relative w-full bg-[#0A0C0E] text-[#F1F0EC] py-8 sm:py-12 lg:py-14 border-b border-[#1E2226] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Anchor for navigation link */}
      <div id="who-its-for" className="scroll-mt-20 sm:scroll-mt-24" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. SECTION HEADER (Compact & Scannable)
           ========================================================= */}
        <div className="max-w-2xl mx-auto text-center mb-4 sm:mb-6">
          <div className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#C7F000] uppercase mb-1 sm:mb-1.5">
            WHO WE WORK WITH
          </div>

          <h2 className="font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-tight text-[#F1F0EC]">
            Is Oglity Right for Your Studio?
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm md:text-base text-[#B8BEC4] max-w-xl mx-auto font-sans leading-relaxed">
            We partner with established car detailing studios ready to attract more premium customers.
          </p>
        </div>

        {/* =========================================================
            2. TWO-COLUMN COMPARISON CARDS: GOOD FIT vs NOT A FIT
               Desktop: Side-by-side | Mobile: Single-column stack
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5 lg:gap-4 mb-3.5 sm:mb-4.5">
          {/* LEFT: GOOD FIT CARD */}
          <div className="p-3.5 sm:p-4.5 bg-[#121A15] border border-[#1E2E23] rounded-[14px] shadow-sm flex flex-col justify-between">
            <div>
              {/* Card Title */}
              <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-[#1E2E23]">
                <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#C7F000] shrink-0" />
                <h3 className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base text-[#F1F0EC] tracking-tight">
                  Good Fit
                </h3>
              </div>

              {/* 4 Concise Bullet Points (No redundant sub-descriptions) */}
              <div className="space-y-2 sm:space-y-2.5">
                {goodFitPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C7F000] shrink-0 stroke-[2.5] mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-[#E1E6E2] leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: NOT A FIT CARD */}
          <div className="p-3.5 sm:p-4.5 bg-[#1A1416] border border-[#2F1F24] rounded-[14px] shadow-sm flex flex-col justify-between">
            <div>
              {/* Card Title */}
              <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-[#2F1F24]">
                <XCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#E57373] shrink-0" />
                <h3 className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base text-[#F1F0EC] tracking-tight">
                  Not a Fit
                </h3>
              </div>

              {/* 4 Concise Bullet Points (No redundant sub-descriptions) */}
              <div className="space-y-2 sm:space-y-2.5">
                {notFitPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E57373] shrink-0 stroke-[2.5] mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-[#E6DCDE] leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            3. THE OGLITY COMMITMENT CARD (Preserved in full)
           ========================================================= */}
        <div className="p-4 sm:p-5 lg:p-6 bg-[#111417] border border-[#252A2E] rounded-[16px] shadow-xl">
          {/* Header Tag */}
          <div className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase mb-2.5">
            THE OGLITY COMMITMENT
          </div>

          {/* Commitment Core: Large 20 Number + Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 pb-3.5 border-b border-[#252A2E]">
            <div className="font-['Space_Grotesk',sans-serif] font-extrabold text-5xl sm:text-6xl text-[#C7F000] leading-none shrink-0 tracking-tight">
              20
            </div>

            <div className="min-w-0">
              <h3 className="font-['Manrope',sans-serif] font-bold text-lg sm:text-xl md:text-2xl text-[#F1F0EC] tracking-tight leading-snug">
                Qualified Physical Showroom Visits
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#CAD0D6] mt-1 leading-normal">
                Our conditional monthly commitment begins after an initial 14-day testing period.
              </p>
              <p className="font-sans text-[11.5px] sm:text-xs text-[#8E969F] mt-1">
                Each visit must come through Oglity's system, meet your studio's agreed qualification criteria, and be physically attended, CRM-tracked and studio-confirmed.
              </p>
            </div>
          </div>

          {/* What if we fall short? */}
          <div className="pt-3 pb-1.5 text-xs sm:text-sm font-sans text-[#CAD0D6] leading-relaxed">
            <span className="font-bold text-[#F1F0EC]">What if we fall short? </span>
            <span>
              If the target is missed, a conditional 15–30-day campaign extension applies without extra agency fees. Client-funded advertising continues.
            </span>
          </div>

          {/* Prominent Lime CTA Button */}
          <button
            type="button"
            onClick={onApplyClick}
            className="w-full mt-3 sm:mt-3.5 py-3.5 sm:py-4 px-6 rounded-[10px] bg-[#C7F000] text-[#111315] font-['Space_Grotesk',sans-serif] font-extrabold text-xs sm:text-sm tracking-wider hover:bg-[#D5FA10] active:scale-[0.99] transition-all cursor-pointer shadow-[0_0_25px_rgba(199,240,0,0.25)] flex items-center justify-center gap-2"
          >
            <span>BOOK FREE LEAKAGE ANALYSIS</span>
            <span className="text-base leading-none">→</span>
          </button>

          {/* Mandatory Transparency Disclaimer */}
          <p className="mt-2.5 text-center text-xs sm:text-[13px] text-[#CAD0D6] font-sans leading-relaxed">
            Guarantee subject to agreed qualification, attendance verification, studio cooperation and written terms. Extension duration is determined case by case and documented in writing. No sales guarantee.
          </p>

          {/* =========================================================================
              ACCESSIBLE EXPANDABLE PANEL: Detailed Guarantee Terms
             ========================================================================= */}
          <div className="mt-3 pt-2.5 border-t border-[#252A2E]/80">
            <button
              type="button"
              onClick={() => setIsTermsExpanded(!isTermsExpanded)}
              className="w-full flex items-center justify-between text-xs font-mono font-bold tracking-wider text-[#C7F000] hover:text-[#D5FA10] py-1 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" />
                <span>HOW VISITS ARE COUNTED &amp; GUARANTEE TERMS</span>
              </div>
              {isTermsExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#C7F000]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#C7F000]" />
              )}
            </button>

            {isTermsExpanded && (
              <div className="mt-3 p-3.5 sm:p-4 bg-[#14171A] border border-[#252A2E] rounded-[8px] space-y-2.5 text-xs sm:text-[13px] font-sans text-[#CAD0D6] animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {guaranteeTerms.map((term) => (
                    <div key={term.title} className="p-2.5 bg-[#181C20] border border-[#252A2E] rounded-[6px]">
                      <div className="font-bold text-[#F1F0EC] mb-0.5 text-[11px] uppercase font-mono tracking-wider">
                        {term.title}
                      </div>
                      <p className="text-xs text-[#CAD0D6] leading-relaxed">
                        {term.text}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#B8BEC4] italic pt-1">
                  Full service agreement and measurement protocol signed in writing prior to campaign onboarding.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
