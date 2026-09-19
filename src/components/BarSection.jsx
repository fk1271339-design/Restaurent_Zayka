import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Flame, Sparkles, GlassWater } from 'lucide-react';

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
    <section id="bar" className="py-32 bg-royal-obsidian relative overflow-hidden border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Canvas Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden glass-card p-4 border border-gold-500/30 group"
          >
            <div className="relative h-[480px] rounded-2xl overflow-hidden">
              <img
                src="/images/kahwa_bar.jpg"
                alt="Kashmiri Kahwa Bar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-obsidian via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-royal-obsidian/85 border border-gold-500/30 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <Coffee className="w-5 h-5 text-gold-400" />
                  <span className="font-serif text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold">
                    The Copper Samovar Ceremony
                  </span>
                </div>
                <p className="text-stone-300 text-xs leading-relaxed">
                  Steamed live at your table in antique brass and copper Samovars fueled by cherrywood coals.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 mb-4">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-300">
                Lounge & Mixology
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-white tracking-tight mb-6">
              The Saffron & <span className="text-gold-gradient">Kahwa Bar</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed mb-10">
              Unwind in an intimate ambiance of soft velvet lounges and warm candlelight. Our mixologists fuse ancient Himalayan botanical brews with fine aged spirits and rare spices.
            </p>

            {/* Menu List */}
            <div className="space-y-6">
              {barHighlights.map((item) => (
                <div
                  key={item.name}
                  className="p-6 rounded-xl bg-royal-surface border border-gold-500/15 hover:border-gold-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif font-bold text-lg text-white">{item.name}</span>
                    <span className="font-serif font-bold text-gold-400 text-lg">{item.price}</span>
                  </div>
                  <span className="text-[10px] font-serif uppercase tracking-widest text-gold-500 block mb-2">
                    {item.category}
                  </span>
                  <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
