import React, { useEffect } from 'react';
import { Calendar, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GridBackground } from './ui/GridBackground';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets: () => void;
    };
  }
}

export const FinalCTASection: React.FC = () => {
  useEffect(() => {
    // Dynamically mount Calendly external widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly && typeof window.Calendly.initInlineWidgets === 'function') {
        window.Calendly.initInlineWidgets();
      }
    };

    if (window.Calendly && typeof window.Calendly.initInlineWidgets === 'function') {
      window.Calendly.initInlineWidgets();
    }

    return () => {
      try {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      } catch {
        // ignore
      }
    };
  }, []);

  return (
    <section id="qualification" className="relative w-full bg-[#0E1012] py-20 sm:py-28 border-t border-[#252A2E]">
      <GridBackground theme="dark" showCoordinates={false} className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-widest text-[#C7F000] font-semibold uppercase">
              RESERVE YOUR PRIVATE CALL
            </span>
            <h2 className="mt-2 font-['Manrope',sans-serif] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F1F0EC] tracking-tight leading-tight">
              Book Your 30-Minute Growth Diagnostic
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#B8BEC4] font-sans leading-relaxed">
              Select your date &amp; time below to speak directly with Abuzar Gaur. We'll examine your territory, vehicle owner demand, and bay economics for ₹60K+ packages.
            </p>
          </div>

          {/* Diagnostic Context: 3 simple expectation steps */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div className="p-4 bg-[#111315] border border-[#252A2E] rounded-[4px]">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-xs text-[#C7F000] tracking-wider mb-1">
                  01 / Review numbers
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm text-[#F1F0EC] mb-1">
                  We review your numbers
                </h4>
                <p className="text-xs text-[#B8BEC4] font-sans leading-relaxed">
                  We'll understand your current acquisition, lead quality, and bay booking setup.
                </p>
              </div>

              <div className="p-4 bg-[#111315] border border-[#252A2E] rounded-[4px]">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-xs text-[#C7F000] tracking-wider mb-1">
                  02 / Find bottleneck
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm text-[#F1F0EC] mb-1">
                  We find the bottleneck
                </h4>
                <p className="text-xs text-[#B8BEC4] font-sans leading-relaxed">
                  We'll pinpoint if your challenge is unvetted traffic, speed-to-lead, or inspection closing.
                </p>
              </div>

              <div className="p-4 bg-[#111315] border border-[#252A2E] rounded-[4px]">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-xs text-[#C7F000] tracking-wider mb-1">
                  03 / Next step
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm text-[#F1F0EC] mb-1">
                  You get a clear next step
                </h4>
                <p className="text-xs text-[#B8BEC4] font-sans leading-relaxed">
                  If there's a strong territorial fit, we'll map how to deploy AQBC™ for 20+ bookings/mo.
                </p>
              </div>
            </div>
          </div>

          {/* MAIN FUNNEL CARD: CALENDLY EMBED */}
          <div
            id="qualification-funnel-card"
            className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-[#16191C] border border-[#252A2E] rounded-[6px] shadow-[0_12px_48px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            {/* Direct Header Information */}
            <div className="pb-5 border-b border-[#252A2E] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-left">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C7F000] animate-pulse" />
                  <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#C7F000] font-bold">
                    DIRECT CALENDAR SCHEDULER
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-xl sm:text-2xl text-[#F1F0EC] tracking-tight mt-1">
                  Select A Convenient Date &amp; Time
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#B8BEC4] font-sans leading-relaxed">
                  Real-time calendar slot reservation. You'll receive instant calendar and WhatsApp invitations.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2.5 px-3 py-1.5 bg-[#111315] border border-[#252A2E] rounded-[4px] text-xs font-mono text-[#F1F0EC]">
                <Clock className="w-3.5 h-3.5 text-[#C7F000]" />
                <span className="text-[#C7F000] font-bold">30 MIN</span>
                <span className="text-[#B8BEC4]">PRIVATE 1-ON-1</span>
              </div>
            </div>

            {/* Embedded Calendly Inline Widget */}
            <div className="mt-5 w-full rounded-[6px] overflow-hidden bg-[#111315] border border-[#252A2E]">
              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/abuzargour1188/30min?month=2026-10"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>

            {/* Reassurance Footer */}
            <div className="mt-6 pt-4 border-t border-[#252A2E] flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#B8BEC4]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C7F000]" />
                <span>Zero sales pressure • Strictly diagnostic conversation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C7F000]" />
                <span>1-on-1 with Abuzar Gaur</span>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
};
