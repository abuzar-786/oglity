import React, { useState } from 'react';
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  ChevronRight,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { Button } from './ui/Button';
import { GridBackground } from './ui/GridBackground';

export const FinalCTASection: React.FC = () => {
  // Step in the conversion flow: 'qualify' | 'transition' | 'calendar' | 'confirmed'
  const [funnelStep, setFunnelStep] = useState<'qualify' | 'transition' | 'calendar' | 'confirmed'>('qualify');

  // 10 Qualification Questions State
  const [formData, setFormData] = useState({
    name: '',
    phoneWhatsApp: '',
    studioName: '',
    studioType: 'Yes, both PPF & Ceramic',
    averagePackageValue: '₹50K–₹1L',
    monthlyCustomers: '6–12 cars/month',
    biggestProblem: 'Price shoppers',
    runningPaidAds: 'Yes',
    timeline: 'Immediately',
    investmentReadiness: 'Yes',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calendar selection state
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM - 11:15 AM');

  const validateQualification = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.phoneWhatsApp.trim()) {
      newErrors.phoneWhatsApp = 'Phone / WhatsApp is required';
    } else if (formData.phoneWhatsApp.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phoneWhatsApp = 'Enter a valid phone number (at least 8 digits)';
    }
    if (!formData.studioName.trim()) newErrors.studioName = 'Studio name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleQualificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateQualification()) return;

    // Transition smoothly to Step 2 (Transition State)
    setFunnelStep('transition');
    const container = document.getElementById('qualification-funnel-card');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleProceedToCalendar = () => {
    setFunnelStep('calendar');
    const container = document.getElementById('qualification-funnel-card');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleConfirmBooking = () => {
    setFunnelStep('confirmed');
    const container = document.getElementById('qualification-funnel-card');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleAddToCalendar = () => {
    // Generate .ics calendar download or Google Calendar link
    const title = encodeURIComponent(`15-Min Growth Assessment: ${formData.studioName || 'Studio'} & Oglity`);
    const details = encodeURIComponent(
      `15-minute diagnostic to review PPF & ceramic acquisition numbers, lead qualification, and appointment capacity.\n\nStudio: ${formData.studioName}\nContact: ${formData.name} (${formData.phoneWhatsApp})\nMeeting link sent via WhatsApp.`
    );
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}`;
    try {
      const link = document.createElement('a');
      link.href = gcalUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="qualification"
      className="relative w-full bg-[#111315] text-[#F1F0EC] py-20 sm:py-28 lg:py-32 border-b border-[#252A2E] overflow-hidden"
    >
      <GridBackground theme="dark" showCoordinates={false} className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SECTION 5 — FINAL CTA HEADLINE (Requirement 5) */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.15] text-[#F1F0EC]">
              Ready for more qualified showroom opportunities?
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#B8BEC4] max-w-2xl mx-auto font-sans leading-relaxed">
              Let's look at your current acquisition system, identify the bottleneck and determine whether AQBC™ makes sense for your studio.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('qualification-funnel-card');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                icon={<ArrowUpRight className="w-5 h-5 text-[#111315]" />}
                className="w-full sm:w-auto font-bold px-8 !h-12 sm:!h-14 text-xs sm:text-sm"
              >
                SEE IF YOUR STUDIO QUALIFIES →
              </Button>
              <span className="text-xs font-sans text-[#B8BEC4]/80">
                15 minutes &bull; No obligation &bull; Built for premium PPF &amp; ceramic studios
              </span>
            </div>
          </div>

          {/* SECTION 11 — WHAT HAPPENS AFTER YOU BOOK? (Immediately before the calendar/funnel card) */}
          <div className="mb-10 sm:mb-14 p-6 sm:p-8 bg-[#16191C] border border-[#252A2E] rounded-[6px] max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#C7F000]" />
              <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#C7F000] font-semibold">
                Clarity first
              </span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-xl sm:text-2xl text-[#F1F0EC] tracking-tight">
              What happens after you book?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#B8BEC4] font-sans">
              No generic agency pitch. No pressure.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-4 bg-[#111315] border border-[#252A2E] rounded-[4px]">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-xs text-[#C7F000] tracking-wider mb-1">
                  01 / Review numbers
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm text-[#F1F0EC] mb-1">
                  We review your numbers
                </h4>
                <p className="text-xs text-[#B8BEC4] font-sans leading-relaxed">
                  We'll understand your current acquisition and booking situation.
                </p>
              </div>

              <div className="p-4 bg-[#111315] border border-[#252A2E] rounded-[4px]">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-xs text-[#C7F000] tracking-wider mb-1">
                  02 / Find bottleneck
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm text-[#F1F0EC] mb-1">
                  We find the bottleneck
                </h4>
                <p className="text-xs text-[#B8BEC4] font-sans leading-relaxed">
                  We'll identify whether the problem is traffic, qualification, follow-up or booking.
                </p>
              </div>

              <div className="p-4 bg-[#111315] border border-[#252A2E] rounded-[4px]">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-xs text-[#C7F000] tracking-wider mb-1">
                  03 / Next step
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm text-[#F1F0EC] mb-1">
                  You get a clear next step
                </h4>
                <p className="text-xs text-[#B8BEC4] font-sans leading-relaxed">
                  If there's a fit, we'll show you how AQBC™ could be deployed.
                </p>
              </div>
            </div>
          </div>

          {/* MAIN FUNNEL CARD: QUALIFICATION → TRANSITION → CALENDAR → CONFIRMED */}
          <div
            id="qualification-funnel-card"
            className="max-w-4xl mx-auto p-5 sm:p-8 lg:p-10 bg-[#16191C] border border-[#252A2E] rounded-[6px] shadow-[0_12px_48px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                STEP 1: QUALIFICATION EXPERIENCE (Requirements 6 & 7)
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {funnelStep === 'qualify' && (
              <div>
                {/* Two-Column Desktop Layout (Requirement 6) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                  {/* LEFT: Context & Explanation */}
                  <div className="lg:col-span-4 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#C7F000] font-bold">
                        STEP 01 OF 02
                      </span>
                      <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-lg sm:text-xl text-[#F1F0EC] tracking-tight mt-1">
                        CHECK IF YOUR STUDIO QUALIFIES
                      </h4>
                      <p className="mt-3 text-xs sm:text-sm text-[#B8BEC4] font-sans leading-relaxed">
                        Answer a few questions so we can understand your current acquisition setup before the call.
                      </p>

                      <div className="mt-6 space-y-3 pt-4 border-t border-[#252A2E] text-xs font-sans text-[#B8BEC4]/90">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C7F000]" />
                          <span>Quick questions (60 seconds)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C7F000]" />
                          <span>Direct WhatsApp confirmation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C7F000]" />
                          <span>Zero sales pressure</span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:block mt-8 p-3.5 bg-[#111315] border border-[#252A2E] rounded-[4px] text-xs font-sans text-[#B8BEC4]/80">
                      Target: <strong className="text-[#F1F0EC]">15 qualified opportunities/mo</strong>
                    </div>
                  </div>

                  {/* RIGHT: 10 Qualification Questions Form */}
                  <div className="lg:col-span-8">
                    <form onSubmit={handleQualificationSubmit} className="space-y-4 sm:space-y-5">
                      {/* Q1: Name */}
                      <div>
                        <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#F1F0EC] mb-1">
                          1. Your Name <span className="text-[#C7F000]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikram Sharma"
                          className={`w-full px-3.5 py-2.5 bg-[#111315] border rounded-[4px] text-xs sm:text-sm text-[#F1F0EC] placeholder-[#B8BEC4]/40 focus:outline-none focus:ring-1 focus:ring-[#C7F000] font-sans ${
                            errors.name ? 'border-red-500' : 'border-[#252A2E] hover:border-[#B8BEC4]/40'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-sans">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Q2: WhatsApp / Phone */}
                      <div>
                        <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#F1F0EC] mb-1">
                          2. WhatsApp / Phone <span className="text-[#C7F000]">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phoneWhatsApp}
                          onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                          placeholder="+91 98765 43210"
                          className={`w-full px-3.5 py-2.5 bg-[#111315] border rounded-[4px] text-xs sm:text-sm text-[#F1F0EC] placeholder-[#B8BEC4]/40 focus:outline-none focus:ring-1 focus:ring-[#C7F000] font-sans ${
                            errors.phoneWhatsApp ? 'border-red-500' : 'border-[#252A2E] hover:border-[#B8BEC4]/40'
                          }`}
                        />
                        {errors.phoneWhatsApp && (
                          <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-sans">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phoneWhatsApp}</span>
                          </p>
                        )}
                      </div>

                      {/* Q3: Studio Name */}
                      <div>
                        <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#F1F0EC] mb-1">
                          3. Studio Name <span className="text-[#C7F000]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.studioName}
                          onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                          placeholder="e.g. Apex Detailing Lab (and City)"
                          className={`w-full px-3.5 py-2.5 bg-[#111315] border rounded-[4px] text-xs sm:text-sm text-[#F1F0EC] placeholder-[#B8BEC4]/40 focus:outline-none focus:ring-1 focus:ring-[#C7F000] font-sans ${
                            errors.studioName ? 'border-red-500' : 'border-[#252A2E] hover:border-[#B8BEC4]/40'
                          }`}
                        />
                        {errors.studioName && (
                          <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-sans">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.studioName}</span>
                          </p>
                        )}
                      </div>

                      {/* Q4: Do you provide PPF & Ceramic coating Services? */}
                      <div>
                        <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#F1F0EC] mb-1.5">
                          4. Do you provide PPF &amp; Ceramic coating Services?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {[
                            'Yes, both PPF & Ceramic',
                            'Only PPF',
                            'Only Ceramic Coating',
                            'Planning to launch soon',
                          ].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, studioType: type })}
                              className={`p-2.5 text-xs rounded-[4px] border text-left transition-colors cursor-pointer ${
                                formData.studioType === type
                                  ? 'border-[#C7F000] bg-[#C7F000]/10 text-[#F1F0EC] font-bold'
                                  : 'border-[#252A2E] text-[#B8BEC4] hover:border-[#B8BEC4]/40 bg-[#111315]'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Q5: Average Package Value */}
                      <div>
                        <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#F1F0EC] mb-1.5">
                          5. Average Package Value
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['Under ₹25K', '₹25K–₹50K', '₹50K–₹1L', '₹1L+'].map((tier) => (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => setFormData({ ...formData, averagePackageValue: tier })}
                              className={`p-2 text-xs rounded-[4px] border text-center transition-colors cursor-pointer ${
                                formData.averagePackageValue === tier
                                  ? 'border-[#C7F000] bg-[#C7F000]/10 text-[#C7F000] font-bold'
                                  : 'border-[#252A2E] text-[#B8BEC4] hover:border-[#B8BEC4]/40 bg-[#111315]'
                              }`}
                            >
                              {tier}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Q6: How many PPF / ceramic customers currently per month? */}
                      <div>
                        <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#F1F0EC] mb-1">
                          6. How many PPF / ceramic customers do you currently get per month?
                        </label>
                        <select
                          value={formData.monthlyCustomers}
                          onChange={(e) => setFormData({ ...formData, monthlyCustomers: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#111315] border border-[#252A2E] rounded-[4px] text-xs sm:text-sm text-[#F1F0EC] focus:outline-none focus:ring-1 focus:ring-[#C7F000] font-sans hover:border-[#B8BEC4]/40 cursor-pointer"
                        >
                          <option value="1–5 cars/month">1–5 cars / month</option>
                          <option value="6–12 cars/month">6–12 cars / month</option>
                          <option value="13–20 cars/month">13–20 cars / month</option>
                          <option value="20+ cars/month">20+ cars / month</option>
                        </select>
                      </div>

                      {/* Q7: What is your biggest acquisition problem? */}
                      <div>
                        <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#F1F0EC] mb-1.5">
                          7. What is your biggest acquisition problem?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {[
                            'Not enough leads',
                            'Low-quality leads',
                            'Price shoppers',
                            'Inconsistent bookings',
                            'Poor Meta performance',
                            'Follow-up problems',
                          ].map((prob) => (
                            <button
                              key={prob}
                              type="button"
                              onClick={() => setFormData({ ...formData, biggestProblem: prob })}
                              className={`p-2.5 text-xs rounded-[4px] border text-left transition-colors cursor-pointer ${
                                formData.biggestProblem === prob
                                  ? 'border-[#C7F000] bg-[#C7F000]/10 text-[#F1F0EC] font-bold'
                                  : 'border-[#252A2E] text-[#B8BEC4] hover:border-[#B8BEC4]/40 bg-[#111315]'
                              }`}
                            >
                              {prob}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Q8: Are you currently running paid ads? */}
                      <div>
                        <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#F1F0EC] mb-1.5">
                          8. Are you currently running paid ads?
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Yes', 'No'].map((ans) => (
                            <button
                              key={ans}
                              type="button"
                              onClick={() => setFormData({ ...formData, runningPaidAds: ans })}
                              className={`p-2.5 text-xs rounded-[4px] border text-center transition-colors cursor-pointer ${
                                formData.runningPaidAds === ans
                                  ? 'border-[#C7F000] bg-[#C7F000]/10 text-[#C7F000] font-bold'
                                  : 'border-[#252A2E] text-[#B8BEC4] hover:border-[#B8BEC4]/40 bg-[#111315]'
                              }`}
                            >
                              {ans}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Q9: How quickly are you looking to increase bookings? */}
                      <div>
                        <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#F1F0EC] mb-1.5">
                          9. How quickly are you looking to increase bookings?
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['Immediately', 'Within 30 days', '1–3 months', 'Just researching'].map((speed) => (
                            <button
                              key={speed}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline: speed })}
                              className={`p-2 text-xs rounded-[4px] border text-center transition-colors cursor-pointer ${
                                formData.timeline === speed
                                  ? 'border-[#C7F000] bg-[#C7F000]/10 text-[#F1F0EC] font-bold'
                                  : 'border-[#252A2E] text-[#B8BEC4] hover:border-[#B8BEC4]/40 bg-[#111315]'
                              }`}
                            >
                              {speed}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Submit Qualification Form */}
                      <div className="pt-4 border-t border-[#252A2E]">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          icon={<ArrowUpRight className="w-5 h-5 text-[#111315]" />}
                          className="w-full font-bold text-xs sm:text-sm !h-12 sm:!h-14 tracking-tight"
                        >
                          SEE IF YOUR STUDIO QUALIFIES →
                        </Button>
                        <div className="mt-3 flex items-center justify-between text-xs text-[#B8BEC4]/70 font-sans">
                          <span>Confidential evaluation</span>
                          <span>Next: 15-Minute Growth Assessment Slot</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                STEP 2: CALENDAR TRANSITION STATE (Requirement 8)
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {funnelStep === 'transition' && (
              <div className="text-center py-4 sm:py-6 max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C7F000]/10 border border-[#C7F000]/40 rounded-[4px] text-xs font-['Plus_Jakarta_Sans',sans-serif] text-[#C7F000] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#C7F000]" />
                  <span>PRE-QUALIFICATION PASSED</span>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-2xl sm:text-4xl text-[#F1F0EC] tracking-tight">
                  YOU MAY BE A FIT.
                </h3>

                <p className="text-sm sm:text-base text-[#B8BEC4] font-sans leading-relaxed">
                  Based on your answers, the next step is a 15-minute growth assessment.
                </p>

                {/* WHAT WE'LL COVER LIST (Requirement 8) */}
                <div className="p-6 bg-[#111315] border border-[#252A2E] rounded-[6px] text-left space-y-3">
                  <div className="text-xs font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#C7F000] tracking-wider mb-2">
                    WHAT WE'LL COVER:
                  </div>

                  {[
                    { num: '01', text: 'Your current lead flow' },
                    { num: '02', text: 'Your average package economics' },
                    { num: '03', text: 'Your qualification + follow-up process' },
                    { num: '04', text: 'Your appointment capacity' },
                    { num: '05', text: 'Whether AQBC™ makes sense' },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-center gap-3 py-2 border-b border-[#252A2E]/50 text-xs sm:text-sm font-sans"
                    >
                      <span className="font-bold text-[#C7F000] font-['Plus_Jakarta_Sans',sans-serif]">{item.num}</span>
                      <span className="text-[#F1F0EC]">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleProceedToCalendar}
                    icon={<ArrowUpRight className="w-5 h-5 text-[#111315]" />}
                    className="w-full sm:w-auto font-bold px-8 !h-12 sm:!h-14 text-xs sm:text-sm"
                  >
                    BOOK YOUR GROWTH ASSESSMENT →
                  </Button>
                </div>
              </div>
            )}

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                STEP 3: CALENDAR SECTION (Requirement 9)
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {funnelStep === 'calendar' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Header */}
                <div className="pb-4 border-b border-[#252A2E]">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#C7F000] font-bold">
                      STEP 02 OF 02: CONFIRM APPOINTMENT
                    </span>
                    <button
                      type="button"
                      onClick={() => setFunnelStep('qualify')}
                      className="text-xs text-[#B8BEC4] hover:text-[#F1F0EC] underline cursor-pointer"
                    >
                      Edit qualification answers
                    </button>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-2xl sm:text-3xl text-[#F1F0EC] tracking-tight mt-1">
                    BOOK YOUR GROWTH ASSESSMENT
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#B8BEC4] font-sans leading-relaxed">
                    15 minutes to determine whether Oglity can help increase qualified inspection opportunities for your studio.
                  </p>
                </div>

                {/* Two-Column Layout (Requirement 9) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* LEFT: What we'll cover summary */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-5 bg-[#111315] border border-[#252A2E] rounded-[6px] space-y-3">
                      <div className="text-xs font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#C7F000] tracking-wider">
                        WHAT WE'LL COVER:
                      </div>
                      <ul className="space-y-2.5 text-xs text-[#B8BEC4] font-sans">
                        <li className="flex items-start gap-2">
                          <span className="text-[#C7F000] font-bold">01</span>
                          <span>Your current lead flow &amp; inquiries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C7F000] font-bold">02</span>
                          <span>Your average package economics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C7F000] font-bold">03</span>
                          <span>Your qualification + follow-up process</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C7F000] font-bold">04</span>
                          <span>Your appointment &amp; bay capacity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C7F000] font-bold">05</span>
                          <span>Whether AQBC™ makes sense</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#111315]/60 border border-[#252A2E] rounded-[6px] text-xs font-sans text-[#B8BEC4] space-y-1">
                      <div className="font-semibold text-[#F1F0EC]">Format:</div>
                      <div>1-on-1 private Zoom / Google Meet call.</div>
                      <div className="text-[#C7F000] font-medium pt-1">With an Oglity studio strategist.</div>
                    </div>
                  </div>

                  {/* RIGHT: Calendar Selector */}
                  <div className="lg:col-span-7 p-5 bg-[#111315] border border-[#252A2E] rounded-[6px] space-y-5">
                    {/* Day selector */}
                    <div>
                      <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#F1F0EC] mb-2 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#C7F000]" />
                        <span>Select Date</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Today / ASAP', 'Tomorrow', 'This Week'].map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`p-2.5 text-xs rounded-[4px] border text-center transition-colors cursor-pointer ${
                              selectedDay === day
                                ? 'border-[#C7F000] bg-[#C7F000]/10 text-[#C7F000] font-bold'
                                : 'border-[#252A2E] text-[#B8BEC4] hover:border-[#B8BEC4]/40 bg-[#16191C]'
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Slot selector */}
                    <div>
                      <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#F1F0EC] mb-2 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#C7F000]" />
                        <span>Select 15-Minute Slot</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          '11:00 AM - 11:15 AM',
                          '02:00 PM - 02:15 PM',
                          '04:30 PM - 04:45 PM',
                          '06:30 PM - 06:45 PM',
                        ].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`p-2.5 text-xs rounded-[4px] border text-center transition-colors cursor-pointer ${
                              selectedTime === slot
                                ? 'border-[#C7F000] bg-[#C7F000]/10 text-[#C7F000] font-bold'
                                : 'border-[#252A2E] text-[#B8BEC4] hover:border-[#B8BEC4]/40 bg-[#16191C]'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Confirmation summary */}
                    <div className="p-3 bg-[#16191C] border border-[#252A2E] rounded-[4px] text-xs font-sans text-[#B8BEC4] flex items-center justify-between">
                      <span>Selected: <strong className="text-[#F1F0EC]">{selectedDay}</strong> at <strong className="text-[#C7F000]">{selectedTime}</strong></span>
                      <span className="text-[11px] text-[#B8BEC4]/70">15 mins</span>
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      onClick={handleConfirmBooking}
                      icon={<ArrowUpRight className="w-5 h-5 text-[#111315]" />}
                      className="w-full font-bold !h-12 sm:!h-14 text-xs sm:text-sm"
                    >
                      CONFIRM &amp; RESERVE YOUR TIME →
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                STEP 4: POST-BOOKING EXPERIENCE (Requirement 10)
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {funnelStep === 'confirmed' && (
              <div className="text-center py-6 max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-[#111315] border-2 border-[#C7F000] rounded-full mx-auto flex items-center justify-center text-[#C7F000]">
                  <CheckCircle2 className="w-8 h-8 stroke-[2]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-2xl sm:text-3xl text-[#F1F0EC] tracking-tight">
                    YOUR GROWTH ASSESSMENT IS BOOKED.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8BEC4] font-sans leading-relaxed max-w-xl mx-auto">
                    You're booked. We'll review the information you submitted before the call so we can make the conversation specific to your studio.
                  </p>
                </div>

                {/* NEXT STEPS (Requirement 10) */}
                <div className="p-6 bg-[#111315] border border-[#252A2E] rounded-[6px] text-left space-y-3.5">
                  <div className="text-xs font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#C7F000] tracking-wider mb-2">
                    NEXT STEPS
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm font-sans">
                    <div className="flex items-start gap-3 py-1.5 border-b border-[#252A2E]/50">
                      <span className="font-bold text-[#C7F000]">01</span>
                      <span className="text-[#F1F0EC]">Check your WhatsApp for confirmation.</span>
                    </div>

                    <div className="flex items-start gap-3 py-1.5 border-b border-[#252A2E]/50">
                      <span className="font-bold text-[#C7F000]">02</span>
                      <span className="text-[#F1F0EC]">Have your current lead/bookings numbers available.</span>
                    </div>

                    <div className="flex items-start gap-3 py-1.5 border-b border-[#252A2E]/50">
                      <span className="font-bold text-[#C7F000]">03</span>
                      <span className="text-[#F1F0EC]">Be ready to discuss your average PPF/ceramic package value.</span>
                    </div>

                    <div className="flex items-start gap-3 py-1.5">
                      <span className="font-bold text-[#C7F000]">04</span>
                      <span className="text-[#F1F0EC]">We'll identify the biggest acquisition bottleneck.</span>
                    </div>
                  </div>
                </div>

                {/* ADD TO CALENDAR CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleAddToCalendar}
                    icon={<ArrowUpRight className="w-5 h-5 text-[#111315]" />}
                    className="w-full sm:w-auto font-bold px-8 !h-12 sm:!h-14 text-xs sm:text-sm"
                  >
                    ADD TO CALENDAR →
                  </Button>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setFunnelStep('qualify')}
                    className="text-xs font-sans text-[#B8BEC4] hover:text-[#C7F000] underline cursor-pointer"
                  >
                    Submit another studio evaluation →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </GridBackground>
    </section>
  );
};
