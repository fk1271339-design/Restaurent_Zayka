import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu as MenuIcon, X, Calendar, Flame } from 'lucide-react';
import { royalSynth } from '../utils/audioSynth';

export default function Navbar({ onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const active = royalSynth.toggle();
    setIsAudioActive(active);
  };

  const navLinks = [
    { name: 'Experience', href: '#journey' },
    { name: 'Heritage Story', href: '#story' },
    { name: 'Royal Menu', href: '#menu' },
    { name: 'Kahwa Bar', href: '#bar' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reserve', href: '#reservation' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-royal-obsidian/90 backdrop-blur-md py-4 border-b border-gold-500/20 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-royal-obsidian/90 via-royal-obsidian/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#journey" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-gold-500/40 bg-royal-surface flex items-center justify-center group-hover:border-gold-500 transition-colors shadow-lg shadow-gold-500/10">
            <Flame className="w-5 h-5 text-gold-500 animate-pulse-slow" />
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-gold-gradient block leading-none">
              ZAYKA
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-stone-400 font-sans block mt-1">
              Royal Kashmir
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-xs uppercase tracking-[0.2em] text-stone-300 hover:text-gold-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions & Sound Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* Ambient Sound Toggle */}
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-2 px-3 py-2 rounded-full border text-xs tracking-wider uppercase transition-all duration-300 ${
              isAudioActive
                ? 'border-gold-500 bg-gold-500/10 text-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                : 'border-stone-800 bg-royal-surface/80 text-stone-400 hover:border-stone-600 hover:text-stone-200'
            }`}
            title="Toggle Ambient Kashmiri Soundscape"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-4 h-4 text-gold-400 animate-bounce" />
                <span className="hidden xl:inline text-[11px]">Audio On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px]">Ambient Sound</span>
              </>
            )}
          </button>

          {/* Book Table Button */}
          <button
            onClick={onOpenReservation}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full overflow-hidden bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              Book Table
            </span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleAudio}
            className={`p-2 rounded-full border text-xs ${
              isAudioActive ? 'border-gold-500 text-gold-400 bg-gold-500/10' : 'border-stone-800 text-stone-400'
            }`}
          >
            {isAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-gold-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-royal-obsidian/95 border-b border-gold-500/20 backdrop-blur-xl py-6 px-8 flex flex-col gap-5 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif text-base tracking-widest text-stone-200 hover:text-gold-400 transition-colors border-b border-stone-800/60 pb-3"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="w-full py-3.5 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold tracking-[0.2em] uppercase shadow-lg shadow-gold-500/20 mt-2"
          >
            Book a Table
          </button>
        </div>
      )}
    </header>
  );
}
