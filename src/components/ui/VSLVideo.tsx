import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

interface VSLVideoProps {
  initialVideoSrc?: string;
  className?: string;
}

export const VSLVideo: React.FC<VSLVideoProps> = ({
  initialVideoSrc = '/videos/vsl.mp4',
  className = '',
}) => {
  const [videoSrc] = useState<string>(initialVideoSrc);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-hide controls when playing
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasStartedPlaying(true);
          })
          .catch(() => {});
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

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setCurrentTime(current);
      setDuration(total);
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percent = Math.max(0, Math.min(1, clickX / rect.width));
      const targetTime = percent * duration;
      videoRef.current.currentTime = targetTime;
      setProgress(percent * 100);
      setCurrentTime(targetTime);
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      } else {
        containerRef.current.requestFullscreen?.().catch(() => {});
      }
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={togglePlay}
      className={`relative w-full aspect-video rounded-[6px] overflow-hidden border border-[#252A2E] bg-[#0E1012] group shadow-2xl transition-all duration-300 hover:border-[#C7F000]/40 select-none ${className}`}
    >
      {/* Decorative technical corner accents */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#C7F000]/60 pointer-events-none z-30" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#C7F000]/60 pointer-events-none z-30" />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#C7F000]/60 pointer-events-none z-30" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#C7F000]/60 pointer-events-none z-30" />

      {/* Native HTML5 Video Element (100% Natural Unzoomed 16:9 Aspect Ratio) */}
      <video
        ref={videoRef}
        src={videoSrc}
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      />

      {/* Fallback / Poster Screen (Shown before playback starts) */}
      {!hasStartedPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0D0F11] overflow-hidden select-none z-10 pointer-events-none">
          {/* Hexagonal Honeycomb Detailing Studio Lights Simulation */}
          <div className="absolute inset-0 opacity-25">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hex-studio-grid-clean" width="48" height="83.14" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
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
                <radialGradient id="vsl-ambient-clean" cx="50%" cy="50%" r="65%">
                  <stop offset="0%" stopColor="#C7F000" stopOpacity="0.12" />
                  <stop offset="60%" stopColor="#111315" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#0A0C0E" stopOpacity="0.95" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex-studio-grid-clean)" />
              <rect width="100%" height="100%" fill="url(#vsl-ambient-clean)" />
            </svg>
          </div>

          {/* Luxury Supercar Silhouette in Detailing Bay */}
          <div className="absolute inset-x-0 bottom-6 sm:bottom-8 flex justify-center opacity-85">
            <svg
              viewBox="0 0 520 180"
              className="w-[85%] max-w-[420px] h-auto text-[#252A2E]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="260" cy="165" rx="220" ry="8" fill="#C7F000" fillOpacity="0.15" filter="blur(6px)" />
              <ellipse cx="260" cy="165" rx="180" ry="4" fill="#F1F0EC" fillOpacity="0.08" />
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
              <path
                d="M185 92 C210 65, 255 58, 305 60 C345 62, 375 75, 395 92"
                stroke="#F1F0EC"
                strokeWidth="1.8"
                strokeOpacity="0.6"
              />
              <path d="M470 130 L495 136" stroke="#C7F000" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M65 134 L85 132" stroke="#FF4D4D" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="130" cy="145" r="24" stroke="#3A424A" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="130" cy="145" r="14" stroke="#C7F000" strokeWidth="1" strokeOpacity="0.8" />
              <circle cx="410" cy="145" r="24" stroke="#3A424A" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="410" cy="145" r="14" stroke="#C7F000" strokeWidth="1" strokeOpacity="0.8" />
              <line x1="260" y1="35" x2="260" y2="165" stroke="#C7F000" strokeWidth="0.8" strokeDasharray="2 4" strokeOpacity="0.5" />
              <circle cx="260" cy="80" r="3" fill="#C7F000" />
            </svg>
          </div>

          {/* Telemetry Badges */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#111315]/85 border border-[#252A2E] text-[10px] sm:text-[11px] font-['Space_Grotesk',sans-serif] font-bold text-[#F1F0EC] tracking-wider backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>REC // 4K 60FPS</span>
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded-[2px] bg-[#111315]/85 border border-[#252A2E] text-[10px] font-['Space_Grotesk',sans-serif] text-[#C7F000] tracking-wider backdrop-blur-sm">
              PPF &bull; CERAMIC VSL
            </span>
          </div>

          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
            <span className="px-2 py-0.5 rounded-[2px] bg-[#111315]/85 border border-[#252A2E] text-[10px] sm:text-[11px] font-mono text-[#B8BEC4] tracking-wider backdrop-blur-sm">
              AQBC™ SYSTEM
            </span>
          </div>

          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 hidden sm:flex items-center gap-2">
            <span className="text-[10px] font-['Space_Grotesk',sans-serif] tracking-wider text-[#B8BEC4]/90 uppercase">
              OGLITY ACQUISITION ENGINE // SHOWROOM WALKTHROUGH
            </span>
          </div>
        </div>
      )}

      {/* Transparent Click Shield (Captures clicks anywhere on video for instant Play/Pause) */}
      <div className="absolute inset-0 z-10 cursor-pointer" />

      {/* Center Play Button Overlay (Visible when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 backdrop-blur-[1.5px] z-20 transition-opacity pointer-events-none">
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-[#C7F000] text-[#111315] shadow-[0_0_35px_rgba(199,240,0,0.5)] transition-transform duration-200 group-hover:scale-110">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 fill-[#111315] translate-x-0.5" />
          </div>
        </div>
      )}

      {/* Custom Sleek Oglity Video Controls Bar */}
      <div
        className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-8 pb-3 px-3 sm:px-4 z-30 transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Custom Lime Progress Bar */}
        <div
          className="w-full h-1.5 bg-white/20 hover:h-2.5 cursor-pointer rounded-full mb-2.5 transition-all relative overflow-hidden"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-[#C7F000] rounded-full relative transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls Items */}
        <div className="flex items-center justify-between text-[#F1F0EC]">
          {/* Left: Play/Pause, Restart, Volume, Timestamp */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="p-1 text-[#F1F0EC] hover:text-[#C7F000] transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              )}
            </button>

            <button
              type="button"
              onClick={handleRestart}
              aria-label="Restart video"
              className="p-1 text-[#F1F0EC]/80 hover:text-[#C7F000] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              className="p-1 text-[#F1F0EC]/80 hover:text-[#C7F000] transition-colors cursor-pointer"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
              ) : (
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>

            {duration > 0 && (
              <span className="text-[11px] sm:text-xs font-mono text-[#B8BEC4] ml-1">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            )}
          </div>

          {/* Right: Technical telemetry & Fullscreen */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[10px] font-['Space_Grotesk',sans-serif] tracking-wider text-[#C7F000]/90 uppercase font-semibold">
              AQBC™ ACQUISITION WALKTHROUGH
            </span>

            <button
              type="button"
              onClick={handleFullscreen}
              aria-label="Fullscreen"
              className="p-1 text-[#F1F0EC]/80 hover:text-[#C7F000] transition-colors cursor-pointer"
            >
              <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
