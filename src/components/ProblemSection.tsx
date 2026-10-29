import React from 'react';
import { MessageSquareX, CalendarX, TrendingDown, ChevronDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const cards = [
    {
      number: '01',
      title: 'Enquiries That Go Nowhere',
      body: 'Customers compare prices, request quotations and then disappear.',
      closing: 'Your team spends hours chasing people who may never visit.',
      icon: MessageSquareX,
    },
    {
      number: '02',
      title: 'Empty Bays. Expenses Don\'t Stop.',
      body: 'Rent, salaries and other expenses continue—even when bookings slow down.',
      closing: 'You have the capacity to deliver great work, but not a steady flow of customers.',
      icon: CalendarX,
    },
    {
      number: '03',
      title: 'Marketing Spend Without Clear Results',
      body: 'Ads and Instagram content cost money. But which enquiries turn into paying customers?',
      closing: 'You know what you\'re spending. Not always what you\'re getting back.',
      icon: TrendingDown,
    },
  ];

  return (
    <section
      id="problem"
      className="relative w-full bg-[#F7F8F6] text-[#111315] py-7 sm:py-10 lg:py-12 border-b border-[#E3E6DF] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. SECTION HEADER
           ========================================================= */}
        <div className="max-w-2xl mx-auto text-center mb-5 sm:mb-6">
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.16em] uppercase text-[#54604F]">
            THE REAL PROBLEM
          </span>

          <h2 className="mt-1 sm:mt-1.5 font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#111315] tracking-tight leading-tight">
            You Built a Premium Studio. But Does Your Business Feel Predictable?
          </h2>

          <p className="mt-2 text-sm sm:text-[15px] text-[#4A5346] font-sans leading-relaxed max-w-xl mx-auto">
            You've invested in skilled installers, quality materials and a premium studio. Yet some weeks your bays are full, while other weeks you're wondering where the next customer will come from.
          </p>
        </div>

        {/* =========================================================
            2. THREE COMPACT PAIN CARDS
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5 lg:gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="p-3.5 sm:p-4.5 bg-[#FFFFFF] border border-[#E3E6DF] rounded-[14px] shadow-xs hover:border-[#111315]/30 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-[8px] bg-[#EEF2E8] border border-[#DEE4D6] flex items-center justify-center text-[#3D4739]">
                      <Icon className="w-4 h-4 text-[#3D4739]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#7E8876]">
                      {card.number}
                    </span>
                  </div>

                  <h3 className="font-['Manrope',sans-serif] font-bold text-base sm:text-[17px] text-[#111315] tracking-tight leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-1 text-sm text-[#4A5346] font-sans leading-relaxed">
                    {card.body}
                  </p>
                </div>

                {/* Highlighted Emotional Closing Sentence */}
                <div className="mt-2.5 pt-2.5 border-t border-[#F0F2ED]">
                  <p className="text-xs sm:text-[13.5px] font-bold text-[#111315] font-sans leading-snug">
                    {card.closing}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            3. COMPACT FINAL EMOTIONAL STATEMENT PANEL
           ========================================================= */}
        <div className="mt-3.5 sm:mt-5 p-3.5 sm:p-4.5 bg-[#E8EDE2] border border-[#D5DFCD] rounded-[14px] text-center shadow-xs">
          <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#4A5D44] mb-1">
            THE REAL FRUSTRATION?
          </div>
          <p className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base md:text-[16.5px] text-[#111315] tracking-tight leading-snug max-w-2xl mx-auto">
            You've built a studio capable of delivering premium work. But you still can't confidently predict your next profitable booking.
          </p>
        </div>

        {/* =========================================================
            4. NATURAL TRANSITION TO SECTION 4 (AQBC SYSTEM)
           ========================================================= */}
        <div className="mt-2.5 sm:mt-4 flex justify-center">
          <a
            href="#system"
            aria-label="Scroll to AQBC System"
            className="w-7 h-7 rounded-full bg-[#FFFFFF] border border-[#DEE4D6] text-[#7E8876] hover:text-[#111315] hover:border-[#111315] flex items-center justify-center transition-colors shadow-xs"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
