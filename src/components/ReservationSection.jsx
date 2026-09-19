import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, Sparkles, CheckCircle2, Crown } from 'lucide-react';

export default function ReservationSection({ isOpenModal, onCloseModal, selectedDishes = [] }) {
  const [partySize, setPartySize] = useState(4);
  const [date, setDate] = useState('2026-09-22');
  const [time, setTime] = useState('19:30');
  const [seatingZone, setSeatingZone] = useState('dastarkhwan');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const seatingOptions = [
    {
      id: 'dastarkhwan',
      title: 'Royal Dastarkhwan',
      desc: 'Plush velvet bolsters around handcrafted copper Trami platters.'
    },
    {
      id: 'dining-hall',
      title: 'Candlelit Hall',
      desc: 'Mahogany dining tables with ambient candle lighting & live acoustic santoor.'
    },
    {
      id: 'garden',
      title: 'Chinar Pavilion',
      desc: 'Glass conservatory enclosed under starry night sky with garden views.'
    }
  ];

  const handleBook = (e) => {
    e.preventDefault();
    const refCode = 'ZYK-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBooking({
      refCode,
      name: guestName || 'Royal Guest',
      email: guestEmail || 'guest@zayka-kashmir.com',
      phone: guestPhone || '+1 (555) 019-2834',
      partySize,
      date,
      time,
      seatingZone: seatingOptions.find(s => s.id === seatingZone)?.title,
      specialRequest
    });
  };

  const formContent = (
    <div className="max-w-3xl mx-auto">
      {!confirmedBooking ? (
        <form onSubmit={handleBook} className="glass-card p-5 sm:p-7 rounded-2xl border border-gold-500/30 shadow-2xl relative">
          
          <div className="text-center max-w-lg mx-auto mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 mb-2">
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-serif text-gold-300">
                Table Reservation Engine
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white mb-1">
              Reserve Your <span className="text-gold-gradient">Royal Seat</span>
            </h2>
            <p className="text-stone-400 text-xs">
              Experience authentic Wazwan hospitality for intimate dinners, family gatherings, and banquets.
            </p>
          </div>

          {/* Step 1: Party & Timing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {/* Guests */}
            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Party Size
              </label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                  <option key={num} value={num} className="bg-royal-obsidian">
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
                <option value={15} className="bg-royal-obsidian">12+ Private Banquet</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5" /> Reservation Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500"
                required
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Preferred Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500"
              >
                {['17:30', '18:30', '19:30', '20:30', '21:30'].map((t) => (
                  <option key={t} value={t} className="bg-royal-obsidian">
                    {t} (Dinner)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 2: Seating Zone Selection */}
          <div className="mb-5">
            <label className="block text-[11px] font-serif uppercase tracking-wider text-gold-400 mb-2 flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5" /> Dining Atmosphere
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {seatingOptions.map((zone) => (
                <div
                  key={zone.id}
                  onClick={() => setSeatingZone(zone.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-300 ${
                    seatingZone === zone.id
                      ? 'bg-gold-500/10 border-gold-500 shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                      : 'bg-royal-surface border-stone-800 hover:border-gold-500/40'
                  }`}
                >
                  <h4 className="font-serif font-bold text-xs text-white mb-1">{zone.title}</h4>
                  <p className="text-stone-400 text-[11px] leading-snug">{zone.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider text-stone-400 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Lord Alexander"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider text-stone-400 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="alexander@domain.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider text-stone-400 mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-5">
            <label className="block text-[11px] font-serif uppercase tracking-wider text-stone-400 mb-1">Special Requests / Dietary Notes</label>
            <textarea
              rows={2}
              placeholder="e.g. Anniversary celebration, spice preferences, or dietary requirements..."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600 resize-none"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300"
          >
            Confirm Royal Reservation
          </button>
        </form>
      ) : (
        /* Confirmed Digital Ticket */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-6 rounded-2xl border border-gold-500/60 shadow-2xl text-center relative overflow-hidden max-w-md mx-auto"
        >
          <div className="w-12 h-12 rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center mx-auto mb-4 text-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-gold-400 block mb-1">
            Reservation Confirmed
          </span>

          <h3 className="text-xl font-serif font-bold text-white mb-1">
            Welcome to <span className="text-gold-gradient">Zayka</span>, {confirmedBooking.name}
          </h3>

          <p className="text-stone-300 text-xs mb-5">
            Table reservation recorded. Voucher sent to <span className="text-gold-400">{confirmedBooking.email}</span>.
          </p>

          {/* Pass Ticket Box */}
          <div className="bg-royal-surface/90 border border-gold-500/30 p-4 rounded-xl text-left mb-5 space-y-2 font-serif text-xs">
            <div className="flex justify-between border-b border-gold-500/20 pb-1.5">
              <span className="text-stone-400">Pass Code:</span>
              <span className="text-gold-400 font-bold">{confirmedBooking.refCode}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Date & Time:</span>
              <span className="text-white">{confirmedBooking.date} at {confirmedBooking.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Party Size:</span>
              <span className="text-white">{confirmedBooking.partySize} Guests</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Seating Zone:</span>
              <span className="text-gold-300">{confirmedBooking.seatingZone}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setConfirmedBooking(null);
              if (onCloseModal) onCloseModal();
            }}
            className="px-6 py-2.5 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold uppercase tracking-widest shadow-md"
          >
            Done & Return to Journey
          </button>
        </motion.div>
      )}
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <div className="relative w-full max-w-3xl my-auto">
          <button
            onClick={onCloseModal}
            className="absolute -top-10 right-0 text-stone-300 hover:text-white font-serif text-[11px] uppercase tracking-wider bg-royal-surface px-3 py-1 rounded-full border border-gold-500/30"
          >
            ✕ Close
          </button>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="reservation" className="py-16 md:py-20 bg-royal-obsidian relative border-t border-gold-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {formContent}
      </div>
    </section>
  );
}
