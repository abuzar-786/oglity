import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Calendar, Clock } from 'lucide-react';
import { Button } from './ui/Button';

interface GrowthAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GrowthAuditModal: React.FC<GrowthAuditModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    studioName: '',
    ownerName: '',
    phone: '',
    city: '',
    packageRange: '₹50,000 – ₹75,000',
    preferredDate: 'Tomorrow',
    preferredTime: '11:00 AM - 12:00 PM',
    primaryBottleneck: 'Price shoppers & ghosting',
  });

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111315]/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#111315] border border-[#252A2E] rounded-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Top status bar */}
        <div className="px-6 py-3 bg-[#252A2E]/50 border-b border-[#252A2E] flex items-center justify-between text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#B8BEC4]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C7F000]" />
            <span>Private 30-Min Diagnostic // 1-on-1 Studio Audit</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#B8BEC4] hover:text-[#F1F0EC] p-1 rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C7F000] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {step === 'form' ? (
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[2px] bg-[#C7F000]/10 border border-[#C7F000]/30 text-[#C7F000] text-xs font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-2">
                  <span>Exclusive to 1–2 Studios Per City</span>
                </div>
                <h3
                  id="audit-modal-title"
                  className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-2xl sm:text-3xl text-[#F1F0EC] tracking-tight"
                >
                  Schedule Your Private Growth Audit
                </h3>
                <p className="text-xs sm:text-sm text-[#B8BEC4] mt-1.5 font-sans leading-relaxed">
                  We'll examine your territory's PPF &amp; Ceramic search demand and map out an exact roadmap to add 15+ confirmed showroom inspections monthly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider font-semibold text-[#B8BEC4] mb-1.5">
                      Studio Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Detailing Studio"
                      value={formData.studioName}
                      onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#252A2E]/60 border border-[#252A2E] rounded-[4px] text-sm text-[#F1F0EC] placeholder:text-[#B8BEC4]/40 focus:border-[#C7F000] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider font-semibold text-[#B8BEC4] mb-1.5">
                      Owner / Director Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#252A2E]/60 border border-[#252A2E] rounded-[4px] text-sm text-[#F1F0EC] placeholder:text-[#B8BEC4]/40 focus:border-[#C7F000] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider font-semibold text-[#B8BEC4] mb-1.5">
                      WhatsApp Number (for invite link) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#252A2E]/60 border border-[#252A2E] rounded-[4px] text-sm text-[#F1F0EC] placeholder:text-[#B8BEC4]/40 focus:border-[#C7F000] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider font-semibold text-[#B8BEC4] mb-1.5">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai, Delhi NCR, Bangalore"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#252A2E]/60 border border-[#252A2E] rounded-[4px] text-sm text-[#F1F0EC] placeholder:text-[#B8BEC4]/40 focus:border-[#C7F000] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Direct Appointment Slot Picker */}
                <div className="p-3.5 bg-[#181B1F] border border-[#252A2E] rounded-[4px] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-['Plus_Jakarta_Sans',sans-serif] text-[#C7F000] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      Select Audit Slot
                    </span>
                    <span className="text-[11px] text-[#B8BEC4]/70">30 Min &bull; Zoom / Meet</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="block text-[11px] text-[#B8BEC4] mb-1">Day</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {['Today', 'Tomorrow', 'This Week'].map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredDate: day })}
                            className={`py-1.5 px-2 text-[11px] font-medium border rounded-[2px] text-center transition-colors cursor-pointer ${
                              formData.preferredDate === day
                                ? 'border-[#C7F000] bg-[#C7F000]/10 text-[#C7F000] font-bold'
                                : 'border-[#252A2E] text-[#B8BEC4] hover:border-[#B8BEC4]/40'
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block text-[11px] text-[#B8BEC4] mb-1">Time Slot</span>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full h-8 px-2.5 bg-[#111315] border border-[#252A2E] rounded-[2px] text-xs text-[#F1F0EC] focus:border-[#C7F000] focus:outline-none cursor-pointer"
                      >
                        <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                        <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                        <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                        <option value="06:30 PM - 07:30 PM">06:30 PM - 07:30 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#252A2E]/40 border border-[#252A2E] rounded-[4px] text-xs font-sans text-[#B8BEC4] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C7F000] shrink-0" />
                  <span>
                    Zero commitment. If we cannot add at least 15 high-ticket bookings in your city, we'll tell you upfront.
                  </span>
                </div>

                <div className="pt-2">
                  <Button variant="primary" size="lg" className="w-full font-bold" type="submit">
                    Confirm 30-Min Growth Audit Slot →
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 sm:py-8">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#C7F000]/10 border border-[#C7F000] rounded-[4px] flex items-center justify-center text-[#C7F000]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-[#C7F000] mb-1 font-semibold">
                Audit Session Reserved
              </div>

              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-2xl text-[#F1F0EC] tracking-tight">
                Slot Confirmed for {formData.ownerName || 'Founder'}!
              </h4>

              <p className="mt-3 text-sm text-[#B8BEC4] max-w-md mx-auto font-sans leading-relaxed">
                We've reserved your session for <span className="text-[#C7F000] font-semibold">{formData.preferredDate}</span> ({formData.preferredTime}).
                Our acquisition director is reviewing <span className="text-[#F1F0EC] font-semibold">{formData.studioName || 'your studio'}</span> in {formData.city || 'your area'} and will share the video link on WhatsApp ({formData.phone || 'provided'}).
              </p>

              <div className="mt-6 p-4 bg-[#252A2E]/50 border border-[#252A2E] rounded-[4px] max-w-md mx-auto text-left text-xs font-sans text-[#B8BEC4] space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#B8BEC4]/70">Location / Territory:</span>
                  <span className="text-[#C7F000] font-medium">{formData.city || 'Standard'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B8BEC4]/70">Scheduled Slot:</span>
                  <span className="text-[#F1F0EC] font-medium">{formData.preferredDate} ({formData.preferredTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B8BEC4]/70">Next Step:</span>
                  <span className="text-[#F1F0EC] font-medium">WhatsApp invite within 15 minutes</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="secondary" size="md" onClick={handleReset}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
