import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Flame } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer className="bg-royal-obsidian border-t border-gold-500/20 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Brand Info (Col 4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full border border-gold-500/40 bg-royal-surface flex items-center justify-center">
                <Flame className="w-4.5 h-4.5 text-gold-500" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-[0.2em] text-gold-gradient block leading-none">
                  ZAYKA
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-sans block mt-0.5">
                  Royal Kashmir
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed mb-5 max-w-sm">
              An immersive fine-dining sanctuary celebrating 14th century Kashmiri Wazwan gastronomy and royal hospitality.
            </p>

            <div className="space-y-2 text-xs text-stone-300 font-serif">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Boulevard Road, Dal Lake Frontage, Srinagar, Kashmir</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>+91 194 240 9821 / +1 (800) 892-9521</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>concierge@zayka-kashmir.com</span>
              </div>
            </div>
          </div>

          {/* Service Hours & Dress Code (Col 4) */}
          <div className="lg:col-span-4 glass-card p-5 rounded-xl border border-gold-500/20">
            <div className="flex items-center gap-2 text-gold-400 mb-4 font-serif text-xs uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5" />
              Service Hours & Attire
            </div>

            <div className="space-y-3 text-xs font-serif mb-4">
              <div className="flex justify-between border-b border-gold-500/15 pb-1.5">
                <span className="text-stone-400">Lunch Service:</span>
                <span className="text-white font-semibold">12:30 PM — 3:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-gold-500/15 pb-1.5">
                <span className="text-stone-400">Royal Dinner Service:</span>
                <span className="text-white font-semibold">6:30 PM — 11:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-gold-500/15 pb-1.5">
                <span className="text-stone-400">Kahwa Lounge & Bar:</span>
                <span className="text-white font-semibold">5:00 PM — Midnight</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gold-500/10 border border-gold-500/20 text-[10px] text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
              <span>Dress Code: Smart Formal. Valet parking & boat transfers available.</span>
            </div>
          </div>

          {/* Interactive Map Frame Mockup (Col 4) */}
          <div className="lg:col-span-4 rounded-xl overflow-hidden glass-card p-2 border border-gold-500/20 relative group">
            <div className="w-full h-full min-h-[180px] rounded-lg overflow-hidden relative bg-royal-surface flex items-center justify-center">
              <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('/images/exterior.jpg')` }} />
              <div className="absolute inset-0 bg-royal-obsidian/75" />

              <div className="relative z-10 text-center p-4">
                <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center mx-auto mb-2 text-gold-400 animate-bounce">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-serif font-bold text-white text-sm mb-0.5">Zayka Sanctuary</h4>
                <p className="text-stone-400 text-xs mb-2">Dal Lake Waterfront, Srinagar</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-[10px] font-serif uppercase tracking-wider hover:bg-gold-500 hover:text-royal-obsidian transition-colors"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-500/15 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-3">
          <p>© 2026 Zayka Royal Kashmir. All rights reserved.</p>
          <div className="flex gap-5 font-serif">
            <a href="#journey" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#journey" className="hover:text-gold-400 transition-colors">Terms of Royal Service</a>
            <a href="#journey" className="hover:text-gold-400 transition-colors">Concierge Desk</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
