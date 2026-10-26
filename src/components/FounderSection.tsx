import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';

interface FounderSectionProps {
  onExploreSystem?: () => void;
}

const STORAGE_KEY = 'oglity_founder_photo';
const DEFAULT_FOUNDER_PHOTO = '/my-latest-pro-photo.png';
const ANAND_PHOTO_KEY = 'oglity_anand_mahindra_photo';
const DEFAULT_ANAND_PHOTO = '/anand-mahindra.png';
const ASHNEER_PHOTO_KEY = 'oglity_ashneer_photo';
const DEFAULT_ASHNEER_PHOTO = '/with-ashneer.png';
const BHARGAVA_PHOTO_KEY = 'oglity_bhargava_photo';
const DEFAULT_BHARGAVA_PHOTO = '/bhargava-maruti.png';

export const FounderSection: React.FC<FounderSectionProps> = () => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && !saved.includes('founder_abuzar.jpg')) return saved;
    } catch {
      // ignore
    }
    return DEFAULT_FOUNDER_PHOTO;
  });

  const [anandPhotoSrc, setAnandPhotoSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(ANAND_PHOTO_KEY);
      if (saved && !saved.includes('file_000000007e848210a59bb30e9ca495f5')) return saved;
    } catch {
      // ignore
    }
    return DEFAULT_ANAND_PHOTO;
  });

  const [ashneerPhotoSrc, setAshneerPhotoSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(ASHNEER_PHOTO_KEY);
      if (saved) return saved;
    } catch {
      // ignore
    }
    return DEFAULT_ASHNEER_PHOTO;
  });

  const [bhargavaPhotoSrc, setBhargavaPhotoSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(BHARGAVA_PHOTO_KEY);
      if (saved) return saved;
    } catch {
      // ignore
    }
    return DEFAULT_BHARGAVA_PHOTO;
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const anandFileInputRef = useRef<HTMLInputElement>(null);
  const ashneerFileInputRef = useRef<HTMLInputElement>(null);
  const bhargavaFileInputRef = useRef<HTMLInputElement>(null);

  // Load custom photo if saved in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && !saved.includes('founder_abuzar.jpg')) {
        setPhotoSrc(saved);
      } else {
        setPhotoSrc(DEFAULT_FOUNDER_PHOTO);
      }
      const savedAnand = localStorage.getItem(ANAND_PHOTO_KEY);
      if (savedAnand && !savedAnand.includes('file_000000007e848210a59bb30e9ca495f5')) {
        setAnandPhotoSrc(savedAnand);
      }
      const savedAshneer = localStorage.getItem(ASHNEER_PHOTO_KEY);
      if (savedAshneer) {
        setAshneerPhotoSrc(savedAshneer);
      }
      const savedBhargava = localStorage.getItem(BHARGAVA_PHOTO_KEY);
      if (savedBhargava) {
        setBhargavaPhotoSrc(savedBhargava);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleAnandFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      if (base64) {
        setAnandPhotoSrc(base64);
        try {
          localStorage.setItem(ANAND_PHOTO_KEY, base64);
        } catch {
          // ignore
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAshneerFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      if (base64) {
        setAshneerPhotoSrc(base64);
        try {
          localStorage.setItem(ASHNEER_PHOTO_KEY, base64);
        } catch {
          // ignore
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleBhargavaFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      if (base64) {
        setBhargavaPhotoSrc(base64);
        try {
          localStorage.setItem(BHARGAVA_PHOTO_KEY, base64);
        } catch {
          // ignore
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      if (base64) {
        setPhotoSrc(base64);
        try {
          localStorage.setItem(STORAGE_KEY, base64);
        } catch {
          // ignore storage error
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const figures = [
    {
      id: 'fig-2',
      name: 'Anand Mahindra',
      role: 'CEO of Mahindra Group',
      context: 'Executive conversation • Automotive manufacturing vision, scale & enterprise leadership',
      image: anandPhotoSrc,
      tag: 'AUTOMOTIVE LEADERSHIP',
      isAnand: true,
    },
    {
      id: 'fig-3',
      name: 'Ashneer Grover',
      role: 'Founder, BharatPe',
      context: 'Founder conversation • Unit economics, capital efficiency & operator velocity',
      image: ashneerPhotoSrc,
      tag: 'OPERATOR CONVERSATION',
      isAshneer: true,
    },
    {
      id: 'fig-4',
      name: 'R.C. Bhargava',
      role: 'Chairman, Maruti Suzuki',
      context: 'Automotive dialogue • Scale manufacturing, OEM precision & consumer mobility ecosystems',
      image: bhargavaPhotoSrc,
      tag: 'AUTOMOTIVE LEADERSHIP',
      isBhargava: true,
    },
  ];

  return (
    <section
      id="founder"
      className="relative w-full bg-[#111315] text-[#F1F0EC] py-16 sm:py-24 border-b border-[#252A2E] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Anchor for results navigation */}
      <div id="results" className="scroll-mt-20 sm:scroll-mt-24" />

      {/* Hidden file inputs for photo upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileSelect(file);
        }}
        className="hidden"
        aria-label="Upload Founder Photo"
      />
      <input
        ref={anandFileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleAnandFileSelect(file);
        }}
        className="hidden"
        aria-label="Upload Anand Mahindra Photo"
      />
      <input
        ref={ashneerFileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleAshneerFileSelect(file);
        }}
        className="hidden"
        aria-label="Upload Ashneer Grover Photo"
      />
      <input
        ref={bhargavaFileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleBhargavaFileSelect(file);
        }}
        className="hidden"
        aria-label="Upload R.C. Bhargava Photo"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. SECTION EYEBROW
           ========================================================= */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16191C] border border-[#252A2E] rounded-[4px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
              THE PERSON BEHIND OGLITY
            </span>
          </div>
        </div>

        {/* =========================================================
            2. FOUNDER TWO-COLUMN STORY
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Authentic Founder Portrait - Compact Sizing */}
          <div className="lg:col-span-4 w-full flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-[260px] sm:max-w-[290px] lg:max-w-[310px]">
              <div className="relative aspect-[4/5] max-h-[380px] w-full rounded-[6px] overflow-hidden border border-[#252A2E] bg-[#16191C] shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
                <img
                  src={photoSrc}
                  alt="Abuzar Gaur - Founder, Oglity"
                  className="w-full h-full object-cover object-[center_12%] filter contrast-[1.03] transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/85 via-transparent to-transparent pointer-events-none" />

                {/* Lower tag overlay */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 pointer-events-none">
                  <div className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base text-[#F1F0EC] leading-tight">
                    Abuzar Gaur
                  </div>
                  <div className="text-[11px] font-mono text-[#C7F000] font-semibold mt-0.5 uppercase tracking-wider">
                    Founder, Oglity
                  </div>
                </div>

                {/* Discrete photo change button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Update photo"
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-[4px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                  aria-label="Change photo"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Founder Message & Beliefs */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5">
            <h2 className="font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl text-[#F1F0EC] tracking-tight leading-tight">
              Your Craft Is Car Protection.{' '}
              <span className="text-[#C7F000]">Mine Is Customer Acquisition.</span>
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#B8BEC4] font-sans leading-relaxed">
              <p className="text-sm sm:text-base text-[#F1F0EC] font-semibold">
                I'm Abuzar Gaur, founder of Oglity.
              </p>

              <p>
                Having worked with 6 car detailing and protection businesses, I've focused my work on helping studios attract more relevant enquiries and turn customer interest into real sales opportunities.
              </p>

              <p className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase pt-1">
                Here's something I strongly believe:
              </p>

              {/* Belief Highlight Card */}
              <div className="p-4 sm:p-5 bg-[#16191C] border-2 border-[#C7F000] rounded-[6px]">
                <p className="text-sm sm:text-base font-bold text-[#F1F0EC] leading-snug">
                  Premium craftsmanship deserves premium customers—not a constant race to offer the cheapest price.
                </p>
              </div>

              <p>
                That's why Oglity focuses on more than generating leads.
              </p>

              <p>
                Through our AQBC™ Customer Acquisition System, we connect targeted advertising, buyer qualification, follow-ups, appointment booking and tracking into one structured acquisition process.
              </p>

              <p>
                So your team can focus on what it does best: delivering quality PPF and ceramic coating services, and converting suitable showroom visitors into customers.
              </p>

              {/* Handover Highlight Badge */}
              <div className="p-3.5 bg-[#16191C] border border-[#252A2E] rounded-[4px] text-xs sm:text-sm font-bold text-[#C7F000]">
                We handle customer acquisition. You focus on delivering exceptional workmanship.
              </div>
            </div>

            <div className="pt-2">
              <div className="font-['Manrope',sans-serif] font-bold text-base text-[#F1F0EC]">
                Abuzar Gaur
              </div>
              <div className="text-xs font-mono text-[#C7F000] font-semibold mt-0.5 uppercase tracking-wider">
                Founder, Oglity
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            3. PHOTO CARDS: SINGLE ROW MOVING LEFT TO RIGHT (Marquee-LTR)
           ========================================================= */}
        <div className="mt-10 sm:mt-14 pt-7 border-t border-[#252A2E]">
          {/* Marquee Viewport with Edge Gradients */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-hidden py-1.5">
            {/* Edge Gradients for Smooth In/Out Fading */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-[#111315] via-[#111315]/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-[#111315] via-[#111315]/80 to-transparent z-10" />

            {/* Left to Right Animated Row */}
            <div className="animate-marquee-ltr gap-3 sm:gap-4 py-1.5">
              {[...figures, ...figures].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[160px] sm:w-[185px] md:w-[205px] shrink-0 bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000]/50 rounded-[7px] overflow-hidden p-2 sm:p-2.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Image: Compact Balanced Aspect Ratio */}
                  <div className="relative aspect-[3/4] w-full rounded-[5px] overflow-hidden border border-[#252A2E] bg-[#111315]">
                    <img
                      src={item.image}
                      alt={`${item.name} - ${item.role}`}
                      className="w-full h-full object-cover object-top filter contrast-[1.03] transition-all duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-1.5 left-1.5 pointer-events-none">
                      <span className="text-[8px] sm:text-[9px] font-mono text-[#C7F000] bg-[#111315]/90 border border-[#252A2E] px-1 sm:px-1.5 py-0.5 rounded-[2px] font-bold tracking-wider uppercase">
                        {item.tag}
                      </span>
                    </div>

                    {/* Camera change trigger for photo uploads */}
                    {'isAnand' in item && item.isAnand && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          anandFileInputRef.current?.click();
                        }}
                        title="Update photo"
                        className="absolute top-1.5 right-1.5 p-1 rounded-[3px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-20"
                        aria-label="Change photo"
                      >
                        <Camera className="w-2.5 h-2.5" />
                      </button>
                    )}
                    {'isAshneer' in item && item.isAshneer && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          ashneerFileInputRef.current?.click();
                        }}
                        title="Update photo"
                        className="absolute top-1.5 right-1.5 p-1 rounded-[3px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-20"
                        aria-label="Change photo"
                      >
                        <Camera className="w-2.5 h-2.5" />
                      </button>
                    )}
                    {'isBhargava' in item && item.isBhargava && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          bhargavaFileInputRef.current?.click();
                        }}
                        title="Update photo"
                        className="absolute top-1.5 right-1.5 p-1 rounded-[3px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-20"
                        aria-label="Change photo"
                      >
                        <Camera className="w-2.5 h-2.5" />
                      </button>
                    )}
                  </div>

                  {/* Below Every Column: Name & Details */}
                  <div className="mt-2 pt-1.5 border-t border-[#252A2E] space-y-0.5">
                    <div className="flex items-center justify-between gap-1">
                      <div className="font-['Manrope',sans-serif] font-bold text-xs sm:text-[13px] text-[#F1F0EC] tracking-tight group-hover:text-[#C7F000] transition-colors truncate">
                        {item.name}
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#C7F000] font-semibold shrink-0">
                        {item.role}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#B8BEC4] font-sans leading-snug line-clamp-2">
                      {item.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subtitle Beneath Moving Row */}
          <div className="mt-8 text-center">
            <p className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base text-[#F1F0EC]">
              Real people. Real conversations. Real operator experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
