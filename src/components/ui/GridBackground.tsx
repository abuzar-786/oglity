import React from 'react';

interface GridBackgroundProps {
  theme?: 'dark' | 'light' | 'white';
  showCoordinates?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  theme = 'dark',
  className = '',
  children,
}) => {
  const isDark = theme === 'dark';
  const isWhite = theme === 'white';

  const bgClasses = isDark
    ? 'bg-[#111315] text-[#F1F0EC]'
    : isWhite
    ? 'bg-[#FFFFFF] text-[#111315]'
    : 'bg-[#F1F0EC] text-[#111315]';

  return (
    <div className={`relative w-full overflow-hidden ${bgClasses} ${className}`}>
      {/* Subtle precision grid - kept extremely delicate so page breathes */}
      {isDark ? (
        <div
          className="absolute inset-0 pointer-events-none tech-grid-dark opacity-35"
          aria-hidden="true"
        />
      ) : null}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
