import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { CaseStudyCard } from './ui/CaseStudyCard';

export const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      client: 'Detailing Shine',
      category: 'CERAMIC TINTING',
      leadsTracked: '202',
      studioVisits: '108',
      adSpend: '₹42,726.00',
      costPerLead: '₹211.00',
      marketContext:
        'Filtered out car wash inquiries to focus exclusively on ₹60K+ PPF and ceramic protection.',
    },
    {
      client: 'Detailing Baba',
      category: 'WINDOW TINT',
      leadsTracked: '213',
      studioVisits: '90',
      adSpend: '₹57,721.00',
      costPerLead: '₹270.00',
      marketContext:
        'Eliminated low-budget wash queries to drive high-intent owners directly to in-bay inspections.',
    },
    {
      client: 'Detailing Garage',
      category: 'MOBILE DETAILING',
      leadsTracked: '211',
      studioVisits: '74',
      adSpend: '₹37,209.60',
      costPerLead: '₹176.35',
      marketContext:
        'Automated budget qualification bridge routing serious car owners directly to showroom calendar.',
    },
    {
      client: 'Downey Tinting',
      category: 'CERAMIC TINTING',
      leadsTracked: '378',
      studioVisits: '108',
      adSpend: '$3,224.34',
      costPerLead: '$8.53',
      marketContext:
        'Replaced price-shopper inquiries with structured vehicle-specific PPF consultation bookings.',
    },
    {
      client: 'Midwest Auto Pro',
      category: 'WINDOW TINT',
      leadsTracked: '312',
      studioVisits: '90',
      adSpend: '$2,973.36',
      costPerLead: '$9.53',
      marketContext:
        'Pre-screened vehicle models and condition to protect front desk from cheap wash inquiry fatigue.',
    },
    {
      client: 'Crystal Ride Mobile Detailing',
      category: 'MOBILE DETAILING',
      leadsTracked: '211',
      studioVisits: '68',
      adSpend: '$2,295.68',
      costPerLead: '$10.88',
      marketContext:
        'Filter mechanism ensures only verified luxury vehicle owners qualify for high-ticket bookings.',
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
            <div className="animate-marquee gap-4 sm:gap-6">
              {[...caseStudies, ...caseStudies].map((study, idx) => (
                <div key={idx} className="w-[260px] sm:w-[300px] md:w-[330px] shrink-0">
                  <CaseStudyCard
                    client={study.client}
                    category={study.category}
                    leadsTracked={study.leadsTracked}
                    studioVisits={study.studioVisits}
                    adSpend={study.adSpend}
                    costPerLead={study.costPerLead}
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
