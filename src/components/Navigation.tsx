import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';

interface NavigationProps {
  onOpenAuditModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenAuditModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'System', href: '#system' },
    { label: 'Results', href: '#results' },
    { label: "Who it's for", href: '#who-its-for' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#111315]/95 backdrop-blur-md border-b transition-colors duration-200 ${
        scrolled ? 'border-[#252A2E]' : 'border-[#252A2E]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Left: Oglity Logo */}
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-2.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C7F000]"
          aria-label="Oglity Home"
        >
          <img
            src="/oglity-logo-icon.png"
            alt="Oglity Icon"
            className="h-7.5 sm:h-9 w-auto object-contain transition-opacity duration-150 group-hover:opacity-90"
          />
          <img
            src="/oglity-logo-name.png"
            alt="Oglity"
            className="h-6 sm:h-7.5 w-auto object-contain transition-opacity duration-150 group-hover:opacity-90"
          />
          <div className="hidden sm:flex flex-col border-l border-[#252A2E] pl-3 py-0.5">
            <span className="text-[10px] font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#B8BEC4]/80 leading-tight">
              Customer acquisition
            </span>
          </div>
        </a>

        {/* Center/Right Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] font-medium tracking-[0.14em] text-[#B8BEC4] hover:text-[#F1F0EC] transition-colors relative py-1 focus-visible:outline-none focus-visible:text-[#C7F000]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Button
            variant="primary"
            size="md"
            onClick={onOpenAuditModal}
            icon={<ArrowUpRight className="w-4 h-4 text-[#111315]" />}
            className="font-bold tracking-tight text-xs sm:text-[13px]"
          >
            SEE IF YOUR STUDIO QUALIFIES →
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#F1F0EC] hover:text-[#C7F000] border border-[#252A2E] rounded-[4px] bg-[#111315] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C7F000]"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-18 bottom-0 bg-[#111315] border-t border-[#252A2E] p-6 flex flex-col justify-between z-50 overflow-y-auto">
          <div className="space-y-6 pt-4">
            <div className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#B8BEC4]/70 border-b border-[#252A2E] pb-2">
              Menu
            </div>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-wider text-[#F1F0EC] hover:text-[#C7F000] py-2 border-b border-[#252A2E]/50 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] text-[#B8BEC4]/50">0{navItems.indexOf(item) + 1}</span>
                </a>
              ))}
            </div>

            <div className="p-4 bg-[#252A2E]/40 border border-[#252A2E] rounded-[4px] text-xs font-['Plus_Jakarta_Sans',sans-serif] text-[#B8BEC4] space-y-1">
              <div>Focus: PPF &amp; Ceramic (₹50K+)</div>
              <div>Specialty: High-ticket showroom bookings</div>
            </div>
          </div>

          <div className="pt-8 pb-6 border-t border-[#252A2E]">
            <Button
              variant="primary"
              size="lg"
              className="w-full font-bold text-xs"
              icon={<ArrowUpRight className="w-4 h-4 text-[#111315]" />}
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuditModal();
              }}
            >
              SEE IF YOUR STUDIO QUALIFIES →
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
