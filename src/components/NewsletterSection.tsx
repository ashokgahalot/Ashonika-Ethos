import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { getSectionHeaderVariants } from '../utils/motion';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const headerVariants = getSectionHeaderVariants(shouldReduceMotion);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      try {
        const stored = JSON.parse(localStorage.getItem('ashonika_subscribers') || '[]');
        stored.push({
          email,
          source: 'newsletter_section',
          date: new Date().toISOString(),
        });
        localStorage.setItem('ashonika_subscribers', JSON.stringify(stored));
      } catch (err) {
        console.error(err);
      }
    }, 500);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0C2814] text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#BBF7D0_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#169A38]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#EF2626]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[#BBF7D0] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#BBF7D0]" />
            <span>Launch Invitation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight mb-4">
            Be part of the beginning.
          </h2>

          <p className="text-base sm:text-lg text-[#D1FAE5] max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Our first collection is almost ready. Leave your email and we'll let you know when Ashonika Ethos officially launches.
          </p>

          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 max-w-lg mx-auto backdrop-blur-xs animate-in fade-in duration-300">
              <CheckCircle2 className="w-10 h-10 text-[#BBF7D0] mx-auto mb-3" />
              <h4 className="text-xl font-serif text-white mb-2">Welcome to our circle.</h4>
              <p className="text-xs sm:text-sm text-[#D1FAE5] leading-relaxed mb-4">
                We have reserved your invitation. You will be the very first to receive access to the Multani Mitti inaugural batch.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setEmail('');
                }}
                className="text-xs text-[#D1FAE5] underline hover:text-white"
              >
                Add another email
              </button>
            </div>
          ) : (
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-5 py-4 bg-white/10 border border-white/30 rounded-full text-sm text-white placeholder:text-[#A7F3D0] focus:outline-none focus:ring-2 focus:ring-[#169A38] transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-[#EF2626] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full hover:bg-[#D61B1B] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shrink-0 group disabled:opacity-75 shadow-lg"
                >
                  <span>{isLoading ? 'Reserving...' : 'Notify Me'}</span>
                  {!isLoading && (
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  )}
                </button>
              </form>

              <p className="text-xs text-[#A7F3D0] mt-4 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#EF2626]" />
                <span>We'll only use your email for Ashonika Ethos launch updates.</span>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
