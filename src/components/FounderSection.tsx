import React from 'react';
import { UserCheck, MessageCircle } from 'lucide-react';

interface FounderSectionProps {
  onExploreSystem?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = () => {
  return (
    <section
      id="results"
      className="relative w-full bg-[#111315] text-[#F1F0EC] py-8 sm:py-10 lg:py-12 border-b border-[#252A2E] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Anchor for founder navigation */}
      <div id="founder" className="scroll-mt-20 sm:scroll-mt-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. SECTION HEADER
           ========================================================= */}
        <div className="mb-5 sm:mb-6">
          <div className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#C7F000] uppercase mb-1.5 sm:mb-2">
            REAL CLIENT EXPERIENCE
          </div>

          <h2 className="font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-tight text-[#F1F0EC] leading-tight">
            Real Visits. Not Just Leads.
          </h2>
        </div>

        {/* =========================================================
            2. DESKTOP TWO-COLUMN: COMPACT RESULT CARD + TESTIMONIAL VIDEO
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-5 items-stretch">
          {/* COMPACT RESULT CARD (Horizontal on mobile, balanced on desktop) */}
          <div className="bg-[#141A16] border border-[#222B25] rounded-[16px] p-4 sm:p-6 lg:p-7 flex flex-col justify-center shadow-lg">
            <div className="flex flex-row items-center gap-4 sm:gap-6">
              <div className="font-['Space_Grotesk',sans-serif] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#C7F000] leading-none shrink-0 tracking-tight">
                20+
              </div>

              <div className="min-w-0">
                <h3 className="font-['Manrope',sans-serif] font-bold text-base sm:text-lg lg:text-xl text-[#F1F0EC] tracking-tight leading-snug">
                  Qualified Showroom Visits
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#8E969F] mt-1 leading-normal">
                  Reported by one client in one month
                </p>
              </div>
            </div>
          </div>

          {/* TESTIMONIAL VIDEO CARD */}
          <div className="bg-[#15181B] border border-[#252A2E] rounded-[16px] p-3.5 sm:p-4 shadow-lg flex flex-col justify-between">
            <div className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase mb-2 sm:mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
              FEATURED CLIENT TESTIMONIAL
            </div>

            {/* Responsive 9:16 Video Player aligned with video aspect ratio */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] mx-auto aspect-[9/16] rounded-[12px] overflow-hidden bg-black border border-[#252A2E] shadow-xl">
              <iframe
                src="https://fast.wistia.net/embed/iframe/9wde5hgyei"
                title="Featured Client Testimonial Video"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            3. WHAT STUDIO OWNERS SAY (COMPACT WHATSAPP FEEDBACK)
           ========================================================= */}
        <div className="mt-6 sm:mt-8">
          <h3 className="font-['Manrope',sans-serif] font-bold text-base sm:text-lg text-[#F1F0EC] tracking-tight mb-2.5 sm:mb-3">
            What Studio Owners Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {/* Feedback Snippet 1 */}
            <div className="bg-[#15181B] border border-[#252A2E] rounded-[14px] p-3.5 sm:p-4 hover:border-[#C7F000]/40 transition-colors shadow-md flex items-start gap-3">
              <MessageCircle className="w-5 h-5 shrink-0 text-[#C7F000] mt-0.5" />
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-[#F1F0EC] font-sans leading-relaxed">
                  "Pre-qualifies car owners by budget before they speak with my desk. Our bay is booked with serious ₹60K+ PPF appointments."
                </p>
                <span className="block text-[11px] sm:text-xs text-[#8E969F] font-sans mt-1">
                  — Verified Detailing Partner, PPF Specialist
                </span>
              </div>
            </div>

            {/* Feedback Snippet 2 */}
            <div className="bg-[#15181B] border border-[#252A2E] rounded-[14px] p-3.5 sm:p-4 hover:border-[#C7F000]/40 transition-colors shadow-md flex items-start gap-3">
              <MessageCircle className="w-5 h-5 shrink-0 text-[#C7F000] mt-0.5" />
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-[#F1F0EC] font-sans leading-relaxed">
                  "Zero time wasted on ₹1,500 wash inquiries. We only get serious car owners booking in-studio inspections."
                </p>
                <span className="block text-[11px] sm:text-xs text-[#8E969F] font-sans mt-1">
                  — Verified Detailing Partner, Ceramic Lab
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            4. AUDIT DISCLAIMER & SHORT FOUNDER CREDIBILITY LINE
           ========================================================= */}
        <div className="mt-5 sm:mt-6 pt-3.5 border-t border-[#252A2E] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-xs text-[#8E969F] font-sans">
          <p className="italic text-[11px] sm:text-xs">
            An anonymous, client-reported result. Not independently audited, typical or guaranteed.
          </p>

          <div className="inline-flex items-center gap-1.5 shrink-0 text-[#C7F000] font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-[#C7F000]" />
            <span>Founder-led by Abuzar Gaur.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
