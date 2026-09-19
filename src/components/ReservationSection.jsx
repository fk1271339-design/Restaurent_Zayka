import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, Sparkles, CheckCircle2, Crown, UtensilsCrossed } from 'lucide-react';

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
      desc: 'Traditional plush low carpet dining on silk velvet bolsters around handcrafted copper Trami platters.'
    },
    {
      id: 'dining-hall',
      title: 'Grand Candlelit Hall',
      desc: 'Elegan mahogany & velvet dining tables with intimate candle illumination and ambient acoustic santoor.'
    },
    {
      id: 'garden',
      title: 'Chinar Courtyard Pavilion',
      desc: 'Heated glass conservatory enclosed under starry night sky with pine and Chinar garden reflections.'
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
    <div className="max-w-4xl mx-auto">
      {!confirmedBooking ? (
        <form onSubmit={handleBook} className="glass-card p-8 md:p-12 rounded-3xl border border-gold-500/30 shadow-2xl relative">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 mb-3">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-300">
                Table Reservation Engine
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white mb-2">
              Reserve Your <span className="text-gold-gradient">Royal Seat</span>
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              Experience authentic Wazwan hospitality. We accommodate intimate dinners, family gatherings, and private royal banquets.
            </p>
          </div>

          {/* Step 1: Party & Timing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Guests */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-widest text-gold-400 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" /> Party Size
              </label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-royal-surface border border-gold-500/20 text-stone-200 text-sm focus:outline-none focus:border-gold-500"
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
              <label className="block text-xs font-serif uppercase tracking-widest text-gold-400 mb-2 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" /> Reservation Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-royal-surface border border-gold-500/20 text-stone-200 text-sm focus:outline-none focus:border-gold-500"
                required
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-widest text-gold-400 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Prefered Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-royal-surface border border-gold-500/20 text-stone-200 text-sm focus:outline-none focus:border-gold-500"
              >
                {['17:30', '18:30', '19:30', '20:30', '21:30'].map((t) => (
                  <option key={t} value={t} className="bg-royal-obsidian">
                    {t} (Dinner Service)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 2: Seating Zone Selection */}
          <div className="mb-8">
            <label className="block text-xs font-serif uppercase tracking-widest text-gold-400 mb-3 flex items-center gap-2">
              <Crown className="w-4 h-4" /> Select Dining Atmosphere
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {seatingOptions.map((zone) => (
                <div
                  key={zone.id}
                  onClick={() => setSeatingZone(zone.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    seatingZone === zone.id
                      ? 'bg-gold-500/10 border-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-royal-surface border-stone-800 hover:border-gold-500/40'
                  }`}
                >
                  <h4 className="font-serif font-bold text-sm text-white mb-1">{zone.title}</h4>
                  <p className="text-stone-400 text-xs leading-relaxed">{zone.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-xs font-serif uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Lord Alexander"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-royal-surface border border-gold-500/20 text-stone-200 text-sm focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-xs font-serif uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="alexander@domain.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-royal-surface border border-gold-500/20 text-stone-200 text-sm focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-xs font-serif uppercase tracking-widest text-stone-400 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-royal-surface border border-gold-500/20 text-stone-200 text-sm focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-8">
            <label className="block text-xs font-serif uppercase tracking-widest text-stone-400 mb-2">Special Requests / Dietary Notes</label>
            <textarea
              rows={2}
              placeholder="e.g. Anniversary celebration, spice preferences, or dietary requirements..."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-royal-surface border border-gold-500/20 text-stone-200 text-sm focus:outline-none focus:border-gold-500 placeholder:text-stone-600 resize-none"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition-all duration-300"
          >
            Confirm Royal Reservation
          </button>
        </form>
      ) : (
        /* Confirmed Digital Ticket */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-10 rounded-3xl border border-gold-500/60 shadow-2xl text-center relative overflow-hidden"
        >
          <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center mx-auto mb-6 text-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.5)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-serif uppercase tracking-[0.3em] text-gold-400 block mb-2">
            Reservation Confirmed
          </span>

          <h3 className="text-3xl font-serif font-bold text-white mb-2">
            Welcome to <span className="text-gold-gradient">Zayka</span>, {confirmedBooking.name}
          </h3>

          <p className="text-stone-300 text-xs mb-8">
            Your table reservation has been recorded in our royal registry. A confirmation pass has been dispatched to <span className="text-gold-400">{confirmedBooking.email}</span>.
          </p>

          {/* Pass Ticket Box */}
          <div className="bg-royal-surface/90 border border-gold-500/30 p-6 rounded-2xl max-w-md mx-auto text-left mb-8 space-y-3 font-serif text-xs">
            <div className="flex justify-between border-b border-gold-500/20 pb-2">
              <span className="text-stone-400">Reference Pass:</span>
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
            className="px-8 py-3 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-xs font-bold uppercase tracking-widest shadow-lg shadow-gold-500/20"
          >
            Done & Return to Journey
          </button>
        </motion.div>
      )}
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 overflow-y-auto">
        <div className="relative w-full max-w-4xl my-auto">
          <button
            onClick={onCloseModal}
            className="absolute -top-12 right-0 text-stone-300 hover:text-white font-serif text-xs uppercase tracking-widest bg-royal-surface px-4 py-1.5 rounded-full border border-gold-500/30"
          >
            ✕ Close Window
          </button>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="reservation" className="py-32 bg-royal-obsidian relative border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {formContent}
      </div>
    </section>
  );
}
