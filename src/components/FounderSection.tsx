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
      id: 'fig-1',
      name: 'Kunal Shah',
      role: 'Founder, CRED',
      context: 'Founder conversation • High-ticket consumer acquisition & premium behavioral psychology',
      image: '/images/founder_strategy.jpg',
      tag: 'FOUNDER CONVERSATION',
    },
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
            1. SECTION HEADLINE & INTRO
           ========================================================= */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16191C] border border-[#252A2E] rounded-[4px] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
              THE PERSON BEHIND OGLITY
            </span>
          </div>

          <h2 className="font-['Manrope',sans-serif] font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F1F0EC] leading-[1.12]">
            Your Craft Is Car Protection.{' '}
            <span className="text-[#C7F000]">Mine Is Customer Acquisition.</span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-[#B8BEC4] font-sans leading-relaxed">
            I'm Abuzar Gaur, founder of Oglity. Having worked with 6 car detailing and protection businesses, I've focused my work on helping studios attract more relevant enquiries and turn customer interest into real sales opportunities.
          </p>
        </div>

        {/* =========================================================
            2. FOUNDER TWO-COLUMN STORY
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Large Authentic Founder Portrait */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[4/5] w-full rounded-[6px] overflow-hidden border border-[#252A2E] bg-[#16191C] shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                <img
                  src={photoSrc}
                  alt="Abuzar Gaur - Founder, Oglity"
                  className="w-full h-full object-cover object-[center_12%] filter contrast-[1.03] transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/85 via-transparent to-transparent pointer-events-none" />

                {/* Lower tag overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 pointer-events-none">
                  <div className="font-['Manrope',sans-serif] font-bold text-base sm:text-lg text-[#F1F0EC] leading-tight">
                    Abuzar Gaur
                  </div>
                  <div className="text-xs font-mono text-[#C7F000] font-semibold mt-0.5 uppercase tracking-wider">
                    Founder, Oglity
                  </div>
                </div>

                {/* Discrete photo change button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Update photo"
                  className="absolute top-3 right-3 p-1.5 rounded-[4px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                  aria-label="Change photo"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Founder Message & Beliefs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C7F000] font-bold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
              <span>THE PERSON BEHIND OGLITY</span>
            </div>

            <h3 className="font-['Manrope',sans-serif] font-extrabold text-2xl sm:text-3xl text-[#F1F0EC] tracking-tight leading-tight">
              Your Craft Is Car Protection.{' '}
              <span className="text-[#C7F000]">Mine Is Customer Acquisition.</span>
            </h3>

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
        <div className="mt-14 sm:mt-18 pt-10 border-t border-[#252A2E]">
          {/* Marquee Viewport with Edge Gradients */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-hidden py-2">
            {/* Edge Gradients for Smooth In/Out Fading */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-[#111315] via-[#111315]/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-[#111315] via-[#111315]/80 to-transparent z-10" />

            {/* Left to Right Animated Row */}
            <div className="animate-marquee-ltr gap-4 sm:gap-5 py-2">
              {[...figures, ...figures].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[220px] sm:w-[250px] md:w-[275px] shrink-0 bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000]/50 rounded-[8px] overflow-hidden p-3 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Image: 9/16 Aspect Ratio */}
                  <div className="relative aspect-[9/16] w-full rounded-[6px] overflow-hidden border border-[#252A2E] bg-[#111315]">
                    <img
                      src={item.image}
                      alt={`${item.name} - ${item.role}`}
                      className="w-full h-full object-cover object-top filter contrast-[1.03] transition-all duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-2 left-2 pointer-events-none">
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#C7F000] bg-[#111315]/90 border border-[#252A2E] px-1.5 sm:px-2 py-0.5 rounded-[3px] font-bold tracking-wider uppercase">
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
                        className="absolute top-2 right-2 p-1 rounded-[4px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-20"
                        aria-label="Change photo"
                      >
                        <Camera className="w-3 h-3" />
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
                        className="absolute top-2 right-2 p-1 rounded-[4px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-20"
                        aria-label="Change photo"
                      >
                        <Camera className="w-3 h-3" />
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
                        className="absolute top-2 right-2 p-1 rounded-[4px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-20"
                        aria-label="Change photo"
                      >
                        <Camera className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Below Every Column: Name & Details */}
                  <div className="mt-3 pt-2.5 border-t border-[#252A2E] space-y-1">
                    <div className="flex items-center justify-between gap-1.5">
                      <div className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base text-[#F1F0EC] tracking-tight group-hover:text-[#C7F000] transition-colors truncate">
                        {item.name}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono text-[#C7F000] font-semibold shrink-0">
                        {item.role}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#B8BEC4] font-sans leading-relaxed line-clamp-2">
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
