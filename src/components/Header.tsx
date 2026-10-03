import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenNotify: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNotify }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Collection', href: '#collection' },
    { label: 'Our Ethos', href: '#ethos' },
    { label: 'About', href: '#about' },
    { label: 'Ingredients', href: '#ingredients' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E2E8F0] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E1E] rounded-md"
              aria-label="Ashonika Ethos Home"
            >
              <BrandLogo size="sm" />
            </a>

            {/* Zone 2: Clean Typography Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium tracking-wider uppercase text-[#475569] hover:text-[#C81E1E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#C81E1E] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenNotify}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#C81E1E] bg-[#FEF2F2] hover:bg-[#FEE2E2] active:scale-[0.98] border border-[#FECACA] rounded-full transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C81E1E]" />
                <span>Launching Soon</span>
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
                className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-[#0F1E36] hover:bg-[#F1F5F9] rounded-xl transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0A1428]/50 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-white border-l border-[#E2E8F0] p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <div>
                  <BrandLogo size="sm" />
                  <p className="text-[11px] text-[#64748B] italic mt-1 font-serif">
                    Conscious choices, beautifully made.
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Navigation"
                  className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full text-[#64748B] hover:text-[#0F1E36] hover:bg-[#F1F5F9] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] flex items-center px-2 text-sm font-medium tracking-wide uppercase text-[#0F1E36] hover:text-[#C81E1E] hover:bg-[#FEF2F2] rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNotify();
                }}
                className="w-full min-h-[46px] py-3 px-4 bg-[#C81E1E] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#A81616] active:scale-[0.99] transition-colors text-center flex items-center justify-center shadow-xs"
              >
                Launching Soon — Notify Me
              </button>
              <p className="text-[11px] text-center text-[#64748B]">
                First collection preview · Multani Mitti
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
