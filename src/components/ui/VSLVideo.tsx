import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Upload } from 'lucide-react';

interface VSLVideoProps {
  initialVideoSrc?: string;
  className?: string;
}

export const VSLVideo: React.FC<VSLVideoProps> = ({
  initialVideoSrc = '',
  className = '',
}) => {
  const [videoSrc, setVideoSrc] = useState<string>(initialVideoSrc);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setIsPlaying(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }, 100);
    }
  };

  const togglePlay = () => {
    if (!videoSrc) {
      fileInputRef.current?.click();
      return;
    }
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percent = clickX / rect.width;
      videoRef.current.currentTime = percent * (videoRef.current.duration || 0);
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div
      className={`relative w-full aspect-video rounded-[6px] overflow-hidden border border-[#252A2E] bg-[#15181B] group shadow-2xl transition-all duration-300 hover:border-[#C7F000]/40 ${className}`}
      onClick={togglePlay}
    >
      {/* Hidden file input to attach VSL video */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/webm,video/quicktime,video/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload VSL Video"
      />

      {/* Decorative technical corner accents */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#C7F000]/60 pointer-events-none z-20" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#C7F000]/60 pointer-events-none z-20" />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#C7F000]/60 pointer-events-none z-20" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#C7F000]/60 pointer-events-none z-20" />

      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />
      ) : (
        /* Video placeholder: High-fidelity cinematic detailing bay with HUD telemetry */
        <div className="absolute inset-0 flex items-center justify-center bg-[#0D0F11] overflow-hidden select-none">
          {/* Hexagonal Honeycomb Detailing Studio Lights Simulation */}
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hex-studio-grid" width="48" height="83.14" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
                  <path
                    d="M48 0L24 13.86L0 0v27.71L24 41.57L48 27.71zm0 55.43L24 69.28L0 55.43V83.14L24 97L48 83.14z"
                    fill="none"
                    stroke="#C7F000"
                    strokeWidth="0.75"
                    strokeOpacity="0.4"
                  />
                  <path
                    d="M24 13.86v27.71M24 69.28V97"
                    fill="none"
                    stroke="#252A2E"
                    strokeWidth="0.75"
                  />
                </pattern>
                <radialGradient id="vsl-ambient" cx="50%" cy="50%" r="65%">
                  <stop offset="0%" stopColor="#C7F000" stopOpacity="0.12" />
                  <stop offset="60%" stopColor="#111315" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#0A0C0E" stopOpacity="0.95" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex-studio-grid)" />
              <rect width="100%" height="100%" fill="url(#vsl-ambient)" />
            </svg>
          </div>

          {/* Luxury Supercar Silhouette in Detailing Bay */}
          <div className="absolute inset-x-0 bottom-6 sm:bottom-8 flex justify-center opacity-85 pointer-events-none">
            <svg
              viewBox="0 0 520 180"
              className="w-[85%] max-w-[420px] h-auto text-[#252A2E]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Studio Ground Light Reflections */}
              <ellipse cx="260" cy="165" rx="220" ry="8" fill="#C7F000" fillOpacity="0.15" filter="blur(6px)" />
              <ellipse cx="260" cy="165" rx="180" ry="4" fill="#F1F0EC" fillOpacity="0.08" />

              {/* Aerodynamic Supercar Profile */}
              <path
                d="M40 145 C60 145, 75 142, 95 130 C125 110, 160 95, 210 90 C250 86, 310 88, 355 102 C395 114, 435 128, 475 138 C490 142, 495 145, 500 145"
                stroke="#404850"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <path
                d="M60 145 C80 135, 110 130, 140 115 C175 98, 220 82, 275 80 C340 78, 380 95, 415 112 C445 125, 465 140, 480 145"
                stroke="#C7F000"
                strokeWidth="1.2"
                strokeOpacity="0.7"
              />
              {/* Roofline / Cockpit */}
              <path
                d="M185 92 C210 65, 255 58, 305 60 C345 62, 375 75, 395 92"
                stroke="#F1F0EC"
                strokeWidth="1.8"
                strokeOpacity="0.6"
              />
              {/* Headlight LED DRL Accent */}
              <path d="M470 130 L495 136" stroke="#C7F000" strokeWidth="2.5" strokeLinecap="round" />
              {/* Tail light LED Accent */}
              <path d="M65 134 L85 132" stroke="#FF4D4D" strokeWidth="2.5" strokeLinecap="round" />

              {/* Wheels wireframe */}
              <circle cx="130" cy="145" r="24" stroke="#3A424A" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="130" cy="145" r="14" stroke="#C7F000" strokeWidth="1" strokeOpacity="0.8" />
              <circle cx="410" cy="145" r="24" stroke="#3A424A" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="410" cy="145" r="14" stroke="#C7F000" strokeWidth="1" strokeOpacity="0.8" />

              {/* Laser Measurement Aligners */}
              <line x1="260" y1="35" x2="260" y2="165" stroke="#C7F000" strokeWidth="0.8" strokeDasharray="2 4" strokeOpacity="0.5" />
              <circle cx="260" cy="80" r="3" fill="#C7F000" />
            </svg>
          </div>

          {/* Precision Detailing HUD Telemetry Badges */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#111315]/85 border border-[#252A2E] text-[10px] sm:text-[11px] font-['Space_Grotesk',sans-serif] font-bold text-[#F1F0EC] tracking-wider backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>REC // 4K 60FPS</span>
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded-[2px] bg-[#111315]/85 border border-[#252A2E] text-[10px] font-['Space_Grotesk',sans-serif] text-[#C7F000] tracking-wider backdrop-blur-sm">
              PPF &bull; CERAMIC VSL
            </span>
          </div>

          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
            <span className="px-2 py-0.5 rounded-[2px] bg-[#111315]/85 border border-[#252A2E] text-[10px] sm:text-[11px] font-mono text-[#B8BEC4] tracking-wider backdrop-blur-sm">
              03:45 MIN
            </span>
          </div>

          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 hidden sm:flex items-center gap-2">
            <span className="text-[10px] font-['Space_Grotesk',sans-serif] tracking-wider text-[#B8BEC4]/80 uppercase">
              OGLITY ACQUISITION ENGINE // SHOWROOM WALKTHROUGH
            </span>
          </div>
        </div>
      )}

      {/* Center Play Button Overlay */}
      {(!videoSrc || !isPlaying) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[1.5px] z-10 transition-opacity">
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Play video"
            className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-[#C7F000] text-[#111315] shadow-[0_0_35px_rgba(199,240,0,0.4)] transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            {videoSrc ? (
              <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 fill-[#111315] translate-x-0.5" />
            ) : (
              <div className="relative flex items-center justify-center">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 fill-[#111315] translate-x-0.5" />
                <span className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-[#111315] text-[#C7F000]">
                  <Upload className="w-2.5 h-2.5" />
                </span>
              </div>
            )}
          </button>
        </div>
      )}

      {/* Video Controls Bar (Only icons & progress bar, zero text) */}
      {videoSrc && (
        <div
          className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5 z-20 transition-opacity duration-200 ${
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress bar */}
          <div
            className="w-full h-1 bg-white/20 hover:h-1.5 cursor-pointer rounded-full mb-2 transition-all"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-[#C7F000] rounded-full relative"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Toggle play"
                className="text-[#F1F0EC] hover:text-[#C7F000] transition-colors p-1"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current" />
                )}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label="Toggle mute"
                className="text-[#F1F0EC] hover:text-[#C7F000] transition-colors p-1"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                aria-label="Change video"
                className="text-[#F1F0EC]/80 hover:text-[#C7F000] transition-colors p-1"
              >
                <Upload className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleFullscreen}
                aria-label="Fullscreen"
                className="text-[#F1F0EC] hover:text-[#C7F000] transition-colors p-1"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
