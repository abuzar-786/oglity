import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';

interface OfferSectionProps {
  onApplyClick: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onApplyClick }) => {
  return (
    <section
      id="offer"
      className="relative w-full bg-[#111315] text-[#F1F0EC] py-20 sm:py-28 border-b border-[#252A2E] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeader
            theme="dark"
            align="center"
            eyebrow="What you get"
            title="15 qualified inspection opportunities / month."
            subtitle={
              <p className="text-sm sm:text-base lg:text-[17px] text-[#B8BEC4] leading-relaxed font-sans">
                A complete acquisition infrastructure turning local car owners into confirmed showroom appointments.
              </p>
            }
          />
        </div>

        {/* Performance Commitment & Risk Reversal Card */}
        <div className="p-6 sm:p-8 bg-[#16191C] border border-[#252A2E] rounded-[6px] max-w-4xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#C7F000]" />
              <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider font-bold text-[#C7F000] uppercase">
                PERFORMANCE COMMITMENT
              </span>
            </div>

            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-2xl sm:text-3xl text-[#F1F0EC] tracking-tight mb-3">
              We deliver results or keep working for free.
            </h3>

            <p className="text-sm sm:text-base text-[#B8BEC4] font-sans leading-relaxed">
              Before launch, we agree together on the target number of qualified high-ticket inspection opportunities for your studio. If we don't hit the agreed target, we continue operating the pipeline at zero agency fee until the target is met.
            </p>

            <div className="mt-5 p-4 bg-[#111315] border border-[#252A2E] rounded-[4px] text-xs font-sans text-[#B8BEC4] space-y-1">
              <div className="font-semibold text-[#F1F0EC] text-sm">
                15 qualified inspection opportunities / month
              </div>
              <p className="text-[#B8BEC4]/80">
                A qualified opportunity is a prospect who meets the agreed criteria and books an inspection or consultation with your studio.
              </p>
            </div>
          </div>
        </div>

        {/* OFFER CTA BLOCK */}
        <div className="mt-8 p-6 sm:p-8 bg-[#16191C] border border-[#C7F000]/30 rounded-[6px] max-w-4xl mx-auto text-center">
          <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-xl sm:text-2xl text-[#F1F0EC] tracking-tight">
            WANT TO SEE IF THE NUMBERS MAKE SENSE FOR YOUR STUDIO?
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-[#B8BEC4] font-sans max-w-xl mx-auto leading-relaxed">
            Before you invest, we'll look at your current acquisition numbers and determine whether the AQBC™ system is a fit.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-2">
            <Button
              variant="primary"
              size="lg"
              onClick={onApplyClick}
              icon={<ArrowUpRight className="w-5 h-5 text-[#111315]" />}
              className="w-full sm:w-auto font-bold px-8 !h-12 sm:!h-14 text-xs sm:text-sm"
            >
              CHECK MY STUDIO →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
