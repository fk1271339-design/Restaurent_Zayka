import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import ScrollJourney from './components/ScrollJourney';
import StorySection from './components/StorySection';
import RoyalExperiencesCarousel from './components/RoyalExperiencesCarousel';
import MenuSection from './components/MenuSection';
import BarSection from './components/BarSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ReservationSection from './components/ReservationSection';
import ContactFooter from './components/ContactFooter';
import CartDrawer from './components/CartDrawer';
import ToastNotification from './components/ToastNotification';
import { CartProvider } from './context/CartContext';

export default function App() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [preSelectedDishes, setPreSelectedDishes] = useState([]);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleAddToReservation = (dish) => {
    setPreSelectedDishes((prev) => [...prev, dish]);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-royal-obsidian text-stone-200 selection:bg-gold-500 selection:text-royal-obsidian relative">
        {/* Navigation Bar */}
        <Navbar onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* Hero Cinematic Scroll-driven Journey */}
        <ScrollJourney onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* Heritage & Story */}
        <StorySection />

        {/* Royal Experiences & Showcases Carousel */}
        <RoyalExperiencesCarousel onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* Royal Menu */}
        <MenuSection onAddToReservation={handleAddToReservation} />

        {/* Kahwa Bar & Lounge */}
        <BarSection />

        {/* Testimonials & Verified Reviews */}
        <TestimonialsSection />

        {/* Gallery */}
        <GallerySection />

        {/* Inline Reservation Engine */}
        <ReservationSection selectedDishes={preSelectedDishes} />

        {/* Contact & Footer */}
        <ContactFooter />

        {/* Modal Reservation Engine Triggered from Navbar / Hero / Dishes */}
        <ReservationSection
          isOpenModal={isReservationModalOpen}
          onCloseModal={() => setIsReservationModalOpen(false)}
          selectedDishes={preSelectedDishes}
        />

        {/* Shopping Cart Drawer */}
        <CartDrawer />

        {/* Floating Toast Notifications */}
        <ToastNotification />
      </div>
    </CartProvider>
  );
}
