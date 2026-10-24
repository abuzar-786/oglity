import React, { useState } from 'react';
import { ShieldCheck, Check, ChevronDown, ChevronUp, FileText } from 'lucide-react';

interface OfferSectionProps {
  onApplyClick: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onApplyClick }) => {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false);

  const eligibility = [
    'Established premium PPF or ceramic coating studio',
    'Preferably ₹5L+ monthly revenue',
    'Capacity for additional premium customers',
    'Ready to invest consistently in growth',
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
      text: 'If the 15-visit target is not achieved, campaigns extend for 15–30 days with no extra agency management fees. Duration is determined case by case and documented in writing.',
    },
    {
      title: 'Advertising Continuity',
      text: 'Client-funded advertising continues separately during any extension phase.',
    },
    {
      title: 'Required Studio Cooperation',
      text: 'Guarantee requires maintaining agreed ad spend, providing open appointment bay availability, prompt responses to inquiries and timely attendance verification.',
    },
    {
      title: 'No Guaranteed Sales or Revenue',
      text: 'Oglity guarantees verified showroom footfall opportunities; final sales conversion, in-bay upselling, and craftsmanship remain the studio’s responsibility.',
    },
  ];

  return (
    <section
      id="offer"
      className="relative w-full bg-[#0A0C0E] text-[#F1F0EC] py-12 sm:py-16 lg:py-20 border-b border-[#1E2226] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16191C] border border-[#252A2E] rounded-[4px] mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C7F000]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
              THE OGLITY COMMITMENT
            </span>
          </div>

          <h2 className="font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.14] text-[#F1F0EC]">
            15 Qualified Showroom Visits.{' '}
            <span className="text-[#C7F000]">Not Just Bookings.</span>
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-[#CAD0D6] max-w-xl mx-auto font-sans leading-relaxed">
            Our conditional monthly commitment begins after an initial 14-day testing phase.
          </p>
        </div>

        {/* =========================================================================
            COMPACT MASTER CARD
           ========================================================================= */}
        <div className="relative p-5 sm:p-7 bg-[#0F1215] border border-[#252A2E] rounded-[16px] shadow-2xl">
          {/* Two Balanced Content Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {/* LEFT PANEL — THE GUARANTEE */}
            <div className="p-5 bg-[#16191D] border border-[#262C32] rounded-[12px] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase block">
                  THE GUARANTEE
                </span>

                <div className="font-['Space_Grotesk',sans-serif] font-extrabold text-5xl sm:text-6xl text-[#C7F000] leading-none tracking-tight mt-2">
                  15
                </div>

                <h3 className="font-['Manrope',sans-serif] font-bold text-base sm:text-lg text-[#F1F0EC] tracking-tight mt-2.5">
                  Qualified Physical Visits
                </h3>

                <p className="mt-2 text-sm text-[#CAD0D6] font-sans leading-relaxed">
                  CRM-tracked, studio-confirmed, and attributable to Oglity.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL — WHO QUALIFIES? (Integrated anchor for navigation) */}
            <div
              id="who-its-for"
              className="p-5 bg-[#16191D] border border-[#262C32] rounded-[12px] flex flex-col justify-between scroll-mt-24"
            >
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase block mb-3">
                  WHO QUALIFIES?
                </span>

                <div className="space-y-2.5 text-sm text-[#F1F0EC] font-sans">
                  {eligibility.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#C7F000] shrink-0 stroke-[2.5] mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clean "Not a fit for" block */}
              <div className="mt-4 pt-3 border-t border-[#262C32] text-xs sm:text-sm text-[#CAD0D6] font-sans flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-1.5 leading-relaxed">
                <span className="font-bold text-[#F1F0EC] shrink-0">Not a fit for:</span>
                <span>Cheap-lead seekers or businesses expecting guaranteed sales.</span>
              </div>
            </div>
          </div>

          {/* ONE COMPACT SHORTFALL-REMEDY STRIP */}
          <div className="mt-3.5 sm:mt-4 p-4 bg-[#16191D] border border-[#262C32] rounded-[10px]">
            <h4 className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base text-[#F1F0EC] tracking-tight">
              What if we fall short?
            </h4>
            <p className="mt-1.5 text-sm text-[#CAD0D6] font-sans leading-relaxed">
              We extend campaigns for 15–30 additional days without extra agency management fees, subject to written terms. Client-funded advertising continues. The duration is decided case by case and documented in writing.
            </p>
          </div>

          {/* ONE PROMINENT LIME-GREEN CTA */}
          <button
            type="button"
            onClick={onApplyClick}
            className="w-full mt-4 sm:mt-5 py-3.5 sm:py-4 px-6 rounded-[10px] bg-[#C7F000] text-[#111315] font-['Space_Grotesk',sans-serif] font-extrabold text-xs sm:text-sm tracking-wider hover:bg-[#D5FA10] active:scale-[0.99] transition-all cursor-pointer shadow-[0_0_25px_rgba(199,240,0,0.25)] flex items-center justify-center gap-2"
          >
            <span>SEE IF YOUR STUDIO QUALIFIES</span>
            <span className="text-base leading-none">→</span>
          </button>

          {/* Short Readable Conditions Note */}
          <p className="mt-3 text-center text-xs sm:text-[13px] text-[#B8BEC4] font-sans leading-relaxed">
            Each counted visit must be a unique, qualified PPF or coating prospect attributable to Oglity, physically attended, CRM-tracked and studio-confirmed. Guarantee requires agreed ad spend, available appointment slots, timely studio responses and attendance confirmation. No sales or revenue guarantee.
          </p>

          {/* =========================================================================
              ACCESSIBLE EXPANDABLE PANEL: "How Visits Are Counted & Guarantee Terms"
             ========================================================================= */}
          <div className="mt-4 pt-3.5 border-t border-[#252A2E]">
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
              <div className="mt-3 p-4 bg-[#14171A] border border-[#252A2E] rounded-[8px] space-y-2.5 text-xs sm:text-[13px] font-sans text-[#CAD0D6] animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
