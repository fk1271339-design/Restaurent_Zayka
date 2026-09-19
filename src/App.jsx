import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import ScrollJourney from './components/ScrollJourney';
import StorySection from './components/StorySection';
import MenuSection from './components/MenuSection';
import BarSection from './components/BarSection';
import GallerySection from './components/GallerySection';
import ReservationSection from './components/ReservationSection';
import ContactFooter from './components/ContactFooter';

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
    <div className="min-h-screen bg-royal-obsidian text-stone-200 selection:bg-gold-500 selection:text-royal-obsidian">
      {/* Navigation Bar */}
      <Navbar onOpenReservation={() => setIsReservationModalOpen(true)} />

      {/* Hero Cinematic Scroll-driven Journey (Outside -> Entrance -> Table -> Food) */}
      <ScrollJourney onOpenReservation={() => setIsReservationModalOpen(true)} />

      {/* Heritage & Story */}
      <StorySection />

      {/* Royal Menu */}
      <MenuSection onAddToReservation={handleAddToReservation} />

      {/* Kahwa Bar & Lounge */}
      <BarSection />

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
    </div>
  );
}
