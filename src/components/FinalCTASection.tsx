import React, { useEffect, useRef } from 'react';
import { Search, Target, TrendingUp, Calculator, GitFork, Calendar, Clock } from 'lucide-react';
import { GridBackground } from './ui/GridBackground';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets: () => void;
    };
    fbq?: (action: string, eventName: string, params?: Record<string, any>) => void;
  }
}

export const FinalCTASection: React.FC = () => {
  const hasTrackedBookingRef = useRef(false);

  useEffect(() => {
    // 1. Listen for Calendly's postMessage events
    const handleCalendlyMessage = (e: MessageEvent) => {
      // Verify origin is https://calendly.com
      if (e.origin !== 'https://calendly.com') {
        return;
      }

      let data = e.data;
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }

      if (!data || typeof data !== 'object') {
        return;
      }

      // Fire only when appointment is confirmed (calendly.event_scheduled)
      if (data.event === 'calendly.event_scheduled') {
        if (hasTrackedBookingRef.current) {
          console.log('[Meta Pixel] Calendly booking already tracked during this session.');
          return;
        }

        hasTrackedBookingRef.current = true;
        console.log('[Meta Pixel] Confirmed Calendly booking detected (calendly.event_scheduled):', data);

        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Schedule');
          window.fbq('track', 'CompleteRegistration');
          console.log('[Meta Pixel] Successfully fired: fbq("track", "Schedule") & fbq("track", "CompleteRegistration")');
        } else {
          console.warn('[Meta Pixel] window.fbq is not available on window object.');
        }
      }
    };

    window.addEventListener('message', handleCalendlyMessage);

    // 2. Dynamically mount Calendly external widget script
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
      window.removeEventListener('message', handleCalendlyMessage);
      try {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      } catch {
        // ignore
      }
    };
  }, []);

  const analysisElements = [
    {
      num: '01',
      title: '3 Competitor Insights',
      desc: 'What successful competitors are doing that your studio may be missing.',
      icon: Search,
    },
    {
      num: '02',
      title: '3 Business Gaps',
      desc: 'Mistakes in your current process that could be costing you customers.',
      icon: Target,
    },
    {
      num: '03',
      title: '3 Growth Moves',
      desc: 'Practical improvements to help you work towards your revenue target.',
      icon: TrendingUp,
    },
    {
      num: '04',
      title: 'ROI Calculator',
      desc: "Understand potential returns based on your studio's numbers and clear assumptions.",
      icon: Calculator,
    },
    {
      num: '05',
      title: 'Money Map',
      desc: 'See how enquiries move into showroom visits, sales and revenue—and where opportunities may be lost.',
      icon: GitFork,
    },
  ];

  return (
    <section
      id="qualification"
      className="relative w-full bg-[#0A0C0E] py-10 sm:py-14 lg:py-18 border-t border-[#1E2226] scroll-mt-20 sm:scroll-mt-24"
    >
      <GridBackground theme="dark" showCoordinates={false} className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* =========================================================
              1. SECTION HEADER
             ========================================================= */}
          <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16191C] border border-[#252A2E] rounded-[4px] mb-2 sm:mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
                FREE PERSONALIZED STUDIO LEAKAGE ANALYSIS
              </span>
            </div>

            <h2 className="font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-tight text-[#F1F0EC]">
              Find Out Where Your Studio Is Losing Potential Customers.
            </h2>

            <div className="mt-2.5 text-xs sm:text-sm md:text-base text-[#CAD0D6] font-sans leading-relaxed space-y-1">
              <p>Getting enquiries but struggling to turn them into showroom visits?</p>
              <p className="text-[#A6ADB5]">
                Book a free 30-minute call to uncover gaps in your marketing, follow-ups and booking process.
              </p>
            </div>
          </div>

          {/* =========================================================
              2. FIVE DELIVERABLES ANALYSIS PANEL
             ========================================================= */}
          <div className="mb-6 sm:mb-8">
            <div className="text-center mb-3">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#C7F000] uppercase">
                What We'll Review for Your Studio
              </span>
            </div>

            <div className="bg-[#121714] border border-[#222E25] rounded-[16px] overflow-hidden shadow-xl divide-y divide-[#222E25]/80">
              {analysisElements.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="p-3.5 sm:p-4 lg:p-4.5 flex items-center justify-between gap-3 sm:gap-4 transition-colors hover:bg-[#161D19]/60"
                  >
                    <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#C7F000] shrink-0 mt-0.5 sm:mt-0 w-5">
                        {item.num}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base text-[#F1F0EC] tracking-tight leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[13.5px] sm:text-sm text-[#CAD0D6] font-sans leading-snug sm:leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-[8px] bg-[#18221B] border border-[#263729] flex items-center justify-center shrink-0 text-[#C7F000] ml-1">
                      <Icon className="w-4 h-4 text-[#C7F000]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =========================================================
              3. CALENDLY SCHEDULER CONTAINER
             ========================================================= */}
          <div
            id="qualification-funnel-card"
            className="p-3.5 sm:p-6 lg:p-7 bg-[#0F1215] border border-[#252A2E] rounded-[16px] shadow-2xl transition-all duration-300"
          >
            {/* Header: Closing statement & Calendar instruction */}
            <div className="pb-3.5 mb-3.5 border-b border-[#252A2E] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-left">
              <div>
                <h3 className="font-['Manrope',sans-serif] font-bold text-base sm:text-lg text-[#F1F0EC] tracking-tight">
                  Ready to Find Out What's Holding Your Studio Back?
                </h3>
                <p className="text-xs sm:text-sm text-[#CAD0D6] font-sans mt-0.5">
                  Choose a convenient time below.
                </p>
              </div>

              <div className="self-start sm:self-auto flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#16191D] border border-[#262C32] rounded-[6px] text-xs font-mono text-[#F1F0EC]">
                <Clock className="w-3.5 h-3.5 text-[#C7F000]" />
                <span className="text-[#C7F000] font-bold">30 MIN</span>
                <span className="text-[#A6ADB5]">SUITABLE STUDIOS ONLY</span>
              </div>
            </div>

            {/* Embedded Calendly Inline Widget */}
            <div className="w-full rounded-[10px] overflow-hidden bg-[#111315] border border-[#252A2E]">
              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/abuzargour1188/30min"
                style={{ minWidth: '100%', height: '780px' }}
              />
            </div>

            {/* Microcopy & Operational Accuracy Note */}
            <div className="mt-3.5 pt-3 border-t border-[#252A2E] text-center">
              <p className="text-xs sm:text-[13px] text-[#CAD0D6] font-sans leading-relaxed">
                Free 30-minute studio fit call. Personalized 3-3-3 analysis, ROI Calculator and Money Map are prepared for suitable studios after reviewing their booking details. Estimates depend on available business data.
              </p>
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
};
