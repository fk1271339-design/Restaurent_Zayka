import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X } from 'lucide-react';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'architecture',
      title: 'Zayka Estate at Night',
      subtitle: 'Kashmiri Royal Carved Facade',
      src: '/images/exterior.jpg'
    },
    {
      id: 2,
      category: 'atmosphere',
      title: 'Grand Lantern Hall',
      subtitle: 'Illuminated Wooden Entrance',
      src: '/images/entrance.jpg'
    },
    {
      id: 3,
      category: 'atmosphere',
      title: 'Candlelit Dining Sanctuary',
      subtitle: 'Silver Trami & Velvet Bolsters',
      src: '/images/dining_table.jpg'
    },
    {
      id: 4,
      category: 'wazwan',
      title: 'The Royal Wazwan Feast',
      subtitle: 'Slow-cooked Rogan Josh & Gushtaba',
      src: '/images/wazwan_feast.jpg'
    },
    {
      id: 5,
      category: 'wazwan',
      title: 'Kashmiri Kahwa Ceremony',
      subtitle: 'Brass Samovar Lounge',
      src: '/images/kahwa_bar.jpg'
    }
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-royal-obsidian relative border-t border-gold-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-serif text-gold-300">
              Visual Splendor
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-white tracking-tight mb-2">
            The <span className="text-gold-gradient">Zayka</span> Gallery
          </h2>
          <p className="text-stone-400 text-xs font-sans">
            A glimpse into fine Kashmiri gastronomy, candlelit architecture, and Wazwan mastery.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center items-center gap-2 mb-8 flex-wrap">
          {[
            { id: 'all', label: 'All Showcase' },
            { id: 'architecture', label: 'Architecture' },
            { id: 'wazwan', label: 'Wazwan Feast' },
            { id: 'atmosphere', label: 'Sanctuary' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-full font-serif text-xs uppercase tracking-wider transition-all ${
                activeTab === tab.id
                  ? 'bg-gold-gradient text-royal-obsidian font-bold shadow-md'
                  : 'bg-royal-surface border border-stone-800 text-stone-400 hover:border-gold-500/40 hover:text-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxImg(item)}
                className="relative rounded-xl overflow-hidden glass-card cursor-pointer group h-52 sm:h-56"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-obsidian via-royal-obsidian/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-royal-obsidian/80 border border-gold-500/40 flex items-center justify-center text-gold-400">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-gold-400 block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-base text-white mb-0.5">{item.title}</h3>
                    <p className="text-stone-300 text-xs">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        {lightboxImg && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 text-stone-300 hover:text-white p-2 rounded-full bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-w-2xl w-full flex flex-col items-center">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                className="max-h-[65vh] w-auto object-contain rounded-xl border border-gold-500/30 shadow-2xl mb-3"
              />
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold text-white mb-0.5">{lightboxImg.title}</h3>
                <p className="text-gold-400 font-serif text-xs uppercase tracking-wider">{lightboxImg.subtitle}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
