import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { GridBackground } from './ui/GridBackground';
import { MessageSquareOff, HelpCircle, UserX, CalendarX2, LineChart, AlertTriangle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      number: '01',
      title: 'Endless Price Shoppers',
      quote: '"Bhai, PPF kitne ka hai?"',
      body: 'Your WhatsApp fills with enquiries. You explain your packages, workmanship, and pricing. But too many conversations end the moment someone finds a cheaper quote.',
      takeaway: 'You didn\'t build a premium studio to compete on who can offer the lowest price.',
      icon: MessageSquareOff,
    },
    {
      number: '02',
      title: 'Quotations That Turn Into Silence',
      quote: 'You spend time understanding their needs. You send the quotation. Then... nothing.',
      body: 'Messages go unanswered. Follow-ups get ignored. And you\'re left wondering whether the customer was ever serious about protecting their car.',
      takeaway: 'Every dead conversation represents time and attention your team could have spent elsewhere.',
      icon: UserX,
    },
    {
      number: '03',
      title: 'Your Team Is Chasing Instead of Creating',
      quote: 'Your best people should be delivering exceptional work—not constantly following up with uncertain prospects.',
      body: 'Instead, they\'re answering repetitive questions, chasing responses, and trying to convince people to book an inspection.',
      takeaway: 'Your team\'s expertise is valuable. Their time should be treated that way.',
      icon: HelpCircle,
    },
    {
      number: '04',
      title: 'Empty Bays. Unpredictable Bookings.',
      quote: 'One week, your studio is busy. The next, you\'re wondering where the new customers will come from.',
      body: 'You have installers to schedule, materials to plan, and operating expenses that don\'t disappear when bookings slow down. But without a consistent flow of serious showroom visitors, planning ahead becomes difficult.',
      takeaway: 'The uncertainty is exhausting—especially when you know your studio is capable of more.',
      icon: CalendarX2,
    },
    {
      number: '05',
      title: 'You\'re Spending on Marketing. But What\'s Actually Working?',
      quote: 'Ads are running. Enquiries are coming. Money is being spent.',
      body: 'But how many of those enquiries were genuinely qualified? How many appointments were confirmed? And how many customers actually visited your showroom?',
      takeaway: 'Without those answers, it\'s difficult to know whether your marketing is building the business—or simply keeping your WhatsApp busy.',
      icon: LineChart,
    },
  ];

  return (
    <section id="problem" className="relative w-full bg-[#FFFFFF] text-[#111315] py-20 sm:py-28 border-b border-[#B8BEC4]/60">
      <GridBackground theme="white" showCoordinates={false} className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <SectionHeader
              theme="light"
              align="center"
              eyebrow="THE PROBLEM ISN'T YOUR CRAFTSMANSHIP."
              title="More Leads Aren't the Answer."
              subtitle={
                <div className="space-y-4 text-left sm:text-center font-sans">
                  <p className="text-base sm:text-lg lg:text-[19px] font-semibold text-[#111315] leading-snug">
                    You've invested years building a studio that delivers premium work. So why does finding the right customers still feel like a constant struggle?
                  </p>
                  <p className="text-sm sm:text-base text-[#252A2E]/85 leading-relaxed">
                    Your installation quality is excellent. Your team knows its craft. You've invested in equipment, materials, and building a reputation. Yet somehow, getting serious customers through your showroom doors remains unpredictable.
                  </p>
                  <div className="p-4 bg-[#F1F0EC] border-l-3 border-[#111315] rounded-r-[4px] text-xs sm:text-sm text-[#111315] font-semibold">
                    And the frustrating part? You're not struggling to deliver quality. You're struggling to consistently attract people who recognize its value.
                  </div>
                </div>
              }
            />
          </div>

          {/* 5 Problem Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {problems.slice(0, 3).map((problem) => {
              const Icon = problem.icon;
              return (
                <div
                  key={problem.number}
                  className="p-6 sm:p-7 bg-[#F7F8F9] border border-[#B8BEC4]/60 rounded-[6px] hover:border-[#111315] transition-all flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#252A2E]/70 tracking-wider">
                        {problem.number} / PROBLEM
                      </span>
                      <Icon className="w-4 h-4 text-[#252A2E]/60" />
                    </div>

                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-lg sm:text-xl text-[#111315] tracking-tight">
                      {problem.title}
                    </h3>

                    <div className="mt-3 p-2.5 bg-[#FFFFFF] border border-[#B8BEC4]/40 rounded-[4px] text-xs font-semibold text-[#111315] italic">
                      {problem.quote}
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-[#252A2E]/85 font-sans leading-relaxed">
                      {problem.body}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#B8BEC4]/40 text-xs font-sans text-[#111315] font-medium italic">
                    {problem.takeaway}
                  </div>
                </div>
              );
            })}

            {/* Row 2: Cards 04 & 05 Centered */}
            <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:w-4/5 lg:mx-auto">
              {problems.slice(3).map((problem) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={problem.number}
                    className="p-6 sm:p-7 bg-[#F7F8F9] border border-[#B8BEC4]/60 rounded-[6px] hover:border-[#111315] transition-all flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-[#252A2E]/70 tracking-wider">
                          {problem.number} / PROBLEM
                        </span>
                        <Icon className="w-4 h-4 text-[#252A2E]/60" />
                      </div>

                      <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-lg sm:text-xl text-[#111315] tracking-tight">
                        {problem.title}
                      </h3>

                      <div className="mt-3 p-2.5 bg-[#FFFFFF] border border-[#B8BEC4]/40 rounded-[4px] text-xs font-semibold text-[#111315] italic">
                        {problem.quote}
                      </div>

                      <p className="mt-3 text-xs sm:text-sm text-[#252A2E]/85 font-sans leading-relaxed">
                        {problem.body}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#B8BEC4]/40 text-xs font-sans text-[#111315] font-medium italic">
                      {problem.takeaway}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Synthesis: The Uncomfortable Reality Box */}
          <div className="mt-16 sm:mt-20 pt-12 sm:pt-14 border-t border-[#B8BEC4]/50 max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 lg:p-10 bg-[#111315] text-[#F1F0EC] border border-[#111315] rounded-[6px] shadow-xl text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16191C] border border-[#252A2E] rounded-[4px]">
                <AlertTriangle className="w-3.5 h-3.5 text-[#C7F000]" />
                <span className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
                  UNCOMFORTABLE REALITY
                </span>
              </div>

              <h3 className="font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F1F0EC] leading-tight">
                Here's the uncomfortable reality.
              </h3>

              <div className="max-w-2xl mx-auto space-y-3.5 text-xs sm:text-sm lg:text-[15px] text-[#B8BEC4] font-sans leading-relaxed">
                <p className="text-base sm:text-lg text-[#F1F0EC] font-semibold">
                  Your studio doesn't need more people asking for prices.
                </p>
                <p>
                  It needs a better way to attract serious buyers, identify genuine interest, follow up consistently, and turn qualified enquiries into actual showroom visits.
                </p>
                <p>
                  Because the real problem isn't always how many leads you're generating.
                </p>
              </div>

              {/* The Core Gap Highlight */}
              <div className="py-4 px-5 bg-[#16191C] border border-[#252A2E] rounded-[4px] max-w-xl mx-auto">
                <p className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base text-[#F1F0EC]">
                  It's how many genuine opportunities you're losing between the first enquiry and the showroom door.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#C7F000] font-['Space_Grotesk',sans-serif] font-bold tracking-wide uppercase">
                And that's the gap Oglity's AQBC™ Customer Acquisition System is designed to close.
              </p>
            </div>

            {/* Diagnostic 3-Step Schematic Flow */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
              <div className="p-5 bg-[#F7F8F9] border border-[#B8BEC4]/50 rounded-[6px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#111315]">01 / Ad Click</span>
                  <span className="text-[10px] font-mono text-[#252A2E]/60 uppercase">Enquiry</span>
                </div>
                <p className="text-xs text-[#252A2E]/80 font-sans leading-relaxed">
                  Car owner sees ad, asks "PPF price?", or submits basic contact details.
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#B8BEC4]/40 text-[10px] font-mono text-[#252A2E]/70">
                  Initial Curiosity
                </div>
              </div>

              <div className="p-5 bg-[#111315] text-[#F1F0EC] border border-[#111315] rounded-[6px] shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#C7F000]">02 / The Real Gap</span>
                  <span className="w-1.5 h-1.5 bg-[#C7F000] animate-ping" />
                </div>
                <p className="text-xs text-[#B8BEC4] font-sans leading-relaxed">
                  Where revenue vanishes: Slow follow-up, unvetted leads, and quotes that turn into silence.
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#252A2E] text-[10px] font-mono text-[#C7F000] font-bold">
                  AQBC™ ELIMINATES THIS GAP
                </div>
              </div>

              <div className="p-5 bg-[#F7F8F9] border border-[#B8BEC4]/50 rounded-[6px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#111315]">03 / Showroom Arrival</span>
                  <span className="text-[10px] font-mono text-[#252A2E]/60 uppercase">Result</span>
                </div>
                <p className="text-xs text-[#252A2E]/80 font-sans leading-relaxed">
                  Vehicle arrives physically inside your bay for inspection and ₹60K+ package booking.
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#B8BEC4]/40 text-[10px] font-mono text-emerald-700 font-bold">
                  ✓ High-Ticket Conversion
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
};
