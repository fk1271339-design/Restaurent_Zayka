import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Compass, Calendar, Info, Sparkles, ChevronRight, Flame } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollJourney({ onOpenReservation }) {
  const containerRef = useRef(null);
  const exteriorRef = useRef(null);
  const entranceRef = useRef(null);
  const tableRef = useRef(null);
  const foodRef = useRef(null);

  const heroOverlayRef = useRef(null);
  const entranceOverlayRef = useRef(null);
  const tableOverlayRef = useRef(null);
  const foodOverlayRef = useRef(null);

  const [activeStage, setActiveStage] = useState(0); // 0: Exterior, 1: Entrance, 2: Table, 3: Food
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  // Interactive hotspots for Stage 4 (Wazwan Feast)
  const hotspots = [
    {
      id: 'rogan-josh',
      name: 'Rogan Josh',
      type: 'Royal Classic',
      x: '32%',
      y: '45%',
      desc: 'Tender tender lamb braised in aromatic gravy infused with Kashmiri red chilis, ceylon cardamom & dry ginger.',
      spiciness: 'Medium Warm',
      heritage: 'Introduced by the Moguls, perfected by Kashmiri Master Chefs (Vastas).'
    },
    {
      id: 'gushtaba',
      name: 'Wazwan Gushtaba',
      type: 'King of Wazwan',
      x: '68%',
      y: '40%',
      desc: 'Velvety mutton meatballs hand-pounded for hours and poached in a silky, spice-infused yogurt gravy.',
      spiciness: 'Mild & Fragrant',
      heritage: 'Traditionally served as the grand final savory course in a 36-item Wazwan banquet.'
    },
    {
      id: 'yakhni',
      name: 'Saffron Yakhni',
      type: 'Delicacy',
      x: '50%',
      y: '70%',
      desc: 'Succulent cuts of lamb simmered with pure Pampore saffron threads, wild mint, and black cardamom.',
      spiciness: 'Aromatic Mild',
      heritage: 'Infused with Grade-1 saffron harvested from the valleys of Pampore.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline pinned over the scroll container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=350%',
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.25) setActiveStage(0);
            else if (progress < 0.55) setActiveStage(1);
            else if (progress < 0.82) setActiveStage(2);
            else setActiveStage(3);
          }
        }
      });

      // Initial state
      gsap.set(entranceRef.current, { scale: 1.4, opacity: 0 });
      gsap.set(tableRef.current, { scale: 1.4, opacity: 0 });
      gsap.set(foodRef.current, { scale: 1.4, opacity: 0 });

      gsap.set(heroOverlayRef.current, { opacity: 1, y: 0 });
      gsap.set(entranceOverlayRef.current, { opacity: 0, y: 40 });
      gsap.set(tableOverlayRef.current, { opacity: 0, y: 40 });
      gsap.set(foodOverlayRef.current, { opacity: 0, y: 40 });

      // Phase 1: Zooming into Exterior & Transition to Entrance
      tl.to(exteriorRef.current, { scale: 1.35, duration: 1, ease: 'none' }, 0)
        .to(heroOverlayRef.current, { opacity: 0, y: -50, duration: 0.6 }, 0.2)
        
        // Transition to Entrance
        .to(entranceRef.current, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, 0.7)
        .to(entranceOverlayRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.9)
        .to(exteriorRef.current, { opacity: 0, duration: 0.5 }, 1.0)
        
        // Phase 2: Zooming Entrance to Dining Table
        .to(entranceRef.current, { scale: 1.3, duration: 1, ease: 'none' }, 1.3)
        .to(entranceOverlayRef.current, { opacity: 0, y: -40, duration: 0.5 }, 1.4)
        
        // Transition to Dining Table
        .to(tableRef.current, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, 1.8)
        .to(tableOverlayRef.current, { opacity: 1, y: 0, duration: 0.6 }, 2.0)
        .to(entranceRef.current, { opacity: 0, duration: 0.5 }, 2.1)
        
        // Phase 3: Zooming Table into Signature Food Feast
        .to(tableRef.current, { scale: 1.35, duration: 1, ease: 'none' }, 2.4)
        .to(tableOverlayRef.current, { opacity: 0, y: -40, duration: 0.5 }, 2.5)
        
        // Transition to Food
        .to(foodRef.current, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, 2.9)
        .to(foodOverlayRef.current, { opacity: 1, y: 0, duration: 0.6 }, 3.1)
        .to(tableRef.current, { opacity: 0, duration: 0.5 }, 3.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stages = [
    { title: 'Outside Zayka', desc: 'The Royal Estate at Night' },
    { title: 'The Entrance', desc: 'Step Across the Threshold' },
    { title: 'Dining Sanctuary', desc: 'Candlelit Kashmir Elegance' },
    { title: 'Wazwan Feast', desc: 'A Culinary Masterpiece' }
  ];

  return (
    <div id="journey" ref={containerRef} className="relative w-full h-screen overflow-hidden bg-royal-obsidian">
      {/* Visual Canvas Layers */}
      
      {/* Layer 1: Exterior at Night */}
      <div
        ref={exteriorRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-100 will-change-transform"
        style={{ backgroundImage: `url('/images/exterior.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-royal-obsidian via-royal-obsidian/40 to-royal-obsidian/70" />
        <div className="absolute inset-0 royal-vignette" />
      </div>

      {/* Layer 2: Entrance */}
      <div
        ref={entranceRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-100 will-change-transform"
        style={{ backgroundImage: `url('/images/entrance.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-royal-obsidian via-royal-obsidian/50 to-royal-obsidian/80" />
        <div className="absolute inset-0 royal-vignette" />
      </div>

      {/* Layer 3: Dining Table */}
      <div
        ref={tableRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-100 will-change-transform"
        style={{ backgroundImage: `url('/images/dining_table.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-royal-obsidian via-royal-obsidian/50 to-royal-obsidian/70" />
        <div className="absolute inset-0 royal-vignette" />
      </div>

      {/* Layer 4: Wazwan Feast (Food) */}
      <div
        ref={foodRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-100 will-change-transform"
        style={{ backgroundImage: `url('/images/wazwan_feast.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-royal-obsidian via-royal-obsidian/60 to-royal-obsidian/70" />
        <div className="absolute inset-0 royal-vignette" />

        {/* Interactive Food Hotspots (Only visible when on stage 3 - Food) */}
        {activeStage === 3 && (
          <div className="absolute inset-0 z-20 pointer-events-auto">
            {hotspots.map((hs) => (
              <div
                key={hs.id}
                style={{ left: hs.x, top: hs.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
              >
                <button
                  onClick={() => setSelectedHotspot(selectedHotspot?.id === hs.id ? null : hs)}
                  className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gold-500/20 border-2 border-gold-400 text-gold-300 shadow-[0_0_20px_rgba(212,175,55,0.6)] animate-pulse hover:scale-125 transition-transform duration-300"
                >
                  <Flame className="w-5 h-5 text-gold-400" />
                  <span className="absolute -top-7 whitespace-nowrap px-2.5 py-0.5 rounded bg-royal-obsidian/90 border border-gold-500/30 text-[10px] uppercase tracking-wider text-gold-300 font-serif font-semibold">
                    {hs.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* OVERLAY CONTENT BY STAGES */}
      <div className="relative z-30 max-w-7xl mx-auto h-full px-6 sm:px-8 flex flex-col justify-between py-24 pointer-events-none">
        
        {/* Stage 0: Hero Exterior */}
        <div
          ref={heroOverlayRef}
          className="my-auto max-w-3xl pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-md mb-6 shadow-lg shadow-gold-500/10">
            <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
            <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-300">
              An Immersive Fine Dining Journey
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
            <span className="text-gold-gradient block drop-shadow-2xl">ZAYKA</span>
          </h1>

          <p className="font-accent text-2xl sm:text-4xl text-stone-200 italic mb-8 tracking-wide font-light border-l-2 border-gold-500/60 pl-4">
            "A Taste of Royal Kashmir"
          </p>

          <p className="text-sm sm:text-base text-stone-300 font-sans max-w-xl mb-10 leading-relaxed drop-shadow">
            Immerse yourself in centuries of Kashmiri royal heritage. Scroll down to step through our mahogany arches, take a seat at our candlelit tables, and savor authentic Wazwan delicacies.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => {
                const storyEl = document.querySelector('#story');
                if (storyEl) storyEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition-all duration-300 flex items-center gap-2 group active:scale-95"
            >
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              Explore the Experience
            </button>

            <button
              onClick={onOpenReservation}
              className="px-8 py-4 rounded-full border border-gold-500/50 bg-royal-obsidian/70 backdrop-blur-md text-stone-200 hover:text-gold-400 hover:border-gold-400 font-serif text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              Book a Table
            </button>
          </div>
        </div>

        {/* Stage 1: Entrance Overlay */}
        <div
          ref={entranceOverlayRef}
          className="my-auto max-w-2xl pointer-events-auto"
        >
          <span className="text-xs font-serif uppercase tracking-[0.35em] text-gold-400 block mb-3">
            01 / Entrance Journey
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Cross the Threshold into Royalty
          </h2>
          <p className="text-stone-300 text-sm sm:text-lg font-sans leading-relaxed border-l-2 border-gold-500/50 pl-4 mb-8">
            Carved walnut doors, glowing brass lanterns, and the intoxicating scent of Kashmiri spices welcome you into our secluded sanctuary.
          </p>
          <div className="inline-flex items-center gap-3 text-gold-400 text-xs tracking-widest uppercase font-serif">
            <span>Keep Scrolling to enter the dining hall</span>
            <ChevronRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Stage 2: Dining Table Overlay */}
        <div
          ref={tableOverlayRef}
          className="my-auto max-w-2xl ml-auto text-right pointer-events-auto"
        >
          <span className="text-xs font-serif uppercase tracking-[0.35em] text-gold-400 block mb-3">
            02 / Dining Sanctuary
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            An Atmosphere Fit for Emperors
          </h2>
          <p className="text-stone-300 text-sm sm:text-lg font-sans leading-relaxed border-r-2 border-gold-500/50 pr-4 mb-8">
            Gather around intricately engraved silver and copper Trami plates, plush velvet seating, and candlelit Kashmiri warmth.
          </p>
          <div className="inline-flex items-center gap-3 text-gold-400 text-xs tracking-widest uppercase font-serif justify-end">
            <ChevronRight className="w-4 h-4 rotate-180 animate-pulse" />
            <span>Scroll further to discover the feast</span>
          </div>
        </div>

        {/* Stage 3: Food Wazwan Overlay */}
        <div
          ref={foodOverlayRef}
          className="my-auto max-w-2xl pointer-events-auto"
        >
          <span className="text-xs font-serif uppercase tracking-[0.35em] text-gold-400 block mb-3">
            03 / Culinary Revelation
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            The 36-Course Royal Wazwan
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed mb-6">
            Prepared by master <span className="text-gold-400 font-semibold italic">Vastas</span> using slow copper-pot braising over wood fires. Click the glowing markers on the dishes to inspect their royal lineage.
          </p>

          <button
            onClick={onOpenReservation}
            className="px-8 py-3.5 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold tracking-[0.2em] uppercase shadow-lg shadow-gold-500/30 hover:scale-105 transition-transform"
          >
            Reserve Your Feast Now
          </button>
        </div>

        {/* Scroll Indicator Prompt (Bottom) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 opacity-80 pointer-events-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] font-serif">
            Scroll to Navigate Experience
          </span>
          <ArrowDown className="w-4 h-4 text-gold-400 animate-bounce" />
        </div>

        {/* Stage Tracker Indicators (Right Sidebar) */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 pointer-events-auto">
          {stages.map((stg, idx) => (
            <div
              key={stg.title}
              className="group relative flex items-center justify-end"
            >
              {/* Tooltip */}
              <div className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-royal-obsidian/90 border border-gold-500/30 px-3 py-1 rounded text-right whitespace-nowrap pointer-events-none">
                <span className="block text-[11px] font-serif font-semibold text-gold-300">{stg.title}</span>
                <span className="block text-[9px] text-stone-400">{stg.desc}</span>
              </div>
              {/* Indicator Dot */}
              <div
                className={`w-3 h-3 rounded-full border transition-all duration-500 ${
                  activeStage === idx
                    ? 'bg-gold-500 border-gold-300 scale-125 shadow-[0_0_10px_#D4AF37]'
                    : 'bg-royal-surface border-stone-700 hover:border-gold-500'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Selected Hotspot Modal Overlay */}
      {selectedHotspot && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6">
          <div className="glass-card max-w-md w-full p-8 rounded-2xl relative border border-gold-500/40 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setSelectedHotspot(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white text-sm uppercase tracking-widest font-serif"
            >
              ✕ Close
            </button>
            <span className="text-[10px] font-serif uppercase tracking-[0.3em] text-gold-400 block mb-2">
              {selectedHotspot.type}
            </span>
            <h3 className="text-3xl font-serif font-bold text-white mb-3">
              {selectedHotspot.name}
            </h3>
            <p className="text-stone-300 text-sm mb-6 leading-relaxed">
              {selectedHotspot.desc}
            </p>
            <div className="space-y-3 border-t border-gold-500/20 pt-4 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-400 font-serif">Spice Profile:</span>
                <span className="text-gold-400 font-semibold">{selectedHotspot.spiciness}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400 font-serif">Heritage Note:</span>
                <span className="text-stone-300 text-right max-w-[220px]">{selectedHotspot.heritage}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedHotspot(null);
                onOpenReservation();
              }}
              className="w-full mt-6 py-3 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-gold-500/20"
            >
              Order in Reservation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
