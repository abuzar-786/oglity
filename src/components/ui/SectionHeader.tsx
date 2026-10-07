import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  technicalCode?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  theme?: 'dark' | 'light';
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  technicalCode,
  title,
  subtitle,
  theme = 'dark',
  align = 'center',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`flex flex-col ${align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'} ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-3.5">
          <span className="w-1.5 h-1.5 rounded-none bg-[#C7F000] inline-block shrink-0" />
          <span
            className={`text-xs sm:text-[13px] font-['Plus_Jakarta_Sans',sans-serif] tracking-[0.16em] uppercase font-semibold ${
              isDark ? 'text-[#B8BEC4]' : 'text-[#252A2E]'
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-tight leading-[1.18] text-balance ${
          isDark ? 'text-[#F1F0EC]' : 'text-[#111315]'
        } text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[38px]`}
      >
        {title}
      </h2>

      {subtitle && (
        <div
          className={`mt-3 sm:mt-4 text-sm sm:text-base lg:text-[17px] leading-[1.6] max-w-2xl font-normal font-sans text-balance ${
            isDark ? 'text-[#B8BEC4]' : 'text-[#252A2E]/90'
          }`}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
};
