import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

interface VSLVideoProps {
  initialVideoSrc?: string;
  className?: string;
}

function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

export const VSLVideo: React.FC<VSLVideoProps> = ({
  initialVideoSrc = 'https://youtu.be/IQzREQoHUhM',
  className = '',
}) => {
  const [videoSrc] = useState<string>(initialVideoSrc);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const youtubeId = extractYouTubeId(videoSrc);

  const sendYTCommand = useCallback((func: string, args: (string | number | boolean)[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func, args }),
        '*'
      );
    }
  }, []);

  // Listen to YouTube API status messages
  useEffect(() => {
    if (!youtubeId) return;

    const handleMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data && data.event === 'infoDelivery' && data.info) {
          if (typeof data.info.currentTime === 'number') {
            setCurrentTime(data.info.currentTime);
          }
          if (typeof data.info.duration === 'number' && data.info.duration > 0) {
            setDuration(data.info.duration);
            if (data.info.currentTime) {
              setProgress((data.info.currentTime / data.info.duration) * 100);
            }
          }
          if (data.info.playerState === 1) {
            // Playing
            setIsPlaying(true);
          } else if (data.info.playerState === 2) {
            // Paused
            setIsPlaying(false);
          } else if (data.info.playerState === 0) {
            // Ended
            setIsPlaying(false);
          }
        }
      } catch {
        // Ignore non-json messages
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [youtubeId]);

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

    if (youtubeId) {
      if (isPlaying) {
        sendYTCommand('pauseVideo');
        setIsPlaying(false);
      } else {
        sendYTCommand('playVideo');
        setIsPlaying(true);
      }
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
    if (youtubeId) {
      if (isMuted) {
        sendYTCommand('unMute');
        setIsMuted(false);
      } else {
        sendYTCommand('mute');
        setIsMuted(true);
      }
      return;
    }

    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (youtubeId) {
      sendYTCommand('seekTo', [0, true]);
      sendYTCommand('playVideo');
      setIsPlaying(true);
      setProgress(0);
      return;
    }

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));

    if (youtubeId && duration > 0) {
      const seekSeconds = percent * duration;
      sendYTCommand('seekTo', [seekSeconds, true]);
      setProgress(percent * 100);
      setCurrentTime(seekSeconds);
      return;
    }

    if (videoRef.current) {
      videoRef.current.currentTime = percent * (videoRef.current.duration || 0);
      setProgress(percent * 100);
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

      {/* Video Frame */}
      {youtubeId ? (
        <div className="absolute inset-0 overflow-hidden bg-black flex items-center justify-center">
          {/* Iframe with scaled dimensions and cropped margins to completely remove YouTube UI header/footer */}
          <iframe
            ref={iframeRef}
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?enablejsapi=1&autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1&fs=0`}
            title="Oglity AQBC System Walkthrough VSL"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute -top-[25%] -left-[18%] w-[136%] h-[150%] border-0 pointer-events-none"
          />

          {/* Initial Cover Poster (shown before first play to hide YouTube loading spinner) */}
          {!isPlaying && progress === 0 && (
            <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                alt="Oglity VSL Video"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/90 via-[#111315]/40 to-[#111315]/60" />

              {/* HUD Telemetry Overlay */}
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
            </div>
          )}
        </div>
      ) : videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />
      ) : null}

      {/* Transparent Click Shield (captures clicks and prevents any YouTube UI interaction) */}
      <div className="absolute inset-0 z-10 cursor-pointer" />

      {/* Center Play / Pause Indicator (visible when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1.5px] z-20 transition-opacity pointer-events-none">
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-[#C7F000] text-[#111315] shadow-[0_0_35px_rgba(199,240,0,0.5)] transition-transform duration-200 group-hover:scale-110">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 fill-[#111315] translate-x-0.5" />
          </div>
        </div>
      )}

      {/* Custom Sleek Oglity Video Controls Bar (Zero YouTube UI) */}
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

          {/* Right: Technical watermark & Fullscreen */}
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
