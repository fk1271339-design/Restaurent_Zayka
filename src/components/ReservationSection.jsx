import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, CheckCircle2, Crown, X, Utensils } from 'lucide-react';

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpenModal && onCloseModal) {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpenModal, onCloseModal]);

  const seatingOptions = [
    { id: 'dastarkhwan', title: 'Royal Dastarkhwan', sub: 'Traditional Low Dining' },
    { id: 'dining-hall', title: 'Candlelit Hall', sub: 'Mahogany & Velvet' },
    { id: 'garden', title: 'Chinar Pavilion', sub: 'Starry Glass Garden' }
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
        <form onSubmit={handleBook} className={`glass-card rounded-2xl border border-gold-500/30 shadow-2xl relative ${isModalView ? 'p-4 sm:p-5' : 'p-5 sm:p-7'}`}>
          
          {/* Header with Title & Close Button */}
          <div className="flex items-start justify-between mb-3 border-b border-gold-500/15 pb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gold-500/20 border border-gold-400/60 flex items-center justify-center text-gold-400 shadow-sm shrink-0">
                <Crown className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-serif font-bold text-white leading-tight">
                  Reserve Your <span className="text-gold-gradient">Royal Seat</span>
                </h3>
                <p className="text-[10px] text-stone-400 font-sans">
                  Intimate Wazwan dining & Kashmiri hospitality
                </p>
              </div>
            </div>
            {isModalView && (
              <button
                type="button"
                onClick={onCloseModal}
                className="w-7 h-7 rounded-full bg-royal-surface border border-gold-500/30 text-stone-400 hover:text-white hover:border-gold-400 flex items-center justify-center transition-all shrink-0"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Pre-selected dishes alert banner if any */}
          {selectedDishes.length > 0 && (
            <div className="mb-3 p-2 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-between text-[11px] text-gold-300">
              <span className="flex items-center gap-1.5 font-serif font-medium">
                <Utensils className="w-3.5 h-3.5 text-gold-400" />
                {selectedDishes.length} Dish{selectedDishes.length > 1 ? 'es' : ''} Pre-selected for table
              </span>
              <span className="text-[9px] uppercase tracking-wider text-gold-400 font-bold bg-gold-500/20 px-2 py-0.5 rounded">
                Attached
              </span>
            </div>
          )}

          {/* Row 1: Party Size, Date, Time */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3">
            <div>
              <label className="block text-[9px] sm:text-[10px] font-serif uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1">
                <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Guests
              </label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full px-2 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 transition-all"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                  <option key={num} value={num} className="bg-royal-obsidian">
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[9px] sm:text-[10px] font-serif uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1">
                <CalendarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-2 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-[9px] sm:text-[10px] font-serif uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1">
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-2 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 transition-all"
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
            <label className="block text-[9px] sm:text-[10px] font-serif uppercase tracking-wider text-gold-400 mb-1.5">
              Dining Atmosphere
            </label>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {seatingOptions.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setSeatingZone(zone.id)}
                  className={`py-1.5 px-2 rounded-lg border text-left transition-all ${
                    seatingZone === zone.id
                      ? 'bg-gold-500/15 border-gold-500 text-gold-300 font-bold shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                      : 'bg-royal-surface border-stone-800 text-stone-400 hover:border-stone-700'
                  }`}
                >
                  <div className="text-[10px] sm:text-[11px] font-serif leading-tight truncate">
                    {zone.title}
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-stone-400 font-sans truncate mt-0.5">
                    {zone.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Name, Email, Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 mb-3">
            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">Full Name</label>
              <input
                type="text"
                placeholder="Guest name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 transition-all placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">Email</label>
              <input
                type="email"
                placeholder="Email address"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                required
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 transition-all placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">Phone</label>
              <input
                type="tel"
                placeholder="Phone number"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                required
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 transition-all placeholder:text-stone-600"
              />
            </div>
          </div>

          {/* Row 4: Special Requests */}
          <div className="mb-4">
            <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">Special Requests (Optional)</label>
            <input
              type="text"
              placeholder="Spice preference, anniversary, dietary notes..."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 transition-all placeholder:text-stone-600"
            />
          </div>

          {/* Submit CTA Button */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Crown className="w-3.5 h-3.5" />
            Confirm Royal Reservation
          </button>
        </form>
      ) : (
        /* Confirmed Digital Ticket */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-5 rounded-2xl border border-gold-500/60 shadow-2xl text-center relative max-w-sm mx-auto"
        >
          <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center mx-auto mb-2 text-gold-400 shadow-sm">
            <CheckCircle2 className="w-5 h-5" />
          </div>

          <span className="text-[9px] font-serif uppercase tracking-widest text-gold-400 block mb-0.5">
            Reservation Confirmed
          </span>

          <h3 className="text-base font-serif font-bold text-white mb-1">
            Welcome to <span className="text-gold-gradient">Zayka</span>, {confirmedBooking.name}
          </h3>

          <p className="text-stone-300 text-[11px] mb-3">
            Pass Code: <span className="text-gold-400 font-bold">{confirmedBooking.refCode}</span>
          </p>

          <div className="bg-royal-surface/90 border border-gold-500/30 p-3 rounded-xl text-left mb-4 space-y-1.5 font-serif text-[11px]">
            <div className="flex justify-between">
              <span className="text-stone-400">Date & Time:</span>
              <span className="text-white font-medium">{confirmedBooking.date} at {confirmedBooking.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Party Size:</span>
              <span className="text-white font-medium">{confirmedBooking.partySize} Guests</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Atmosphere:</span>
              <span className="text-gold-300 font-medium">{confirmedBooking.seatingZone}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setConfirmedBooking(null);
              if (onCloseModal) onCloseModal();
            }}
            className="px-5 py-2 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-[10px] font-bold uppercase tracking-widest shadow-md hover:brightness-105 transition-all"
          >
            Close Window
          </button>
        </motion.div>
      )}
    </div>
  );

  if (isOpenModal) {
    return (
      <div 
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
        onClick={onCloseModal}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative w-full max-w-md max-h-[90vh] overflow-y-auto my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {renderForm(true)}
        </motion.div>
      </div>
    );
  }

  return (
    <section id="reservation" className="py-12 md:py-16 bg-royal-obsidian relative border-t border-gold-500/10">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {renderForm(false)}
      </div>
    </section>
  );
}

