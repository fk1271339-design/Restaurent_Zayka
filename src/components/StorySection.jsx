import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Crown, Flame, Gem } from 'lucide-react';

export default function StorySection() {
  const storyCards = [
    {
      icon: Crown,
      tag: 'Lineage',
      title: 'The 36-Course Banquet',
      desc: 'Originating in 14th century Kashmir under King Timur, Wazwan is a sacred culinary ritual masterfully crafted by traditional Vastas over copper cauldrons.',
    },
    {
      icon: Gem,
      tag: 'Craftsmanship',
      title: 'Artisanal Copper Trami',
      desc: 'Served in large, intricately hand-etched copper platters (Trami) coated in pure tin, symbolizing royal unity and hospitality.',
    },
    {
      icon: Flame,
      tag: 'Terroir',
      title: 'Red Gold of Pampore',
      desc: 'Our kitchens feature Grade-1 Saffron harvested from Pampore, infusing gravies, rice, and Kahwa with crimson hue and aroma.',
    },
  ];

  return (
    <section id="story" className="relative py-16 md:py-20 bg-royal-obsidian overflow-hidden border-t border-gold-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-serif text-gold-300">
              Centuries of Culinary Heritage
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-white tracking-tight mb-3">
            The Legend of <span className="text-gold-gradient">Zayka</span>
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm font-sans leading-relaxed">
            In Kashmiri, <span className="text-gold-400 italic">Zayka</span> signifies the pinnacle of flavor. We preserve royal master recipes bringing the spirit of Srinagar to your table.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {storyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card p-5 rounded-xl relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center group-hover:scale-105 group-hover:bg-gold-500/20 transition-all duration-300">
                      <Icon className="w-4.5 h-4.5 text-gold-400" />
                    </div>
                    <span className="text-[9px] uppercase tracking-wider font-serif text-gold-400 font-bold border border-gold-500/20 px-2.5 py-0.5 rounded-full">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-stone-300 text-xs leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="border-t border-gold-500/15 pt-3 flex items-center justify-between text-[10px] font-serif uppercase tracking-widest text-gold-400">
                  <span>Kashmiri Heritage</span>
                  <span className="text-stone-500">✦</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
