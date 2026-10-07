import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { PerformanceMetric } from './ui/PerformanceMetric';
import { Button } from './ui/Button';

interface ProofSectionProps {
  onBookClick?: () => void;
}

export const ProofSection: React.FC<ProofSectionProps> = ({ onBookClick }) => {
  const metrics = [
    {
      value: '6',
      label: 'Studio partners',
      context: 'Partnered PPF & ceramic studios operating our system.',
      isLime: false,
    },
    {
      value: '90+',
      label: 'Qualified inspection bookings',
      context: 'Pre-screened owners seeking ₹50K+ paint protection.',
      isLime: true,
    },
    {
      value: '₹50K+',
      label: 'Average package floor',
      context: 'Focus exclusively on full PPF & multi-year ceramic.',
      isLime: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#111315] text-[#F1F0EC] py-20 sm:py-28 border-b border-[#252A2E] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeader
            theme="dark"
            align="center"
            eyebrow="Proven results"
            title="Built around real opportunities."
            subtitle={
              <p className="text-sm sm:text-base lg:text-[17px] text-[#B8BEC4] leading-relaxed font-sans">
                Real numbers from specialized PPF studios: focused on confirmed bay inspections and closed revenue.
              </p>
            }
          />
        </div>

        {/* Three Oversized Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((m) => (
            <PerformanceMetric
              key={m.label}
              value={m.value}
              label={m.label}
              context={m.context}
              isLime={m.isLime}
            />
          ))}
        </div>

        {/* Conversion Hook for Appointment Funnel */}
        {onBookClick && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#16191C] border border-[#252A2E] rounded-[6px]">
            <div>
              <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#C7F000] font-semibold">
                Territory capacity check
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#F1F0EC] mt-0.5">
                Want to see your territory's high-ticket PPF volume potential?
              </h4>
              <p className="text-xs sm:text-sm text-[#B8BEC4] mt-1 font-sans">
                We'll analyze your pincode radius and share exact realistic numbers for ₹50K+ packages.
              </p>
            </div>
            <Button
              variant="primary"
              size="md"
              onClick={onBookClick}
              icon={<ArrowUpRight className="w-4 h-4 text-[#111315]" />}
              className="shrink-0 w-full sm:w-auto font-bold text-xs sm:text-[13px]"
            >
              SEE IF YOUR STUDIO QUALIFIES →
            </Button>
          </div>
        )}

        {/* Credibility Disclaimer Line */}
        <div className="mt-6 p-4 bg-[#16191C]/60 border border-[#252A2E] rounded-[6px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans text-[#B8BEC4]">
          <span>
            Results depend on studio territory, capacity, response speed, and local market demand.
          </span>
          <span className="text-[#F1F0EC] font-medium">
            100% transparent reporting
          </span>
        </div>
      </div>
    </section>
  );
};
