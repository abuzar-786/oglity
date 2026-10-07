import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { ComparisonRow } from './ui/ComparisonRow';

export const DifferenceSection: React.FC = () => {
  const comparisons = [
    {
      traditional: 'Optimize for raw lead volume',
      aqbc: 'Optimize for qualified inspection opportunities',
    },
    {
      traditional: 'Attracts bargain hunters and price shoppers',
      aqbc: 'Filter by vehicle model, service, and budget tier',
    },
    {
      traditional: 'Leaves follow-up entirely on your staff',
      aqbc: 'Instant speed-to-lead and automated WhatsApp follow-up',
    },
    {
      traditional: 'High no-show rates on calls',
      aqbc: 'Confirmed showroom inspection appointments',
    },
    {
      traditional: 'Stops once form is submitted',
      aqbc: 'Engineered toward showroom inspection revenue',
    },
  ];

  return (
    <section className="relative w-full bg-[#F1F0EC] text-[#111315] py-20 sm:py-28 border-b border-[#B8BEC4]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeader
            theme="light"
            align="center"
            eyebrow="The difference"
            title="Qualified opportunities over vanity leads."
            subtitle={
              <p className="text-sm sm:text-base lg:text-[17px] text-[#252A2E]/80 leading-relaxed font-sans">
                Traditional agencies deliver inflated clicks. Oglity delivers pre-qualified showroom buyers for ₹50K+ PPF and ceramic bookings.
              </p>
            }
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-t-[6px] border-x border-t border-[#111315] overflow-hidden bg-[#111315] text-[#F1F0EC]">
            <div className="p-4 sm:p-5 border-b md:border-b-0 md:border-r border-[#252A2E]">
              <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#B8BEC4]/60">
                Typical agency
              </span>
              <div className="mt-1 font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm sm:text-base tracking-tight text-[#F1F0EC]">
                Traditional lead generation
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-[#111315] border-t md:border-t-0 border-[#252A2E]">
              <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#C7F000] font-semibold">
                The Oglity system
              </span>
              <div className="mt-1 font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm sm:text-base tracking-tight text-[#C7F000]">
                Oglity AQBC™ Pipeline
              </div>
            </div>
          </div>

          {/* Rows */}
          <div>
            {comparisons.map((item, index) => (
              <ComparisonRow
                key={index}
                traditional={item.traditional}
                aqbc={item.aqbc}
                index={index}
                isLast={index === comparisons.length - 1}
              />
            ))}
          </div>

          {/* Clean Context Strip */}
          <div className="mt-6 p-4 bg-[#FFFFFF] border border-[#B8BEC4]/60 rounded-[6px] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-[#252A2E]">
            <span className="font-semibold text-[#111315]">
              Exclusively for studios with ₹50,000+ PPF &amp; Ceramic packages.
            </span>
            <span className="text-[#252A2E]/70">Direct showroom inspection bookings</span>
          </div>
        </div>
      </div>
    </section>
  );
};
