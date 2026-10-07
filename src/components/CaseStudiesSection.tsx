import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { CaseStudyCard } from './ui/CaseStudyCard';

export const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      client: 'Detailing Daddy',
      serviceCategory: 'PPF + Ceramic Coating',
      resultData: 'Consistent High-Ticket Bookings',
      marketContext:
        'Targeted high-intent luxury SUV and sedan owners with vehicle-specific PPF packages.',
    },
    {
      client: 'Detailing Baba',
      serviceCategory: 'Full Body PPF',
      resultData: 'Direct Showroom Inquiries',
      marketContext:
        'Filtered out entry-level wash queries to focus exclusively on premium self-healing film clients.',
    },
    {
      client: 'Detailing Studio',
      serviceCategory: 'Ceramic + Graphene Coating',
      resultData: 'Showroom Visit Pipeline',
      marketContext:
        'Custom landing page qualification mechanism connected with instant WhatsApp booking bridge.',
    },
    {
      client: 'Car Detailing',
      serviceCategory: 'High-Ticket Surface Protection',
      resultData: 'Eliminated Price Shoppers',
      marketContext:
        'Replaced erratic Meta ad boosts with a structured multi-stage qualification funnel.',
    },
    {
      client: 'PPF Studio',
      serviceCategory: 'PPF Acquisition',
      resultData: '5-Minute Speed-to-Lead',
      marketContext:
        'Automated instant follow-up protecting front desk staff from price-shopper fatigue.',
    },
    {
      client: 'Ceramic Studio',
      serviceCategory: 'Ceramic Coating Acquisition',
      resultData: '₹50K+ Filtered Opportunities',
      marketContext:
        'Pre-qualified prospects on vehicle model, paint condition, and ₹50K+ budget expectation.',
    },
  ];

  return (
    <section
      id="results"
      className="relative w-full bg-[#111315] text-[#F1F0EC] py-20 sm:py-28 border-b border-[#252A2E] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeader
            theme="dark"
            align="center"
            eyebrow="Studio case studies"
            title="Proven in premium studios."
            subtitle={
              <p className="text-sm sm:text-base lg:text-[17px] text-[#B8BEC4] leading-relaxed font-sans">
                Real implementations and measurable revenue growth across high-ticket PPF and ceramic facilities.
              </p>
            }
          />
        </div>

        {/* Case Studies Row */}
        <div className="mt-8 relative">
          {/* Edge gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#111315] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#111315] to-transparent pointer-events-none z-10" />

          {/* Marquee viewport */}
          <div className="overflow-hidden py-2">
            <div className="animate-marquee gap-6">
              {[...caseStudies, ...caseStudies].map((study, idx) => (
                <div key={idx} className="w-[310px] sm:w-[350px] shrink-0">
                  <CaseStudyCard
                    client={study.client}
                    serviceCategory={study.serviceCategory}
                    resultData={study.resultData}
                    marketContext={study.marketContext}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
