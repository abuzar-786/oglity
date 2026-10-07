import React from 'react';

interface MetricProps {
  value: string;
  label: string;
  sublabel?: string;
  technicalCode?: string;
  isLime?: boolean;
  className?: string;
}

export const Metric: React.FC<MetricProps> = ({
  value,
  label,
  sublabel,
  isLime = false,
  className = '',
}) => {
  return (
    <div
      className={`relative p-3 sm:p-5 lg:p-6 bg-[#16191C] border border-[#252A2E] rounded-[6px] flex flex-col justify-between hover:border-[#B8BEC4]/40 transition-colors ${className}`}
    >
      <div>
        <div
          className={`font-['Space_Grotesk',sans-serif] text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none ${
            isLime ? 'text-[#C7F000]' : 'text-[#F1F0EC]'
          }`}
        >
          {value}
        </div>
        <div className="mt-2 text-xs sm:text-sm lg:text-[14px] font-['Inter',sans-serif] font-bold tracking-wider text-[#F1F0EC] uppercase">
          {label}
        </div>
        {sublabel && (
          <div className="hidden sm:block mt-1 text-xs font-['Inter',sans-serif] text-[#B8BEC4] leading-relaxed">
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
};
