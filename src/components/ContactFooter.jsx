import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Flame, Send } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer className="bg-royal-obsidian border-t border-gold-500/20 pt-24 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Info (Col 4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-gold-500/40 bg-royal-surface flex items-center justify-center">
                <Flame className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-gold-gradient block leading-none">
                  ZAYKA
                </span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-stone-400 font-sans block mt-1">
                  Royal Kashmir
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-sm">
              An immersive fine-dining sanctuary celebrating 14th century Kashmiri Wazwan gastronomy, copper craftsmanship, and royal hospitality.
            </p>

            <div className="space-y-3 text-xs text-stone-300 font-serif">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Boulevard Road, Dal Lake Frontage, Srinagar, Kashmir</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>+91 194 240 9821 / +1 (800) 892-9521</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>concierge@zayka-kashmir.com</span>
              </div>
            </div>
          </div>

          {/* Service Hours & Dress Code (Col 4) */}
          <div className="lg:col-span-4 glass-card p-8 rounded-2xl border border-gold-500/20">
            <div className="flex items-center gap-2 text-gold-400 mb-6 font-serif text-xs uppercase tracking-widest">
              <Clock className="w-4 h-4" />
              Service Hours & Attire
            </div>

            <div className="space-y-4 text-xs font-serif mb-6">
              <div className="flex justify-between border-b border-gold-500/15 pb-2">
                <span className="text-stone-400">Lunch Service:</span>
                <span className="text-white font-semibold">12:30 PM — 3:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-gold-500/15 pb-2">
                <span className="text-stone-400">Royal Dinner Service:</span>
                <span className="text-white font-semibold">6:30 PM — 11:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-gold-500/15 pb-2">
                <span className="text-stone-400">Kahwa Lounge & Bar:</span>
                <span className="text-white font-semibold">5:00 PM — Midnight</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-[11px] text-stone-300">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>Dress Code: Smart Elegant / Traditional Kashmir Formal. Valet parking & boat transfers available.</span>
            </div>
          </div>

          {/* Interactive Map Frame Mockup (Col 4) */}
          <div className="lg:col-span-4 rounded-2xl overflow-hidden glass-card p-2 border border-gold-500/20 relative group">
            <div className="w-full h-full min-h-[220px] rounded-xl overflow-hidden relative bg-royal-surface flex items-center justify-center">
              {/* Map background effect */}
              <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('/images/exterior.jpg')` }} />
              <div className="absolute inset-0 bg-royal-obsidian/75" />

              <div className="relative z-10 text-center p-6">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center mx-auto mb-3 text-gold-400 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-white text-base mb-1">Zayka Sanctuary</h4>
                <p className="text-stone-400 text-xs mb-3">Dal Lake Waterfront, Srinagar</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-[11px] font-serif uppercase tracking-wider hover:bg-gold-500 hover:text-royal-obsidian transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-500/15 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Zayka Royal Kashmir. All rights reserved. Front-end Edition.</p>
          <div className="flex gap-6 font-serif">
            <a href="#journey" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#journey" className="hover:text-gold-400 transition-colors">Terms of Royal Service</a>
            <a href="#journey" className="hover:text-gold-400 transition-colors">Concierge Desk</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
