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
    { id: 'dastarkhwan', title: 'Royal Dastarkhwan' },
    { id: 'dining-hall', title: 'Candlelit Hall' },
    { id: 'garden', title: 'Chinar Pavilion' }
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
    <div className="max-w-xl mx-auto">
      {!confirmedBooking ? (
        <form onSubmit={handleBook} className="glass-card p-4 sm:p-5 rounded-xl border border-gold-500/30 shadow-xl relative">
          
          <div className="text-center max-w-xs mx-auto mb-4">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-gold-500/30 bg-gold-500/10 mb-1">
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span className="text-[9px] uppercase tracking-widest font-serif text-gold-300">
                Table Reservation
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-white">
              Reserve Your <span className="text-gold-gradient">Royal Seat</span>
            </h2>
          </div>

          {/* Step 1: Party & Timing */}
          <div className="grid grid-cols-3 gap-2.5 mb-3.5">
            {/* Guests */}
            <div>
              <label className="block text-[10px] font-serif uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1">
                <Users className="w-3 h-3" /> Guests
              </label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                  <option key={num} value={num} className="bg-royal-obsidian">
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-[10px] font-serif uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1">
                <CalendarIcon className="w-3 h-3" /> Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500"
                required
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-[10px] font-serif uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500"
              >
                {['17:30', '18:30', '19:30', '20:30', '21:30'].map((t) => (
                  <option key={t} value={t} className="bg-royal-obsidian">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 2: Seating Zone Pills */}
          <div className="mb-3.5">
            <label className="block text-[10px] font-serif uppercase tracking-wider text-gold-400 mb-1.5 flex items-center gap-1">
              <Crown className="w-3 h-3" /> Atmosphere
            </label>
            <div className="grid grid-cols-3 gap-2">
              {seatingOptions.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setSeatingZone(zone.id)}
                  className={`py-1.5 px-2 rounded-lg border text-[11px] font-serif font-medium text-center transition-all ${
                    seatingZone === zone.id
                      ? 'bg-gold-500/15 border-gold-500 text-gold-300 shadow-sm'
                      : 'bg-royal-surface border-stone-800 text-stone-400 hover:border-stone-700'
                  }`}
                >
                  {zone.title}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Contact Details */}
          <div className="grid grid-cols-3 gap-2.5 mb-3.5">
            <div>
              <label className="block text-[10px] font-serif uppercase tracking-wider text-stone-400 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Lord Alexander"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-[10px] font-serif uppercase tracking-wider text-stone-400 mb-1">Email</label>
              <input
                type="email"
                placeholder="alexander@domain.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                required
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-[10px] font-serif uppercase tracking-wider text-stone-400 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+1 555-000-0000"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                required
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-4">
            <label className="block text-[10px] font-serif uppercase tracking-wider text-stone-400 mb-1">Special Requests</label>
            <input
              type="text"
              placeholder="e.g. Anniversary celebration, spice preferences..."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all"
          >
            Confirm Royal Reservation
          </button>
        </form>
      ) : (
        /* Confirmed Digital Ticket */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-5 rounded-xl border border-gold-500/60 shadow-xl text-center relative max-w-sm mx-auto"
        >
          <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center mx-auto mb-3 text-gold-400 shadow-sm">
            <CheckCircle2 className="w-5 h-5" />
          </div>

          <span className="text-[9px] font-serif uppercase tracking-widest text-gold-400 block mb-0.5">
            Reservation Confirmed
          </span>

          <h3 className="text-lg font-serif font-bold text-white mb-1">
            Welcome to <span className="text-gold-gradient">Zayka</span>, {confirmedBooking.name}
          </h3>

          <p className="text-stone-300 text-[11px] mb-4">
            Pass Code: <span className="text-gold-400 font-bold">{confirmedBooking.refCode}</span>
          </p>

          <div className="bg-royal-surface/90 border border-gold-500/30 p-3 rounded-lg text-left mb-4 space-y-1.5 font-serif text-[11px]">
            <div className="flex justify-between">
              <span className="text-stone-400">Date & Time:</span>
              <span className="text-white">{confirmedBooking.date} at {confirmedBooking.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Party Size:</span>
              <span className="text-white">{confirmedBooking.partySize} Guests</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Atmosphere:</span>
              <span className="text-gold-300">{confirmedBooking.seatingZone}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setConfirmedBooking(null);
              if (onCloseModal) onCloseModal();
            }}
            className="px-5 py-2 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-[10px] font-bold uppercase tracking-widest shadow-sm"
          >
            Return to Journey
          </button>
        </motion.div>
      )}
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 overflow-y-auto">
        <div className="relative w-full max-w-xl my-auto">
          <button
            onClick={onCloseModal}
            className="absolute -top-9 right-0 text-stone-300 hover:text-white font-serif text-[10px] uppercase tracking-wider bg-royal-surface px-2.5 py-1 rounded-full border border-gold-500/30"
          >
            ✕ Close
          </button>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="reservation" className="py-12 md:py-14 bg-royal-obsidian relative border-t border-gold-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {formContent}
      </div>
    </section>
  );
}
