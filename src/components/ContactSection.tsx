import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
      try {
        const inquiries = JSON.parse(localStorage.getItem('ashonika_inquiries') || '[]');
        inquiries.push({ ...form, date: new Date().toISOString() });
        localStorage.setItem('ashonika_inquiries', JSON.stringify(inquiries));
      } catch (err) {
        console.error(err);
      }
    }, 500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-28 bg-[#FCFDFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#C81E1E] mb-3">
            <span className="w-6 h-px bg-[#FECACA]" />
            <span>Get in Touch</span>
            <span className="w-6 h-px bg-[#FECACA]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#0F1E36] font-normal tracking-tight mb-3 sm:mb-4">
            Connect with Ashonika Ethos.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#475569] font-light leading-relaxed">
            Have questions about our upcoming Multani Mitti collection or wish to learn more about our brand philosophy? Send us a note below.
          </p>
        </div>

        {/* Inquiries Form Box */}
        <div className="bg-[#F8FAFC] p-5 sm:p-8 md:p-10 rounded-2xl border border-[#E2E8F0] shadow-xs">
          {sent ? (
            <div className="text-center py-8 sm:py-12">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#C81E1E] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-serif text-[#0F1E36] mb-2">Message Received</h3>
              <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto mb-6">
                Thank you for reaching out. We will read your message and respond with care.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: '', email: '', message: '' });
                }}
                className="min-h-[44px] px-6 py-2.5 bg-[#122348] text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#0A1428] transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-[#475569] mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Ananya Sen"
                    className="w-full min-h-[44px] px-4 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-sm text-[#0F1E36] focus:outline-none focus:ring-1 focus:ring-[#C81E1E] focus:border-[#C81E1E] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-[#475569] mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ananya@example.com"
                    className="w-full min-h-[44px] px-4 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-sm text-[#0F1E36] focus:outline-none focus:ring-1 focus:ring-[#C81E1E] focus:border-[#C81E1E] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-[#475569] mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share your thoughts or questions with us..."
                  className="w-full p-4 bg-white border border-[#CBD5E1] rounded-xl text-sm text-[#0F1E36] focus:outline-none focus:ring-1 focus:ring-[#C81E1E] focus:border-[#C81E1E] transition-all resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[46px] py-3.5 px-6 bg-[#C81E1E] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#A81616] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group disabled:opacity-75 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>

              <p className="text-[11px] text-[#94A3B8] text-center pt-1">
                We respect your privacy and will never share your email address.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
