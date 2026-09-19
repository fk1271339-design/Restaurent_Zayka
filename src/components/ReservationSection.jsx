import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, Sparkles, CheckCircle2, Crown, X } from 'lucide-react';

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

  const renderForm = (isModalView = false) => (
    <div className={isModalView ? 'w-full' : 'max-w-xl mx-auto'}>
      {!confirmedBooking ? (
        <form onSubmit={handleBook} className={`glass-card rounded-2xl border border-gold-500/30 shadow-2xl relative ${isModalView ? 'p-4 sm:p-5' : 'p-5 sm:p-6'}`}>
          
          {/* Modal Header with Inline Close Button */}
          <div className="flex items-center justify-between mb-3 border-b border-gold-500/15 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400">
                <Crown className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm sm:text-base font-serif font-bold text-white">
                Reserve Your <span className="text-gold-gradient">Royal Seat</span>
              </h3>
            </div>
            {isModalView && (
              <button
                type="button"
                onClick={onCloseModal}
                className="w-7 h-7 rounded-full bg-royal-surface border border-gold-500/30 text-stone-400 hover:text-white flex items-center justify-center text-xs transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Row 1: Guests, Date, Time */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-gold-400 mb-0.5 flex items-center gap-1">
                <Users className="w-2.5 h-2.5" /> Guests
              </label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full px-2 py-1.5 rounded-md bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                  <option key={num} value={num} className="bg-royal-obsidian">
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-gold-400 mb-0.5 flex items-center gap-1">
                <CalendarIcon className="w-2.5 h-2.5" /> Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-2 py-1.5 rounded-md bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500"
                required
              />
            </div>

            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-gold-400 mb-0.5 flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" /> Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-2 py-1.5 rounded-md bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500"
              >
                {['17:30', '18:30', '19:30', '20:30', '21:30'].map((t) => (
                  <option key={t} value={t} className="bg-royal-obsidian">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Atmosphere Pills */}
          <div className="mb-3">
            <label className="block text-[9px] font-serif uppercase tracking-wider text-gold-400 mb-1">
              Dining Atmosphere
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {seatingOptions.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setSeatingZone(zone.id)}
                  className={`py-1 px-1.5 rounded-md border text-[10px] font-serif font-medium text-center truncate transition-all ${
                    seatingZone === zone.id
                      ? 'bg-gold-500/15 border-gold-500 text-gold-300 font-bold'
                      : 'bg-royal-surface border-stone-800 text-stone-400 hover:border-stone-700'
                  }`}
                  title={zone.title}
                >
                  {zone.title}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Name, Email, Phone */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">Full Name</label>
              <input
                type="text"
                placeholder="Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                className="w-full px-2 py-1.5 rounded-md bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                required
                className="w-full px-2 py-1.5 rounded-md bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">Phone</label>
              <input
                type="tel"
                placeholder="Phone"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                required
                className="w-full px-2 py-1.5 rounded-md bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-3.5">
            <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">Special Requests (Optional)</label>
            <input
              type="text"
              placeholder="Spice preference, anniversary, etc."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full px-2 py-1 rounded-md bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-500 placeholder:text-stone-600"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-[10px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all"
          >
            Confirm Royal Reservation
          </button>
        </form>
      ) : (
        /* Confirmed Digital Ticket */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-4 rounded-xl border border-gold-500/60 shadow-xl text-center relative max-w-sm mx-auto"
        >
          <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center mx-auto mb-2 text-gold-400 shadow-sm">
            <CheckCircle2 className="w-4 h-4" />
          </div>

          <span className="text-[9px] font-serif uppercase tracking-widest text-gold-400 block mb-0.5">
            Reservation Confirmed
          </span>

          <h3 className="text-base font-serif font-bold text-white mb-1">
            Welcome to <span className="text-gold-gradient">Zayka</span>, {confirmedBooking.name}
          </h3>

          <p className="text-stone-300 text-[10px] mb-3">
            Pass Code: <span className="text-gold-400 font-bold">{confirmedBooking.refCode}</span>
          </p>

          <div className="bg-royal-surface/90 border border-gold-500/30 p-2.5 rounded-lg text-left mb-3 space-y-1 font-serif text-[10px]">
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
            className="px-4 py-1.5 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-[9px] font-bold uppercase tracking-widest shadow-sm"
          >
            Close Window
          </button>
        </motion.div>
      )}
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 animate-in fade-in duration-200">
        <div className="relative w-full max-w-md my-auto">
          {renderForm(true)}
        </div>
      </div>
    );
  }

  return (
    <section id="reservation" className="py-12 md:py-14 bg-royal-obsidian relative border-t border-gold-500/10">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {renderForm(false)}
      </div>
    </section>
  );
}
