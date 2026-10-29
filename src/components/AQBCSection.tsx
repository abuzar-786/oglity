import React from 'react';
import {
  Target,
  ClipboardCheck,
  CalendarCheck,
  Handshake,
  ChevronDown,
} from 'lucide-react';

interface AQBCSectionProps {
  onQualifyClick?: () => void;
}

export const AQBCSection: React.FC<AQBCSectionProps> = () => {
  const steps = [
    {
      number: '01',
      title: 'ATTRACT',
      mainDesc: 'Reach serious car owners',
      mobileExplanatory: 'Targeted Meta Ads',
      desktopExplanatory: 'Targeted Meta Ads',
      icon: Target,
    },
    {
      number: '02',
      title: 'QUALIFY',
      mainDesc: 'Identify genuine buyers',
      mobileExplanatory: 'Vehicle, budget & interest',
      desktopExplanatory: 'Vehicle, budget & buying interest',
      icon: ClipboardCheck,
    },
    {
      number: '03',
      title: 'BOOK',
      mainDesc: 'Coordinate studio visits',
      mobileExplanatory: 'Follow-ups & reminders',
      desktopExplanatory: 'Initial follow-ups, coordination & reminders',
      icon: CalendarCheck,
    },
    {
      number: '04',
      title: 'CLOSE',
      mainDesc: 'Your studio handles sales',
      mobileExplanatory: 'Consultation & pricing',
      desktopExplanatory: 'Studio consultation, pricing & sales',
      icon: Handshake,
    },
  ];

  return (
    <section
      id="system"
      className="relative w-full bg-[#0A0C0E] text-[#F1F0EC] py-7 sm:py-10 lg:py-12 border-b border-[#1E2226] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. SECTION HEADER (Reduced spacing to first card row)
           ========================================================= */}
        <div className="max-w-2xl mx-auto text-center mb-4 sm:mb-5">
          <div className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#C7F000] uppercase mb-1 sm:mb-1.5">
            THE AQBC™ SYSTEM
          </div>

          <h2 className="font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-tight text-[#F1F0EC]">
            From Enquiries to Actual Showroom Visits.
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm md:text-base text-[#B8BEC4] max-w-xl mx-auto font-sans leading-relaxed">
            Four connected steps. One clear customer acquisition process.
          </p>
        </div>

        {/* =========================================================
            2. FOUR CONNECTED AQBC™ CARDS
               Mobile: 2x2 Grid | Desktop: 4 in one horizontal row
           ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-4 relative items-stretch">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-3.5 sm:p-4.5 bg-[#141D17] border border-[#222E25] rounded-[16px] hover:border-[#C7F000]/50 transition-colors flex flex-col justify-between shadow-lg h-full"
              >
                <div>
                  {/* Step Header: Number & Stage Icon */}
                  <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-[#222E25]/80">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#C7F000]">
                      {step.number}
                    </span>
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C7F000]" />
                  </div>

                  {/* Stage Title */}
                  <div className="font-['Space_Grotesk',sans-serif] text-sm sm:text-base font-bold tracking-wider text-[#F1F0EC] uppercase mt-2">
                    {step.title}
                  </div>

                  {/* Short Main Step Description */}
                  <h3 className="font-['Manrope',sans-serif] font-medium text-xs sm:text-[13.5px] text-[#CAD0D6] tracking-tight leading-snug mt-1">
                    {step.mainDesc}
                  </h3>
                </div>

                {/* Bottom Explanatory Line with Divider */}
                <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-[#222E25]">
                  <div className="text-xs sm:text-[13px] font-sans font-medium text-[#C7F000] leading-snug">
                    <span className="sm:hidden">{step.mobileExplanatory}</span>
                    <span className="hidden sm:inline">{step.desktopExplanatory}</span>
                  </div>
                </div>

                {/* Subtle horizontal connecting arrow between cards on desktop */}
                {idx < steps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-[#16191D] border border-[#252A2E] items-center justify-center text-[#C7F000] text-[10px] font-bold"
                    aria-hidden="true"
                  >
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =========================================================
            3. HIGHLIGHTED CLOSING RESPONSIBILITY PANEL (Reduced padding)
           ========================================================= */}
        <div className="mt-3.5 sm:mt-5 py-3 px-4 sm:py-3.5 sm:px-5 bg-[#162119] border border-[#263729] rounded-[14px] text-center max-w-2xl mx-auto shadow-sm">
          <p className="font-['Manrope',sans-serif] font-bold text-xs sm:text-sm md:text-base text-[#F1F0EC] tracking-tight leading-snug">
            Oglity manages customer acquisition. Your team handles consultations and sales.
          </p>
          <p className="mt-1 text-[11px] sm:text-xs text-[#8E969F] font-sans">
            From first enquiry to CRM-tracked, studio-confirmed showroom attendance.
          </p>
        </div>

        {/* =========================================================
            4. TRANSITION DOWN ARROW TO SECTION 5 (#offer)
           ========================================================= */}
        <div className="mt-2.5 sm:mt-4 flex justify-center">
          <a
            href="#offer"
            aria-label="Scroll to Guarantee"
            className="w-7 h-7 rounded-full bg-[#16191D] border border-[#252A2E] text-[#B8BEC4] hover:text-[#C7F000] hover:border-[#C7F000] flex items-center justify-center transition-colors shadow-xs"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
