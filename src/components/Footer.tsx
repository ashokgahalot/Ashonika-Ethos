import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, ArrowUp, X } from 'lucide-react';

interface FooterProps {
  onOpenNotify: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenNotify }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#0A1F10] text-white pt-14 sm:pt-16 pb-12 border-t border-[#169A38]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-3">
              <h3 className="font-serif text-2xl tracking-wide text-white font-normal">
                Ashonika Ethos
              </h3>

              <p className="text-sm font-script italic text-[#BBF7D0] text-base">
                Conscious Choices, Beautifully Made
              </p>

              <p className="text-xs text-[#9CA3AF] font-light leading-relaxed max-w-sm">
                A modern Indian brand celebrating natural ingredients, traditional knowledge, simplicity, sustainability, and beautiful everyday living.
              </p>

              {/* Social Media Links: Instagram, Facebook, Pinterest, and Youtube */}
              <div className="pt-2 flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ashonika_ethos"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ashonika Ethos on Instagram"
                  className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center text-[#D1FAE5] hover:text-white hover:bg-[#169A38] active:scale-95 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/Ashonika-Ethos/61580419386156/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ashonika Ethos on Facebook"
                  className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center text-[#D1FAE5] hover:text-white hover:bg-[#169A38] active:scale-95 transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                {/* Pinterest */}
                <a
                  href="https://in.pinterest.com/ashonika_ethos/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ashonika Ethos on Pinterest"
                  className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center text-[#D1FAE5] hover:text-white hover:bg-[#169A38] active:scale-95 transition-all"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* Youtube */}
                <a
                  href="https://www.youtube.com/channel/UChQY_8zOeXesAEHQwaOit3A"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ashonika Ethos on YouTube"
                  className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center text-[#D1FAE5] hover:text-white hover:bg-[#169A38] active:scale-95 transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#BBF7D0] font-bold block mb-2">
                Explore
              </span>
              <ul className="space-y-2.5 text-xs text-[#D1FAE5]">
                <li>
                  <a href="#home" className="hover:text-white hover:underline transition-colors py-1 inline-block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-white hover:underline transition-colors py-1 inline-block">
                    Collection (Launching Soon)
                  </a>
                </li>
                <li>
                  <a href="#ethos" className="hover:text-white hover:underline transition-colors py-1 inline-block">
                    Our Ethos
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white hover:underline transition-colors py-1 inline-block">
                    About Ashonika Ethos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white hover:underline transition-colors py-1 inline-block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Launch Status Column */}
            <div className="md:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#BBF7D0] font-bold block mb-2">
                Inaugural Release
              </span>
              <p className="text-xs text-[#9CA3AF] leading-relaxed font-light">
                Our Multani Mitti inaugural batch is currently being prepared with intention. Sign up to receive invitation-only access on launch day.
              </p>
              <button
                onClick={onOpenNotify}
                className="mt-3 min-h-[44px] px-6 py-2.5 bg-[#EF2626] hover:bg-[#D61B1B] text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-md"
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8] text-center sm:text-left">
            <div>
              <p>© 2026 Ashonika Ethos. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-white transition-colors py-1"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true">·</span>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-white transition-colors py-1"
              >
                Terms
              </button>
              <span aria-hidden="true">·</span>
              <button
                onClick={scrollToTop}
                className="hover:text-white transition-colors flex items-center gap-1.5 py-1"
                aria-label="Scroll back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightweight Privacy / Terms Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081636]/75 backdrop-blur-xs"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white text-[#0B172B] p-6 sm:p-8 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto border border-[#E2E8F0] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalModal(null)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 p-2 text-[#64748B] hover:text-[#0B172B] rounded-full hover:bg-[#F8FAFC] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-serif mb-4 text-[#0B172B]">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <div className="text-xs text-[#4B5563] space-y-3 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Ashonika Ethos respects your privacy. When you provide your email address for launch notification, we collect your email solely to send you updates regarding our inaugural Multani Mitti collection.
                  </p>
                  <p>
                    We never sell, rent, or lease your personal information to third parties. You may unsubscribe from our launch dispatches at any time via the link included in each note.
                  </p>
                  <p>
                    All pre-order inquiries and waitlist data are retained securely and with full compliance with Indian and international data protection practices.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to Ashonika Ethos. The products showcased on this website represent our upcoming inaugural collection and conceptual prototypes.
                  </p>
                  <p>
                    Ashonika Ethos does not currently process digital transactions or offer products for immediate commercial sale on this showcase.
                  </p>
                  <p>
                    All brand imagery, intellectual property, packaging designs, and formulation concepts are copyright © 2026 Ashonika Ethos. All rights reserved.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="min-h-[40px] px-6 py-2 bg-[#0C2D79] text-white text-xs font-bold rounded-full hover:bg-[#081F54]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
