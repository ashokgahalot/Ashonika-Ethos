/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LaunchingBanner } from './components/LaunchingBanner';
import { ProductGrid } from './components/ProductGrid';
import { CollectionVisual } from './components/CollectionVisual';
import { OurEthos } from './components/OurEthos';
import { AboutSection } from './components/AboutSection';
import { IngredientStory } from './components/IngredientStory';
import { SustainabilitySection } from './components/SustainabilitySection';
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
    <div className="min-h-screen bg-[#FCFDFF] text-[#0F1E36] flex flex-col selection:bg-[#C81E1E]/15 selection:text-[#C81E1E]">
      {/* 1. Header / Navigation */}
      <Header onOpenNotify={handleOpenGeneralNotify} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenNotify={handleOpenGeneralNotify} />

        {/* 3. Launching Soon Announcement Banner */}
        <LaunchingBanner onOpenNotify={handleOpenGeneralNotify} />

        {/* 4. Product Showcase Collection */}
        <ProductGrid
          onNotifyProduct={handleNotifyProduct}
          onOpenGeneralNotify={handleOpenGeneralNotify}
        />

        {/* 5. Editorial Botanical Flatlay Visual */}
        <CollectionVisual />

        {/* 6. Philosophy & Our Ethos */}
        <OurEthos />

        {/* 7. Brand Story & About Section */}
        <AboutSection />

        {/* 8. Ingredients with a Story */}
        <IngredientStory />

        {/* 9. Better Choices & Sustainability */}
        <SustainabilitySection />

        {/* 10. Email Signup / Be Part of the Beginning */}
        <NewsletterSection />

        {/* 11. Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer onOpenNotify={handleOpenGeneralNotify} />

      {/* 13. Interactive Launch Notification Modal */}
      <NotifyModal
        isOpen={notifyModalOpen}
        onClose={handleCloseModal}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}
