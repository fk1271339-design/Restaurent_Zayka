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
      src: '/images/exterior.jpg',
      aspect: 'aspect-square'
    },
    {
      id: 2,
      category: 'atmosphere',
      title: 'Grand Mahogany Entrance',
      subtitle: 'Illuminated Lantern Hallway',
      src: '/images/entrance.jpg',
      aspect: 'aspect-[4/3]'
    },
    {
      id: 3,
      category: 'atmosphere',
      title: 'Candlelit Dining Sanctuary',
      subtitle: 'Velvet Seating & Silver Trami Tableware',
      src: '/images/dining_table.jpg',
      aspect: 'aspect-[3/4]'
    },
    {
      id: 4,
      category: 'wazwan',
      title: 'The Royal Wazwan Feast',
      subtitle: 'Slow-cooked Rogan Josh & Gushtaba',
      src: '/images/wazwan_feast.jpg',
      aspect: 'aspect-square'
    },
    {
      id: 5,
      category: 'wazwan',
      title: 'Kashmiri Kahwa Ceremony',
      subtitle: 'Brass Samovar Tea Lounge',
      src: '/images/kahwa_bar.jpg',
      aspect: 'aspect-[4/3]'
    },
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-32 bg-royal-obsidian relative border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 mb-4">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-300">
              Visual Splendor
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-white tracking-tight mb-4">
            The <span className="text-gold-gradient">Zayka</span> Gallery
          </h2>
          <p className="text-stone-400 text-sm font-sans">
            Glimpse into the royal world of fine Kashmiri gastronomy, warm candlelit architecture, and Wazwan mastery.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Showcase' },
            { id: 'architecture', label: 'Palace Architecture' },
            { id: 'wazwan', label: 'Wazwan Feast' },
            { id: 'atmosphere', label: 'Sanctuary Atmosphere' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full font-serif text-xs uppercase tracking-widest transition-all ${
                activeTab === tab.id
                  ? 'bg-gold-gradient text-royal-obsidian font-bold shadow-lg shadow-gold-500/20'
                  : 'bg-royal-surface border border-stone-800 text-stone-400 hover:border-gold-500/40 hover:text-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxImg(item)}
                className={`relative rounded-2xl overflow-hidden glass-card cursor-pointer group ${item.aspect}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-obsidian via-royal-obsidian/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-royal-obsidian/80 border border-gold-500/40 flex items-center justify-center text-gold-400">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-serif uppercase tracking-[0.3em] text-gold-400 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-white mb-1">{item.title}</h3>
                    <p className="text-stone-300 text-xs">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        {lightboxImg && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 text-stone-300 hover:text-white p-2 rounded-full bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                className="max-h-[70vh] w-auto object-contain rounded-2xl border border-gold-500/30 shadow-2xl mb-4"
              />
              <div className="text-center">
                <h3 className="text-2xl font-serif font-bold text-white mb-1">{lightboxImg.title}</h3>
                <p className="text-gold-400 font-serif text-xs uppercase tracking-widest">{lightboxImg.subtitle}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
