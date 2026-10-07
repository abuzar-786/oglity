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
      question: 'Do you work with detailing studios outside my city?',
      answer:
        'Yes. We operate across premium metropolitan markets. However, we enforce strict city-level exclusivity (1–2 studios per territory) to prevent competing internal acquisition pipelines.',
    },
    {
      question: 'Is this just Meta Ads management?',
      answer:
        'No. Meta Ads are only Stage 01 of the AQBC™ system. Traditional agencies stop at generating raw form fills. Oglity builds the end-to-end qualification funnel, WhatsApp CRM automation, speed-to-lead routing, and showroom inspection booking mechanism.',
    },
    {
      question: 'What counts as a qualified inspection opportunity?',
      answer:
        'A verified car owner who owns a qualifying vehicle, has confirmed their requirement for PPF or ceramic coating, understands the ₹50K+ package tier, and has scheduled an in-person showroom inspection or consultation.',
    },
    {
      question: 'Do you guarantee closed sales?',
      answer:
        "We build the pipeline and guarantee delivery of agreed qualified inspection opportunities. The final sale and installation depends on your studio's in-person inspection, pitch, and service reputation.",
    },
    {
      question: 'How quickly can we start generating bookings?',
      answer:
        'Campaigns typically launch within 10 to 14 days. This gives us time to craft high-ticket video creatives, build the custom landing page qualification filter, and hook up your WhatsApp notifications.',
    },
    {
      question: 'Do I need a dedicated sales team?',
      answer:
        'No. Our automated WhatsApp and booking system handles the initial questions and schedule coordination, so your existing front-desk or studio manager can simply welcome the customer and inspect the car.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#111315] text-[#F1F0EC] py-20 sm:py-28 border-b border-[#252A2E] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeader
            theme="dark"
            align="center"
            eyebrow="Common questions"
            title="Frequently asked questions."
            subtitle={
              <p className="text-sm sm:text-base lg:text-[17px] text-[#B8BEC4] font-sans leading-relaxed">
                Clear answers about how we work, who we work with, and what to expect.
              </p>
            }
          />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-[6px] transition-colors overflow-hidden ${
                  isOpen ? 'border-[#C7F000]/60 bg-[#16191C]' : 'border-[#252A2E] bg-[#16191C]/60 hover:border-[#B8BEC4]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C7F000]"
                >
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-base sm:text-lg text-[#F1F0EC] tracking-tight">
                    {faq.question}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-[4px] border border-[#252A2E] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#C7F000] text-[#111315] border-[#C7F000]' : 'text-[#B8BEC4]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#B8BEC4] font-sans leading-relaxed border-t border-[#252A2E]/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 pt-4 border-t border-[#252A2E] flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#B8BEC4]/70 gap-2">
          <span>Have a custom question about your studio territory?</span>
          <span className="text-[#F1F0EC] font-medium">We discuss everything on the Growth Audit call.</span>
        </div>
      </div>
    </section>
  );
};
