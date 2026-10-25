import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FounderSection } from './components/FounderSection';
import { ProblemSection } from './components/ProblemSection';
import { AQBCSection } from './components/AQBCSection';
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

        {/* Section 2: Founder Section (id="results" & id="founder") */}
        <FounderSection onExploreSystem={handleScrollToSystem} />

        {/* Section 3: Problem Section (Porcelain background) */}
        <ProblemSection />

        {/* ================= PART 2 ================= */}
        {/* Section 4: AQBC System (Dark Graphite background, id="system") */}
        <AQBCSection onQualifyClick={handleScrollToQualification} />

        {/* ================= PART 3 ================= */}
        {/* Section 5: The Offer, Commitment & Studio Eligibility (Merged Section, id="offer" & id="who-its-for") */}
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
