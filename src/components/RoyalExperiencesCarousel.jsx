import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Sparkles, Utensils, GlassWater, Crown, Heart, Award, ArrowRight } from 'lucide-react';

export default function RoyalExperiencesCarousel({ onOpenReservation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 'chef-special',
      badge: "Chef's Signature Showcase",
      title: 'Um Sabor Que Abraça — The Royal Shank',
      subtitle: 'Hand-pounded, slow-braised Wazwan shank infused with Pampore Saffron & Kashmiri red chilis.',
      bgImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
      highlights: [
        { name: 'Braised Mutton Shank', detail: 'Slow-cooked for 12 Hours' },
        { name: 'Copper Trami Serving', detail: 'Artisanal Handcrafted Engravings' },
        { name: 'Grade-A Pampore Saffron', detail: 'Harvested from Valley Orchards' }
      ],
      ctaText: 'Reserve Chef Table',
      accentColor: 'from-amber-500/20 to-gold-500/10'
    },
    {
      id: 'love-and-wine',
      badge: 'Romantic Candlelit Fine Dining',
      title: 'Love & Saffron — An Intimate Evening',
      subtitle: 'Immerse in private velvet curtained booths with warm candle illumination and acoustic Santoor melodies.',
      bgImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop',
      highlights: [
        { name: 'Saffron Yakhni & Wine', detail: 'Sommelier Kashmiri Pairing' },
        { name: 'Private Velvet Booth', detail: 'Candlelit Rose Atmosphere' },
        { name: 'Complimentary Shahi Tukda', detail: 'Included with Royal Dinner' }
      ],
      ctaText: 'Book Romantic Table',
      accentColor: 'from-red-900/30 to-gold-500/10'
    },
    {
      id: 'kahwa-lounge',
      badge: 'Twisted Kahwa & Cocktail Nights',
      title: 'Artisanal Kahwa & Elixir Lounge',
      subtitle: 'Savor spiced Kashmiri cocktails infused with green tea, cinnamon, almonds, and aged single malts.',
      bgImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1400&auto=format&fit=crop',
      highlights: [
        { name: 'Saffron Smoked Old Fashioned', detail: 'Infused with Cardamom Smoke' },
        { name: 'Golden Kahwa Sour', detail: 'Almond Flakes & Green Tea' },
        { name: 'Live Acoustic Santoor', detail: 'Every Friday & Saturday Night' }
      ],
      ctaText: 'Explore Bar Lounge',
      accentColor: 'from-yellow-600/20 to-amber-700/10'
    },
    {
      id: 'weekend-brunch',
      badge: 'Saturday & Sunday Special',
      title: 'Weekend Royal Dastarkhwan Brunch',
      subtitle: 'An unlimited 36-course Wazwan royal feast served on traditional low carpets around silver platters.',
      bgImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop',
      highlights: [
        { name: '36-Item Wazwan Feast', detail: 'Curated by Master Vastas' },
        { name: 'Low Plush Carpet Dining', detail: 'Authentic Kashmiri Royal Setup' },
        { name: 'Unlimited Kahwa Refills', detail: 'Served in Copper Samovars' }
      ],
      ctaText: 'Reserve Weekend Brunch',
      accentColor: 'from-amber-600/20 to-gold-600/10'
    }
  ];

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="experiences" className="py-16 md:py-24 bg-royal-obsidian relative overflow-hidden border-t border-gold-500/15">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-serif uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Royal Showcases & Signature Events
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight mb-4">
            Immersive <span className="text-gold-gradient">Zayka Experiences</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans leading-relaxed">
            Inspired by Kashmiri royal hospitality, explore our curated dining celebrations, romantic dinners, and artisanal lounge showcases.
          </p>
        </div>

        {/* Main Featured Showcase Carousel Container */}
        <div 
          className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-royal-surface"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[600px] flex items-end lg:items-center"
            >
              {/* Slide Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                style={{ backgroundImage: `url('${slides[currentSlide].bgImage}')` }}
              >
                {/* Multi-layered dark gradients for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-obsidian via-royal-obsidian/75 to-royal-obsidian/40 lg:bg-gradient-to-r lg:from-royal-obsidian lg:via-royal-obsidian/90 lg:to-transparent" />
                <div className="absolute inset-0 royal-vignette" />
              </div>

              {/* Slide Content Grid */}
              <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Text Column */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-500/20 border border-gold-400/40 text-gold-300 text-[11px] font-serif uppercase tracking-widest">
                    <Crown className="w-3.5 h-3.5 text-gold-400" />
                    {slides[currentSlide].badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-[1.15] drop-shadow-md">
                    {slides[currentSlide].title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-stone-300 text-xs sm:text-base leading-relaxed max-w-xl font-sans">
                    {slides[currentSlide].subtitle}
                  </p>

                  {/* Dish / Experience Highlight Pills (Inspired by sample flyers!) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {slides[currentSlide].highlights.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="p-3 rounded-xl bg-royal-obsidian/80 backdrop-blur-md border border-gold-500/20 hover:border-gold-400/50 transition-all"
                      >
                        <div className="text-xs font-serif font-bold text-gold-300 truncate">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-stone-400 font-sans truncate mt-0.5">
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={onOpenReservation}
                      className="px-6 sm:px-8 py-3.5 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      {slides[currentSlide].ctaText}
                    </button>
                    
                    <span className="text-[11px] text-stone-400 font-serif italic flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-gold-400" />
                      Limited Royal Seats Available
                    </span>
                  </div>

                </div>

                {/* Right Decorative Glass Card (Sample flyer aesthetics) */}
                <div className="hidden lg:block lg:col-span-5">
                  <div className="glass-card p-6 rounded-2xl border border-gold-500/30 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                    <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-400 mb-4 shadow-inner">
                      <Utensils className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-serif uppercase tracking-widest text-gold-400 block mb-1">
                      Experience Highlight
                    </span>
                    <h4 className="text-xl font-serif font-bold text-white mb-2">
                      Authentic Royal Recipe
                    </h4>
                    <p className="text-stone-300 text-xs leading-relaxed mb-4">
                      Prepared using 300-year-old Mogul & Wazwan culinary traditions passed down through generations of Vastas.
                    </p>
                    <div className="pt-3 border-t border-gold-500/20 flex items-center justify-between text-xs font-serif">
                      <span className="text-stone-400">Rating & Critics:</span>
                      <span className="text-gold-300 font-bold">★★★★★ (4.9/5)</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls: Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-royal-obsidian/80 backdrop-blur-md border border-gold-500/30 text-gold-400 hover:text-white hover:border-gold-400 hover:scale-110 flex items-center justify-center transition-all z-20 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-royal-obsidian/80 backdrop-blur-md border border-gold-500/30 text-gold-400 hover:text-white hover:border-gold-400 hover:scale-110 flex items-center justify-center transition-all z-20 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Dots / Numbered Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-royal-obsidian/80 backdrop-blur-md px-4 py-2 rounded-full border border-gold-500/20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-gold-400' : 'w-2.5 bg-stone-600 hover:bg-stone-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 3-Column Banner Row below Carousel (Directly inspired by Sample 1 design layout!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          {/* Card 1: Artisanal Drinks at Bar */}
          <div className="glass-card p-6 rounded-2xl border border-gold-500/25 hover:border-gold-500/50 transition-all duration-300 group relative overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <GlassWater className="w-5 h-5" />
            </div>
            <span className="text-[9px] font-serif uppercase tracking-widest text-gold-400 block mb-1">
              Food & Drink
            </span>
            <h4 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
              Enjoy Drinks & Kashmiri Snacks at the Bar!
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed mb-4">
              Handcrafted saffron cocktails, aged whiskey pairings, and traditional spiced Kahwa brewed in brass samovars.
            </p>
            <a 
              href="#bar" 
              className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-gold-400 hover:text-gold-200 transition-colors"
            >
              Explore Kahwa Bar <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Sat & Sun Royal Brunch */}
          <div className="glass-card p-6 rounded-2xl border border-gold-500/25 hover:border-gold-500/50 transition-all duration-300 group relative overflow-hidden bg-gradient-to-br from-gold-500/10 via-royal-surface to-royal-obsidian">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform">
              <Crown className="w-5 h-5" />
            </div>
            <span className="text-[9px] font-serif uppercase tracking-widest text-gold-400 block mb-1">
              Weekend Exclusive
            </span>
            <h4 className="text-xl font-serif font-extrabold text-gold-gradient mb-2">
              Sat & Sun Royal Brunch
            </h4>
            <p className="text-stone-300 text-xs leading-relaxed mb-4">
              Experience our flagship 36-course Wazwan feast with live Santoor performances every Saturday & Sunday afternoon.
            </p>
            <button 
              onClick={onOpenReservation}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-500/20 border border-gold-400/40 text-xs font-serif font-bold text-gold-300 hover:bg-gold-500 hover:text-royal-obsidian transition-all"
            >
              Make Brunch Reservation <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Love & Romantic Evenings */}
          <div className="glass-card p-6 rounded-2xl border border-gold-500/25 hover:border-gold-500/50 transition-all duration-300 group relative overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-400/40 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5" />
            </div>
            <span className="text-[9px] font-serif uppercase tracking-widest text-gold-400 block mb-1">
              Private Dining
            </span>
            <h4 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
              Candlelit Couples & Private Banquets
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed mb-4">
              Enclosed glass pavilion under starry night skies, tailor-made menu arrangements, and private waiter service.
            </p>
            <button 
              onClick={onOpenReservation}
              className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-gold-400 hover:text-gold-200 transition-colors"
            >
              Book Private Booth <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
