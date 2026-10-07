import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TrustProofSection } from './components/TrustProofSection';
import { FounderSection } from './components/FounderSection';
import { ProblemSection } from './components/ProblemSection';
import { AQBCSection } from './components/AQBCSection';
import { DifferenceSection } from './components/DifferenceSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TransitionSection } from './components/TransitionSection';
import { WhoItsForSection } from './components/WhoItsForSection';
import { OfferSection } from './components/OfferSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { GrowthAuditModal } from './components/GrowthAuditModal';
import { StickyConversionBar } from './components/ui/StickyConversionBar';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleScrollToProblem = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.getElementById('problem');
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  const handleScrollToSystem = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.getElementById('system');
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  const handleScrollToQualification = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.getElementById('qualification');
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      // Apply a subtle focus flash to the qualification container
      const formCard = document.getElementById('qualification-funnel-card');
      if (formCard) {
        formCard.classList.add('ring-2', 'ring-[#C7F000]');
        setTimeout(() => {
          formCard.classList.remove('ring-2', 'ring-[#C7F000]');
        }, 1200);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#111315] text-[#F1F0EC] flex flex-col font-sans selection:bg-[#C7F000] selection:text-[#111315] pb-16 sm:pb-0">
      {/* Global Navigation */}
      <Navigation onOpenAuditModal={handleScrollToQualification} />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {/* ================= PART 1 ================= */}
        {/* Section 1: Hero Section */}
        <HeroSection
          onOpenAuditModal={handleScrollToQualification}
          onExploreSystem={handleScrollToProblem}
        />

        {/* Section 1.5: Founder Authority / Trust (Placed early: HERO -> FOUNDER -> PROOF) */}
        <FounderSection
          onQualifyClick={handleScrollToQualification}
          onExploreSystem={handleScrollToSystem}
        />

        {/* Section 1.8: Dedicated Trust & Proof Section */}
        <TrustProofSection onQualifyClick={handleScrollToQualification} />

        {/* Section 2: Problem Section (Porcelain background) */}
        <ProblemSection />

        {/* ================= PART 2 ================= */}
        {/* Section 3: AQBC System (Dark Graphite background, id="system") */}
        <AQBCSection onQualifyClick={handleScrollToQualification} />

        {/* Section 4: The Difference (Porcelain background) */}
        <DifferenceSection />

        {/* Section 6: Case Studies (id="results", engineering report case files) */}
        <CaseStudiesSection />

        {/* Section 7: Visual Transition (Dark-to-light transition with primary CTA) */}
        <TransitionSection onQualifyClick={handleScrollToQualification} />

        {/* ================= PART 3 ================= */}
        {/* Section 8: Who This Is For (Porcelain background, id="who-its-for") */}
        <WhoItsForSection onApplyClick={handleScrollToQualification} />

        {/* Section 9: The Offer & Risk Reversal (Dark Graphite background, id="offer") */}
        <OfferSection onApplyClick={handleScrollToQualification} />

        {/* Section 10: Final CTA & Qualification Form (Dark Graphite background, id="qualification") */}
        <FinalCTASection />

        {/* Section 11: FAQ (Compact Accordion, id="faq") */}
        <FAQSection />
      </main>

      {/* Persistent Floating Conversion Bar (Mobile Sticky CTA) */}
      <StickyConversionBar onBookClick={handleScrollToQualification} />

      {/* Section 12: Minimal Footer */}
      <Footer />

      {/* Global Growth Audit Modal */}
      <GrowthAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
