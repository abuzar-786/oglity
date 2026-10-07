import React from 'react';
import { Check, X, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';

interface WhoItsForSectionProps {
  onApplyClick?: () => void;
}

export const WhoItsForSection: React.FC<WhoItsForSectionProps> = ({ onApplyClick }) => {
  const builtFor = [
    'Premium PPF studios',
    'Ceramic coating studios',
    'PPF + ceramic combined studios',
    '₹50K+ average package value',
    'Studios with bay capacity for additional cars',
    'Owners serious about predictable acquisition',
  ];

  const notFor = [
    'Lowest-price discount operators',
    'Studios with no additional bay capacity',
    'Businesses looking only for cheap, unvetted leads',
    'Owners unwilling to follow up quickly on bookings',
    'Studios expecting ads alone to close sales without inspection',
  ];

  return (
    <section
      id="who-its-for"
      className="relative w-full bg-[#F1F0EC] text-[#111315] py-20 sm:py-28 border-b border-[#B8BEC4]/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeader
            theme="light"
            align="center"
            eyebrow="Who this is for"
            title="Is your studio a good fit?"
            subtitle={
              <p className="text-sm sm:text-base lg:text-[17px] text-[#252A2E]/80 font-sans leading-relaxed">
                We work exclusively with premium automotive studios with bay capacity and high standards for luxury vehicle owners.
              </p>
            }
          />
        </div>

        {/* Two-Column Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* LEFT — BUILT FOR */}
          <div className="p-6 sm:p-8 bg-[#FFFFFF] border-2 border-[#111315] rounded-[6px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#B8BEC4]/40">
                <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider font-bold text-[#111315]">
                  Ideal Partner Criteria
                </span>
                <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#111315] bg-[#C7F000] px-2.5 py-0.5 rounded-[2px] font-bold">
                  Recommended
                </span>
              </div>

              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-2xl text-[#111315] tracking-tight mb-5">
                Built for:
              </h3>

              <ul className="space-y-3">
                {builtFor.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm sm:text-[15px] font-medium text-[#111315] font-sans">
                    <div className="w-5 h-5 rounded-[3px] bg-[#111315] flex items-center justify-center text-[#C7F000] shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#B8BEC4]/40 flex items-center justify-between text-xs font-sans text-[#252A2E]/70">
              <span>Package floor: <strong>₹50,000+</strong></span>
              <span className="font-semibold text-[#111315]">Requires Bay Capacity</span>
            </div>
          </div>

          {/* RIGHT — NOT FOR */}
          <div className="p-6 sm:p-8 bg-[#FFFFFF]/60 border border-[#B8BEC4] rounded-[6px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#B8BEC4]/40">
                <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider font-bold text-[#252A2E]/70">
                  Non-Qualified Criteria
                </span>
                <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#252A2E]/70 bg-[#252A2E]/10 px-2.5 py-0.5 rounded-[2px] font-medium">
                  Please Note
                </span>
              </div>

              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-2xl text-[#252A2E]/80 tracking-tight mb-5">
                Not for:
              </h3>

              <ul className="space-y-3">
                {notFor.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm sm:text-[15px] text-[#252A2E]/80 font-sans">
                    <div className="w-5 h-5 rounded-[3px] bg-[#252A2E]/10 flex items-center justify-center text-[#252A2E] shrink-0">
                      <X className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#B8BEC4]/40 text-xs font-sans text-[#252A2E]/60">
              We respect your time and only partner when there is clear potential for results.
            </div>
          </div>
        </div>

        {/* Territory Exclusivity Callout */}
        {onApplyClick && (
          <div className="mt-8 p-6 bg-[#FFFFFF] border border-[#B8BEC4]/80 rounded-[6px] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-wider text-[#111315]">
                TERRITORY EXCLUSIVITY NOTICE
              </div>
              <p className="text-xs sm:text-sm text-[#252A2E]/80 font-sans mt-0.5">
                To prevent internal client competition, we onboard a maximum of 1–2 studios per metropolitan area.
              </p>
            </div>
            <Button
              variant="primary"
              size="md"
              onClick={onApplyClick}
              icon={<ArrowUpRight className="w-4 h-4 text-[#111315]" />}
              className="shrink-0 w-full sm:w-auto font-bold text-xs sm:text-[13px]"
            >
              SEE IF YOUR STUDIO QUALIFIES →
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
