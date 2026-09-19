import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Sparkles } from 'lucide-react';

export default function BarSection() {
  const barHighlights = [
    {
      name: 'Golden Saffron Old Fashioned',
      category: 'Signature Cocktail',
      desc: 'Infused bourbon, Pampore saffron syrup, orange bitters, garnished with dried fig and gold leaf.',
      price: '$24'
    },
    {
      name: 'Samovar Kahwa Toddy',
      category: 'Hot Elixir',
      desc: 'Single malt scotch stirred into hot Kashmiri green tea, green cardamom, honey, and crushed almonds.',
      price: '$22'
    },
    {
      name: 'Kashmiri Rose & Cardamom Fizz',
      category: 'Artisanal Mocktail',
      desc: 'Fresh pink rose petal reduction, crushed green cardamom, sparkling mineral water, lime mist.',
      price: '$16'
    }
  ];

  return (
    <section id="bar" className="py-16 md:py-20 bg-royal-obsidian relative overflow-hidden border-t border-gold-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Visual Canvas Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden glass-card p-3 border border-gold-500/30 group"
          >
            <div className="relative h-[340px] sm:h-[380px] rounded-xl overflow-hidden">
              <img
                src="/images/kahwa_bar.jpg"
                alt="Kashmiri Kahwa Bar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-obsidian via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-royal-obsidian/85 border border-gold-500/30 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1">
                  <Coffee className="w-4 h-4 text-gold-400" />
                  <span className="font-serif text-[11px] uppercase tracking-wider text-gold-300 font-semibold">
                    The Copper Samovar Ceremony
                  </span>
                </div>
                <p className="text-stone-300 text-xs leading-snug">
                  Steamed live at your table in antique brass and copper Samovars fueled by cherrywood coals.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-serif text-gold-300">
                Lounge & Mixology
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-white tracking-tight mb-3">
              The Saffron & <span className="text-gold-gradient">Kahwa Bar</span>
            </h2>

            <p className="text-stone-300 text-xs sm:text-sm font-sans leading-relaxed mb-6">
              Unwind in an intimate lounge of soft velvet seating and warm candlelight. Our mixologists fuse ancient Himalayan botanical brews with fine aged spirits and rare spices.
            </p>

            {/* Menu List */}
            <div className="space-y-3.5">
              {barHighlights.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl bg-royal-surface border border-gold-500/15 hover:border-gold-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-base text-white">{item.name}</span>
                    <span className="font-serif font-bold text-gold-400 text-base">{item.price}</span>
                  </div>
                  <span className="text-[9px] font-serif uppercase tracking-widest text-gold-500 block mb-1">
                    {item.category}
                  </span>
                  <p className="text-stone-400 text-xs leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
