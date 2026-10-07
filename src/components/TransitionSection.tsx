import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

interface TransitionSectionProps {
  onQualifyClick: () => void;
}

export const TransitionSection: React.FC<TransitionSectionProps> = ({ onQualifyClick }) => {
  return (
    <section className="relative w-full bg-[#111315] py-16 sm:py-24 border-b border-[#252A2E]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Simple Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#252A2E]/70 border border-[#252A2E] rounded-[4px] mb-6">
          <span className="w-2 h-2 bg-[#C7F000]" />
          <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#C7F000] font-semibold">
            Quality Over Volume
          </span>
        </div>

        {/* Large Statement */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight leading-[1.14] text-[#F1F0EC] max-w-3xl mx-auto">
          The goal isn't more traffic.{' '}
          <span className="text-[#C7F000]">The goal is more showroom opportunities.</span>
        </h2>

        {/* Supporting Context */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#B8BEC4] max-w-2xl mx-auto font-sans leading-relaxed">
          When your acquisition pipeline is calibrated to filter out bargain shoppers and pre-qualify vehicle owners, every showroom inspection is primed for a ₹50K+ booking.
        </p>

        {/* Primary CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onQualifyClick}
            icon={<ArrowUpRight className="w-5 h-5 text-[#111315]" />}
            className="w-full sm:w-auto font-bold px-8 !h-12 sm:!h-14 text-xs sm:text-sm"
          >
            SEE IF YOUR STUDIO QUALIFIES →
          </Button>
        </div>

        {/* Under CTA qualification note */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-sans text-[#B8BEC4]/80">
          <ShieldCheck className="w-4 h-4 text-[#C7F000]" />
          <span>City exclusivity: Strictly 1–2 studios per metropolitan market</span>
        </div>
      </div>
    </section>
  );
};
