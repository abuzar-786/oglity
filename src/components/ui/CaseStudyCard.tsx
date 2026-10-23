import React from 'react';

export interface CaseStudyCardProps {
  client: string;
  category?: string;
  serviceCategory?: string;
  leadsTracked?: string;
  studioVisits?: string;
  adSpend?: string;
  costPerLead?: string;
  resultData?: string;
  marketContext?: string;
  className?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  client,
  category,
  serviceCategory,
  leadsTracked = '378',
  studioVisits = '108',
  adSpend = '$5,481.00',
  costPerLead = '$14.50',
  marketContext,
  className = '',
}) => {
  const displayCategory = category || serviceCategory || 'CERAMIC TINTING';

  return (
    <div
      className={`relative p-4 sm:p-5 md:p-6 bg-[#0C0D0E] border border-[#222429] hover:border-[#F5A623]/50 rounded-[12px] sm:rounded-[14px] flex flex-col justify-between transition-all select-none shadow-[0_8px_30px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div>
        {/* Header with Client Name & Category */}
        <div className="mb-2 sm:mb-3">
          <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-base sm:text-lg md:text-xl text-white tracking-tight leading-tight truncate">
            {client}
          </h4>
          <div className="text-[10px] sm:text-xs font-bold text-[#F5A623] tracking-wider uppercase mt-0.5">
            {displayCategory}
          </div>
        </div>

        {/* Structured Metrics Table */}
        <div className="divide-y divide-[#202327]">
          {/* Row 1: Leads Tracked */}
          <div className="flex items-center justify-between py-1.5 sm:py-2">
            <span className="text-[#8E939B] text-xs sm:text-[13px] font-normal">
              Leads Tracked
            </span>
            <span className="text-white font-bold text-sm sm:text-base tracking-tight font-sans">
              {leadsTracked}
            </span>
          </div>

          {/* Row 2: Studio Visits */}
          <div className="flex items-center justify-between py-1.5 sm:py-2">
            <span className="text-[#8E939B] text-xs sm:text-[13px] font-normal">
              Studio Visits
            </span>
            <span className="text-white font-bold text-sm sm:text-base tracking-tight font-sans">
              {studioVisits}
            </span>
          </div>

          {/* Row 3: Ad Spend */}
          <div className="flex items-center justify-between py-1.5 sm:py-2">
            <span className="text-[#8E939B] text-xs sm:text-[13px] font-normal">
              Ad Spend
            </span>
            <span className="text-white font-bold text-sm sm:text-base tracking-tight font-sans">
              {adSpend}
            </span>
          </div>

          {/* Row 4: Cost Per Lead */}
          <div className="flex items-center justify-between pt-1.5 sm:pt-2">
            <span className="text-[#8E939B] text-xs sm:text-[13px] font-normal">
              Cost Per Lead
            </span>
            <span className="text-[#F5A623] font-bold text-sm sm:text-base tracking-tight font-sans">
              {costPerLead}
            </span>
          </div>
        </div>
      </div>

      {/* Operator Insight / Filter Note Below */}
      {marketContext && (
        <div className="mt-2.5 pt-2 sm:mt-3 sm:pt-2.5 border-t border-[#202327]">
          <p className="text-[11px] sm:text-xs text-[#A1A7B0] font-sans leading-snug line-clamp-2">
            {marketContext}
          </p>
        </div>
      )}
    </div>
  );
};
