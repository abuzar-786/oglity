import React from 'react';
import { MessageCircleX, Clock, CalendarX, ChevronDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const cards = [
    {
      number: '01',
      title: 'Price Shoppers & Ghosted Quotes',
      quote: '"Bhai, PPF kitne ka hai?"',
      desc: 'You explain your value, send the quotation—and the conversation goes silent.',
      icon: MessageCircleX,
    },
    {
      number: '02',
      title: 'Endless Follow-Ups',
      desc: 'Your team keeps chasing WhatsApp enquiries instead of focusing on installations and customers.',
      icon: Clock,
    },
    {
      number: '03',
      title: 'Empty Bays. Unpredictable Bookings.',
      desc: 'Ads bring enquiries, but showroom visits remain inconsistent. And it\'s hard to know which campaigns actually deliver results.',
      icon: CalendarX,
    },
  ];

  return (
    <section id="problem" className="relative w-full bg-[#F7F8F6] text-[#111315] py-10 sm:py-18 lg:py-20 border-b border-[#E3E6DF] overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-5 sm:mb-10">
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.16em] uppercase text-[#54604F]">
            THE REAL PROBLEM
          </span>

          <h2 className="mt-1.5 sm:mt-2 font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#111315] tracking-tight leading-snug">
            More Leads Aren't the Answer.
          </h2>

          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#4A5346] font-sans leading-relaxed">
            You've spent years building a studio that delivers premium work. Yet potential customers still slip away before they reach your showroom.
          </p>
        </div>

        {/* 3 Focused Problem Cards (Compact on Mobile, 3-Col on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="p-4 sm:p-6 bg-[#FFFFFF] border border-[#E3E6DF] rounded-[10px] sm:rounded-[12px] shadow-sm hover:border-[#111315]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] bg-[#EEF2E8] border border-[#DEE4D6] flex items-center justify-center text-[#3D4739]">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3D4739]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#7E8876]">
                      {card.number}
                    </span>
                  </div>

                  <h3 className="font-['Manrope',sans-serif] font-bold text-base sm:text-[17px] text-[#111315] tracking-tight leading-snug">
                    {card.title}
                  </h3>

                  {card.quote && (
                    <p className="mt-1.5 sm:mt-2 text-xs font-semibold text-[#111315] italic">
                      {card.quote}
                    </p>
                  )}

                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#4A5346] font-sans leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement: Subtle Contrasting Panel Transitioning to AQBC */}
        <div className="mt-4 sm:mt-7 p-3.5 sm:p-5 bg-[#E8EDE2] border border-[#D5DFCD] rounded-[10px] text-center shadow-xs">
          <p className="text-xs sm:text-sm text-[#4A5346] font-sans">
            The real problem isn't just lead volume.
          </p>
          <p className="mt-0.5 sm:mt-1 font-['Manrope',sans-serif] font-bold text-sm sm:text-base text-[#111315] tracking-tight">
            It's what happens between the first enquiry and a qualified showroom visit.
          </p>
        </div>

        {/* Transition Down Chevron into Section 4 (AQBC System) */}
        <div className="mt-3.5 sm:mt-5 flex justify-center">
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
