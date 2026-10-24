import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What counts as a qualified showroom visit?',
      answer:
        "A qualified visit must be a unique vehicle owner who has genuine interest in your studio's PPF or ceramic coating packages, is attributable to Oglity's acquisition system, physically attends your facility, and has their visit tracked in the CRM and confirmed by your team.",
    },
    {
      question: 'Is Oglity just a Meta Ads agency?',
      answer:
        'No. Targeted Meta Ads are only the first step. Traditional agencies stop at delivering raw contact sheets. Oglity manages the complete customer-acquisition pipeline—from buyer qualification and structured follow-ups to showroom appointment bookings and attendance verification.',
    },
    {
      question: "What if the 15-visit target isn't achieved?",
      answer:
        'Following an initial 14-day testing phase, if the monthly commitment of 15 qualified visits is not reached, we extend your campaign for 15–30 additional days with no extra agency management fees, subject to written agreement. Client-funded advertising continues separately.',
    },
    {
      question: 'Do you guarantee PPF sales or revenue?',
      answer:
        "No. We guarantee qualified physical footfall into your studio bay. The vehicle inspection, technical advice, package presentation, and final sales closing remain the responsibility of your studio's team.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#0E1012] text-[#F1F0EC] py-14 sm:py-20 border-b border-[#1E2226] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <SectionHeader
            theme="dark"
            align="center"
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Common Questions About How We Work."
            subtitle={
              <p className="text-xs sm:text-sm text-[#B8BEC4] font-sans leading-relaxed">
                Clear, transparent answers about our customer acquisition system, guarantee terms, and studio expectations.
              </p>
            }
          />
        </div>

        {/* 4 Clean Accordion Cards */}
        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-[8px] transition-colors overflow-hidden ${
                  isOpen
                    ? 'border-[#C7F000]/60 bg-[#16191D]'
                    : 'border-[#252A2E] bg-[#14171A] hover:border-[#B8BEC4]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C7F000]"
                >
                  <span className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base text-[#F1F0EC] tracking-tight">
                    {faq.question}
                  </span>

                  <div
                    className={`w-6 h-6 rounded-[4px] border border-[#252A2E] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#C7F000] text-[#111315] border-[#C7F000]'
                        : 'text-[#B8BEC4]'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#CAD0D6] font-sans leading-relaxed border-t border-[#252A2E]/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Access Detailed Guarantee Disclosure Note */}
        <div className="mt-8 pt-4 border-t border-[#252A2E] text-center text-xs text-[#7E8876] font-sans">
          <span>Complete written guarantee criteria and measurement guidelines are accessible in Section 5 under </span>
          <a href="#offer" className="text-[#C7F000] hover:underline font-mono">
            Guarantee Terms
          </a>
          .
        </div>
      </div>
    </section>
  );
};
