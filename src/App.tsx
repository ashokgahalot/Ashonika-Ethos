/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LaunchingBanner } from './components/LaunchingBanner';
import { ProductGrid } from './components/ProductGrid';
import { OurEthos } from './components/OurEthos';
import { AboutSection } from './components/AboutSection';
import { NewsletterSection } from './components/NewsletterSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NotifyModal } from './components/NotifyModal';
import { Product } from './types/product';

export default function App() {
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenGeneralNotify = () => {
    setSelectedProduct(null);
    setNotifyModalOpen(true);
  };

  const handleNotifyProduct = (product: Product) => {
    setSelectedProduct(product);
    setNotifyModalOpen(true);
  };

  const handleCloseModal = () => {
    setNotifyModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white text-[#111F15] flex flex-col selection:bg-[#169A38]/15 selection:text-[#169A38]">
      {/* 1. Header / Navigation */}
      <Header onOpenNotify={handleOpenGeneralNotify} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenNotify={handleOpenGeneralNotify} />

        {/* 3. Launching Soon Announcement Banner */}
        <LaunchingBanner onOpenNotify={handleOpenGeneralNotify} />

        {/* 4. Product Showcase Collection with Staggered Entrance */}
        <ProductGrid
          onNotifyProduct={handleNotifyProduct}
          onOpenGeneralNotify={handleOpenGeneralNotify}
        />

        {/* 5. Philosophy & Our Ethos with Staggered Entrance */}
        <OurEthos />

        {/* 6. Brand Story & About Section with Staggered Entrance */}
        <AboutSection />

        {/* 7. Email Signup / Be Part of the Beginning with Staggered Entrance */}
        <NewsletterSection />

        {/* 8. Contact & Inquiries with Staggered Entrance */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer onOpenNotify={handleOpenGeneralNotify} />

      {/* 10. Interactive Launch Notification Modal */}
      <NotifyModal
        isOpen={notifyModalOpen}
        onClose={handleCloseModal}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}
