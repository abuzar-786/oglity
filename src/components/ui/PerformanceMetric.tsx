import React from 'react';

interface PerformanceMetricProps {
  value: string;
  label: string;
  context?: string;
  isLime?: boolean;
  className?: string;
}

export const PerformanceMetric: React.FC<PerformanceMetricProps> = ({
  value,
  label,
  context,
  isLime = false,
  className = '',
}) => {
  return (
    <div
      className={`relative p-5 sm:p-7 lg:p-8 bg-[#16191C] border border-[#252A2E] rounded-[6px] flex flex-col justify-between hover:border-[#B8BEC4]/40 transition-colors ${className}`}
    >
      <div>
        <div
          className={`font-['Plus_Jakarta_Sans',sans-serif] font-extrabold tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl ${
            isLime ? 'text-[#C7F000]' : 'text-[#F1F0EC]'
          }`}
        >
          {value}
        </div>

        <div className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] font-bold text-base sm:text-lg tracking-tight text-[#F1F0EC]">
          {label}
        </div>

        {context && (
          <div className="mt-1.5 text-xs sm:text-sm font-sans text-[#B8BEC4] leading-relaxed">
            {context}
          </div>
        )}
      </div>
    </div>
  );
};
