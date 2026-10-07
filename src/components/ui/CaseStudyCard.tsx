import React from 'react';

interface CaseStudyCardProps {
  client: string;
  serviceCategory: string;
  resultData: string;
  marketContext?: string;
  className?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  client,
  serviceCategory,
  resultData,
  marketContext,
  className = '',
}) => {
  return (
    <div
      className={`relative p-6 sm:p-7 bg-[#16191C] border border-[#252A2E] rounded-[6px] flex flex-col justify-between hover:border-[#B8BEC4]/40 transition-colors select-none ${className}`}
    >
      <div>
        {/* Header with Client Name & Verification Badge */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-xl sm:text-2xl text-[#F1F0EC] tracking-tight">
            {client}
          </h4>
          <span className="px-2 py-0.5 rounded-[2px] bg-[#C7F000]/10 border border-[#C7F000]/30 text-[10px] font-mono font-bold text-[#C7F000] shrink-0">
            ✓ 15+ OPS
          </span>
        </div>

        {/* Clean key details inside card */}
        <div className="space-y-2 font-sans text-xs">
          <div className="flex items-center justify-between py-1 border-b border-[#252A2E]">
            <span className="text-[#B8BEC4]">Focus:</span>
            <span className="text-[#F1F0EC] font-semibold">{serviceCategory}</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-[#252A2E]">
            <span className="text-[#B8BEC4]">Key Outcome:</span>
            <span className="text-[#C7F000] font-bold">{resultData}</span>
          </div>
        </div>

        {marketContext && (
          <div className="mt-3 text-xs sm:text-[13px] text-[#B8BEC4] font-sans leading-relaxed">
            {marketContext}
          </div>
        )}
      </div>
    </div>
  );
};
