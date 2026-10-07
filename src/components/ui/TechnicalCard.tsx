import React from 'react';

interface TechnicalCardProps {
  number?: string;
  title: string;
  description: string;
  category?: string;
  theme?: 'dark' | 'light';
  className?: string;
  children?: React.ReactNode;
}

export const TechnicalCard: React.FC<TechnicalCardProps> = ({
  number,
  title,
  description,
  theme = 'light',
  className = '',
  children,
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`relative p-5 sm:p-6 rounded-[6px] border transition-colors flex flex-col justify-between ${
        isDark
          ? 'bg-[#16191C] border-[#252A2E] text-[#F1F0EC] hover:border-[#B8BEC4]/40'
          : 'bg-[#FFFFFF] border-[#B8BEC4]/50 text-[#111315] hover:border-[#111315]/40 shadow-[0_2px_10px_rgba(17,19,21,0.02)]'
      } ${className}`}
    >
      <div>
        {/* Top header with step number */}
        {number && (
          <div className="pb-2.5 mb-3 border-b border-inherit/30 flex items-center justify-between">
            <span
              className={`font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold tracking-wider ${
                isDark ? 'text-[#C7F000]' : 'text-[#111315]'
              }`}
            >
              {number}
            </span>
          </div>
        )}

        {/* Title */}
        <h3
          className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold text-base sm:text-lg tracking-tight leading-snug mb-2 ${
            isDark ? 'text-[#F1F0EC]' : 'text-[#111315]'
          }`}
        >
          {title}
        </h3>

        {/* Explanation */}
        <p
          className={`text-xs sm:text-sm leading-relaxed font-sans ${
            isDark ? 'text-[#B8BEC4]' : 'text-[#252A2E]/80'
          }`}
        >
          {description}
        </p>
      </div>

      {children && <div className="mt-3 pt-2 border-t border-inherit/30">{children}</div>}
    </div>
  );
};
