import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

interface StickyConversionBarProps {
  onBookClick: () => void;
}

export const StickyConversionBar: React.FC<StickyConversionBarProps> = ({ onBookClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (e.g. 450px) and hide when qualification section is visible
      const scrollPos = window.scrollY;
      const qualEl = document.getElementById('qualification');
      let qualVisible = false;

      if (qualEl) {
        const rect = qualEl.getBoundingClientRect();
        // Hide if qualification section is currently inside viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          qualVisible = true;
        }
      }

      setIsVisible(scrollPos > 450 && !qualVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Sticky Qualification CTA"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#111315]/95 backdrop-blur-md border-t border-[#252A2E] py-2.5 px-4 shadow-[0_-8px_30px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom duration-300 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="w-full flex items-center justify-between gap-3">
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
            <span className="text-xs font-bold text-[#F1F0EC] truncate">15 Opportunities / Mo</span>
          </div>
          <span className="text-[10px] text-[#B8BEC4] truncate">15-min qualification call</span>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={onBookClick}
          icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#111315]" />}
          className="!h-9 !py-1 !px-3.5 text-[11px] font-bold shrink-0 tracking-tight"
        >
          SEE IF YOUR STUDIO QUALIFIES →
        </Button>
      </div>
    </aside>
  );
};
