import React from 'react';

interface ComparisonRowProps {
  traditional: string;
  aqbc: string;
  index: number;
  isLast?: boolean;
}

export const ComparisonRow: React.FC<ComparisonRowProps> = ({
  traditional,
  aqbc,
  index,
  isLast = false,
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 text-xs sm:text-sm font-sans border-x border-b border-[#B8BEC4]/60 ${
        isLast ? 'rounded-b-[6px]' : ''
      }`}
    >
      {/* Traditional Agency side */}
      <div className="p-3.5 sm:p-4 bg-[#FFFFFF] border-b md:border-b-0 md:border-r border-[#B8BEC4]/40 text-[#252A2E]/80 flex items-center justify-between">
        <span className="leading-snug">{traditional}</span>
        <span className="text-[#252A2E]/40 font-medium text-xs ml-2">✕</span>
      </div>

      {/* Oglity AQBC side */}
      <div className="p-3.5 sm:p-4 bg-[#111315] text-[#F1F0EC] flex items-center justify-between font-medium">
        <span className="leading-snug">{aqbc}</span>
        <span className="text-[#C7F000] font-bold text-xs ml-2">✓</span>
      </div>
    </div>
  );
};
