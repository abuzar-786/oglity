import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'dark-outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) => {
  // 8px system padding with 2x horizontal-to-vertical ratio
  const sizeStyles = {
    sm: 'text-[13px] py-2 px-4 h-9 tracking-wider',
    md: 'text-[14px] py-3 px-6 h-12 tracking-wider',
    lg: 'text-[15px] py-4 px-8 h-14 tracking-wider',
  };

  const variantStyles = {
    primary:
      'bg-[#C7F000] text-[#111315] hover:bg-[#D4F820] active:bg-[#B7DD00] font-bold border border-[#C7F000] shadow-[0_1px_2px_rgba(0,0,0,0.2)]',
    secondary:
      'bg-transparent text-[#F1F0EC] border border-[#F1F0EC]/80 hover:bg-[#F1F0EC]/10 hover:border-[#F1F0EC] active:bg-[#F1F0EC]/20 font-medium',
    'dark-outline':
      'bg-transparent text-[#111315] border border-[#111315]/80 hover:bg-[#111315]/5 hover:border-[#111315] active:bg-[#111315]/10 font-medium',
    ghost:
      'bg-transparent text-[#B8BEC4] hover:text-[#F1F0EC] hover:bg-[#252A2E]/50 font-medium border border-transparent',
  };

  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-[4px] font-sans whitespace-nowrap transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7F000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111315] disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0 transition-transform duration-150 group-hover:-translate-x-1">{icon}</span>}
      <span className="leading-none">{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0 transition-transform duration-150 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
