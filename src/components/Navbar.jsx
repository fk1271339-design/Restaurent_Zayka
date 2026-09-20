import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu as MenuIcon, X, Calendar, Flame } from 'lucide-react';
import { royalSynth } from '../utils/audioSynth';

export default function Navbar({ onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
    { name: 'Showcases', href: '#experiences' },
    { name: 'Heritage Story', href: '#story' },
    { name: 'Royal Menu', href: '#menu' },
    { name: 'Kahwa Bar', href: '#bar' },
    { name: 'Reviews', href: '#reviews' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-royal-obsidian/90 backdrop-blur-md py-2.5 border-b border-gold-500/20 shadow-xl'
          : 'bg-gradient-to-b from-royal-obsidian/90 via-royal-obsidian/40 to-transparent py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#journey" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full border border-gold-500/40 bg-royal-surface flex items-center justify-center group-hover:border-gold-500 transition-colors shadow-md">
            <Flame className="w-4 h-4 text-gold-500" />
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-[0.2em] text-gold-gradient block leading-none">
              ZAYKA
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-sans block mt-0.5">
              Royal Kashmir
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-[11px] uppercase tracking-[0.18em] text-stone-300 hover:text-gold-400 transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions & Sound Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Ambient Sound Toggle */}
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-[11px] tracking-wider uppercase transition-all duration-300 ${
              isAudioActive
                ? 'border-gold-500 bg-gold-500/10 text-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                : 'border-stone-800 bg-royal-surface/80 text-stone-400 hover:border-stone-600 hover:text-stone-200'
            }`}
            title="Toggle Ambient Kashmiri Soundscape"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-gold-400" />
                <span className="hidden xl:inline text-[10px]">Audio On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden xl:inline text-[10px]">Ambient</span>
              </>
            )}
          </button>

          {/* Book Table Button */}
          <button
            onClick={onOpenReservation}
            className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full overflow-hidden bg-gold-gradient text-royal-obsidian font-serif text-[11px] font-bold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_18px_rgba(212,175,55,0.5)] active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Table
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleAudio}
            className={`p-1.5 rounded-full border text-xs ${
              isAudioActive ? 'border-gold-500 text-gold-400 bg-gold-500/10' : 'border-stone-800 text-stone-400'
            }`}
          >
            {isAudioActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-stone-300 hover:text-gold-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-royal-obsidian/95 border-b border-gold-500/20 backdrop-blur-xl py-4 px-6 flex flex-col gap-3.5 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif text-sm tracking-widest text-stone-200 hover:text-gold-400 transition-colors border-b border-stone-800/60 pb-2"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="w-full py-2.5 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold tracking-widest uppercase shadow-md mt-1"
          >
            Book a Table
          </button>
        </div>
      )}
    </header>
  );
}
