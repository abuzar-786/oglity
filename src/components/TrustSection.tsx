import React from 'react';

export const TrustSection: React.FC = () => {
  return (
    <section
      id="results"
      className="relative w-full bg-[#0E1012] text-[#F1F0EC] py-14 sm:py-18 lg:py-20 border-b border-[#252A2E] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Anchor for founder links */}
      <div id="founder" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16191C] border border-[#252A2E] rounded-[4px] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
              REAL EXPERIENCE. REAL SHOWROOM VISITS.
            </span>
          </div>

          <h2 className="font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F1F0EC] leading-tight">
            Built on Experience.{' '}
            <span className="text-[#C7F000]">Focused on Real Results.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#B8BEC4] font-sans leading-relaxed">
            At Oglity, we believe great detailing studios deserve customers who value quality—not just the cheapest quote.
          </p>
        </div>

        {/* Balanced Two-Column Layout: Featured Result (Left) & Founder Story (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Featured Client Result */}
          <div className="p-6 sm:p-7 lg:p-8 bg-[#16191C] border border-[#252A2E] rounded-[10px] flex flex-col justify-between hover:border-[#C7F000]/40 transition-colors">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#C7F000] uppercase block mb-3">
                FEATURED CLIENT RESULT
              </span>

              <div className="font-['Space_Grotesk',sans-serif] font-extrabold text-5xl sm:text-6xl text-[#C7F000] leading-none tracking-tight">
                20+
              </div>

              <h3 className="font-['Manrope',sans-serif] font-bold text-lg sm:text-xl text-[#F1F0EC] tracking-tight mt-3">
                Qualified Showroom Visits in One Month
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#B8BEC4] font-sans leading-relaxed">
                One of our clients reported over 20 qualified customers physically visiting their showroom in a single month.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#252A2E]">
              <p className="text-[11px] sm:text-xs text-[#8F969E] font-sans italic leading-relaxed">
                An anonymous, client-reported result. Not a typical or guaranteed monthly outcome.
              </p>
            </div>
          </div>

          {/* RIGHT: Founder Story */}
          <div className="p-6 sm:p-7 lg:p-8 bg-[#16191C] border border-[#252A2E] rounded-[10px] flex flex-col justify-between">
            <div className="space-y-4">
              {/* Founder Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-[#252A2E]">
                <img
                  src="/my-latest-pro-photo.png"
                  alt="Abuzar Gaur - Founder, Oglity"
                  className="w-13 h-13 sm:w-15 sm:h-15 rounded-full object-cover object-[center_12%] border-2 border-[#C7F000]/70 shrink-0"
                />
                <div>
                  <div className="font-['Manrope',sans-serif] font-bold text-base sm:text-lg text-[#F1F0EC]">
                    Abuzar Gaur
                  </div>
                  <div className="text-xs font-mono font-semibold text-[#C7F000] uppercase tracking-wider">
                    Founder, Oglity
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#B8BEC4] font-sans leading-relaxed">
                Coming from a small-town background, I built my career around discipline, consistency, and mastering customer acquisition.
              </p>

              <p className="text-xs sm:text-sm text-[#B8BEC4] font-sans leading-relaxed">
                Having personally managed ads, buyer qualification, follow-ups, bookings, and tracking for automotive detailing businesses, I understand what it takes to move beyond generating leads.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#252A2E]">
              <p className="font-['Space_Grotesk',sans-serif] font-bold text-xs sm:text-sm text-[#F1F0EC]">
                Great craftsmanship deserves customers who recognize its value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
