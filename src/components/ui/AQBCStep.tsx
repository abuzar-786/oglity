import React from 'react';

interface AQBCStepProps {
  number: string;
  title: string;
  tagline: string;
  mechanism: string;
  isLast?: boolean;
}

export const AQBCStep: React.FC<AQBCStepProps> = ({
  number,
  title,
  tagline,
  mechanism,
  isLast = false,
}) => {
  return (
    <div className="relative flex-1 flex flex-col">
      {/* Step card container */}
      <div className="relative p-5 sm:p-6 rounded-[6px] border border-[#252A2E] bg-[#111315] hover:border-[#B8BEC4]/40 transition-colors flex flex-col justify-between h-full">
        <div>
          {/* Header row: Number */}
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#252A2E]">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-base sm:text-lg font-bold tracking-tight leading-none text-[#F1F0EC]">
              {number}
            </span>
            <span className="w-1.5 h-1.5 bg-[#C7F000]" />
          </div>

          {/* Step Title */}
          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-base sm:text-lg text-[#F1F0EC] tracking-tight uppercase mb-2">
            {title}
          </h3>

          {/* Plain english explanation */}
          <p className="text-xs sm:text-[13px] sm:text-sm text-[#F1F0EC]/90 font-sans leading-relaxed mb-3">
            {tagline}
          </p>

          {/* Mechanism subtitle */}
          <div className="pt-2.5 border-t border-[#252A2E]/60 text-[11px] sm:text-xs font-['Plus_Jakarta_Sans',sans-serif] text-[#B8BEC4] leading-normal">
            {mechanism}
          </div>
        </div>
      </div>

      {/* Desktop connector arrow */}
      {!isLast && (
        <div
          className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center bg-[#111315] border border-[#252A2E] rounded-full text-[#B8BEC4]"
          aria-hidden="true"
        >
          <span className="text-[11px] font-bold leading-none">→</span>
        </div>
      )}
    </div>
  );
};
