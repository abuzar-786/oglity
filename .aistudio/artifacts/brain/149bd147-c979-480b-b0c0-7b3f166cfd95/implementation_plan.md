# Direct MP4 VSL Player Implementation

Transition the Hero VSL video from a cross-origin YouTube iframe to a dedicated, high-performance HTML5 MP4 video engine. This completely removes the YouTube channel header, title, and synthetic content `(i) AI` badge with zero video zoom or aspect-ratio distortion.

## User Review & Critical Decisions

> [!IMPORTANT]
> The YouTube iframe player enforces cross-origin header titles and mandatory `(i) AI` badges directly inside its security sandbox, which cannot be hidden with CSS without zooming or cropping. Switching to a direct MP4 file provides 100% clean video playback at native unzoomed resolution.

- **Confirmed Decision (Phase 1)**: Use a direct MP4 video file (`/videos/vsl.mp4` or direct URL / file upload) for zero third-party UI.
- **Confirmed Video Source**: The user will provide or upload the direct MP4 video file.
- **Key Enhancements**:
  - **Zero Third-Party Clutter**: No YouTube logos, no title bars, no channel avatars, and no `(i) AI` synthetic content badges.
  - **Natural 100% Geometry**: Zero artificial zoom or cropping; preserves full 16:9 cinematic framing with pristine sharpness.
  - **Integrated Uploader & Local Fallback**: Instant in-browser video upload button allowing drag-and-drop replacement of the MP4 anytime, stored locally in `public/videos/vsl.mp4`.
  - **Custom High-Contrast Controls**: Bespoke lime-accented scrubber bar, time display, play/pause, volume control, restart, and fullscreen toggle.

---

## 1. Overview & Core Concept

- **What It Does**: Replaces the YouTube embed with an unconstrained native video player that delivers uninterrupted showroom presentations.
- **Target Audience**: High-ticket PPF and ceramic studio owners who expect an uncompromising, agency-grade digital presentation.
- **Key Value**: Delivers 100% brand control, instant loading, and elimination of all external platform banners.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Zero State / Initial Impression**: Visitor sees a crisp 16:9 poster frame with industrial corner brackets, live HUD badges (*REC // 4K 60FPS*), and a pulsing lime play button.
  2. **One-Click Playback**: Clicking anywhere starts immediate unzoomed playback without external network handshakes or third-party banners.
  3. **Seamless Hover Controls**: Moving the mouse over the video reveals the custom Oglity control strip:
     - High-precision `#C7F000` progress scrubbing
     - Play/Pause toggle
     - Quick restart button
     - Volume & mute controls
     - Timestamp counter
     - Fullscreen expansion
  4. **Direct File Replacement**: One-click upload icon allows uploading a fresh MP4 directly from the browser for instant live testing.

- **Visual Identity & Theme**:
  - **Palette**: Pitch-black canvas (`#0E1012`), industrial graphite borders (`#252A2E`), and vivid neon lime (`#C7F000`) for active progress and buttons.
  - **Typography**: Space Grotesk for technical telemetry and Inter for timestamps.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Native HTML5 `<video>` over YouTube IFrame**:
  - *Chosen Approach*: Pure HTML5 `<video>` element with custom controls.
  - *Why*: YouTube enforces cross-origin DOM encapsulation. Native `<video>` allows 100% styling freedom, zero external badges, and uncompromised video quality without zooming.
  - *Alternatives Considered*: Scaling/zooming the YouTube iframe was explicitly rejected by the user.

- **Decision 2: Dual File Strategy (Local Path + Interactive Uploader)**:
  - *Chosen Approach*: Configure the player to check for `/videos/vsl.mp4` by default, while supporting dynamic local file selection through a discreet upload button.
  - *Why*: Allows immediate testing and permanent deployment flexibility.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                   HeroSection                          │
│         Renders <VSLVideo videoSrc="..." />            │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                    VSLVideo                            │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Native HTML5 <video> (Unzoomed 16:9, Object-Fit) │  │
│  │ Source: /videos/vsl.mp4 || Blob URL              │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Transparent Click Layer (Play / Pause on Tap)    │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Custom Oglity Controls Overlay:                  │  │
│  │ • Progress Scrub Bar (#C7F000)                   │  │
│  │ • Play / Pause / Replay / Mute / Fullscreen      │  │
│  │ • Discrete MP4 File Uploader                     │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

- **Video Container**: Responsive `w-full aspect-video rounded-[6px] overflow-hidden` container.
- **State Management**: React `useState` tracking `currentTime`, `duration`, `isMuted`, `isPlaying`, and `progress`.
