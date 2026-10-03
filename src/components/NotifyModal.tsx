import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Bell, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product } from '../types/product';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
}

export const NotifyModal: React.FC<NotifyModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      try {
        const stored = JSON.parse(localStorage.getItem('ashonika_waitlist') || '[]');
        stored.push({
          email,
          name: name.trim() || undefined,
          productInterest: selectedProduct?.name || 'All Products',
          subscribedAt: new Date().toISOString(),
        });
        localStorage.setItem('ashonika_waitlist', JSON.stringify(stored));
      } catch (err) {
        console.error('Local save error', err);
      }
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    setName('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="notify-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A1428]/60 backdrop-blur-sm transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border border-[#E2E6EE] rounded-2xl shadow-2xl p-5 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close notification dialog"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 min-w-[40px] min-h-[40px] flex items-center justify-center text-[#64748B] hover:text-[#0F1E36] hover:bg-[#F1F3F6] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 sm:py-8">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#C81E1E]/10 flex items-center justify-center text-[#C81E1E]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3
              id="notify-modal-title"
              className="text-2xl sm:text-3xl font-serif text-[#0F1E36] tracking-tight mb-2"
            >
              You are on the list
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-md mx-auto mb-6">
              Thank you for your interest. We will send a quiet note to{' '}
              <span className="font-semibold text-[#0F1E36]">{email}</span> the moment the{' '}
              {selectedProduct ? selectedProduct.name : 'Multani Mitti Collection'}{' '}
              launches.
            </p>
            <div className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-xl text-xs text-[#475569] flex items-center justify-center gap-2 mb-6 border border-[#E2E6EE]">
              <ShieldCheck className="w-4 h-4 text-[#C81E1E] shrink-0" />
              <span>Zero spam. Only launch release timing and formulation notes.</span>
            </div>
            <button
              onClick={handleReset}
              className="min-h-[44px] px-7 py-2.5 bg-[#122348] text-white text-xs uppercase tracking-wider font-medium rounded-full hover:bg-[#0A1428] transition-colors"
            >
              Return to Showcase
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-wider uppercase text-[#C81E1E] mb-2 font-semibold">
              <Bell className="w-3.5 h-3.5" />
              <span>Launch Notification</span>
            </div>

            <h3
              id="notify-modal-title"
              className="text-xl sm:text-3xl font-serif text-[#0F1E36] tracking-tight mb-2"
            >
              {selectedProduct ? `Be notified for ${selectedProduct.name}` : 'Be part of the beginning'}
            </h3>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5 sm:mb-6">
              {selectedProduct
                ? `Leave your details to receive private access when ${selectedProduct.name} is ready.`
                : 'Our first collection is being prepared with intention. Leave your email and we’ll notify you when Ashonika Ethos officially launches.'}
            </p>

            {selectedProduct && (
              <div className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl mb-5 border border-[#E2E6EE]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-12 h-12 object-cover rounded-lg shrink-0"
                />
                <div className="text-xs">
                  <div className="font-semibold text-[#0F1E36]">{selectedProduct.name}</div>
                  <div className="text-[#64748B]">{selectedProduct.subtitle} · Launching Soon</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name-input" className="block text-xs font-medium text-[#475569] mb-1.5">
                  Your Name (Optional)
                </label>
                <input
                  id="name-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full min-h-[44px] px-4 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-sm text-[#0F1E36] placeholder:text-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#C81E1E] focus:border-[#C81E1E] transition-all"
                />
              </div>

              <div>
                <label htmlFor="email-input" className="block text-xs font-medium text-[#475569] mb-1.5">
                  Email Address <span className="text-[#C81E1E]">*</span>
                </label>
                <input
                  id="email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full min-h-[44px] px-4 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-sm text-[#0F1E36] placeholder:text-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#C81E1E] focus:border-[#C81E1E] transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full min-h-[46px] mt-2 py-3 px-6 bg-[#C81E1E] text-white text-xs font-medium uppercase tracking-wider rounded-xl hover:bg-[#A81616] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 shadow-sm"
              >
                <span>{isLoading ? 'Reserving your spot...' : 'Notify Me at Launch'}</span>
                {!isLoading && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                )}
              </button>

              <p className="text-[11px] text-[#94A3B8] text-center mt-2 leading-relaxed">
                We respect your inbox. You will only receive Ashonika Ethos launch communications and release notes. Unsubscribe anytime.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
