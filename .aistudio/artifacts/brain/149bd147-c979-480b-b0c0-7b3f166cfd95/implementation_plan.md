# Workspace Conflict Resolution & State Synchronization

Resolve 21 workspace file conflicts by declaring the current high-performance build as the single authoritative source of truth, ensuring zero loss of recent copy, pricing, and structural enhancements.

## User Review & Critical Decisions

> [!IMPORTANT]
> The codebase currently compiles cleanly (`vite build` succeeded with 0 errors) and passes strict type checking (`tsc --noEmit` clean). The 21 file conflicts reported by the editor UI represent differences between the in-memory editor buffer and the latest verified workspace files.

- **Confirmed Decision (Phase 1)**: Keep all verified working code in the active workspace and synchronize it across the environment so editor conflicts clear immediately.
- **Authoritative Metrics Maintained**:
  - **Inspection Target**: **20+ qualified inspection opportunities / month** (Hero headline, Offer Section, Problem Section journey, Growth Audit Modal, and Partner Testimonials).
  - **High-Ticket Package Tier**: **₹60K+ package floor** across all sections, metadata, criteria, and diagnostic forms.
  - **Social Proof**: **Detailing Garage** verified partner card in the Trust Proof marquee.
  - **Client Isolation**: Robust `window.fetch` setter and Error Boundary isolating browser extension anomalies.

---

## 1. Overview & Core Concept

- **What It Does**: Synchronizes the complete 21-file application structure, resolving all divergence alerts while safeguarding the high-ticket conversion funnel built for premium automotive detailing and PPF studios.
- **Target Audience**: High-end PPF, ceramic coating, and automotive protection studio owners seeking high-ticket (₹60K+) appointments instead of bargain car-wash shoppers.
- **Key Value**: Provides a stable, build-verified landing and customer-acquisition pipeline without regression or code duplication.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Hero & VSL Discovery**: Studio owner lands on the authoritative headline (*"Get 20+ More Qualified Inspection Opportunities Every Month"*), inspects real bay metrics, and watches the acquisition breakdown.
  2. **Problem & Diagnostic Schematic**: Owner views the breakdown of where leads die (*"The Gap"*) and sees how the AQBC™ system guarantees **20+ confirmed bay slots monthly**.
  3. **Verified Proof Marquee**: Continuous dual-speed marquee displaying verified studio results (**Detailing Shine**, **Detailing Baba**, **Detailing Garage**).
  4. **Diagnostic Qualification & Scheduling**: 10-step qualification assessment filtering candidates based on package value (**₹60K–₹1L**) and direct calendar booking.

- **Visual Identity & Theme**:
  - **Background Atmosphere**: Deep technical graphite (`#111315`), industrial slate borders (`#252A2E`), and elevated surfaces (`#16191C`).
  - **Accent Tone**: High-contrast performance lime (`#C7F000`) for primary action verbs, inspection badges, and key metrics.
  - **Typography**: Precision display headlines in **Manrope** & **Plus Jakarta Sans**, coupled with clean, legible **Inter** body copy and **Space Grotesk** technical labels.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Workspace-Authoritative Synchronization**:
  - *Chosen Approach*: Retain the current working tree files and rewrite their pristine state to disk, forcing editor file-watchers and version graphs to recognize identical hashes.
  - *Why*: Eliminates phantom merge markers and prevents accidental revert to outdated numbers (such as 15 leads or ₹50K tiers).
  - *Alternatives Considered*: Accepting remote changes (which would revert all recent user-requested edits) was rejected.

- **Decision 2: Comprehensive Error Isolation**:
  - *Chosen Approach*: Maintain the native `window.fetch` getter/setter shim and `<ErrorBoundary>` wrapper.
  - *Why*: Prevents third-party browser extensions and network inspection scripts from throwing uncaught `TypeError` exceptions during applet previews.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                   index.html                           │
│   (fetch descriptor shim + extension error filter)     │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                  src/main.tsx                          │
│          <ErrorBoundary> -> <App />                    │
└──────────────────────────┬─────────────────────────────┘
                           │
       ┌───────────────────┴───────────────────┐
       ▼                                       ▼
┌──────────────────────────────┐   ┌──────────────────────────────┐
│       Navigation & Hero      │   │    AQBC™ Conversion Funnel   │
│ • Manrope H1 (20+ Target)    │   │ • Problem Section (20+ Slot) │
│ • ₹60K+ Package Tier         │   │ • Difference & Proof Marquee │
│ • Interactive Audit Modal    │   │ • Detailing Garage Card      │
└──────────────┬───────────────┘   └──────────────┬───────────────┘
               │                                  │
               └───────────────────┬──────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────┐
│             Final CTA & Diagnostic Booking             │
│ • 10-Question High-Ticket Qualification Form           │
│ • Calendar Time-Slot Reservation (15-min diagnostic)   │
└────────────────────────────────────────────────────────┘
```

- **State Management**: Client-side reactive form state in `FinalCTASection` and modal controller in `App.tsx`, maintaining instant response times with zero latency.
- **Build Target**: Vite 8 + React 19 + Tailwind CSS 4 with type-checked zero-error configuration.
