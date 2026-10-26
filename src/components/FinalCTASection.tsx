import React, { useEffect, useRef } from 'react';
import { Search, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
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
      // Ignores date/time selection, viewing form, or opening widget
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

  const discussionPoints = [
    {
      num: '01',
      title: 'Your Current Challenges',
      desc: 'Where are you losing potential customers?',
      icon: Search,
    },
    {
      num: '02',
      title: 'Your Growth Opportunities',
      desc: 'How could qualification, follow-ups and bookings improve?',
      icon: TrendingUp,
    },
    {
      num: '03',
      title: 'Your Next Step',
      desc: "Whether Oglity's AQBC™ System is right for your studio.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="qualification"
      className="relative w-full bg-[#0A0C0E] py-12 sm:py-18 lg:py-22 border-t border-[#1E2226] scroll-mt-20 sm:scroll-mt-24"
    >
      <GridBackground theme="dark" showCoordinates={false} className="relative">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-9">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16191C] border border-[#252A2E] rounded-[4px] mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
                LET'S TALK ABOUT YOUR STUDIO
              </span>
            </div>

            <h2 className="font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.14] text-[#F1F0EC]">
              Book Your 30-Minute Studio Acquisition Call.
            </h2>

            <p className="mt-2 text-sm sm:text-base text-[#CAD0D6] font-sans leading-relaxed">
              Let's find out what's stopping serious car owners from becoming actual showroom visitors.
            </p>

            <p className="mt-2.5 text-xs sm:text-sm text-[#A6ADB5] font-sans">
              On this free, no-obligation call with Abuzar Gaur, we'll discuss:
            </p>
          </div>

          {/* MOBILE ONLY: One compact panel with 3 numbered rows */}
          <div className="block md:hidden mb-5 p-3.5 bg-[#111315] border border-[#252A2E] rounded-[10px] space-y-2.5 text-left">
            <div className="flex items-start gap-2.5">
              <span className="font-mono text-xs font-bold text-[#C7F000] shrink-0 mt-0.5">
                01 —
              </span>
              <div>
                <h4 className="font-['Manrope',sans-serif] font-bold text-xs text-[#F1F0EC]">
                  Your Current Challenges
                </h4>
                <p className="text-[11px] text-[#A6ADB5] font-sans leading-snug mt-0.5">
                  Find where potential customers drop off.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#252A2E]/60 flex items-start gap-2.5">
              <span className="font-mono text-xs font-bold text-[#C7F000] shrink-0 mt-0.5">
                02 —
              </span>
              <div>
                <h4 className="font-['Manrope',sans-serif] font-bold text-xs text-[#F1F0EC]">
                  Growth Opportunities
                </h4>
                <p className="text-[11px] text-[#A6ADB5] font-sans leading-snug mt-0.5">
                  Explore ways to improve bookings.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#252A2E]/60 flex items-start gap-2.5">
              <span className="font-mono text-xs font-bold text-[#C7F000] shrink-0 mt-0.5">
                03 —
              </span>
              <div>
                <h4 className="font-['Manrope',sans-serif] font-bold text-xs text-[#F1F0EC]">
                  Your Next Step
                </h4>
                <p className="text-[11px] text-[#A6ADB5] font-sans leading-snug mt-0.5">
                  See whether Oglity is the right fit.
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP ONLY: Three-column benefit-card layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 mb-7">
            {discussionPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.num}
                  className="p-4 bg-[#111315] border border-[#252A2E] rounded-[10px] hover:border-[#C7F000]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-[#C7F000]">
                        {point.num}
                      </span>
                      <Icon className="w-4 h-4 text-[#C7F000]" />
                    </div>

                    <h4 className="font-['Manrope',sans-serif] font-bold text-[15px] text-[#F1F0EC] tracking-tight leading-snug">
                      {point.title}
                    </h4>

                    <p className="mt-1 text-xs text-[#A6ADB5] font-sans leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Booking Scheduler Container (Full Width Optimized) */}
          <div
            id="qualification-funnel-card"
            className="p-3 sm:p-6 lg:p-7 bg-[#0F1215] border border-[#252A2E] rounded-[14px] sm:rounded-[16px] shadow-2xl transition-all duration-300"
          >
            {/* Header with Instruction */}
            <div className="pb-3.5 mb-3.5 border-b border-[#252A2E] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-left">
              <div>
                <h3 className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base text-[#F1F0EC] tracking-tight">
                  Choose a convenient time below.
                </h3>
                <p className="text-xs text-[#A6ADB5] font-sans mt-0.5">
                  Real-time calendar slot reservation with Abuzar Gaur.
                </p>
              </div>

              <div className="self-start sm:self-auto flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#16191D] border border-[#262C32] rounded-[6px] text-xs font-mono text-[#F1F0EC]">
                <Clock className="w-3.5 h-3.5 text-[#C7F000]" />
                <span className="text-[#C7F000] font-bold">30 MIN</span>
                <span className="text-[#A6ADB5]">DISCOVERY CALL</span>
              </div>
            </div>

            {/* Embedded Calendly Inline Widget */}
            <div className="w-full rounded-[8px] sm:rounded-[10px] overflow-hidden bg-[#111315] border border-[#252A2E]">
              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/abuzargour1188/30min?month=2026-10"
                style={{ minWidth: '100%', height: '760px' }}
              />
            </div>

            {/* Microcopy & Reassurance Footer */}
            <div className="mt-4 pt-3.5 border-t border-[#252A2E] text-center">
              <p className="text-xs text-[#7E8876] font-sans">
                Direct conversation with founder Abuzar Gaur. No aggressive sales pressure.
              </p>
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
};
