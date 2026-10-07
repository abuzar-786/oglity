import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'System', href: '#system' },
    { label: 'Results', href: '#results' },
    { label: 'Qualify', href: '#qualification' },
  ];

  return (
    <footer className="w-full bg-[#111315] text-[#F1F0EC] border-t border-[#252A2E] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#252A2E]">
          {/* Brand & Wordmark */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2.5">
              <img
                src="/oglity-logo-icon.png"
                alt="Oglity Icon"
                className="h-7.5 sm:h-8.5 w-auto object-contain"
              />
              <img
                src="/oglity-logo-name.png"
                alt="Oglity"
                className="h-5.5 sm:h-6.5 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#B8BEC4] font-sans leading-relaxed">
              Specialist customer-acquisition partner for premium PPF &amp; ceramic detailing studios.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 font-sans text-xs font-medium tracking-wider">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#B8BEC4] hover:text-[#C7F000] transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C7F000]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright & system info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#B8BEC4]/60">
          <div>
            © {currentYear} Oglity. High-ticket automotive customer acquisition.
          </div>

          <div className="flex items-center gap-4 text-xs text-[#B8BEC4]/60">
            <span>PPF &amp; Ceramic Specialists</span>
            <span>•</span>
            <span>Pre-Qualified Leads Only</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
