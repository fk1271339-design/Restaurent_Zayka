import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, CheckCircle2 } from 'lucide-react';

export default function TableMapSelector({ selectedTable, onSelectTable }) {
  const tables = [
    { id: 'T-01', name: 'Dal Lake Window Seat', zone: 'dastarkhwan', seats: 4, status: 'available', desc: 'Front window view of Dal Lake lotus garden' },
    { id: 'T-02', name: 'Royal Canopy Dastarkhwan', zone: 'dastarkhwan', seats: 6, status: 'available', desc: 'Plush velvet cushions with brass Samovar setup' },
    { id: 'T-03', name: 'Heritage Alcove', zone: 'dastarkhwan', seats: 2, status: 'reserved', desc: 'Intimate corner for romantic couples' },
    { id: 'T-04', name: 'Mahogany Candlelit Central', zone: 'dining-hall', seats: 4, status: 'available', desc: 'Warm chandelier glow & live Santoor acoustic vicinity' },
    { id: 'T-05', name: 'Grand Emperor Table', zone: 'dining-hall', seats: 8, status: 'available', desc: 'Spacious banquet table for family celebrations' },
    { id: 'T-06', name: 'Fireplace Booth', zone: 'dining-hall', seats: 4, status: 'available', desc: 'Cozy seating beside hand-carved stone fireplace' },
    { id: 'T-07', name: 'Chinar Tree Glasshouse', zone: 'garden', seats: 4, status: 'available', desc: 'Starry night sky view under automated heated glass' },
    { id: 'T-08', name: 'Water Fountain Gazebo', zone: 'garden', seats: 6, status: 'available', desc: 'Private glass pavilion surrounding gentle stream' },
    { id: 'T-09', name: 'VIP Sky Terrace', zone: 'garden', seats: 2, status: 'available', desc: 'Panoramic balcony view of Zabarwan mountains' },
  ];

  const currentSelection = tables.find((t) => t.id === selectedTable) || tables[0];

  return (
    <div className="bg-royal-surface/90 border border-gold-500/25 rounded-xl p-3.5 sm:p-4 text-stone-200">
      <div className="flex items-center justify-between mb-3 border-b border-gold-500/15 pb-2">
        <div>
          <h4 className="text-xs font-serif font-bold text-gold-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Interactive 2D Floor Plan & Seat Map
          </h4>
          <p className="text-[10px] text-stone-400">
            Select your exact preferred table layout in the palace
          </p>
        </div>
        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
          Live Availability
        </span>
      </div>

      {/* Grid Floorplan Map */}
      <div className="grid grid-cols-3 gap-2 bg-royal-obsidian/90 p-3 rounded-xl border border-gold-500/20 mb-3">
        {tables.map((t) => {
          const isSelected = selectedTable === t.id;
          const isReserved = t.status === 'reserved';

          return (
            <button
              key={t.id}
              type="button"
              disabled={isReserved}
              onClick={() => onSelectTable(t.id)}
              className={`relative p-2 rounded-lg text-left transition-all border text-xs flex flex-col justify-between h-16 sm:h-20 ${
                isReserved
                  ? 'bg-stone-900/50 border-stone-800 text-stone-600 cursor-not-allowed opacity-60'
                  : isSelected
                  ? 'bg-gold-500/20 border-gold-400 text-gold-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-[1.02]'
                  : 'bg-royal-surface/60 border-stone-800 hover:border-gold-500/40 hover:bg-royal-surface text-stone-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-[11px] tracking-wider text-gold-400">
                  {t.id}
                </span>
                {isSelected && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                )}
                {isReserved && (
                  <span className="text-[9px] uppercase font-mono text-rose-400/80">Booked</span>
                )}
              </div>

              <div>
                <p className="text-[10px] font-serif font-medium truncate text-stone-200">
                  {t.name}
                </p>
                <div className="flex items-center gap-1 text-[9px] text-stone-400 mt-0.5 font-mono">
                  <Users className="w-2.5 h-2.5 text-gold-500/70" />
                  <span>Max {t.seats}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Table Detail Card */}
      {currentSelection && (
        <div className="bg-gold-500/10 border border-gold-500/20 rounded-lg p-2.5 flex items-center justify-between text-xs">
          <div>
            <span className="text-[10px] uppercase font-mono text-gold-400 font-bold">
              Selected Seat: {currentSelection.id} - {currentSelection.name}
            </span>
            <p className="text-[11px] text-stone-300 mt-0.5 font-serif italic">
              "{currentSelection.desc}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
