import React, { useState } from 'react';
import {
  Target,
  ClipboardCheck,
  CalendarCheck,
  Handshake,
  TrendingUp,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  Check,
  ChevronUp,
} from 'lucide-react';
import { Button } from './ui/Button';

interface AQBCSectionProps {
  onQualifyClick?: () => void;
}

export const AQBCSection: React.FC<AQBCSectionProps> = ({ onQualifyClick }) => {
  const [activeStepDetail, setActiveStepDetail] = useState<string | null>(null);

  const steps = [
    {
      number: '01',
      title: 'ATTRACT',
      icon: Target,
      tagline: 'Relevant car-owner enquiries',
      headline: 'Reach Car Owners Who Value Premium Protection.',
      body: [
        'We create targeted Meta campaigns designed to attract relevant car owners in your studio\'s local market.',
        'By highlighting premium craftsmanship, protection benefits, and installation quality, we help position your studio beyond price-based competition.',
      ],
      goal: 'Attract relevant enquiries from potential premium buyers.',
    },
    {
      number: '02',
      title: 'QUALIFY',
      icon: ClipboardCheck,
      tagline: 'Screen genuine buying intent',
      headline: 'Identify Serious Buyers Before They Reach Your Team.',
      body: [
        'Not every enquiry is a genuine opportunity.',
        'We screen prospects based on their vehicle, service requirements, budget, location, buying timeline, and interest in visiting your studio.',
      ],
      goal: 'Separate genuine buying interest from casual enquiries and price shoppers.',
    },
    {
      number: '03',
      title: 'BOOK',
      icon: CalendarCheck,
      tagline: 'Follow up and confirm visits',
      headline: 'Turn Qualified Interest Into Confirmed Showroom Appointments.',
      body: [
        'Generating an enquiry is only the beginning. Oglity manages the initial follow-up process using structured messaging, automation, and human intervention where needed.',
        'Together, we move suitable prospects towards confirmed showroom appointments, follow-up reminders, and attendance verification.',
      ],
      goal: 'Help qualified car owners move from initial interest to actual showroom visits.',
    },
    {
      number: '04',
      title: 'CLOSE',
      icon: Handshake,
      tagline: 'Studio consultation and sale',
      headline: 'Your Team Delivers the Experience. You Close the Sale.',
      body: [
        'Once a qualified customer arrives, your team takes over. You inspect the vehicle, understand the customer\'s needs, recommend the right protection package, and close the sale.',
        'Oglity tracks acquisition and appointment outcomes to help you understand how your marketing contributes to real business opportunities.',
      ],
      goal: 'Give your team more opportunities to convert serious car owners into paying customers.',
    },
  ];

  const oglityResponsibilities = [
    'Meta advertising & campaign management',
    'High-intent creative strategy & positioning',
    'Rigorous buyer qualification & screening',
    'Structured multi-channel follow-ups',
    'Confirmed showroom appointment booking',
    'End-to-end CRM tracking & attendance verification',
  ];

  const studioResponsibilities = [
    'In-bay physical vehicle inspection',
    'Understanding customer needs & pain points',
    'PPF & ceramic package presentation (₹60K+)',
    'Technical craftsmanship & installation',
    'Final invoice closure & handover',
  ];

  return (
    <section
      id="system"
      className="relative w-full bg-[#0A0C0E] text-[#F1F0EC] py-20 sm:py-24 lg:py-28 border-b border-[#1E2226] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16191C] border border-[#252A2E] rounded-[4px] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
              INTRODUCING THE AQBC™ CUSTOMER ACQUISITION SYSTEM
            </span>
          </div>

          <h2 className="font-['Manrope',sans-serif] font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.12] text-[#F1F0EC]">
            From First Enquiry to{' '}
            <span className="text-[#C7F000]">Qualified Showroom Visit.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F1F0EC] font-semibold max-w-2xl mx-auto font-sans leading-snug">
            A complete customer acquisition system designed to turn serious car-owner interest into actual showroom opportunities.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-[#B8BEC4] max-w-xl mx-auto font-sans leading-relaxed">
            Most marketing campaigns stop when a lead comes in. AQBC™ connects targeted advertising, buyer qualification, structured follow-ups, showroom bookings, and attendance tracking into one measurable process.
          </p>
        </div>

        {/* =========================================================================
            CONNECTED ACQUISITION FLOW HERO COMPONENT (Exact Recommended Design)
           ========================================================================= */}
        <div className="relative max-w-4xl mx-auto p-5 sm:p-8 lg:p-10 bg-[#0F1215] border border-[#252A2E] rounded-[16px] shadow-2xl">
          {/* Top Stage Header */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-2">
            <span className="text-[#C7F000] font-bold">THE AQBC™ SYSTEM</span>
            <span className="text-[#8F969E]">4 CONNECTED STAGES</span>
          </div>

          <h3 className="font-['Manrope',sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl text-[#F1F0EC] tracking-tight mb-6 sm:mb-8">
            From Enquiry to Showroom.
          </h3>

          {/* 2x2 Connected Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {steps.map((s) => {
              const Icon = s.icon;
              const isSelected = activeStepDetail === s.title;

              return (
                <div
                  key={s.number}
                  onClick={() => setActiveStepDetail(isSelected ? null : s.title)}
                  className={`p-5 sm:p-6 bg-[#16191D] border rounded-[10px] transition-all cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'border-[#C7F000] bg-[#1A1F24] shadow-[0_0_20px_rgba(199,240,0,0.15)]'
                      : 'border-[#262C32] hover:border-[#C7F000]/60 hover:bg-[#181D21]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-[#C7F000]">
                      {s.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#C7F000] transition-transform duration-200 group-hover:scale-110" />
                  </div>

                  <div>
                    <h4 className="font-['Space_Grotesk',sans-serif] font-extrabold text-lg sm:text-xl text-[#F1F0EC] tracking-wide uppercase">
                      {s.title}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#A6ADB5] font-sans">
                      {s.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tracked Throughout Lime Banner */}
          <div className="mt-4 sm:mt-5 p-5 sm:p-6 bg-[#C7F000] text-[#111315] rounded-[10px] shadow-lg">
            <div className="flex items-center gap-2 font-['Space_Grotesk',sans-serif] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-2">
              <TrendingUp className="w-4 h-4 text-[#111315]" />
              <span>TRACKED THROUGHOUT</span>
            </div>
            <div className="font-sans font-semibold text-xs sm:text-sm md:text-[15px] flex flex-wrap items-center gap-2 leading-relaxed text-[#111315]">
              <span>Enquiries</span>
              <span className="opacity-60 font-bold">→</span>
              <span>Qualified Buyers</span>
              <span className="opacity-60 font-bold">→</span>
              <span>Bookings</span>
              <span className="opacity-60 font-bold">→</span>
              <span>Attended Visits</span>
              <span className="opacity-60 font-bold">→</span>
              <span>Sales Outcomes</span>
            </div>
          </div>

          {/* Centered Attendance Confirmation Badge */}
          <div className="mt-6 flex flex-col items-center justify-center gap-4 text-center">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#F1F0EC] font-sans font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#C7F000]" />
              <span>CRM Tracking + Studio Attendance Confirmation</span>
            </div>

            <div className="w-8 h-8 rounded-full bg-[#16191D] border border-[#252A2E] flex items-center justify-center text-[#B8BEC4]">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* =========================================================================
            DETAILED STAGE DEEP DIVE ACCORDION / EXPANDED CARDS
           ========================================================================= */}
        <div className="mt-14 sm:mt-18 max-w-4xl mx-auto space-y-4">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
              DEEP-DIVE INTO EACH STAGE
            </span>
            <h4 className="font-['Manrope',sans-serif] font-bold text-xl sm:text-2xl text-[#F1F0EC] tracking-tight mt-1">
              How Each Phase Converts Interest Into Confirmed Bay Work
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="p-5 sm:p-6 rounded-[8px] border border-[#252A2E] bg-[#111315] hover:border-[#C7F000]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#252A2E]">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-[#C7F000]">
                          {step.number}
                        </span>
                        <span className="text-[#252A2E]">/</span>
                        <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-wider text-[#F1F0EC] uppercase">
                          {step.title}
                        </span>
                      </div>
                      <Icon className="w-4 h-4 text-[#C7F000]" />
                    </div>

                    <h5 className="font-['Manrope',sans-serif] font-bold text-base text-[#F1F0EC] tracking-tight mb-2.5">
                      {step.headline}
                    </h5>

                    <div className="space-y-2 text-xs sm:text-[13px] text-[#B8BEC4] font-sans leading-relaxed mb-4">
                      {step.body.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#252A2E] bg-[#16191C]/70 -mx-2 -mb-2 p-3 rounded-b-[6px]">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#C7F000] uppercase block mb-1">
                      THE GOAL:
                    </span>
                    <p className="text-xs font-sans text-[#F1F0EC] leading-snug font-medium">
                      {step.goal}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* IMPORTANT RESPONSIBILITY SPLIT */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-[#252A2E]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* LEFT — OGLITY BUILDS */}
            <div className="p-6 sm:p-7 bg-[#16191C] border border-[#252A2E] rounded-[6px]">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#252A2E]">
                <span className="w-2 h-2 bg-[#C7F000]" />
                <h3 className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base tracking-wider text-[#F1F0EC] uppercase">
                  Oglity Builds &amp; Manages
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#F1F0EC]">
                {oglityResponsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C7F000] shrink-0 stroke-[2.5] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — YOUR STUDIO CLOSES */}
            <div className="p-6 sm:p-7 bg-[#16191C] border border-[#252A2E] rounded-[6px]">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#252A2E]">
                <span className="w-2 h-2 bg-[#B8BEC4]" />
                <h3 className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base tracking-wider text-[#F1F0EC] uppercase">
                  Your Studio Focuses On
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#F1F0EC]">
                {studioResponsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#B8BEC4] shrink-0 stroke-[2.5] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="font-['Space_Grotesk',sans-serif] font-semibold text-xs sm:text-sm tracking-wider text-[#C7F000] uppercase">
              We build the pipeline. Your team closes the showroom opportunity.
            </p>
          </div>
        </div>

        {/* MID-PAGE QUALIFICATION CTA BLOCK */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-[#16191C] border border-[#252A2E] rounded-[6px] max-w-3xl mx-auto text-center">
          <h4 className="font-['Manrope',sans-serif] font-bold text-xl sm:text-2xl text-[#F1F0EC] tracking-tight">
            See If Your Studio Qualifies for AQBC™
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-[#B8BEC4] font-sans max-w-xl mx-auto leading-relaxed">
            We review your territory demand, existing inquiry flow, and capacity to deliver 20+ showroom appointments each month.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-2">
            <Button
              variant="primary"
              size="lg"
              onClick={onQualifyClick}
              icon={<ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#111315] shrink-0" />}
              className="w-full sm:w-auto font-extrabold px-6 sm:px-8 py-3.5 sm:py-4 !h-auto min-h-[48px] sm:min-h-[54px] text-xs sm:text-sm tracking-wide text-center justify-center shadow-md active:scale-[0.99] transition-all"
            >
              SEE IF YOUR STUDIO QUALIFIES →
            </Button>
            <span className="text-xs font-sans text-[#B8BEC4]/80">
              1-on-1 private diagnostic call with Abuzar Gaur.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
