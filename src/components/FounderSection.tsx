import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Camera } from 'lucide-react';

interface FounderSectionProps {
  onQualifyClick?: () => void;
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
const RAAJ_PHOTO_KEY = 'oglity_raaj_photo';
const DEFAULT_RAAJ_PHOTO = '/raaj-shamani.png';

export const FounderSection: React.FC<FounderSectionProps> = ({
  onExploreSystem,
}) => {
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
  const [raajPhotoSrc, setRaajPhotoSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(RAAJ_PHOTO_KEY);
      if (saved) return saved;
    } catch {
      // ignore
    }
    return DEFAULT_RAAJ_PHOTO;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const anandFileInputRef = useRef<HTMLInputElement>(null);
  const ashneerFileInputRef = useRef<HTMLInputElement>(null);
  const bhargavaFileInputRef = useRef<HTMLInputElement>(null);
  const raajFileInputRef = useRef<HTMLInputElement>(null);

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
      const savedRaaj = localStorage.getItem(RAAJ_PHOTO_KEY);
      if (savedRaaj) {
        setRaajPhotoSrc(savedRaaj);
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

  const handleRaajFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      if (base64) {
        setRaajPhotoSrc(base64);
        try {
          localStorage.setItem(RAAJ_PHOTO_KEY, base64);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  return (
    <section
      id="founder"
      className="relative w-full bg-[#111315] text-[#F1F0EC] py-20 sm:py-28 border-b border-[#252A2E] overflow-hidden"
    >
      {/* Hidden file input for photo upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
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
      <input
        ref={raajFileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleRaajFileSelect(file);
        }}
        className="hidden"
        aria-label="Upload Raaj Shamani Photo"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. SECTION HEADLINE & SUPPORTING COPY
           ========================================================= */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16191C] border border-[#252A2E] rounded-[4px] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#C7F000] uppercase">
              Operator-Led Growth
            </span>
          </div>

          <h2 className="font-['Manrope',sans-serif] font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F1F0EC] leading-[1.12]">
            BUILT BY AN OPERATOR.
            <br />
            BUILT FOR OPERATORS.
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#B8BEC4] font-sans leading-relaxed">
            Oglity was built around a simple belief: premium studios don't need more random leads. They need a customer-acquisition system that creates qualified showroom opportunities.
          </p>
        </div>

        {/* =========================================================
            2. FOUNDER INTRO: TWO-COLUMN LAYOUT
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Large Authentic Founder Portrait */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[4/5] w-full rounded-[6px] overflow-hidden border border-[#252A2E] bg-[#16191C] shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                <img
                  src={photoSrc}
                  alt="Abuzar Gaur - Founder, Oglity"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_12%] filter contrast-[1.03] transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/85 via-transparent to-transparent pointer-events-none" />

                {/* Lower tag overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 pointer-events-none">
                  <div className="font-['Manrope',sans-serif] font-bold text-base sm:text-lg text-[#F1F0EC] leading-tight">
                    Abuzar Gaur
                  </div>
                  <div className="text-xs font-mono text-[#C7F000] font-semibold mt-0.5">
                    Founder, Oglity
                  </div>
                </div>

                {/* Discrete photo change button for customization */}
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

          {/* RIGHT: Founder Message & Background */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C7F000] font-bold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
              <span>FOUNDER / OGLITY</span>
            </div>

            <h3 className="font-['Manrope',sans-serif] font-bold text-2xl sm:text-3xl text-[#F1F0EC] tracking-tight leading-tight">
              THE PERSON BEHIND THE SYSTEM.
            </h3>

            <div className="space-y-4 text-xs sm:text-sm lg:text-[15px] text-[#B8BEC4] font-sans leading-relaxed">
              <p>
                Abuzar Gaur started Oglity after seeing how high-ticket PPF and ceramic coating studios were getting burned by generic lead generation. Most marketing agencies deliver contact sheets filled with price shoppers who ghost the studio after receiving a quote.
              </p>
              <p>
                Having spent time inside active automotive facilities and studying sales conversations with luxury car owners, he engineered a process built around actual showroom economics: pre-screening prospects by vehicle condition, timeline, and package value before they ever speak with a sales advisor.
              </p>
              <p className="text-[#F1F0EC] font-medium">
                The objective is straightforward: protect your shop's time, eliminate low-intent inquiries, and deliver verified showroom inspections for ₹50K+ packages.
              </p>
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
            3. PHOTO WALL: MOVING ROW (RIGHT TO LEFT)
               Displays 2 columns visible on screen, remaining flowing smoothly
           ========================================================= */}
        <div className="mt-16 sm:mt-20">
          {/* Marquee Viewport with Edge Gradients */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-hidden py-2">
            {/* Fade Edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-[#111315] via-[#111315]/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-[#111315] via-[#111315]/80 to-transparent z-10" />

            {/* Continuous Row Moving Right to Left */}
            <div className="animate-marquee gap-5 sm:gap-6 py-2">
              {[
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
                {
                  id: 'fig-5',
                  name: 'Raaj Shamani',
                  role: 'Founder, House of X • Podcaster',
                  context: 'Founder conversation • Attention systems, digital distribution & consumer brand scaling',
                  image: raajPhotoSrc,
                  tag: 'FOUNDER CONVERSATION',
                  isRaaj: true,
                },
              ].concat([
                {
                  id: 'fig-1-dup',
                  name: 'Kunal Shah',
                  role: 'Founder, CRED',
                  context: 'Founder conversation • High-ticket consumer acquisition & premium behavioral psychology',
                  image: '/images/founder_strategy.jpg',
                  tag: 'FOUNDER CONVERSATION',
                },
                {
                  id: 'fig-2-dup',
                  name: 'Anand Mahindra',
                  role: 'CEO of Mahindra Group',
                  context: 'Executive conversation • Automotive manufacturing vision, scale & enterprise leadership',
                  image: anandPhotoSrc,
                  tag: 'AUTOMOTIVE LEADERSHIP',
                  isAnand: true,
                },
                {
                  id: 'fig-3-dup',
                  name: 'Ashneer Grover',
                  role: 'Founder, BharatPe',
                  context: 'Founder conversation • Unit economics, capital efficiency & operator velocity',
                  image: ashneerPhotoSrc,
                  tag: 'OPERATOR CONVERSATION',
                  isAshneer: true,
                },
                {
                  id: 'fig-4-dup',
                  name: 'R.C. Bhargava',
                  role: 'Chairman, Maruti Suzuki',
                  context: 'Automotive dialogue • Scale manufacturing, OEM precision & consumer mobility ecosystems',
                  image: bhargavaPhotoSrc,
                  tag: 'AUTOMOTIVE LEADERSHIP',
                  isBhargava: true,
                },
                {
                  id: 'fig-5-dup',
                  name: 'Raaj Shamani',
                  role: 'Founder, House of X • Podcaster',
                  context: 'Founder conversation • Attention systems, digital distribution & consumer brand scaling',
                  image: raajPhotoSrc,
                  tag: 'FOUNDER CONVERSATION',
                  isRaaj: true,
                },
              ]).map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[52vw] min-w-[185px] max-w-[215px] sm:min-w-0 sm:max-w-none sm:w-[235px] md:w-[260px] lg:w-[285px] shrink-0 bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000]/50 rounded-[6px] overflow-hidden p-2.5 sm:p-3.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Column Image: 9:16 Aspect Ratio */}
                  <div className="relative aspect-[9/16] w-full rounded-[4px] overflow-hidden border border-[#252A2E] bg-[#111315]">
                    <img
                      src={item.image}
                      alt={`${item.name} - ${item.role}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter contrast-[1.03] transition-all duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 pointer-events-none">
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
                        className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 p-1 rounded-[4px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-20"
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
                        className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 p-1 rounded-[4px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-20"
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
                        className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 p-1 rounded-[4px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-20"
                        aria-label="Change photo"
                      >
                        <Camera className="w-3 h-3" />
                      </button>
                    )}
                    {'isRaaj' in item && item.isRaaj && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          raajFileInputRef.current?.click();
                        }}
                        title="Update photo"
                        className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 p-1 rounded-[4px] bg-[#111315]/80 hover:bg-[#16191C] border border-[#252A2E] hover:border-[#C7F000] text-[#B8BEC4] hover:text-[#C7F000] opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-20"
                        aria-label="Change photo"
                      >
                        <Camera className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Below Every Column: Name of Known Figures & Factual Details */}
                  <div className="mt-2.5 sm:mt-3.5 pt-2 sm:pt-3 border-t border-[#252A2E] space-y-0.5 sm:space-y-1">
                    <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                      <div className="font-['Manrope',sans-serif] font-bold text-sm sm:text-base md:text-lg text-[#F1F0EC] tracking-tight group-hover:text-[#C7F000] transition-colors truncate">
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
        </div>

        {/* =========================================================
            4. TRUST COPY & OFFER CONNECTION
           ========================================================= */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-[#252A2E] text-center max-w-2xl mx-auto space-y-4">
          <p className="font-['Manrope',sans-serif] font-bold text-base sm:text-lg text-[#F1F0EC]">
            Real people. Real conversations. Real operator experience.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs text-[#B8BEC4] font-sans">
              That experience shaped how we built AQBC.
            </span>

            <button
              type="button"
              onClick={onExploreSystem}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C7F000] hover:text-white transition-colors cursor-pointer group py-1 px-2 rounded-[4px] hover:bg-[#16191C]"
            >
              <span>SEE HOW AQBC WORKS</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
