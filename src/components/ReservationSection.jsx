import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, CheckCircle2, Crown, X, Utensils, Download, QrCode, Sparkles } from 'lucide-react';
import TableMapSelector from './TableMapSelector';

export default function ReservationSection({ isOpenModal, onCloseModal, selectedDishes = [] }) {
  const [partySize, setPartySize] = useState(4);
  const [date, setDate] = useState('2026-09-22');
  const [time, setTime] = useState('19:30');
  const [selectedTable, setSelectedTable] = useState('T-01');
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

  const handleBook = (e) => {
    e.preventDefault();
    const refCode = 'ZYK-VIP-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBooking({
      refCode,
      name: guestName || 'Royal Guest',
      email: guestEmail || 'guest@zayka-kashmir.com',
      phone: guestPhone || '+1 (555) 019-2834',
      partySize,
      date,
      time,
      tableNumber: selectedTable,
      specialRequest,
    });
  };

  const renderForm = (isModalView = false) => (
    <div className={isModalView ? 'w-full' : 'max-w-2xl mx-auto'}>
      {!confirmedBooking ? (
        <form
          onSubmit={handleBook}
          className={`glass-card rounded-2xl border border-gold-500/30 shadow-2xl relative ${
            isModalView ? 'p-4 sm:p-5' : 'p-5 sm:p-7'
          }`}
        >
          {/* Header with Title & Close Button */}
          <div className="flex items-start justify-between mb-4 border-b border-gold-500/15 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/60 flex items-center justify-center text-gold-400 shadow-sm shrink-0">
                <Crown className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-serif font-bold text-white leading-tight">
                  Reserve Your <span className="text-gold-gradient">Royal Dastarkhwan</span>
                </h3>
                <p className="text-[10px] text-stone-400 font-sans">
                  Intimate Wazwan dining & Kashmiri royal hospitality
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
            <div className="mb-4 p-2.5 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-between text-[11px] text-gold-300">
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
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
            <div>
              <label className="block text-[9px] sm:text-[10px] font-serif uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1">
                <Users className="w-3 h-3 text-gold-400" /> Guests
              </label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full px-2 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 transition-all"
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
                <CalendarIcon className="w-3 h-3 text-gold-400" /> Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-2 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-[9px] sm:text-[10px] font-serif uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-gold-400" /> Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-2 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 transition-all"
              >
                {['17:30', '18:30', '19:30', '20:30', '21:30'].map((t) => (
                  <option key={t} value={t} className="bg-royal-obsidian">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Interactive Table Map Selector */}
          <div className="mb-4">
            <TableMapSelector
              selectedTable={selectedTable}
              onSelectTable={(tableId) => setSelectedTable(tableId)}
            />
          </div>

          {/* Row 3: Name, Email, Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Guest name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 transition-all placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">
                Email
              </label>
              <input
                type="email"
                placeholder="Email address"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                required
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 transition-all placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                required
                className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 transition-all placeholder:text-stone-600"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-4">
            <label className="block text-[9px] font-serif uppercase tracking-wider text-stone-400 mb-0.5">
              Special Requests (Optional)
            </label>
            <input
              type="text"
              placeholder="Anniversary celebration, mild spice preferences..."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg bg-royal-surface border border-gold-500/20 text-stone-200 text-xs focus:outline-none focus:border-gold-400 transition-all placeholder:text-stone-600"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-[11px] font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <Crown className="w-4 h-4" />
            Confirm VIP Table Booking
          </button>
        </form>
      ) : (
        /* Embellished Gold VIP Boarding Pass Confirmation */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-6 sm:p-8 rounded-2xl border-2 border-gold-500/60 shadow-[0_0_50px_rgba(212,175,55,0.25)] text-center relative max-w-md mx-auto bg-gradient-to-b from-royal-surface via-royal-obsidian to-royal-obsidian"
        >
          {/* Top Pass Badge */}
          <div className="flex items-center justify-between border-b border-gold-500/30 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-gold-400" />
              <span className="font-serif text-xs font-bold tracking-[0.2em] text-gold-gradient">
                ZAYKA VIP DINING PASS
              </span>
            </div>
            <span className="text-[10px] font-mono text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/30">
              CONFIRMED
            </span>
          </div>

          <div className="w-12 h-12 mx-auto rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 mb-3 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <h3 className="text-xl font-serif font-bold text-white mb-1">
            Welcome, <span className="text-gold-gradient">{confirmedBooking.name}</span>
          </h3>
          <p className="text-stone-400 text-xs mb-4">
            Your table has been reserved with royal honors.
          </p>

          {/* Pass details */}
          <div className="bg-royal-surface/90 border border-gold-500/30 p-4 rounded-xl text-left mb-4 space-y-2 font-serif text-xs">
            <div className="flex justify-between border-b border-gold-500/15 pb-1.5">
              <span className="text-stone-400">Pass Reference:</span>
              <span className="text-gold-400 font-mono font-bold">{confirmedBooking.refCode}</span>
            </div>
            <div className="flex justify-between border-b border-gold-500/15 pb-1.5">
              <span className="text-stone-400">Reserved Seat:</span>
              <span className="text-white font-bold">Table {confirmedBooking.tableNumber}</span>
            </div>
            <div className="flex justify-between border-b border-gold-500/15 pb-1.5">
              <span className="text-stone-400">Date & Time:</span>
              <span className="text-stone-200 font-medium">{confirmedBooking.date} at {confirmedBooking.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Party Size:</span>
              <span className="text-stone-200 font-medium">{confirmedBooking.partySize} Guests</span>
            </div>
          </div>

          {/* Simulated QR Code ticket element */}
          <div className="bg-white p-3 rounded-xl max-w-[130px] mx-auto mb-4 border-2 border-gold-400/80 shadow-md">
            <QrCode className="w-20 h-20 mx-auto text-royal-obsidian" />
            <span className="text-[8px] font-mono text-stone-800 font-bold block mt-1 tracking-wider">
              SCAN AT RECEPTION
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => alert(`VIP Ticket ${confirmedBooking.refCode} exported!`)}
              className="flex-1 py-2.5 rounded-full bg-royal-surface border border-gold-500/40 text-gold-300 font-serif text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-gold-500/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Save Pass
            </button>
            <button
              onClick={() => {
                setConfirmedBooking(null);
                if (onCloseModal) onCloseModal();
              }}
              className="flex-1 py-2.5 rounded-full bg-gold-gradient text-royal-obsidian font-serif text-[10px] font-bold uppercase tracking-widest shadow-md hover:brightness-105 transition-all"
            >
              Done
            </button>
          </div>
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
          className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {renderForm(true)}
        </motion.div>
      </div>
    );
  }

  return (
    <section id="reservation" className="py-12 md:py-16 bg-royal-obsidian relative border-t border-gold-500/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">{renderForm(false)}</div>
    </section>
  );
}
