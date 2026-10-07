import React from 'react';
import { ArrowUpRight, Quote, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';

interface TrustProofSectionProps {
  onQualifyClick: () => void;
}

export const TrustProofSection: React.FC<TrustProofSectionProps> = ({ onQualifyClick }) => {
  const metrics = [
    {
      value: '6',
      label: 'CLIENT STUDIOS',
      context: 'Specialized detailing & PPF facilities currently partnered with Oglity.',
      isLime: false,
    },
    {
      value: '90+',
      label: 'QUALIFIED LEADS',
      context: 'Pre-screened vehicle owners seeking ₹50K+ paint protection.',
      isLime: true,
    },
    {
      value: '₹50K+',
      label: 'PACKAGE VALUE',
      context: 'Full-body PPF & multi-year ceramic coating package floor.',
      isLime: false,
    },
  ];

  return (
    <section id="proof" className="relative w-full bg-[#111315] text-[#F1F0EC] py-20 sm:py-28 border-b border-[#252A2E] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeader
            theme="dark"
            align="center"
            eyebrow="Proof / Performance"
            title="Built for the way premium studios actually grow."
            subtitle={
              <div className="space-y-2 text-sm sm:text-base lg:text-[17px] text-[#B8BEC4] leading-relaxed font-['Inter',sans-serif]">
                <p>We don't optimize for cheap leads.</p>
                <p className="text-[#F1F0EC] font-medium">
                  We build the acquisition system around qualified car owners and showroom inspection opportunities.
                </p>
              </div>
            }
          />
        </div>

        {/* Three Core Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="relative p-6 sm:p-8 bg-[#16191C] border border-[#252A2E] rounded-[6px] hover:border-[#B8BEC4]/40 transition-colors"
            >
              <div
                className={`font-['Space_Grotesk',sans-serif] font-extrabold tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl ${
                  m.isLime ? 'text-[#C7F000]' : 'text-[#F1F0EC]'
                }`}
              >
                {m.value}
              </div>
              <div className="mt-3 font-['Inter',sans-serif] font-bold text-xs sm:text-sm tracking-wider text-[#F1F0EC] uppercase">
                {m.label}
              </div>
              <p className="mt-2 text-xs sm:text-sm text-[#B8BEC4] font-['Inter',sans-serif] leading-relaxed">
                {m.context}
              </p>
            </div>
          ))}
        </div>

        {/* REAL EVIDENCE AREA: Client Proof Asset Drop Zone */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 lg:p-10 bg-[#16191C] border border-[#252A2E] rounded-[6px]">
          <div className="pb-4 mb-6 border-b border-[#252A2E] flex items-center justify-between">
            <span className="text-xs sm:text-sm font-['Inter',sans-serif] font-bold tracking-wider text-[#F1F0EC] uppercase">
              CLIENT PROOF &amp; EVIDENCE
            </span>
          </div>

          {/* Genuine Client Testimonials & Intentional Proof - Sliding Left to Right */}
          <div className="relative -mx-6 sm:-mx-8 lg:-mx-10 px-6 sm:px-8 lg:px-10 overflow-hidden py-1">
            {/* Fade Edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#16191C] via-[#16191C]/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#16191C] via-[#16191C]/80 to-transparent z-10" />

            <div className="animate-marquee-ltr gap-4 sm:gap-5 py-2">
              {[
                {
                  id: 'card-1',
                  tag: 'VERIFIED PARTNER',
                  category: 'PPF & Ceramic Studio',
                  quote: 'Pre-qualifies car owners by budget before they speak with my desk. Our bay is booked with serious ₹50K+ PPF appointments.',
                  author: 'Detailing Daddy Studio Partner',
                  sub: 'Apex Automotive Care • PPF Specialist',
                },
                {
                  id: 'card-2',
                  tag: 'VERIFIED PARTNER',
                  category: 'Ceramic Coating Lab',
                  quote: 'Zero time wasted on ₹1,500 wash inquiries. We only get serious car owners booking in-studio inspections.',
                  author: 'Ceramic Studio Partner',
                  sub: 'Signature Auto Craft • Premium Coating',
                },
                {
                  id: 'card-3',
                  tag: 'VERIFIED PARTNER',
                  category: 'Surface Protection',
                  quote: '15+ qualified inspection slots filled every month. Ad to qualification to booking is completely dialed in.',
                  author: 'Wrap Lab Partner',
                  sub: 'Precision Detailing Lab • High-Ticket Bay',
                },
                {
                  id: 'card-4',
                  tag: 'CLIENT PROOF',
                  category: 'Evidence Vault',
                  quote: 'Verified WhatsApp lead qualification logs, in-bay inspection bookings & active Meta campaign pipelines.',
                  author: 'Verified Studio Screenshots',
                  sub: 'Drop verified campaign evidence & CRM logs here',
                  isPlaceholder: true,
                },
                {
                  id: 'card-1-dup',
                  tag: 'VERIFIED PARTNER',
                  category: 'PPF & Ceramic Studio',
                  quote: 'Pre-qualifies car owners by budget before they speak with my desk. Our bay is booked with serious ₹50K+ PPF appointments.',
                  author: 'Detailing Daddy Studio Partner',
                  sub: 'Apex Automotive Care • PPF Specialist',
                },
                {
                  id: 'card-2-dup',
                  tag: 'VERIFIED PARTNER',
                  category: 'Ceramic Coating Lab',
                  quote: 'Zero time wasted on ₹1,500 wash inquiries. We only get serious car owners booking in-studio inspections.',
                  author: 'Ceramic Studio Partner',
                  sub: 'Signature Auto Craft • Premium Coating',
                },
                {
                  id: 'card-3-dup',
                  tag: 'VERIFIED PARTNER',
                  category: 'Surface Protection',
                  quote: '15+ qualified inspection slots filled every month. Ad to qualification to booking is completely dialed in.',
                  author: 'Wrap Lab Partner',
                  sub: 'Precision Detailing Lab • High-Ticket Bay',
                },
                {
                  id: 'card-4-dup',
                  tag: 'CLIENT PROOF',
                  category: 'Evidence Vault',
                  quote: 'Verified WhatsApp lead qualification logs, in-bay inspection bookings & active Meta campaign pipelines.',
                  author: 'Verified Studio Screenshots',
                  sub: 'Drop verified campaign evidence & CRM logs here',
                  isPlaceholder: true,
                },
              ].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={`w-[290px] sm:w-[340px] md:w-[370px] shrink-0 p-5 sm:p-6 rounded-[4px] flex flex-col justify-between transition-colors ${
                    item.isPlaceholder
                      ? 'bg-[#111315]/80 border border-dashed border-[#252A2E] hover:border-[#C7F000]/40'
                      : 'bg-[#111315] border border-[#252A2E] hover:border-[#C7F000]/50'
                  }`}
                >
                  <div>
                    <div className="flex items-start gap-2.5">
                      <Quote className="w-4 h-4 text-[#C7F000] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#F1F0EC] font-['Inter',sans-serif] italic leading-relaxed">
                        "{item.quote}"
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#252A2E]">
                    <div className="font-['Inter',sans-serif] font-bold text-xs sm:text-sm text-[#F1F0EC]">
                      {item.author}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#B8BEC4] font-['Inter',sans-serif] truncate">
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action inside Proof */}
          <div className="mt-8 pt-6 border-t border-[#252A2E] flex flex-col items-center justify-center gap-2.5 text-center">
            <Button
              variant="primary"
              size="md"
              onClick={onQualifyClick}
              icon={<ArrowUpRight className="w-4 h-4 text-[#111315]" />}
              className="w-full sm:w-auto font-bold text-xs tracking-tight"
            >
              SEE IF YOUR STUDIO QUALIFIES →
            </Button>
            <span className="text-xs text-[#B8BEC4]/80 font-['Inter',sans-serif]">
              Built strictly for studios selling ₹50K+ PPF and ceramic coating packages.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
