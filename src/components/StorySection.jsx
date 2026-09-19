import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Crown, Flame, Gem } from 'lucide-react';

export default function StorySection() {
  const storyCards = [
    {
      icon: Crown,
      tag: 'Lineage',
      title: 'The 36-Course Royal Banquet',
      desc: 'Originating in 14th century Kashmir under King Timur, Wazwan is not merely a meal—it is a sacred culinary ritual. Each dish is masterfully crafted by traditional Vastas over copper cauldrons lit by slow applewood embers.',
    },
    {
      icon: Gem,
      tag: 'Craftsmanship',
      title: 'Artisanal Copper Trami',
      desc: 'Meals are served in large, intricately hand-etched copper platters called Trami. Coated in pure tin and embossed with Chinar motifs, eating from a Trami symbolizes unity, royal sharing, and hospitality.',
    },
    {
      icon: Flame,
      tag: 'Terroir',
      title: 'Red Gold of Pampore',
      desc: 'Our kitchens exclusively feature Grade-1 Saffron harvested from the misty purple fields of Pampore. Each thread infuses our gravies, rice, and Kahwa teas with an unmistakable crimson hue and honey aroma.',
    },
  ];

  return (
    <section id="story" className="relative py-32 bg-royal-obsidian overflow-hidden border-t border-gold-500/10">
      {/* Background glow & subtle patterns */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 mb-4">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-300">
              Centuries of Culinary Heritage
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-white tracking-tight mb-6">
            The Legend of <span className="text-gold-gradient">Zayka</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed">
            In Kashmiri, <span className="text-gold-400 italic">Zayka</span> signifies the pinnacle of flavor. We preserve centuries-old recipes passed down through royal master cooks, bringing the spirit of Srinagar to your table.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="glass-card p-8 rounded-2xl relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-serif text-gold-500 font-bold border border-gold-500/20 px-3 py-1 rounded-full">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-gold-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="border-t border-gold-500/15 pt-4 flex items-center justify-between text-[11px] font-serif uppercase tracking-widest text-gold-400">
                  <span>Authentic Kashmiri Tradition</span>
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
